import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
    <div className="bg-gray-200 min-h-screen font-sans">
    <div className="max-w-6xl mx-auto py-12 px-6">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-orange-700 mb-8">Welcome to AliBobo</h1>
        <p className="text-xl text-gray-800 mb-8">
          Dive into a universe of innovative products and unmatched offers. The future of online shopping starts here.
        </p>
        <Link href="/articles" passHref>
        <button className="bg-orange-700 text-white py-3 px-8 rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
          Explore Today
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">Diverse Choices</h2>
          <p className="text-gray-700">
            Explore our expansive product list, from high-tech gadgets to artistic home ornaments.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">Swift Shipments</h2>
          <p className="text-gray-700">
            Benefit from our prompt and efficient delivery network, ensuring your items always arrive on time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">24/7 Support</h2>
          <p className="text-gray-700">
            Our round-the-clock support team is eager to assist, ensuring a smooth shopping experience.
          </p>
        </div>
      </div>

    </div>
  </div>
    </Layout>
  )
}