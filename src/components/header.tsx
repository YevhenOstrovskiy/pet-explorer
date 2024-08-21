'use client'
import { usePathname } from 'next/navigation'
import React from 'react';
import Link from 'next/link';
import { Route } from '@/constants';

export const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-md opacity-80 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" legacyBehavior>
            <a className={`hover:text-gray-300`}>PetBreedExplorer</a>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href={Route.HOME} legacyBehavior>
              <a className={`hover:text-gray-300 ${pathname === Route.HOME ? 'text-blue-500' : ''}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={Route.DOGS} legacyBehavior>
              <a className={`hover:text-gray-300 ${pathname.includes(Route.DOGS) ? 'text-blue-500' : ''}`}>Dogs</a>
            </Link>
          </li>
          <li>
            <Link href={Route.CATS} legacyBehavior>
              <a className={`hover:text-gray-300 ${pathname.includes(Route.CATS) ? 'text-blue-500' : ''}`}>Cats</a>
            </Link>
          </li>
          <li>
            <Link href={Route.ABOUT} legacyBehavior>
              <a className={`hover:text-gray-300 ${pathname === Route.ABOUT ? 'text-blue-500' : ''}`}>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};