import { useRouter } from "next/router";
import Header from "../../header";
import Footer from '../../footer'; 
import articledb from "./articledb";

export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Chargement...</div>;
  }

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { articleId } = params;
  const article = articledb.find((article) => article.id === parseInt(articleId));

  return {
    props: {
      article,
    },
  };
}
