import Image from 'next/image';
import { images } from '@/lib/images';

export default function Editorial() {
  return (
    <section className="relative h-[620px] sm:h-[760px] lg:h-[900px] w-full overflow-hidden">
      <Image
        src={images.editorial}
        alt="Editorial — new arrivals"
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-bone">
        <div className="max-w-xl">
          <h2 className="font-serif italic text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            New arrivals
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">Best sellers</p>
          <p className="mt-2 text-sm tracking-[0.18em] uppercase opacity-70">On sale</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="#spotlight"
              className="px-7 py-3 rounded-full bg-bone text-ink text-sm tracking-wide hover:bg-white transition"
            >
              Discover more
            </a>
            <a
              href="#story"
              className="px-7 py-3 rounded-full border border-bone/40 text-bone text-sm hover:border-bone transition"
            >
              View lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
