'use client'
 
import { useNavigation } from 'next/navigation';
import articledb from '../articledb';

export default function Page() {
  const navigation = useNavigation();

  if (!navigation.isReady) {
    return <div>Chargement...</div>;
  }

  const articleID = navigation.query.articleID;

  if (!articleID) {
    return <div>L'article n'a pas été trouvé.</div>;
  }

  const articleIndex = parseInt(articleID, 10);

  if (isNaN(articleIndex) || articleIndex <= 0 || articleIndex > articledb.length) {
    return <div>L'article n'a pas été trouvé.</div>;
  }

  const article = articledb[articleIndex - 1];

  return (
    <div className="text-center mt-12 font-sans">
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-4">
          {article.title}
        </h1>
        <p>{article.content}</p>
      </div>
    </div>
  )
}
