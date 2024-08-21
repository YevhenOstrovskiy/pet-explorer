import { Image } from '@/types/Image';

export const fetchImages = async (id: string, route: string): Promise<Image[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api${route}/${id}/images`);
  if (!response.ok) {
    throw new Error('Failed to fetch cat images');
  }
  return response.json();
}