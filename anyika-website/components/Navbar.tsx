'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from './CartProvider';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#spotlight' },
  { label: 'Story', href: '#story' },
  { label: 'Promise', href: '#highlighted' },
  { label: 'Contact', href: '#footer' },
];

const announcements = [
  'Free worldwide shipping on orders over $250',
  'New spring drop — now in stores',
  'Sign up for 10% off your first order',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openCart, cart } = useCart();
  const itemCount = cart?.itemCount ?? 0;

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 text-bone">
      <div className="flex items-center justify-between px-5 sm:px-6 lg:px-10 pt-5">
        {/* Mobile hamburger (left on mobile, hidden on md+) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden -ml-1 p-2 hover:opacity-100 opacity-90"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>

        <Link href="/" className="font-serif italic text-xl tracking-tight">
          Highstreet
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="opacity-80 hover:opacity-100 transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5 text-sm opacity-80">
          <button aria-label="Account" className="hidden sm:block hover:opacity-100">My account</button>
          <button aria-label="Search" className="hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" /></svg>
          </button>
          <button
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            onClick={openCart}
            className="relative hover:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 7h14l-1.4 11.2a2 2 0 0 1-2 1.8H8.4a2 2 0 0 1-2-1.8L5 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-bone text-ink text-[10px] font-medium tabular-nums grid place-items-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Announcement marquee */}
      <div className="mt-3 overflow-hidden border-y border-white/10 bg-ink/60 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee py-2 text-[11px] tracking-[0.18em] uppercase opacity-70">
          {[...announcements, ...announcements, ...announcements].map((a, i) => (
            <span key={i} className="px-8 flex items-center gap-8">
              {a}
              <span className="opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-50 bg-ink/95 backdrop-blur transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          <span className="font-serif italic text-xl">Highstreet</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="px-6 mt-12 flex flex-col gap-6">
          {navLinks.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              className={`font-serif italic text-4xl transform transition duration-500 ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-10 left-0 right-0 px-6 text-xs tracking-[0.18em] uppercase opacity-60 space-y-3">
          <p>My account</p>
          <p>Search</p>
          <p>Cart</p>
        </div>
      </div>
    </header>
  );
}
