import React from 'react';
import Link from 'next/link';
import { useUser } from './UserContext'; // Assurez-vous que le chemin est correct

export default function Header() {
  const { user, handleDisconnect } = useUser();

  return (
    <div className="bg-yellow p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-4xl font-bold text-orange-700">ALIBOBO</div>
        <div className="flex items-center space-x-4">
          {/* Liens du menu */}
          <Link href="/" passHref><button className="text-sm">Home</button></Link>
          <Link href="/articles" passHref><button className="text-sm">Articles</button></Link>
          <Link href="/contacts" passHref><button className="text-sm">Contacts</button></Link>
          <Link href="/about" passHref><button className="text-sm">About</button></Link>

          {/* Bouton de connexion/déconnexion */}
          {user ? (
            <>
              <span className="text-orange-700">Welcome, {user.email}!</span>
              <button onClick={handleDisconnect} className="text-sm">Log Out</button>
            </>
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
