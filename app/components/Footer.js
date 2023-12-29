import React, { useState, useEffect }  from "react";
import { useTheme } from '../context/ThemeContext';


export default function Footer() {
  const { theme } = useTheme();
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  }, []);

  const footerStyle = {
    backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: theme === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
    padding: "20px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle} className="mt-auto">
      
      {catFact && (
        <div>
          <h2 className="font-semibold mb-4"> &copy; 2023 ECE WEB-TECH GRP03-10 -  🐱 Cat Fact of the Day 🐱</h2>
          <p className="">{catFact}</p>
        </div>
      )}
    </footer>
  );
}
