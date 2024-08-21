import { Image } from '@/types/Image';
import { Weight } from '@/types/Weight';

export interface Dog {
  weight: Weight;
  height: Weight;
  id: number;
  name: string;
  description: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  history: string;
  temperament: string;
  reference_image_id: string;
  image: Image;
  origin?: string;
}