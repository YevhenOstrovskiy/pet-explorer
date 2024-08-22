import { BaseUrls } from '@/constants';
import { Image } from '@/types/Image';
import { fetchData } from '@/lib';

export const fetchImages = async (id: string, route: string): Promise<Image[]> => {
  const url = `${BaseUrls.BASE_URL}/api${route}/${id}/images`;

  return await fetchData(url);
}