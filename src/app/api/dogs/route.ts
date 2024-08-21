import { BaseUrls } from '@/constants';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${BaseUrls.BASE_DOG_API_URL}breeds?limit=100&page=0`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.DOG_API_KEY as string,
      },
      cache: 'force-cache',
    }).then((res) => res.json());

    return NextResponse.json(response);
} catch (error) {
  Response.json({ message: 'Internal Server Error!' });
}
}
