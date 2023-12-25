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
      const session = supabase.auth.getSession();
      updateUserData(session?.user);

      const { data: authListener, error } = supabase.auth.onAuthStateChange((_event, session) => {
        updateUserData(session?.user);
      });

      return () => {
        if (authListener && typeof authListener.unsubscribe === 'function') {
          authListener.unsubscribe();
        }
      };
    }
  }, [initialized]);

  const updateUserData = async (authUser) => {
    if (authUser) {
      const { data: userDetails, error } = await supabase
        .from('user_details')
        .select('username, profile_picture')
        .eq('user_id', authUser.id)
        .single();

      if (!error && userDetails) {
        setUser({ ...authUser, ...userDetails });
      } else {
        setUser(authUser);
      }
    } else {
      setUser(null);
    }
  };

  const handleDisconnect = async () => {
    await supabase.auth.signOut();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleDisconnect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
