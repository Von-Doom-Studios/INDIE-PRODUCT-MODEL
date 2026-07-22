import type { Product } from './types';

// Fallback used when Shopify env vars aren't set. Mirrors the 3 hand-picked
// products currently shown in the Sales section so the UI never breaks.
export const mockProducts: Product[] = [
  {
    id: 'mock-marrakesh',
    variantId: 'mock-marrakesh-default',
    handle: 'marrakesh-maxi',
    title: 'The Marrakesh maxi',
    description:
      'Off-shoulder long-sleeve mesh maxi in a marbled coral, sage and ink print. Body-skimming silhouette.',
    price: 268,
    image: '/product-2.jpg',
    images: ['/product-2.jpg'],
    colors: ['#d05a48', '#8a9a7b', '#3a4760'],
  },
  {
    id: 'mock-smoke',
    variantId: 'mock-smoke-default',
    handle: 'smoke-turtleneck',
    title: 'The Smoke turtleneck',
    description:
      'A long-sleeve turtleneck mesh maxi in a sheer, smoky brown swirl. Editorial silhouette.',
    price: 232,
    image: '/product-3.jpg',
    images: ['/product-3.jpg'],
    colors: ['#6e4a35', '#2b1d15'],
  },
  {
    id: 'mock-tide',
    variantId: 'mock-tide-default',
    handle: 'tide-mesh-dress',
    title: 'The Tide mesh dress',
    description:
      'Long-sleeve turtleneck mesh maxi in a marine-blue swirling print. Form-following stretch.',
    price: 248,
    image: '/product-4.jpg',
    images: ['/product-4.jpg'],
    colors: ['#1d2a5a', '#3863c8'],
  },
];
