import { BaseUrls } from '@/constants';
import { Image } from '@/types/Image';

export const fetchImages = async (id: string, route: string): Promise<Image[]> => {
  const response = await fetch(`${BaseUrls.BASE_URL}/api${route}/${id}/images`, {cache: 'force-cache'});
  if (!response.ok) {
    throw new Error('Failed to fetch pet images');
  }
  return await response.json();
}