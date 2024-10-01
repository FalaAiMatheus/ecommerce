import { Pricing } from "./Priceable";
import { Specifications } from "./Specifications";

export interface Product extends Pricing {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  rating: number;
  video_review: string;
  tags: string[];
  specifications: Specifications;
}
