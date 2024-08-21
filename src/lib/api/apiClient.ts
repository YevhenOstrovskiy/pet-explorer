import { NextResponse } from 'next/server';

export const apiClient = async (url: string, key: string) => {

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
    }
  };

  try {

    const response = await fetch(url, options).then((res) => res.json());

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return NextResponse.json(response);
  } catch (error) {

    console.error('Request failed: ', error);
    throw error;
  }
};