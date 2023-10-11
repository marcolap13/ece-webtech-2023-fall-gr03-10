import React from "react"
import Header from "../header"
import Footer from '../footer'


export default function Contacts() {
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

  const contactDetails = [
    { label: "Group:", value: "03" },
    { label: "Team:", value: "10" },
    { label: "School:", value: "ECE Paris" },
  ]

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={headingStyle}>Contact</h1>
      <div>
        {contactDetails.map((detail, index) => (
          <div key={index}>
            <strong>{detail.label}</strong> {detail.value}
          </div>
        ))}
        <div>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/marco-la-05a4021b3/"
            target="_blank"
            rel="noopener noreferrer"
          >Marco
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
