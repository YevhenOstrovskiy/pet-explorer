export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
export const BASE_CAT_URL = `https://api.thecatapi.com/v1/`;
export const BASE_CAT_API_URL = `${BASE_CAT_URL}breeds/`;
export const BASE_CATS_API_URL = `${BASE_CAT_URL}breeds?limit=30&page=0`;
export const BASE_CAT_IMG_URL = `${BASE_CAT_URL}images/search?limit=10&breed_ids=`;
export const BASE_DOG_URL = `https://api.thedogapi.com/v1/`;
export const BASE_DOGS_API_URL = `${BASE_DOG_URL}breeds?limit=100&page=0`;
export const BASE_DOG_API_URL = `${BASE_DOG_URL}breeds/`;
export const BASE_DOG_IMG_URL = `${BASE_DOG_URL}images/search?limit=10&breed_ids=`;
