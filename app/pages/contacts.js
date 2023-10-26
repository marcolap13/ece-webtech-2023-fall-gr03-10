import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout
    title="Contacts"
    description="Contact us bro"
    >
    <div className="bg-black text-white" style={{ height: '100vh' }}>
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
      </div>

      <div className="max-w-2xl mx-auto p-8 text-center py-4">
        <div className="text-center mb-6 flex justify-center">
          <a href="#">
            <img
              src="/facebook.png" 
              alt="Facebook"
              className="w-12 h-9 mx-2 cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="/linkdin.png" 
              alt="LinkedIn"
              className="w-8 h-8 mx-2 cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="/Twitter.png" 
              alt="Twitter"
              className="w-8 h-8 mx-2 cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="/instagram.png" 
              alt="Instagram"
              className="w-12 h-12 mx-2 cursor-pointer"
            />
          </a>
        </div>

        <input
          type="text"
          className="w-full p-2 border rounded mb-4 text-black"
          placeholder="First Name"
        />
        <input
          type="text"
          className="w-full p-2 border rounded mb-4 text-black"
          placeholder="Last Name"
        />
        <input
          type="email"
          className="w-full p-2 border rounded mb-4 text-black"
          placeholder="Email Address"
        />
        <input
          type="tel"
          className="w-full p-2 border rounded mb-4 text-black"
          placeholder="Phone Number"
        />
        <select
          className="w-full p-2 border rounded mb-4 text-black"
        >
          <option value="England">England</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
          <option value="China">China</option>
          <option value="USA">USA</option>
        </select>
        <textarea
          className="w-full h-40 p-2 border rounded mb-4 text-black"
          placeholder="Write your message here"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>

<p className="text-white mt-4 font-bold">Mail</p>
<p className="text-white mt-1">alibobo@gmail.com</p>
      </div>
    </div>
    </Layout>
  )
}
