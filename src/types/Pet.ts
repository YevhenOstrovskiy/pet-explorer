import { Image } from '@/types/Image';
import { Weight } from '@/types/Weight';

export interface Pet {
  weight: Weight;
  id: string;
  name: string;
  temperament: string;
  description?: string;
  bred_for?: string;
  life_span: string;
  reference_image_id: string;
  image: Image;
}