import { PetList } from '@/components';
import { Route } from '@/constants';
import { fetchPets } from '@/lib';


const DogList = async () => {
  try {
    const dogs = await fetchPets(Route.DOGS);
    return dogs ? <PetList pets={dogs} /> : <div>No dogs available</div>;
  } catch (error) {
    return <div>Failed to load dogs data</div>;
  }
};

export default DogList;
