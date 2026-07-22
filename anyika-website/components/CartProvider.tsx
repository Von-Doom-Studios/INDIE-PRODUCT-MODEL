'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  addToCartAction,
  fetchCartAction,
  removeLineAction,
  updateLineAction,
} from '@/app/actions/cart';
import type { Cart } from '@/lib/types';

const STORAGE_KEY = 'highstreet:cartId';

type CartContextValue = {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateLine: (lineId: string, quantity: number) => Promise<void>;
  removeLine: (lineId: string) => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    const storedId = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!storedId) return;
    (async () => {
      setLoading(true);
      const res = await fetchCartAction(storedId);
      if (res.ok) {
        setCart(res.cart);
      } else {
        // Stale or invalid cart — clear it
        localStorage.removeItem(STORAGE_KEY);
      }
      setLoading(false);
    })();
  }, []);

  const persistCart = useCallback((next: Cart) => {
    setCart(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next.id);
    }
  }, []);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      setLoading(true);
      setError(null);
      const res = await addToCartAction(cart?.id ?? null, variantId, quantity);
      if (res.ok) {
        persistCart(res.cart);
        setIsOpen(true);
      } else {
        setError(res.error);
      }
      setLoading(false);
    },
    [cart?.id, persistCart]
  );

  const updateLine = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setLoading(true);
      setError(null);
      const res = await updateLineAction(cart.id, lineId, quantity);
      if (res.ok) persistCart(res.cart);
      else setError(res.error);
      setLoading(false);
    },
    [cart, persistCart]
  );

  const removeLine = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setLoading(true);
      setError(null);
      const res = await removeLineAction(cart.id, lineId);
      if (res.ok) persistCart(res.cart);
      else setError(res.error);
      setLoading(false);
    },
    [cart, persistCart]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      loading,
      error,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem,
      updateLine,
      removeLine,
    }),
    [cart, loading, error, isOpen, addItem, updateLine, removeLine]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
