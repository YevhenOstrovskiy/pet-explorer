import { BaseUrls } from '@/constants';
import { Pet } from '@/types/Pet';
import { fetchData } from '@/lib';

export const fetchPets = async (route: string): Promise<Pet[] | null> => {
  const url = `${BaseUrls.BASE_URL}/api${route}`;

  return await fetchData(url);
};
