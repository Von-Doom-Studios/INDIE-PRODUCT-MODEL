# 03 - Levelsio Teardowns: Source Material for the Thesis

Real, evidence-based breakdowns of [@levelsio](https://x.com/levelsio)'s live products. This is the raw material the thesis is built on. When the thesis feels abstract, come back here.

**Owner:** VD-Ops
**Related files:** [02-THESIS.md](./02-THESIS.md) | [08-PRICING-PATTERNS.md](./08-PRICING-PATTERNS.md)
**Last updated:** 2026-05-21
**Sources:** photoai.com, interiorai.com, remoteok.com, nomads.com, vibej.am, Indie Hackers deep-dive case study, Pieter's own tweets and Lex Fridman Podcast #440.

---

## Photo AI (photoai.com) — $132K+/mo

**Tagline:** "🔥 Fire your photographer"

**What it does:** User uploads selfies → trains a custom AI model of their face → generates unlimited photorealistic photos in any setting, outfit, pose. Also creates AI influencers and AI video ("Mocap").

### Pricing (verified Dec 2024)
- **Starter:** $19/mo — 50 credits, 1 AI model, 48 free auto-generated photos, low quality
- **Pro:** $49/mo — 1,000 credits, 3 models, medium quality, commercial license
- **Premium:** $99/mo — 3,000 credits, 10 models, high quality, video, editing, advanced features ⭐ marked "Most Popular"
- **Ultra:** $199/mo — 10,000 credits, 50 models, ultra quality, priority queue, model export
- Yearly plans: 5–6 months free vs monthly (huge discount = locks in retention)

### The Anchor
"Professional photo shoots cost $250–$1,500. Photo AI Pro = 1,000 photos/month for $29. That's $2,500–$15,000 of shoots."

### Tech (he posted this publicly)
- Vanilla PHP + jQuery + inline HTML/CSS + SQLite
- ~14,000 lines of PHP
- DigitalOcean VPS, $40/mo
- Replicate API for AI compute (~$12K/mo — the actual cost driver)
- Stripe for payments
- ~37,000 git commits in 12 months
- **87% gross margin**

### What we steal
1. **"Fire your X" tagline pattern.** Hard, specific, names the human being replaced.
2. **Quality-tiered pricing** — not "more credits" but "better photos." Forces upgrades.
3. **48 free photos per model** — instant value the moment they pay. Reduces buyer's remorse.
4. **"Most Popular" anchor on the middle tier** — classic decoy pricing, it works.
5. **Yearly = 5+ months free** — kills churn at signup.
6. **Credit system + flexibility** — actions cost different credit amounts, prevents waste.

### What we don't copy
- His tech stack (we use modern tools we know)
- Mobile gap — Lensa stole his Avatar AI lunch by shipping iOS. For consumer products we evaluate mobile case by case.

---

## Interior AI (interiorai.com) — ~$38K/mo

**Tagline:** "🔥 Fire your interior designer"

**What it does:** Upload a photo of your room → AI redesigns it in any style. Plus virtual staging for empty rooms, sketch-to-render, SketchUp screenshot → photorealistic render, garden/outdoor design, 3D flythrough video.

### Key Patterns
- **60+ room types** (Living room, Bedroom, Gym, Podcast studio, Love dungeon, Parliament, etc.) — preset = accessible
- **55+ style presets** with emojis (🏠 Modern, 🌲 Scandinavian, 🛸 Retro futuristic, 🎄 Christmas, 🐲 Chinese New Year, 🐣 Easter) — seasonal/cultural presets drive repeat usage
- **7 modes:** Interior design / Style transfer / Virtual Staging / Sketch2Image / SketchUp / Outdoor / Empty
- **B2B angle baked in:** Virtual Staging AI for real estate agents — "$3,500 extra income per home, $35K/year for 10 homes." Pro plan: 1,000 stagings/mo for $390/year.
- **Competitor comparison table on landing page** — Interior AI vs Decorify, AI Room Planner, RoomGPT, Dreamstudio. Anchors quality, calls out competitor failures explicitly.
- ~25 seconds per render. Up to 16 in parallel.
- Partner of Stable Video Diffusion + World Labs (3D walkthrough).

### What we steal
1. **Massive preset library** — gives non-technical users a path in. The "Christmas" or "Easter" preset drives seasonal traffic for free.
2. **Seasonal/holiday presets** — built-in reason to come back every quarter.
3. **B2B sub-niche pricing** — same product, separate plan, separate ROI pitch (real estate agents).
4. **Competitor comparison on landing page** — explicit, not subtle.
5. **Multiple modes from one model** — Sketch2Image, SketchUp, Outdoor are all the same engine in different costumes. More perceived value, same backend.

---

## Remote OK (remoteok.com) — ~$35K/mo

**Tagline:** "Get new remote jobs sent to your inbox"

**What it does:** Remote job board. Companies pay to post. Workers browse free.

### Key Patterns
- **B2B revenue model** — workers free, companies pay (~$300+ per post). Job board economics are high-margin.
- **SEO-driven** — country pages, role pages, benefit pages, salary pages. Hundreds of long-tail landing pages.
- **#OpenSalaries** — salary transparency is the brand hook AND the SEO honey.
- **JSON / RSS feeds** + public API → developer adoption → backlinks → SEO compounding.
- **Cross-promo with his other products** — Photo AI, Interior AI, Nomads all linked in nav.
- **Bundle pricing** — buy multiple job posts at a discount.

### What we steal
1. **Job-board / directory economics** — if the niche has employer-side demand, the workers/users don't pay, the businesses do.
2. **Long-tail SEO matrix** — every combination of {region × role × benefit × salary band} becomes a landing page.
3. **Cross-promotion across portfolio** — every product links to every other product. Portfolio compounding.
4. **Bundle/volume discounts on B2B** — kills churn, increases ACV.

---

## Vibe Jam (vibej.am) — sponsored, ~$39K reported

**Tagline:** "A game dev competition where 90%+ of the code must be written by AI"

**What it does:** AI-coded game jam. Submitters embed a tracking widget, optionally connect via portals (webring between games). $40K cash prizes in 2026 ($25K gold / $10K silver / $5K bronze). Sponsors fund it.

### Key Patterns
- **Competition format** — creates urgency (deadline), creates community (entrants promote each other), creates content (every game is marketing).
- **Required widget** — every entry must embed `<script src="https://vibej.am/2026/widget.js">`. Tracks entrants, popularity (sub-prizes for most popular), and creates a network of cross-referring games.
- **Optional portals (webring)** — players walk from one game into another, parameters carry over (username, color, speed, ref). Pure 1990s-internet network effect.
- **Sponsor-funded prize pool** — Levels doesn't pay the $40K, sponsors do.
- **21M+ #vibejam impressions tracked publicly** — the competition itself is a marketing engine for AI coding tools.

### What we steal
1. **Competition / jam mechanic** — for any creative product, hosting a competition creates content, community, and viral lift simultaneously.
2. **Required widget for entry** — every participant becomes a node in your distribution graph.
3. **Webring/portal pattern** — for portfolio products, link them so users move between them frictionlessly.
4. **Sponsor revenue model** — for community events, sponsors fund the prizes, you get the audience and brand.

---

## Nomads (nomads.com, formerly Nomad List) — ~$10K+/mo

**Tagline:** "Go nomad — Join a global community of remote workers"

**What it does:** Membership community + city database for digital nomads.

### Key Patterns
- **Community as product** — paid membership for access to the community, city data, meetups.
- **Data moat** — 10+ years of city ratings, cost-of-living, wifi speeds, weather. Hard to replicate.
- **Niche personal brand alignment** — Levels IS a nomad. Authenticity matters.

### What we steal
1. **Paid community gating** — for any audience with strong identity (creators, hobbyists, professionals), a paid community is a sticky product.
2. **Long-running data accumulation = moat** — every product should be collecting proprietary data that compounds.

---

## Cross-Portfolio Patterns

Everything above shares these traits:

1. **"Fire your X"** or equivalent verb — replace a human, name the human.
2. **One core loop, multiple skins** — Interior AI sells 7 modes that are the same engine. Photo AI sells "models" that all use the same training pipeline.
3. **Visible output drives organic sharing** — photos, renders, games, job posts. Output is marketing.
4. **Tier by quality, not just quantity** — premium = better, not just more.
5. **Yearly plans at deep discount** — locks retention, smooths revenue.
6. **Cross-promotion across portfolio** — every product is a billboard for the others.
7. **Build in public on Twitter/X daily** — revenue posts, tech debates, feature updates. Engagement IS the growth channel.

---

## The Uncomfortable Truth We Have to Solve

Photo AI hit $5.4K MRR in week one. Why? Pieter tweeted to **350K followers** on launch day. About 2,000 visitors → ~200 paid signups.

We do not have that audience. So our launch math has to come from somewhere else:

| Channel | What we'd need |
|---|---|
| Paid ads | $30–50 CAC for a $29/mo signup. LTV at 6 months = $174. Profitable but requires capital. |
| Niche communities | Subreddits, Discords, professional forums in the target niche. Free but slow. |
| Influencer partnerships | Pay influencers in our niche (photography, real estate, fitness, TTRPG, etc.) for demos. |
| Content (YouTube/TikTok) | Before/after demos. Highest leverage if we can execute weekly. |
| Product Hunt | Possible. One-day spike. Not a strategy. |
| Build in public from zero | Slow. But every product compounds the founder's audience. |

See [07-LAUNCH-PROCESS.md](./07-LAUNCH-PROCESS.md) for our actual launch playbook.
