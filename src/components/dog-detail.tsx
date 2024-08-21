import { Dog } from '@/types';
import React from 'react';
import { Image } from '@/types';
import { PetImages } from '@/components';

interface DogDetailProps {
  dog: Dog;
  images: Image[];
}

export const DogDetail: React.FC<DogDetailProps> = ({ dog, images }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="mt-1 p-1 w-full md:order-none order-1">
          <PetImages images={images} />
        </div>
        <div className="p-6 w-full md:order-none order-2">
          <h2 className="text-2xl font-bold mb-2">{dog.name}</h2>
          <p className="text-gray-700 mb-4">{dog.description}</p>
          <div className="flex flex-wrap mb-4">
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Breed Group: </span>{dog.breed_group}
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Bred For: </span>{dog.bred_for}
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Life Span: </span>{dog.life_span} years
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Height: </span>{dog.height.metric} cm ({dog.height.imperial} inches)
            </div>
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Weight: </span>{dog.weight.metric} kg ({dog.weight.imperial} lbs)
            </div>
            {dog.origin && (
              <div className="w-1/2 mb-2">
                <span className="font-semibold">Origin country: </span>{dog.origin}
              </div>
            )}
            <div className="w-1/2 mb-2">
              <span className="font-semibold">Temperament: </span>{dog.temperament}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={`https://en.wikipedia.org/wiki/${dog.name.replace(' ', '_')}`}
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
