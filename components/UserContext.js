import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClients';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);

    if (initialized) {
      // Vérifie l'état de connexion initial et s'abonne aux changements d'état d'authentification
      const session = supabase.auth.getSession();
      setUser(session?.user);

      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user);
      });

      return () => {
        authListener.unsubscribe();
      };
    }
  }, [initialized]);

  const handleDisconnect = async () => {
    await supabase.auth.signOut();
  };

  return (
    <UserContext.Provider value={{
      user,
      handleDisconnect,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
