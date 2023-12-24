import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "./UserContext";

export default function Header() {
  const { user, handleDisconnect, setSearchText, searchText, handleSearch } =
    useUser();

  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.min(scrollPosition / 100, 1);
      setHeaderOpacity(1 - newOpacity);
      setIsHeaderVisible(scrollPosition <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const rectangularButtonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: "#FF6600",
    color: "#fff",
  };

  const headerStyle = {
    backgroundColor: darkMode
      ? `rgba(255, 255, 255, ${headerOpacity})`
      : `rgba(2, 34, 50, ${headerOpacity})`,
    opacity: headerOpacity,
    transition: "background-color 0.5s",
  };

  if (!isHeaderVisible) {
    return null;
  }

  return (
    <div
      className="p-4 shadow-md fixed top-0 left-0 right-0 z-50"
      style={headerStyle}
    >
      <div className="container ml-auto flex items-center ">
        <div className="text-4xl font-bold text-orange-700">ALIBOBO</div>
        <div className="relative ml-10 flex">
          <input
            type="text"
            placeholder="Search articles"
            className="border p-2 rounded-l w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-orange-500 p-2 rounded-r border-l-0"
            onClick={() => handleSearch(searchText)}
          >
            
          </button>
        </div>

        <div className={`flex items-start space-x-10 ml-10`}>
          <Link href="/" passHref>
            <button className="text-sm">Home</button>
          </Link>
          <Link href="/articles" passHref>
            <button className="text-sm">Articles</button>
          </Link>
          <Link href="/contacts" passHref>
            <button className="text-sm">Contacts</button>
          </Link>
          <Link href="/about" passHref>
            <button className="text-sm">About</button>
          </Link>
        </div>

        <div className={`flex items-center items-end space-x-12 ml-auto`}>
          {user ? (
            <>
              <span className="text-orange-700">
                User: {user.user_metadata.full_name || user.email}
              </span>
              <Link href="/profiles">
                <img
                  src={user?.profile_picture || "/LoggedIn.jpg"}
                  alt="Profile"
                  style={{ width: '45px', height: '45px', marginLeft: '10px', borderRadius: '50%' }}
                />
              </Link>
              <button onClick={handleDisconnect} style={rectangularButtonStyle} className="text-sm ml-2">
                Log Out
              </button>
            </>
          ) : (
            <Link href="/login">
              <button style={rectangularButtonStyle} className="text-sm ml-2">
                Log In
              </button>
            </Link>
          )}

        </div>
        <div className=" flex items-center cursor-pointer ml-4">
        
        <label
            htmlFor="darkModeToggle"
            className="flex items-center cursor-pointer"
          >
            <div
              className={`relative ml-3 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <input
                id="darkModeToggle"
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <div
                className={`block ${
                  darkMode ? "bg-gray-800" : "bg-gray-600"
                } w-14 h-8 rounded-full transition-transform duration-300 transform ${
                  darkMode ? "translate-x-0" : "translate-x-0"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 ${
                  darkMode ? "bg-gray-300" : "bg-white"
                } w-6 h-6 rounded-full transition-transform duration-300 transform ${
                  darkMode ? "translate-x-0" : "translate-x-6"
                }`}
              ></div>
            </div>
            <div className=" max-w-12 ml-3 text-gray-700 font-medium ml-auto" aria-hidden="true">
              {darkMode ? "Light" : "Dark"}
            </div>
            
          </label>
          
          </div>
      </div>
    </div>
  );
}
