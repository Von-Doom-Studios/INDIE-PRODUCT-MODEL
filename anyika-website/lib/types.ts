export type Product = {
  id: string;
  variantId: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  colors: string[];
};

export type CartLine = {
  id: string;
  quantity: number;
  title: string;
  variantId: string;
  price: number;
  image: string;
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  total: number;
  itemCount: number;
  lines: CartLine[];
};
