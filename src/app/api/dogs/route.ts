import { BaseUrls } from '@/constants';
import { apiClient } from '@/lib';

export async function GET() {
  return await apiClient(BaseUrls.BASE_DOGS_API_URL, process.env.DOG_API_KEY as string);
}
