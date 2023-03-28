import { Image } from './product';

export type Slide =  {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  sub_title: string;
  description: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: Image;
  }
}
