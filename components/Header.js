import React from "react";
import Link from "next/link";
import { UserContext } from "./UserContext";

export default function Header() {
  
  const { searchText, setSearchText, userProfile, isConnected, handleSearch, handleDisconnect, handleReconnect } = UserContext(UserContext);

  return (
    <div className="bg-yellow p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-orange-700">ALIBOBO</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Article"
              className="border p-2 rounded-l w-64"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-white-500 p-2 rounded-r absolute right-0 top-0"
              onClick={handleSearch}
            >
              🔍
            </button>
          </div>
        </div>

        {/* Right Section - Navigation Links and User Profile */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <Link href="/" passHref>
            <button className="text-sm">Main</button>
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

          {/* User Profile and Connection Status */}
          <div className="flex items-center space-x-4">
            {userProfile && isConnected ? (
              <>
                <span className="text-orange-700">
                  Welcome, {userProfile.username}!
                </span>
                <button onClick={handleDisconnect} className="text-sm">
                  Disconnect
                </button>
              </>
            ) : (
              <>
                <span className="text-orange-700">Not Connected</span>
                <button onClick={handleReconnect} className="text-sm">
                  Reconnect
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
