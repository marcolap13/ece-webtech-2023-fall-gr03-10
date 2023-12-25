import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-5xl mx-auto p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-600 mb-8">About AliBobo</h1>
            <img src="steeve.jpg" alt="AliBobo Logo" className="mx-auto w-32 h-32 rounded-full mb-8" />
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              Launched in 2023, AliBobo is an innovative online marketplace aimed at serving
              millions of consumers and entrepreneurs worldwide. Inspired by the desire to connect
              businesses globally, we quickly became an indispensable leader in the world of e-commerce.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to offer the best online shopping experience with a broad
              selection of products, competitive prices, and swift delivery. Every day,
              we tirelessly work to build trust with our customers and partners.
            </p>
            <p className="text-lg text-gray-700">
              At AliBobo, your satisfaction is our priority. Thank you for choosing us and
              for accompanying us on this remarkable journey!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
