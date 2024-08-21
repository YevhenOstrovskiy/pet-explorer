'use client'
import React from 'react';
import { Pet } from '@/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface PetCardProps {
  pet: Pet;
}

export const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const pathname = usePathname();
  const basePath = () => {
    const path = pathname.split('/')[1];
    if (!path) {
      return typeof pet.id === 'number' ? 'dogs' : 'cats';
    } else return path;
  }

  return (
    <Link href={`/${basePath()}/${pet.id}`} passHref>
      <div className="cursor-pointer w-80 h-96 rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-40">
          <Image 
            src={pet.image.url} 
            alt={pet.name} 
            layout="fill"
            objectFit="contain"
            className="rounded-t"
          />
        </div>
        <div className="px-6 py-4 flex flex-col justify-between h-48">
          <div>
            <div className="font-bold text-xl mb-2">{pet.name}</div>
            <p className="text-gray-700 text-base">{pet.description && !pet.bred_for ? pet.temperament : pet.bred_for}</p>
          </div>
          <div className="pt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Weight: {pet.weight.metric} kg
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Lifespan: {pet.life_span}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
