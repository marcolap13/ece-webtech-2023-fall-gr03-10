import React from "react"
import Header from "../header"
import Footer from '../footer'

export default function index() {
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

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={headingStyle}>Welcome</h1>
      <p>
        This is our web-site for web-tech
      </p>
      <Footer />
    </div>
  );
}


