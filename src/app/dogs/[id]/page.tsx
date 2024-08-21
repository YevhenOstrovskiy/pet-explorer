import { DogDetail } from '@/components';
import { Dog } from '@/types';
import { Route } from '@/constants';
import { fetchPet, fetchImages } from '@/lib';

export default async function DogInfo({ params }: { params: { id: string } }) {
  const dog = await fetchPet(params.id, Route.DOGS) as Dog;
  const images = await fetchImages(params.id, Route.DOGS);

  return (
    <div>
      <DogDetail dog={dog} images={images}/>
    </div>
  );
}
