import { BaseUrls } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  
  try {
    const response = await fetch(`${BaseUrls.BASE_CAT_API_URL}breeds/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CAT_API_KEY as string,
      },
      cache: 'force-cache',
    }).then((res) => res.json());

    if (!response) {
      return NextResponse.json({ message: 'Cat not found!' }, { status: 404 });
    }

    return NextResponse.json(response);
} catch (error) {
  NextResponse.json({ message: 'Internal Server Error!' });
}
}