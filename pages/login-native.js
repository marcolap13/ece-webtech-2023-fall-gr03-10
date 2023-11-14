import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function LoginNative() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const userData = {
      username: form.get('username'),
      password: form.get('password'),
    };

    setFormData(userData);
    setMessage(
      <div>
        <h2 className="text-center mt-3">Form data</h2>
        <pre><code>{JSON.stringify(userData, null, 2)}</code></pre>
      </div>
    );
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10">
        <div className="mb-4">
          <label htmlFor="username" className="block">Username:</label>
          <input type="text" id="username" name="username" required className="border p-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password:</label>
          <input type="password" id="password" name="password" required className="border p-2 rounded w-full" />
        </div>
        <div className="text-center">
          <button type="submit" style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Submit</button>
        </div>
      </form>
      {message}
    </Layout>
  );
}
