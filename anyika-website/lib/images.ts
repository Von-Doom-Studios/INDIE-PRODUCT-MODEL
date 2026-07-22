// Central image registry. Swap any path freely — every section reads from here.
// Files live in /public, served from the site root (e.g. '/model-1.jpg').

export const images = {
  hero: '/model-2.jpg',
  editorial: '/model-1.jpg',
  spotlight: [
    '/product-1.jpg',
    '/product-2.jpg',
    '/product-3.jpg',
    '/product-4.jpg',
    '/product-5.jpg',
  ],
  story: {
    dresses: '/product-1.jpg',
    tops: '/product-5.jpg',
  },
};
