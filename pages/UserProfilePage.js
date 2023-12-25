import React from 'react';
import { useUser } from './UserContext';
import Layout from './Layout';


const UserProfilePage = () => {
  const { user } = useUser();

  if (!user) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        <p>Email: {user.email}</p>
      </div>
    </Layout>
  );
};

export default UserProfilePage;
