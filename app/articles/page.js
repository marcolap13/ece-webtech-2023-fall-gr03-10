import React from "react";
import articledb from "./articledb";

const ArticleCard = ({ title, content }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const Articles = () => {
  return (
    <div className="text-center mt-12 font-sans">
      <h1 className="text-3xl mb-8">Les Articles</h1>
      <div className="container mx-auto max-w-2xl">
        {articledb.map((article) => (
          <ArticleCard key={article.id} title={article.title} content={article.content} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
