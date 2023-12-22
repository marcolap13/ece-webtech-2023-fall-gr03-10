import React from 'react';
import { useUser } from './UserContext'; // Assurez-vous que le chemin est correct
import Layout from './Layout'; // Assurez-vous que le chemin vers Layout est correct
import { supabase } from '../utils/supabaseClients';


const UserProfilePage = () => {
  const { user } = useUser();

  // Redirection si l'utilisateur n'est pas connecté
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
        {/* Autres informations de l'utilisateur */}
      </div>
    </Layout>
  );
};

export default UserProfilePage;
