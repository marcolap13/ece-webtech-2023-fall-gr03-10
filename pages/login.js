import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useUser } from '../components/UserContext'; 

export default function LoginNative() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { handleLogin } = useUser(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(formData.username, formData.password); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <br />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Log In
        </button>
      </form>
    </Layout>
  );
}
