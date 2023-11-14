import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function LoginControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    updateMessage({ username: newUsername, password });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    updateMessage({ username, password: newPassword });
  };

  const updateMessage = (newData) => {
    setMessage(
      <div>
        <h2 className="text-center mt-3">Form data</h2>
        <pre><code>{JSON.stringify(newData, null, 2)}</code></pre>
      </div>
    );
  };

  return (
    <Layout>
      <form onSubmit={(event) => event.preventDefault()} className="max-w-md mx-auto my-10">
        <div className="mb-4">
          <label htmlFor="username" className="block">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="text-center">
          <button type="submit" style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Submit</button>
        </div>
      </form>
      {message && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          {message}
        </div>
      )}
    </Layout>
  );
}
