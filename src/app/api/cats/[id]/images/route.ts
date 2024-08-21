import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}`, {
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