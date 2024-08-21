import { BaseUrls } from '@/constants';
import { apiClient } from '@/lib';

export async function GET() {
  return await apiClient(BaseUrls.BASE_CATS_API_URL, process.env.CAT_API_KEY as string);
}