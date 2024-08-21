import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=30&page=0', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CAT_API_KEY as string,
      },
    }).then((res) => res.json());

    return NextResponse.json(response);
} catch (error) {
  Response.json({ message: 'Internal Server Error!' });
}
}