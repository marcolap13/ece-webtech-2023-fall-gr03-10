import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClients';

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
        .select('username, profile_picture, biography')
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

  const handleSearch = async (query) => {
    setSearchText(query);
    if (query) {
      const pattern = `%${query}%`;

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .ilike('title', pattern);

      if (!error && data) {
        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };


  return (
    <UserContext.Provider value={{
      user,
      handleDisconnect,
      searchText,
      setSearchText,
      searchResults,
      handleSearch
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
