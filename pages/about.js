import React from "react";
import Header from "../header";
import Footer from '../footer'; 

export default function Contacts() {
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

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={headingStyle}>About</h1>
      Add me on contact
      <Footer />
    </div>
  );
}
