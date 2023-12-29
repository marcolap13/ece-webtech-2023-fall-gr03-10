import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const Layout = ({ children, title, description }) => {
  const { theme } = useTheme();

  const pageTitle =
    typeof title === "string" ? `Webtech - ${title}` : "Webtech";

  const layoutStyle = {
    backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: theme === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
    padding: "20px",
    textAlign: "center",
  };

  const backgroundImageStyle = {
    backgroundImage: `url('/background.jpg')`,
    backgroundSize: "cover",
    ...(theme === 'dark' && { filter: 'brightness(90%)' }),
  };
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-col min-h-screen text-center"
        style={{ ...backgroundImageStyle, ...layoutStyle }}
      >
        <Header />
        <main className="pt-24 py-10 flex-1 max-w-full mx-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;