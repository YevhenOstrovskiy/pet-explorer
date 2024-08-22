import { Cat } from '@/types/Cat';
import { Dog } from '@/types/Dog';
import { BaseUrls } from '@/constants';
import { fetchData } from '@/lib';

export const fetchPet = async (id: string, route: string): Promise<Cat | Dog> => {
  const url = `${BaseUrls.BASE_URL}/api${route}/${id}`;

  return await fetchData(url);
}