import Image from 'next/image';
import { images } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative h-[640px] sm:h-[760px] lg:h-[900px] w-full overflow-hidden">
      <Image
        src={images.hero}
        alt="Editorial portrait — Highstreet"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/40" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl text-bone mt-[330px]">
          <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.02] tracking-tight font-light">
            <span className="block whitespace-nowrap">Welcome to our world</span>
            <span className="block whitespace-nowrap">
              of eternal{' '}
              <span className="font-serif italic font-normal">elegance</span>
            </span>
          </h1>
          <p className="mt-6 text-sm md:text-base opacity-80 max-w-md mx-auto">
            Timeless design never goes out of fashion.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#spotlight"
              className="px-7 py-3 rounded-full bg-bone text-ink text-sm tracking-wide hover:bg-white transition"
            >
              New arrivals
            </a>
            <a
              href="#story"
              className="px-7 py-3 rounded-full border border-bone/40 text-bone text-sm tracking-wide hover:border-bone transition inline-flex items-center gap-2"
            >
              Best sellers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <p className="mt-10 text-xs opacity-60 max-w-sm mx-auto leading-relaxed">
            This is a demo store for showcase only.<br />
            Products by Heavy Atelier.
          </p>
        </div>
      </div>
    </section>
  );
}
