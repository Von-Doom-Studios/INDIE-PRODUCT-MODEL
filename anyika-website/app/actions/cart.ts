'use server';

import {
  cartCreate,
  cartLinesAdd,
  cartLinesRemove,
  cartLinesUpdate,
  getCart,
  hasShopifyCredentials,
} from '@/lib/shopify';
import type { Cart } from '@/lib/types';

export type CartActionResult =
  | { ok: true; cart: Cart }
  | { ok: false; error: string };

export async function fetchCartAction(cartId: string): Promise<CartActionResult> {
  if (!hasShopifyCredentials) {
    return { ok: false, error: 'Shopify not configured' };
  }
  try {
    const cart = await getCart(cartId);
    if (!cart) return { ok: false, error: 'Cart not found' };
    return { ok: true, cart };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Cart fetch failed' };
  }
}

export async function addToCartAction(
  cartId: string | null,
  variantId: string,
  quantity = 1
): Promise<CartActionResult> {
  if (!hasShopifyCredentials) {
    return { ok: false, error: 'Shopify not configured' };
  }
  try {
    const cart = cartId
      ? await cartLinesAdd(cartId, variantId, quantity)
      : await cartCreate(variantId, quantity);
    return { ok: true, cart };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Add to cart failed' };
  }
}

export async function updateLineAction(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<CartActionResult> {
  if (!hasShopifyCredentials) {
    return { ok: false, error: 'Shopify not configured' };
  }
  try {
    const cart =
      quantity <= 0
        ? await cartLinesRemove(cartId, lineId)
        : await cartLinesUpdate(cartId, lineId, quantity);
    return { ok: true, cart };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Update failed' };
  }
}

export async function removeLineAction(
  cartId: string,
  lineId: string
): Promise<CartActionResult> {
  if (!hasShopifyCredentials) {
    return { ok: false, error: 'Shopify not configured' };
  }
  try {
    const cart = await cartLinesRemove(cartId, lineId);
    return { ok: true, cart };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Remove failed' };
  }
}
