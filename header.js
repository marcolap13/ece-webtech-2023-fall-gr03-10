import React from "react";

export default function Index() {

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

  const redirectToAccueil = () => {
    window.location.href = "/";
  };

  const redirectToArticles = () => {
    window.location.href = "/articles";
  };

  const redirectToContact = () => {
    window.location.href = "/contacts";
  };

  const redirectToAbout = () => {
    window.location.href = "/about";
  };

  return (
    <header>
      <div style={containerStyle}></div>
      <button onClick={redirectToAccueil}>Accueil</button>
      <button onClick={redirectToArticles}>Articles</button>
      <button onClick={redirectToContact}>Contact</button>
      <button onClick={redirectToAbout}>About</button>
    </header>
  );
}
