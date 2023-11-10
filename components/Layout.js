import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({
  children,
  title,
  description
}){
  const pageTitle = typeof title === 'string' ? `Webtech - ${title}` : 'Webtech';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main className="py-10 min-h-screen max-w-full md:max-w-2xl md:mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
