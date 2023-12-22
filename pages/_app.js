import "../styles/global.css";
import RootLayout from "../components/Layout";
import { UserProvider } from "../components/UserContext";
import { supabase } from '../utils/supabaseClients'; // Importez l'instance de Supabase

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </UserProvider>
  );
}

export default MyApp;
