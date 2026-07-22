'use client';

export default function SearchBlock() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif italic">Looking for something specific?</h2>
        <p className="mt-2 text-xs tracking-[0.18em] uppercase opacity-60">
          Find it here. Search by type, color, brand or theme.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex items-stretch gap-2 rounded-full border border-white/15 p-1"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent px-5 py-2.5 text-sm placeholder:text-bone/40 focus:outline-none"
          />
          <button
            type="button"
            className="px-4 text-xs opacity-70 hover:opacity-100 transition border-l border-white/15"
          >
            Categories
            <svg className="inline ml-1" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <button
            type="submit"
            aria-label="Search"
            className="w-10 h-10 rounded-full bg-bone text-ink flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" /></svg>
          </button>
        </form>
      </div>
    </section>
  );
}
