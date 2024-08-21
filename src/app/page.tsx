import { PetList } from '@/components';
import { Pet } from '@/types';
import { Route } from '@/constants';
import { fetchPets } from '@/lib';

const getRandomPets = (cats: Pet[] | null, dogs: Pet[] | null, count: number): Pet[] => {
  if (cats && dogs) {
    const combined = [...cats, ...dogs];
    const shuffled = combined.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } else {
    console.error('Error while trying get some of pets from `getRandomPets` method!');
    return [];
  }
};

const Home = async () => {
  try {
    const [cats, dogs] = await Promise.all([fetchPets(Route.CATS), fetchPets(Route.DOGS)]);
    const pets = getRandomPets(cats, dogs, 20);

    return (
        <PetList pets={pets} />
    );
  } catch (error) {
    return <div>Failed to load pets data</div>;
  }
};

export default Home;
