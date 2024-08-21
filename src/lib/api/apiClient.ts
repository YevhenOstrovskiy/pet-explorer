import { NextResponse } from 'next/server';

export const apiClient = async (url: string, key: string) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
    },
    cache: 'force-cache' as RequestCache,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Request failed: ', error);
    throw error;
  }
};