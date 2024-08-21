import { BaseUrls } from '@/constants';
import { apiClient } from '@/lib';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const dogUrl = `${BaseUrls.BASE_DOG_API_URL}${id}`;
  const result = await apiClient(dogUrl, process.env.DOG_API_KEY as string);
  return result;
}