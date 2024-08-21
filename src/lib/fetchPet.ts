import { Cat } from '@/types/Cat';
import { Dog } from '@/types/Dog';
import { BaseUrls } from '@/constants';

export const fetchPet = async (id: string, route: string): Promise<Cat | Dog> => {
  console.log('URL:', `${BaseUrls.BASE_URL}/api${route}/${id}`);
  const response = await fetch(`${BaseUrls.BASE_URL}/api${route}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pet');
  }
  return response.json();
}