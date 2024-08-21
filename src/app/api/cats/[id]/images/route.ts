import { BaseUrls } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await fetch(`${BaseUrls.BASE_CAT_API_URL}images/search?limit=10&breed_ids=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CAT_API_KEY as string,
      },
      cache: 'force-cache',
    }).then((res) => res.json());
    return NextResponse.json(response);
} catch (error) {
  Response.json({ message: 'Internal Server Error!' });
}
}