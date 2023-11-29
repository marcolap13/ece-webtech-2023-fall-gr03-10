import React from 'react';
import Link from 'next/link';
import { useUser } from './UserContext'; 

export default function Header() {
  const {
    searchText,
    setSearchText,
    userProfile,
    isConnected,
    handleSearch,
    handleDisconnect
  } = useUser();

  return (
    <div className="bg-yellow p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-orange-700">ALIBOBO</div>
          <div className="relative">
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
              🔍
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" passHref><button className="text-sm">Home</button></Link>
          <Link href="/articles" passHref><button className="text-sm">Articles</button></Link>
          <Link href="/contacts" passHref><button className="text-sm">Contacts</button></Link>
          <Link href="/about" passHref><button className="text-sm">About</button></Link>
          <Link href="/use-state" passHref><button className="text-sm">Use-state</button></Link>
          <Link href="/login-native" passHref><button className="text-sm">Login-native</button></Link>
          <Link href="/login-controlled" passHref><button className="text-sm">Login-controlled</button></Link>
          
          {isConnected && userProfile ? (
  <div className="flex items-center space-x-4">
    <Link href="/user" passHref>
      <img
        src="/LoggedIn.jpg" 
        alt="User"
        className="w-10 h-10 rounded-full"
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      />
    </Link>
    <span className="text-orange-700">Welcome, {userProfile.username}!</span>
    <button onClick={handleDisconnect} className="text-sm">Log Out</button>
  </div>
) : (
  <Link href="/login" passHref>
    <button className="text-sm">Log In</button>
  </Link>
)}

        </div>
      </div>
    </div>
  );
}
