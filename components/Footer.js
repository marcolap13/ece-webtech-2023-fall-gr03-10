import React from "react";
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  const footerStyle = {
    backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: theme === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
    padding: "20px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle} className="mt-auto">
      <p>&copy; 2023 ECE WEB-TECH GRP03-10</p>
    </footer>
  );
}
