import { BaseUrls } from '@/constants';
import { Pet } from '@/types/Pet';
import { headers } from "next/headers";



export const fetchPets = async (route: string): Promise<Pet[] | null> => {
  const headersList = headers();
  const domain = headersList.get("x-forwarded-host") || "";
  console.log('domain', domain);
  
  try {
    const response = await fetch(`https://${domain}/api${route}`);
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





