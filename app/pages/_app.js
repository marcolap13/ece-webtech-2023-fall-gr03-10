import "../styles/global.css";
import RootLayout from "../components/Layout";
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { UserProvider } from "../context/UserContext";

// Créez un nouveau composant pour gérer l'application de votre thème
function ThemedApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <ThemedApp Component={Component} pageProps={pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
