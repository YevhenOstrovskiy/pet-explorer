import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-md opacity-80">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} MyPetSite. All rights reserved.
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-300 text-sm">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-300 text-sm">Privacy policy</a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-300 text-sm">Contact info</a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-300 text-sm">Useful info</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};