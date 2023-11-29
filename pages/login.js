import React from 'react';
import Layout from '../components/Layout';
import { Auth } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';
import { supabase } from '../outils/supabaseClients';

export default function Login() {
  const router = useRouter();

  return (
    <Layout>
      <div className="max-w-md mx-auto my-10">
        <Auth
          supabaseClient={supabase}
          onUserStateChanged={(event, session) => {
            if (event === 'SIGNED_IN') {
              router.push('/profile');
            }
          }}
          providers={['github']}
        />
      </div>
    </Layout>
  );
}
