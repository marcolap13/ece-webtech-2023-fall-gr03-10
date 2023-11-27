// Import necessary modules and components
import React from 'react';
import Layout from '../components/Layout';
import { supabase } from '../utils/supabase'; // Make sure this path is correct

export default function Profile({ user }) {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      window.location.href = '/login'; // Redirect to the login page
    }
  };

  return (
    <Layout>
      <div>
        <h1>User Profile</h1>
        <p>Welcome, {user.email}</p>
        {/* Other profile content */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}
