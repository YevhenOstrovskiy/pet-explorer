import React from 'react';
import { Cat, Image } from '@/types';
import { PetImages } from '@/components';

interface CatDetailProps {
  cat: Cat;
  images: Image[];
}

export const CatDetail: React.FC<CatDetailProps> = ({ cat, images }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="mt-1 p-1 w-full md:order-none order-1">
          <PetImages images={images} />
        </div>
        <div className="p-6 w-full md:order-none order-1">
          <h2 className="text-2xl font-bold mb-2">{cat.name}</h2>
          <p className="text-gray-700 mb-4">{cat.description}</p>
          <div className="flex flex-wrap mb-4">
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Origin country: </span>{cat.origin}
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Life Span: </span>{cat.life_span} years
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Weight: </span>{cat.weight.metric} kg ({cat.weight.imperial} lbs)
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Temperament: </span>{cat.temperament}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-semibold">Adaptability: </span>{cat.adaptability}
            </div>
            <div>
              <span className="font-semibold">Affection Level: </span>{cat.affection_level}
            </div>
            <div>
              <span className="font-semibold">Child Friendly: </span>{cat.child_friendly}
            </div>
            <div>
              <span className="font-semibold">Dog Friendly: </span>{cat.dog_friendly}
            </div>
            <div>
              <span className="font-semibold">Energy Level: </span>{cat.energy_level}
            </div>
            <div>
              <span className="font-semibold">Grooming: </span>{cat.grooming}
            </div>
            <div>
              <span className="font-semibold">Health Issues: </span>{cat.health_issues}
            </div>
            <div>
              <span className="font-semibold">Intelligence: </span>{cat.intelligence}
            </div>
            <div>
              <span className="font-semibold">Shedding Level: </span>{cat.shedding_level}
            </div>
            <div>
              <span className="font-semibold">Social Needs: </span>{cat.social_needs}
            </div>
            <div>
              <span className="font-semibold">Stranger Friendly: </span>{cat.stranger_friendly}
            </div>
            <div>
              <span className="font-semibold">Vocalisation: </span>{cat.vocalisation}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={cat.wikipedia_url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more on Wikipedia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
