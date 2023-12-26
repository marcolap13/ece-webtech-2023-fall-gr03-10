import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClients';

export default function Login() {
  const router = useRouter();

  const handleUserStateChanged = (event, session) => {
    if (event === 'SIGNED_IN') {
      router.push('/profile');
    }
  };

  return (
    <div className="p-20 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto my-10 p-8 bg-white bg-opacity-70 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In to Your Account</h2>
        <Auth
          supabaseClient={supabase}
          onUserStateChanged={handleUserStateChanged}
          providers={['github']}
          className="text-center"
        />
      </div>
    </div>
  );
}
