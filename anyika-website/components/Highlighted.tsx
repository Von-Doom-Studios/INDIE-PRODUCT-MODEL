import Image from 'next/image';
import { images } from '@/lib/images';

const items = [
  { title: 'Summer tops', tagline: 'Basics, light, and a warm tone.', cta: 'Shop now', image: images.highlighted[0] },
  { title: 'Muted tones', tagline: 'Soft palette, quiet confidence.', cta: 'Explore', image: images.highlighted[1] },
];

export default function Highlighted() {
  return (
    <section id="highlighted" className="bg-ink pb-24">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-serif italic">Highlighted</h3>
        <p className="mt-2 text-xs tracking-[0.18em] uppercase opacity-60">Our curated favorites</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <article key={it.title} className="relative h-[420px] sm:h-[480px] lg:h-[560px] overflow-hidden rounded-sm group">
            <Image
              src={it.image}
              alt={it.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-bone">
              <h4 className="text-2xl font-serif italic">{it.title}</h4>
              <p className="mt-1 text-sm opacity-80">{it.tagline}</p>
              <button className="mt-5 px-5 py-2 rounded-full bg-bone text-ink text-xs hover:bg-white transition">
                {it.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
