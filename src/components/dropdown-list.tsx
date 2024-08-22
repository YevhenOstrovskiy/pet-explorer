'use client';

import React from 'react';
import { Pet } from '@/types';

interface DropdownListProps {
  items: string[];
  onItemSelect: (item: string) => void;
}

export const DropdownList: React.FC<DropdownListProps> = ({ items, onItemSelect }) => {
  return (
    <ul className="absolute left-0 w-full bg-white text-black shadow-lg rounded-lg max-h-60 overflow-y-auto">
      {items.map((item, index) => (
        <li
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onMouseDown={() => onItemSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
