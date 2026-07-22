import { mockProducts } from './mock-products';
import type { Cart, Product } from './types';

const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const storefrontEndpoint = storeDomain
  ? `https://${storeDomain}/api/2024-10/graphql.json`
  : null;

export const hasShopifyCredentials = Boolean(storeDomain && storefrontToken);

type Money = { amount: string; currencyCode: string };

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: { nodes: Array<{ url: string }> };
  variants: { nodes: Array<{ id: string; price: Money }> };
};

type ShopifyCartShape = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: Money };
  lines: {
    nodes: Array<{
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        price: Money;
        product: {
          title: string;
          featuredImage?: { url: string } | null;
        };
      };
    }>;
  };
};

async function storefrontFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate?: number
): Promise<T> {
  if (!storefrontEndpoint || !storefrontToken) {
    throw new Error('Missing Shopify Storefront credentials');
  }

  const res = await fetch(storefrontEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontToken,
    },
    body: JSON.stringify({ query, variables }),
    ...(revalidate !== undefined
      ? { next: { revalidate } }
      : { cache: 'no-store' as const }),
  });

  if (!res.ok) {
    throw new Error(`Shopify request failed with ${res.status}`);
  }

  const json = (await res.json()) as {
    data?: T;
    errors?: Array<{ message: string }>;
  };

  if (json.errors?.length) {
    throw new Error(json.errors[0]?.message ?? 'Shopify request failed');
  }
  if (!json.data) throw new Error('Shopify returned no data');
  return json.data;
}

function mapProduct(node: ShopifyProductNode): Product {
  const amount = Number(node.variants.nodes[0]?.price.amount ?? 0);
  return {
    id: node.id,
    variantId: node.variants.nodes[0]?.id ?? node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    price: amount,
    image: node.images.nodes[0]?.url ?? mockProducts[0].image,
    images: node.images.nodes.map((n) => n.url),
    colors: ['#0a0a0a'],
  };
}

function mapCart(cart: ShopifyCartShape): Cart {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    total: Number(cart.cost.subtotalAmount.amount),
    itemCount: cart.totalQuantity,
    lines: cart.lines.nodes.map((line) => ({
      id: line.id,
      quantity: line.quantity,
      title: line.merchandise.product.title,
      variantId: line.merchandise.id,
      price: Number(line.merchandise.price.amount),
      image: line.merchandise.product.featuredImage?.url ?? mockProducts[0].image,
    })),
  };
}

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount { amount currencyCode }
  }
  lines(first: 50) {
    nodes {
      id
      quantity
      merchandise {
        ... on ProductVariant {
          id
          price { amount currencyCode }
          product {
            title
            featuredImage { url }
          }
        }
      }
    }
  }
`;

export async function getProducts(): Promise<Product[]> {
  if (!hasShopifyCredentials) return mockProducts;

  const query = `
    query GetProducts {
      products(first: 20) {
        nodes {
          id
          handle
          title
          description
          images(first: 10) { nodes { url } }
          variants(first: 1) {
            nodes { id price { amount currencyCode } }
          }
        }
      }
    }
  `;

  try {
    const data = await storefrontFetch<{
      products: { nodes: ShopifyProductNode[] };
    }>(query, undefined, 60);
    if (!data.products.nodes.length) return mockProducts;
    return data.products.nodes.map(mapProduct);
  } catch {
    return mockProducts;
  }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  if (!hasShopifyCredentials) {
    return mockProducts.find((p) => p.handle === handle) ?? null;
  }

  const query = `
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        description
        images(first: 10) { nodes { url } }
        variants(first: 1) {
          nodes { id price { amount currencyCode } }
        }
      }
    }
  `;

  try {
    const data = await storefrontFetch<{ product: ShopifyProductNode | null }>(
      query,
      { handle },
      60
    );
    return data.product ? mapProduct(data.product) : null;
  } catch {
    return mockProducts.find((p) => p.handle === handle) ?? null;
  }
}

export async function cartCreate(variantId: string, quantity: number): Promise<Cart> {
  const mutation = `
    mutation CartCreate($variantId: ID!, $quantity: Int!) {
      cartCreate(input: { lines: [{ merchandiseId: $variantId, quantity: $quantity }] }) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }
  `;
  const data = await storefrontFetch<{
    cartCreate: { cart: ShopifyCartShape | null; userErrors: Array<{ message: string }> };
  }>(mutation, { variantId, quantity });

  if (data.cartCreate.userErrors.length || !data.cartCreate.cart) {
    throw new Error(data.cartCreate.userErrors[0]?.message ?? 'Unable to create cart');
  }
  return mapCart(data.cartCreate.cart);
}

export async function cartLinesAdd(
  cartId: string,
  variantId: string,
  quantity: number
): Promise<Cart> {
  const mutation = `
    mutation CartLinesAdd($cartId: ID!, $variantId: ID!, $quantity: Int!) {
      cartLinesAdd(cartId: $cartId, lines: [{ merchandiseId: $variantId, quantity: $quantity }]) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }
  `;
  const data = await storefrontFetch<{
    cartLinesAdd: { cart: ShopifyCartShape | null; userErrors: Array<{ message: string }> };
  }>(mutation, { cartId, variantId, quantity });

  if (data.cartLinesAdd.userErrors.length || !data.cartLinesAdd.cart) {
    throw new Error(data.cartLinesAdd.userErrors[0]?.message ?? 'Unable to add cart line');
  }
  return mapCart(data.cartLinesAdd.cart);
}

export async function cartLinesRemove(cartId: string, lineId: string): Promise<Cart> {
  const mutation = `
    mutation CartLinesRemove($cartId: ID!, $lineId: ID!) {
      cartLinesRemove(cartId: $cartId, lineIds: [$lineId]) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }
  `;
  const data = await storefrontFetch<{
    cartLinesRemove: { cart: ShopifyCartShape | null; userErrors: Array<{ message: string }> };
  }>(mutation, { cartId, lineId });

  if (data.cartLinesRemove.userErrors.length || !data.cartLinesRemove.cart) {
    throw new Error(data.cartLinesRemove.userErrors[0]?.message ?? 'Unable to remove cart line');
  }
  return mapCart(data.cartLinesRemove.cart);
}

export async function cartLinesUpdate(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart> {
  const mutation = `
    mutation CartLinesUpdate($cartId: ID!, $lineId: ID!, $quantity: Int!) {
      cartLinesUpdate(cartId: $cartId, lines: [{ id: $lineId, quantity: $quantity }]) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }
  `;
  const data = await storefrontFetch<{
    cartLinesUpdate: { cart: ShopifyCartShape | null; userErrors: Array<{ message: string }> };
  }>(mutation, { cartId, lineId, quantity });

  if (data.cartLinesUpdate.userErrors.length || !data.cartLinesUpdate.cart) {
    throw new Error(data.cartLinesUpdate.userErrors[0]?.message ?? 'Unable to update cart line');
  }
  return mapCart(data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const query = `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) { ${CART_FIELDS} }
    }
  `;
  const data = await storefrontFetch<{ cart: ShopifyCartShape | null }>(query, { cartId });
  return data.cart ? mapCart(data.cart) : null;
}
