export interface Opdracht {
  id: number;
  name: string;
  summary: Array<string>;
  excerpt: Array<string>;
  images: Array<string>;
  essay: string;
  peer_review: string;
  opdracht: string;
  is_even: boolean;
}
