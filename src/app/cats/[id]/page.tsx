import { CatDetail } from '@/components';
import { Route } from '@/constants';
import { fetchImages, fetchPet } from '@/lib';
import { Cat } from '@/types';

export default async function CatInfo({ params }: { params: { id: string } }) {
  const cat = await fetchPet(params.id, Route.CATS) as Cat;
  const images = await fetchImages(params.id, Route.CATS);

  return (
    <div>
      <CatDetail cat={cat} images={images} />
    </div>
  );
}
