// pages/articles.js
import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClients";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [articleForm, setArticleForm] = useState({
    id: null,
    title: "",
    content: "",
    picture_url: "",
    price: "",
    location: "",
    category: "",
    published: true,
    publish_date: new Date().toISOString(),
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase.from("articles").select("*");

    if (error) {
      console.log("Error", error);
    } else {
      setArticles(data);
    }
  };

  const handleInputChange = (e) => {
    setArticleForm({ ...articleForm, [e.target.name]: e.target.value });
  };

  const submitArticle = async () => {
    // Préparer les données pour la requête
    let requestData = { ...articleForm };
    if (!requestData.id) {
      delete requestData.id; // Supprimer l'id pour les nouveaux articles
    }

    const { data, error } = requestData.id
      ? await supabase
          .from("articles")
          .update(requestData)
          .match({ id: requestData.id })
      : await supabase.from("articles").insert([requestData]);

    if (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    } else {
      //setArticles(articleForm.id ? articles.map(a => a.id === data[0].id ? data[0] : a) : [...articles, data[0]]);
      setArticleForm({
        id: null,
        title: "",
        content: "",
        picture_url: "",
        price: "",
        location: "",
        category: "",
        published: true,
        publish_date: new Date().toISOString(),
      });
      setShowForm(false);
      alert("Article processed successfully!");

      location.reload();
    }
  };

  const startEdit = (article) => {
    setArticleForm(article);
    setShowForm(true);
  };

  const deleteArticle = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const { error } = await supabase.from("articles").delete().match({ id });

      if (error) {
        console.log("Error", error);
        alert("An error occurred while deleting the article.");
      } else {
        setArticles(articles.filter((article) => article.id !== id));
        alert("Article deleted successfully!");
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Articles</h1>
      <button
        onClick={() => {
          setArticleForm({
            id: null,
            title: "",
            content: "",
            picture_url: "",
            price: "",
            location: "",
            category: "",
            published: true,
            publish_date: new Date().toISOString(),
          });
          setShowForm(!showForm);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showForm ? "Hide Form" : "Create New Article"}
      </button>
      {showForm && (
        <div className="max-w-lg mx-auto my-4 p-4 border rounded shadow-sm">
          <input
            className="w-full p-2 border rounded my-2"
            type="text"
            name="title"
            placeholder="Title"
            value={articleForm.title}
            onChange={handleInputChange}
          />
          <textarea
            className="w-full p-2 border rounded my-2"
            name="content"
            placeholder="Content"
            value={articleForm.content}
            onChange={handleInputChange}
          ></textarea>
          <input
            className="w-full p-2 border rounded my-2"
            type="text"
            name="picture_url"
            placeholder="Picture URL"
            value={articleForm.picture_url}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 border rounded my-2"
            type="number"
            name="price"
            placeholder="Price"
            value={articleForm.price}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 border rounded my-2"
            type="text"
            name="location"
            placeholder="Location"
            value={articleForm.location}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 border rounded my-2"
            type="text"
            name="category"
            placeholder="Category"
            value={articleForm.category}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 border rounded my-2"
            type="date"
            name="publish_date"
            value={articleForm.publish_date}
            onChange={handleInputChange}
          />
          <button
            onClick={submitArticle}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
          >
            {articleForm.id ? "Update Article" : "Submit New Article"}
          </button>
        </div>
      )}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-4 rounded-lg shadow overflow-hidden flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
            {article.picture_url && (
              <img
                src={article.picture_url}
                alt={article.title}
                className="w-full h-48 object-cover mb-3"
              />
            )}
            <p className="flex-1">{article.content}</p>
            <div className="mt-3 text-gray-600 text-sm">
              <p>
                Price: {article.price ? `$${article.price}` : "Not specified"}
              </p>
              <p>Location: {article.location || "Not specified"}</p>
              <p>Category: {article.category || "Not specified"}</p>
              <p>Published: {article.published ? "Yes" : "No"}</p>
              <p>
                Publish Date:{" "}
                {article.publish_date
                  ? new Date(article.publish_date).toLocaleDateString()
                  : "Not specified"}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <button
                onClick={() => startEdit(article)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteArticle(article.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
