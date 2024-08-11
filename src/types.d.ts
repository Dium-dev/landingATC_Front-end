export interface Brand {
  image: string;
  name: string;
}
export interface Review {
  id: string;
  review: string;
  rating: string;
  user: string;
  image: File | string,
  active?: string;
}
