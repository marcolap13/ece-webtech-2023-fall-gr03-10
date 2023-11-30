import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Articles({ articles }) {
  return (
    <Layout>
      <div className="bg-orange-100 p-6 rounded-md shadow-lg">
        <h1 className='wt-title text-orange-800 text-3xl font-bold mb-4'>
          Web technologies articles
        </h1>
        <p className="italic font-bold my-5 text-orange-600">This page fetches data at build time, optimizing for SEO.</p>
        <ul>
          {articles?.map(article => (
            <li key={article?.slug} className="my-5 bg-white p-4 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
              <h2 className="font-bold mb-1 text-orange-700">
                <Link href={`/articles/${article?.slug}`}>{article?.title}</Link>
              </h2>
              <p className="text-gray-700">{article?.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/articles')
//   const articles = await response.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
