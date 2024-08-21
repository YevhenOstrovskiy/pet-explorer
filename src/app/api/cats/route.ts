import { NextResponse } from 'next/server';
import { BaseUrls } from '@/constants';

export async function GET() {
  try {
    const response = await fetch(`${BaseUrls.BASE_CAT_API_URL}breeds?limit=30&page=0`, {
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