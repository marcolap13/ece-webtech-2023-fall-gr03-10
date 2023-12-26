import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme, theme} from "../context/ThemeContext";

const Layout = ({ children, title, description }) => {
  const pageTitle =
    typeof title === "string" ? `Webtech - ${title}` : "Webtech";

    const Layoutstyle = {
      backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
      color: theme === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
      padding: "20px",
      textAlign: "center",
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
        style={{
          backgroundImage: `url(https://i.ibb.co/GQTqG8K/background.jpg)`,
          backgroundSize: "cover",
          Layoutstyle
        }}
      >
        <Header />
        <main className="pt-24 py-10 flex-1 max-w-full mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
