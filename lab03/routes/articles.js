const express = require("express");
const router = express.Router();
const db = require("../data/db");
router.use(express.json());

//List all articles
router.get("/", (req, res) => {
  res.json(db.articles);
});
//Add a new article
router.post("/", (req, res) => {
  const { id, title, content, date, author } = req.body;
  const newArticle = {
    id,
    title,
    content,
    date,
    author,
  };
  db.articles.push(newArticle);

  res.status(201).json(newArticle);
});
//Get an article by ID
router.get("/:articleID", (req, res) => {
  const articleID = req.params.articleID;
  const article = db.articles.find((article) => article.id === articleID);

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Article non trouvé" });
  }
});
//Get all comments of the article
router.get("/:articleId/comments", (req, res) => {
  const articleId = req.params.articleId;

  const article = db.articles.find((article) => article.id === articleId);

  if (article) {
    const comments = db.comments.filter(
      (comment) => comment.articleId === articleId
    );
    res.json(comments);
  } else {
    res.status(404).json({ message: "Article non trouvé" });
  }
});
//Add a new comment to a specific article
router.post("/:articleId/comments/post", (req, res) => {
  const articleId = req.params.articleId;
  const article = db.articles.find((article) => article.id === articleId);

  const { id, timestamp, content, articleID, author } = req.body;
  const newComm = {
    id,
    timestamp,
    content,
    articleID,
    author,
  };

  if (article) {
    db.comments.push(newComm);
    res.json(newComm);
  } else {
    res.status(404).json({ message: "Article non trouvé" });
  }
});

module.exports = router;
