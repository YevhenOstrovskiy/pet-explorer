'use client';

import React from 'react';
import { Pet } from '@/types';
import { DropdownList } from '@/components';
import { fetchPets } from '@/lib';
import { Route } from '@/constants';
import { useRouter } from 'next/navigation';

export const Search: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const [pets, setPets] = React.useState<Pet[]>([]);

  const router = useRouter();

  React.useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const [cats, dogs] = await Promise.all([fetchPets(Route.CATS), fetchPets(Route.DOGS)]);
        if (cats && dogs) {
          const pets = [...cats, ...dogs];
          setPets(pets);
        }
      } catch (error) {
        return (<div>Failed to load pets data</div>);
      }
    };
    fetchAnimals();
  }, []);

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  const handleItemSelect = (item: string) => {
    setQuery(item);
    setIsFocused(false);
    const pet = pets.find((p) => p.name === item)
    if (pet) {
      const path = typeof pet.id === 'number' ? 'dogs' : 'cats';
      router.push(`/${path}/${pet.id}`);
      setQuery('');
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={query}
        onClick={handleFocus}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isFocused && (
        <DropdownList items={filteredPets.map(pet => pet.name)} onItemSelect={handleItemSelect} />
      )}
    </div>
  );
};
