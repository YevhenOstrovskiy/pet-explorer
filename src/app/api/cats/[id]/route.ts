import { BaseUrls } from '@/constants';
import { apiClient } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const catUrl = `${BaseUrls.BASE_CAT_API_URL}${id}`

  return await apiClient(catUrl, process.env.CAT_API_KEY as string);
}