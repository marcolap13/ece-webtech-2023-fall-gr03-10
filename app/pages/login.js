import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClients';
import { useTheme } from "../context/ThemeContext";

export default function Login() {
  const { theme } = useTheme();
  const router = useRouter();

  const handleUserStateChanged = (event, session) => {
    if (event === 'SIGNED_IN') {
      router.push('/profile');
    }
  };

  const layoutStyle = {
    backgroundColor:
      theme === "dark"
        ? "var(--background-color-dark)"
        : "var(--background-color-light)",
    color:
      theme === "dark" ? "var(--text-color-dark)" : "var(--text-color-light)",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div className="p-20">
    <div className="flex flex-col justify-center items-center rounded-lg" style={layoutStyle}>
      <div className="max-w-md mx-auto my-10 p-8 bg-opacity-g rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In to Your Account</h2>
        <Auth
          supabaseClient={supabase}
          onUserStateChanged={handleUserStateChanged}
          providers={['github']}
          className="text-center"
        />
      </div>
    </div>
    </div>
  );
}
