import { PetList } from '@/components';
import { Route } from '@/constants';
import { fetchPets } from '@/lib';

const CatList = async () => {
  try {
    const cats = await fetchPets(Route.CATS);
    return cats ? <PetList pets={cats} /> : <div>No cats available</div>;
  } catch (error) {
    return <div>Failed to load cats data</div>;
  }
};

export default CatList;

