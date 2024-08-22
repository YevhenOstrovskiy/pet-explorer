import { BaseUrls } from '@/constants';
import { apiClient } from '@/lib';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const catImgUrl = `${BaseUrls.BASE_CAT_IMG_URL}${id}`;
  
  return await apiClient(catImgUrl, process.env.CAT_API_KEY as string);
}