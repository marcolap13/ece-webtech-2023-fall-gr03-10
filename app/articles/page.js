import React from "react";
import Header from "../components/header";
import { useRouter } from "next/router";

const Articles = () => {
  const [articleId, setArticleId] = useState("");
  const router = useRouter();

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#333",
  };

  const handleInputChange = (e) => {
    setArticleId(e.target.value);
  };

  const handleGoButtonClick = () => {
    router.push(`/articles/${articleId}`);
  };

  return (
    <div className="text-center mt-12 font-sans">
      <Header />
      <h1 className="text-3xl mb-8" style={headingStyle}>
        Les Articles
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={articleId}
          onChange={handleInputChange}
          placeholder="Entrez le numéro de l'article"
          className="border p-2 rounded-l"
        />
        <button
          onClick={handleGoButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Aller
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
