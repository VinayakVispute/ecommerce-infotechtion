export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  salePrice: number;
  originalPrice?: number;
  discount?: number;
  colors: string[];
  tags?: string[];
}
