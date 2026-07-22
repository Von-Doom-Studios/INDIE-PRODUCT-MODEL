'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from './CartProvider';
import type { Product } from '@/lib/types';

const tabs = ['Single colors', 'Best sellers'] as const;

export default function SpotlightGrid({ products }: { products: Product[] }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Single colors');
  const { addItem, loading } = useCart();
  const [pendingId, setPendingId] = useState<string | null>(null);

  async function onQuickAdd(p: Product) {
    setPendingId(p.id);
    await addItem(p.variantId, 1);
    setPendingId(null);
  }

  return (
    <section id="spotlight" className="bg-ink py-20 md:py-28">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-serif italic font-normal">Sales</h2>
        <p className="mt-2 text-xs tracking-[0.18em] uppercase opacity-60">
          Hand-picked pieces to help you shine
        </p>

        <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-white/15 p-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 text-xs rounded-full transition ${
                tab === t ? 'bg-bone text-ink' : 'text-bone/70 hover:text-bone'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-6 lg:px-10 w-fit mx-auto">
          {products.map((p) => {
            const isPending = pendingId === p.id && loading;
            return (
              <article
                key={p.id}
                className="w-[338px] md:w-[364px] shrink-0 group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink-700">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 364px, 338px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                    <button
                      onClick={() => onQuickAdd(p)}
                      disabled={isPending}
                      className="w-full py-2.5 rounded-full bg-bone/95 backdrop-blur text-ink text-xs tracking-wide hover:bg-white disabled:opacity-70"
                    >
                      {isPending ? 'Adding…' : 'Quick add'}
                    </button>
                  </div>
                </div>
                <div className="mt-3 px-1 text-sm">
                  <div className="flex justify-between items-baseline gap-3">
                    <p className="truncate">{p.title}</p>
                    <p className="opacity-80 tabular-nums">
                      ${p.price.toFixed(p.price % 1 === 0 ? 0 : 2)}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs opacity-50">Highstreet</p>
                  {p.colors.length > 0 && (
                    <div className="mt-3 flex gap-1.5">
                      {p.colors.map((c) => (
                        <span
                          key={c}
                          style={{ backgroundColor: c }}
                          className="inline-block w-3 h-3 rounded-full ring-1 ring-white/20"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
