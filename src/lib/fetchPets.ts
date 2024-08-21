import { Pet } from '@/types/Pet';

export const fetchPets = async (route: string): Promise<Pet[] | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api${route}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch pets from ${route}`);
    }
    const data: Pet[] = await response.json();
    return data.length ? data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};





