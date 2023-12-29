import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import GravatarComponent from "./GravatarComponent";

export default function Header() {
  const {
    user,
    handleDisconnect,
    searchText,
    setSearchText,
    searchResults,
    handleSearch,
  } = useUser();

  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

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
    if (user && user.email) {
      setUserEmail(user.email);
    }
  }, [user?.email]);

  const rectangularButtonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: "#FF6600",
    color: "#fff",
  };

  const initiateSearch = () => {
    handleSearch(searchText);
  };

  const onSearchTextChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    if (query.length > 0) {
      debounce(() => handleSearch(query), 50)();
    } else {
      handleSearch("");
    }
  };

  if (!isHeaderVisible) {
    return null;
  }

  const innerHeaderStyle = {
    backgroundColor: isDarkMode
      ? "var(--background-color-dark)"
      : "var(--background-color-light)",
    color: isDarkMode ? "var(--text-color-dark)" : "var(--text-color-light)",
    opacity: headerOpacity,
  };

  return (
    <div
      className="p-4 shadow-md fixed top-0 left-0 right-0 z-50"
      style={innerHeaderStyle}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-4xl font-bold text-orange-700 cursor-pointer">
          ALIBOBO
        </Link>

        <div className="relative flex mx-auto">
          <input
            type="text"
            placeholder="Search articles"
            className="border p-2 rounded-l w-64"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <button
            className="bg-orange-500 p-2 rounded-r border-l-0"
            onClick={initiateSearch}
          >
            🔎
          </button>

          <div className="search-results absolute top-full mt-1 bg-white text-black shadow-lg max-h-60 w-full overflow-auto z-50">
            {searchText.length > 0 && searchResults.length === 0 ? (
              <div className="p-2">No results found</div>
            ) : (
              searchResults.map((article) => (
                <Link
                  href={`/articles/${article.id}`}
                  key={article.id}
                  passHref
                >
                  <div className="block p-2 hover:bg-gray-100">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        <div className={`flex items-start space-x-10 ml-10`}>
          <Link href="/" passHref>
            <button className="styledButton">Home</button>
          </Link>
          <Link href="/articles" passHref>
            <button className="styledButton">Articles</button>
          </Link>
          <Link href="/contacts" passHref>
            <button className="styledButton">Contacts</button>
          </Link>
          <Link href="/about" passHref>
            <button className="styledButton">About</button>
          </Link>
        </div>

        <div className={`flex items-center items-end space-x-12 ml-auto`}>
          {user ? (
            <>
              <Link href="/profiles">
                <div className="flex items-center items-end space-x-5  transition duration-300 hover:bg-gray-200 rounded-lg">
                  <span className="text-orange-700">
                    {user?.username || user.email}
                  </span>

                  {user?.profile_picture ? (
                    <img
                      src={user.profile_picture}
                      alt="Profile"
                      style={{ width: '45px', height: '45px', marginLeft: '10px', borderRadius: '50%' }}
                    />
                  ) : (
                    <GravatarComponent email={userEmail} />
                  )}
                </div>
              </Link>

              <Link href="/">
                <button
                  onClick={handleDisconnect}
                  style={rectangularButtonStyle}
                  className="text-sm ml-2"
                >
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <button style={rectangularButtonStyle} className="text-sm ml-2 styledButton">
                Log In
              </button>
            </Link>
          )}
        </div>

        <div className="flex items-center cursor-pointer ml-4">
          <label
            htmlFor="darkModeToggle"
            className="flex items-center cursor-pointer"
          >
            <div
              className={`relative ml-3 ${isDarkMode ? "bg-gray-800" : "bg-gray-600"
                } w-14 h-8 rounded-full`}
            >
              <input
                id="darkModeToggle"
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <div
                className={`dot absolute left-1 top-1 ${isDarkMode ? "bg-gray-300" : "bg-white"
                  } w-6 h-6 rounded-full transition-transform ${isDarkMode ? "translate-x-6" : ""
                  }`}
              ></div>
            </div>
            <div className="max-w-12 ml-3 text-gray-700 font-medium">
              {isDarkMode ? "Dark" : "Light"}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
