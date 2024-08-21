import React from 'react';
import { Pet } from '@/types';
import { Pagination } from '@/components';

interface PetListProps {
  pets: Pet[];
  itemsPerPage?: number;
}

export const PetList: React.FC<PetListProps> = ({ pets, itemsPerPage = 8 }) => {
  const totalPages = Math.ceil(pets.length / itemsPerPage);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-1 pb-1">
      <Pagination pets={pets} itemsPerPage={itemsPerPage} totalPages={totalPages} />
    </div>
  );
};
