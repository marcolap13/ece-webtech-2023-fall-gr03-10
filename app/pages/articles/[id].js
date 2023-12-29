import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClients";
import { useUser } from "../../context/UserContext";
import { useTheme } from "../../context/ThemeContext";

const ArticleDetails = () => {
  const { theme } = useTheme();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replies, setReplies] = useState([]);
  const [replyComments, setReplyComments] = useState({});
  const [showRepliesForComment, setShowRepliesForComment] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();

  useEffect(() => {
    if (id) {
      fetchArticle(id);
      fetchComments(id);
    }
  }, [id]);

  useEffect(() => {
    comments.forEach(async (comment) => {
      const replies = await fetchReplyComments(comment.id);
      setReplyComments((prevReplies) => ({
        ...prevReplies,
        [comment.id]: replies,
      }));
    });
  }, [comments]);

  const fetchArticle = async (articleId) => {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", articleId)
        .single();

      if (error) throw error;
      setArticle(data);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  const fetchComments = async (articleId) => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select(
          `
          id,
          comment,
          created_at,
          user_id,
          username
        `
        )
        .eq("article_id", articleId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const fetchReplyComments = async (parentId) => {
    try {
      const { data, error } = await supabase
        .from("comment_replies")
        .select(
          `
          id,
          reply,
          created_at,
          user_id,
          username
        `
        )
        .eq("parent_comment_id", parentId)
        .order("created_at", { ascending: true });

      if (error) throw error;

      return data;
    } catch (error) {
      console.error("Error fetching reply comments:", error);
    }
  };

  const submitComment = async () => {
    if (!user) {
      alert("You must be logged in to comment.");
      return;
    }

    if (!newComment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    try {
      const { error } = await supabase.from("comments").insert([
        {
          article_id: id,
          comment: newComment,
          user_id: user.id,
        },
      ]);

      if (error) throw error;
      setNewComment("");
      fetchComments(id);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const submitReply = async (parentCommentId) => {
    if (!user) {
      alert("You must be logged in to reply.");
      return;
    }
    const replyText = replies[parentCommentId];

    if (!replyText || !replyText.trim()) {
      alert("Reply cannot be empty.");
      return;
    }

    try {
      const { error } = await supabase.from("comment_replies").insert([
        {
          parent_comment_id: parentCommentId,
          user_id: user.id,
          reply: replyText,
        },
      ]);

      if (error) throw error;
      setReplies({ ...replies, [parentCommentId]: "" });
      fetchComments(id);
      fetchReplyComments(parentCommentId);
    } catch (error) {
      console.error("Error submitting reply:", error);
      alert("Error submitting reply. Please try again later.");
    }
  };

  const toggleRepliesVisibility = (commentId) => {
    setShowRepliesForComment((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const Layoutstyle = {
    backgroundColor:
      theme === "dark"
        ? "var(--background-color-dark)"
        : "var(--background-color-light)",
    color:
      theme === "dark" ? "var(--text-color-dark)" : "var(--text-color-light)",
    padding: "20px",
    textAlign: "center",
  };

  if (!article) return <div className="text-center py-10">Loading...</div>;

  return (
    <div
      className="container mx-auto my-8 p-6 max-w-3xl  rounded-lg shadow-md"
      style={Layoutstyle}
    >
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => router.push("/articles")}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Feed
        </button>
      </div>
      <div className="mb-4 text-center" style={{ marginTop: "10px" }}>
        {article.picture_url && (
          <img
            src={article.picture_url}
            alt={article.title}
            className="w-full h-auto rounded-md mx-auto"
          />
        )}
      </div>
      <div className="mb-12 text-center">
        {article.title && (
          <h1 className="text-4xl font-semibold mt-4">{article.title}</h1>
        )}
      </div>
      <div className="mb-12 ">
        <div className="overflow-x-auto">
          <div className="mb-4">
            <div className="font-bold">Content:</div>
            <p className="px-6 py-3 border border-black">{article.content}</p>
          </div>

          <div className="mb-4 some-element">
            <div className="font-bold">Price:</div>
            <p className="px-6 py-3 border border-black text-center align-middle">
              {article.price}$
            </p>
          </div>

          <div className="mb-4 some-element">
            <div className="font-bold">Location:</div>
            <p className="px-6 py-3 border border-black text-center align-middle">
              {article.location}
            </p>
          </div>

          <div className="mb-4 some-element">
            <div className="font-bold">Category:</div>
            <p className="px-6 py-3 border border-black text-center align-middle">
              {article.category}
            </p>
          </div>

          <div className="mb-4 some-element">
            <div className="font-bold">Published Date:</div>
            <p className="px-6 py-3 border border-black text-center align-middle">
              {new Date(article.publish_date).toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="mb-4 some-element">
          <div className="font-bold">By:</div>
          <p className="px-6 py-3 border border-black text-center align-middle">
            @{article.username || "Anonymous"}
          </p>
        </div>
      </div>

      <div className="comments-section mt-6">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            {index > 0 && <hr className="my-4" />}
            <div className="mb-4 p-4 border-b border-gray-200">
              <p >
                {new Date(comment.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}{" "}
                @{comment.username || "Anonymous"}:
              </p>
              <p>{comment.comment}</p>

              {user && (
                <>
                  <button
                    onClick={() => toggleRepliesVisibility(comment.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-2 rounded mt-2"
                  >
                    {showRepliesForComment[comment.id]
                      ? "Hide Replies"
                      : "Show Replies"}
                  </button>
                  {showRepliesForComment[comment.id] &&
                    replyComments[comment.id]?.map((reply) => (
                      <div key={reply.id} className="ml-4 mt-2">
                        <p className="text-gray-600">
                          {new Date(reply.created_at).toLocaleString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}{" "}
                          @{reply.username || "Anonymous"} replied to @{comment.username || "Anonymous"}:
                        </p>
                        <p className="text-gray-800">{reply.reply}</p>
                      </div>
                    ))}
                </>
              )}

              {user && (
                <div className="ml-4 mt-2">
                  <input
                    type="text"
                    value={replies[comment.id] || ""}
                    onChange={(e) =>
                      setReplies({ ...replies, [comment.id]: e.target.value })
                    }
                    placeholder="Write a reply..."
                    className="w-full border p-2 rounded"
                  />
                  <button
                    onClick={() => submitReply(comment.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
        {user ? (
          <div>
            <textarea
              className="w-full border p-2 rounded mt-4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
              onClick={submitComment}
            >
              Submit Comment
            </button>
          </div>
        ) : (
          <p className="mt-4 text-red-500 text-center font-medium">
            Please log in to comment.
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
