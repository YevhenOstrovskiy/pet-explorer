import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=100&page=0', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.DOG_API_KEY as string,
      },
    }).then((res) => res.json());

    return NextResponse.json(response);
} catch (error) {
  Response.json({ message: 'Internal Server Error!' });
}
}
