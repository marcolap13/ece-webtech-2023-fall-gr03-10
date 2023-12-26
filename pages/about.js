export default function Page() {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="text-center">
        <h1 className="text-4xl font-bold text-black-600 mb-8">Our Collaborators</h1>
      </div>

      <div className="flex justify-center space-x-10 mb-12">
        {/* Collaborateurs */}
        {[
          { name: "Marco", link: "https://www.linkedin.com/in/marco-la-05a4021b3/" },
          { name: "Rayan", link: "https://www.linkedin.com/in/rayan-zouch/" },
          { name: "Steeve", link: "https://www.linkedin.com/in/steeve-huang-824801221/" },
        ].map((profile) => (
          <a href={profile.link} key={profile.name} className="text-center">
            <img
              src={`${profile.name.toLowerCase()}.jpg`}
              alt={`${profile.name} Profile Pic`}
              className="w-24 h-24 object-cover rounded-full mb-2"
            />
            <p className="text-xl font-semibold">{profile.name}</p>
          </a>
        ))}
      </div>
      <div className="bg-white shadow-lg p-8 rounded-lg">
      <img src="about.png" alt="AliBobo Logo" className="mx-auto w-32 h-32 rounded-full mb-8" />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are three students who have created an e-commerce resale platform named AliBobo. Our platform provides a seamless experience for buying and selling a wide range of products.
          </p>
        </div>
      </div>
    </div>
  );
}
