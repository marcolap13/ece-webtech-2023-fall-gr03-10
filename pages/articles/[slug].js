import Layout from '../../components/Layout.js'

export default function Page({
  article
}) {
  return (
    <Layout>
      <h1 className='wt-title'>
      </h1>
      <p className="italic font-bold">This page fetch data at build time, excellent for SEO.</p>
      <p>
      </p>
    </Layout>
  )
}

// export async function getStaticProps(ctx) {
//   const response = await fetch(`http://localhost:3000/api/articles/${ctx.params.slug}`)
//   const article = await response.json()
//   return {
//     props: {
//       article: article
//     }
//   };
// }

// export async function getStaticPaths(ctx) {
//   const response = await fetch(`http://localhost:3000/api/articles`)
//   const articles = await response.json()
//   return {
//     paths: articles.map( article => `/articles/${article.slug}`),
//     fallback: false
//   };
// }
