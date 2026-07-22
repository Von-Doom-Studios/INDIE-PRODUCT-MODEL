'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useCart } from './CartProvider';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, updateLine, removeLine, loading } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, closeCart]);

  const lines = cart?.lines ?? [];
  const empty = lines.length === 0;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-[70] h-screen w-full sm:w-[420px] bg-ink text-bone border-l border-white/10 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <p className="font-serif italic text-2xl">Your bag</p>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 opacity-80 hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {empty ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
              <p className="font-serif italic text-xl mb-2">Your bag is empty</p>
              <p className="text-sm opacity-70 max-w-xs">
                Add a piece from our collection to begin.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 px-5 py-2 rounded-full bg-bone text-ink text-xs hover:bg-white"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4">
                  <div className="relative w-20 h-24 shrink-0 bg-ink-700 overflow-hidden rounded-sm">
                    {line.image && (
                      <Image
                        src={line.image}
                        alt={line.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <p className="text-sm truncate">{line.title}</p>
                    <p className="mt-0.5 text-xs opacity-60 tabular-nums">
                      ${line.price.toFixed(2)}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-white/15 rounded-full">
                        <button
                          aria-label="Decrease quantity"
                          disabled={loading}
                          onClick={() => updateLine(line.id, line.quantity - 1)}
                          className="w-7 h-7 grid place-items-center text-sm opacity-80 hover:opacity-100 disabled:opacity-40"
                        >
                          −
                        </button>
                        <span className="px-2 text-xs tabular-nums">{line.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          disabled={loading}
                          onClick={() => updateLine(line.id, line.quantity + 1)}
                          className="w-7 h-7 grid place-items-center text-sm opacity-80 hover:opacity-100 disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeLine(line.id)}
                        disabled={loading}
                        className="text-[11px] tracking-[0.15em] uppercase opacity-50 hover:opacity-90 disabled:opacity-30"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {!empty && cart && (
          <div className="border-t border-white/10 px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="opacity-70">Subtotal</span>
              <span className="tabular-nums">${cart.total.toFixed(2)}</span>
            </div>
            <p className="text-[11px] opacity-50 tracking-[0.15em] uppercase">
              Shipping & taxes calculated at checkout
            </p>
            <a
              href={cart.checkoutUrl}
              className="block w-full text-center py-3 rounded-full bg-bone text-ink text-sm hover:bg-white"
            >
              Checkout
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
