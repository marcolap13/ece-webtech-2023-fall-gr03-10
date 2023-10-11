import { useRouter } from 'next/router'
import Header from '../../header'
import Footer from '../../footer'
import articledb from './articledb'

export default function Article() {
  const router = useRouter();

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  }

  const { articleId } = router.query;
  const article = articledb.find((article) => article.id == articleId);

  if (!article) {
    return <div>L'article n'a pas été trouvé.</div>;
  }

  return (
    <div style={containerStyle}>
      <Header />
      <h1>{article.title}</h1>
      <p>{article.content}</p>2
      <Footer />
    </div>
  )
}