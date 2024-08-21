import { BaseUrls } from '@/constants';
import { apiClient } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const dogImgUrl = `${BaseUrls.BASE_DOG_IMG_URL}${id}`;
  
  return await apiClient(dogImgUrl, process.env.DOG_API_KEY as string);
}