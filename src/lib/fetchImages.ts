import { Image } from '@/types/Image';

export const fetchImages = async (id: string, route: string): Promise<Image[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api${route}/${id}/images`);
  if (!response.ok) {
    throw new Error('Failed to fetch pet images');
  }
  return await response.json();
}