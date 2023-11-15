import "../styles/global.css";
import RootLayout from "../components/Layout";
import { UserProvider } from "../components/UserContext";

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {

  const [supabaseClient] = useState(() => createPagesBrowserClient())
  return (
    <UserProvider>
      <RootLayout>
      <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
      </RootLayout>
    </UserProvider>
  );
}

export default MyApp; 