// Layout.js

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, title, description }) => {
  const pageTitle =
    typeof title === "string" ? `Webtech - ${title}` : "Webtech";

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
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: "cover",
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
