import React, { useState } from "react"
import Header from "../../header"
import Footer from '../../footer'
import { useRouter } from 'next/router'

export default function Articles() {
  const [articleId, setArticleId] = useState('');
  const router = useRouter();

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  }

  const headingStyle = {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#333",
  }

  const handleInputChange = (e) => {
    setArticleId(e.target.value);
  }

  const handleGoButtonClick = () => {
    router.push(`/articles/${articleId}`);
  }

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={headingStyle}>Les Articles</h1>
      <div>
        <input
          type="text"
          value={articleId}
          onChange={handleInputChange}
          placeholder="Entrez le numéro de l'article"
        />
        <button onClick={handleGoButtonClick}>Aller</button>
      </div>
      <Footer />
    </div>
  );
}
