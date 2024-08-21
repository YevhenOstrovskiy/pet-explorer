import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CAT_API_KEY as string,
      },
    }).then((res) => res.json());

    if (!response) {
      return NextResponse.json({ message: 'Cat not found!' }, { status: 404 });
    }

    return NextResponse.json(response);
} catch (error) {
  NextResponse.json({ message: 'Internal Server Error!' });
}
}