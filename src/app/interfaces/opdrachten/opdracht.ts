import {PeerReview} from "./peerreview";

export interface Opdracht {
  id: number;
  name: string;
  quote: string;
  summary: Array<string>;
  excerpt: Array<string>;
  images: Array<string>;
  essay: string;
  peer_review?: PeerReview;
  opdracht: string;
  is_even: boolean;
}
