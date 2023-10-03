const express = require("express");
const articlesRouter = require("./routes/articles");
const commentsRouter = require("./routes/comments");
const db = require("./data/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/articles", articlesRouter);
app.use("/comments", commentsRouter);
app.use((req, res) => {
  res.status(404).send("Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
