import Image from 'next/image';
import { images } from '@/lib/images';

type Block = {
  title: string;
  tagline: string;
  body: string;
  bullets: string[];
  cta: string;
  image: string;
  flipped?: boolean;
};

const blocks: Block[] = [
  {
    title: 'Dreamy dresses',
    tagline: 'Effortless elegance in every flowing silhouette.',
    body:
      'Discover our dress collection — where every piece blends classic silhouettes with timeless drapery. Cut from soft cottons and delicate linens, in tones that move with you, our pieces invite a quiet softness into the everyday.',
    bullets: ['Havana collection', 'Fringe collection', 'Muted tones'],
    cta: 'Shop all',
    image: images.story.dresses,
  },
  {
    title: 'Summer tops',
    tagline: 'Breezy, light, and effortless.',
    body:
      'Tops cut to skim a warm breeze — clean lines, soft sleeves and a relaxed shoulder. Cotton and linen blends in tones that travel from morning coffee to evening light.',
    bullets: ['Linen edits', 'Soft cotton', 'Heirloom whites'],
    cta: 'Shop now',
    image: images.story.tops,
    flipped: true,
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20 md:space-y-32">
        {blocks.map((b) => (
          <div
            key={b.title}
            className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
              b.flipped ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="md:col-span-7 relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-700">
              <Image
                src={b.image}
                alt={b.title}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="md:col-span-5">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.05]">{b.title}</h3>
              <p className="mt-2 text-sm opacity-70">{b.tagline}</p>
              <p className="mt-6 text-sm leading-relaxed opacity-80 max-w-md">{b.body}</p>

              <ul className="mt-6 space-y-1.5 text-sm">
                {b.bullets.map((x) => (
                  <li key={x} className="flex items-center gap-2 opacity-90">
                    <span className="w-1 h-1 rounded-full bg-bone/60" />
                    {x}
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-2.5 rounded-full bg-bone text-ink text-sm hover:bg-white transition">
                {b.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
