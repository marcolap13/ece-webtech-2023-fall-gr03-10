import React from 'react';
import Layout from '../components/Layout';
import { Auth } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClients';

export default function Login() {
  const router = useRouter();

  // Gère les changements d'état de l'utilisateur
  const handleUserStateChanged = (event, session) => {
    if (event === 'SIGNED_IN') {
      router.push('/profile'); // Redirige vers la page de profil après la connexion
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto my-10">
        <Auth
          supabaseClient={supabase}
          onUserStateChanged={handleUserStateChanged}
          providers={['github']} // Utiliser GitHub comme fournisseur
        />
      </div>
    </Layout>
  );
}
