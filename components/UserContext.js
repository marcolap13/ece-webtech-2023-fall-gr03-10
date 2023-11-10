import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const UserContext = () => {
  const [searchText, setSearchText] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user's profile when the component mounts
    fetch("/api/profiles")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          return null;
        } else {
          throw new Error("Failed to fetch user profile");
        }
      })
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      router.push(`/articles/${searchText}`);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  const handleReconnect = () => {
    setIsConnected(true);
  };

  return { searchText, setSearchText, userProfile, isConnected, handleSearch, handleDisconnect, handleReconnect };
};
