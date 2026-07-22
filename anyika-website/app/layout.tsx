import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import LenisProvider from '@/components/LenisProvider';
import CartProvider from '@/components/CartProvider';
import CartDrawer from '@/components/CartDrawer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Highstreet — Timeless design that never goes out of fashion',
  description:
    'Highstreet is an editorial fashion house — eternal elegance, considered design, modern essentials.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-ink text-bone selection:bg-terracotta selection:text-bone">
        <CartProvider>
          <LenisProvider>{children}</LenisProvider>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
