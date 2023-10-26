import React from "react"
import Link from "next/link"

export default function Index() {
  return (
    <div className="bg-yellow p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-orange-700">ALIBOBO</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Article"
              className="border p-2 rounded-l w-64"
            />
            <button className="bg-white-500 p-2 rounded-r absolute right-0 top-0">
              🔍
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
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
        </div>
      </div>
    </div>
  );
}
