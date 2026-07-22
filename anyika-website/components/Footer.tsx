'use client';

const cols = [
  { title: 'Shop', items: ['New arrivals', 'Best sellers', 'Dresses', 'Tops', 'On sale'] },
  { title: 'About', items: ['Our story', 'Sustainability', 'Atelier', 'Press'] },
  { title: 'Help', items: ['Contact', 'Shipping', 'Returns', 'Size guide'] },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-16 grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-10">
        <div className="col-span-2 md:col-span-5">
          <p className="font-serif italic text-3xl">Highstreet</p>
          <p className="mt-3 text-sm opacity-70 max-w-sm">
            Timeless design, built to last. Sign up to receive seasonal letters from the atelier.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex max-w-sm gap-2 rounded-full border border-white/15 p-1"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-bone/40 focus:outline-none"
            />
            <button className="px-4 rounded-full bg-bone text-ink text-xs">Subscribe</button>
          </form>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="col-span-1 md:col-span-2 text-sm">
            <p className="text-xs tracking-[0.18em] uppercase opacity-60 mb-4">{c.title}</p>
            <ul className="space-y-2 opacity-90">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:underline opacity-80 hover:opacity-100">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-1 md:col-span-1 text-sm">
          <p className="text-xs tracking-[0.18em] uppercase opacity-60 mb-4">Social</p>
          <ul className="space-y-2 opacity-90">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Pinterest</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Highstreet. All rights reserved.
      </div>
    </footer>
  );
}
