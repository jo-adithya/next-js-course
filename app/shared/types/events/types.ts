export interface ImageProps {
  src: string;
  alt: string;
}

export interface EventProps {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: ImageProps;
  isFeatured: boolean;
}
