# 07 - Launch Process

The repeatable process every product follows from idea → live. Built around the constraint that we don't have a 600K-follower distribution channel on day one.

**Owner:** Anthony (creative + brand call), VD-Ops (coordination), VD-Marketing (channel execution)
**Related files:** [02-THESIS.md](./02-THESIS.md) | [04-STACK.md](./04-STACK.md) | [06-PIPELINE.md](./06-PIPELINE.md) | [08-PRICING-PATTERNS.md](./08-PRICING-PATTERNS.md)
**Last updated:** 2026-05-21

---

## The 4 Phases

### Phase 1 — Validate (3–7 days)

Goal: prove someone will pay before we write a single line of product code.

- [ ] Draft a one-sentence value prop: "Replace [human service] with AI for [audience]."
- [ ] Identify 10 specific people who would use it. Names, not personas.
- [ ] Run 5 interviews. Ask about current pain, current spend, current workaround. NOT "would you use this?"
- [ ] Search competition. List the 5 closest competitors and their pricing.
- [ ] Build a one-page landing site with the value prop, a 30-second demo (mockup is fine), and Stripe-backed waitlist deposit ($5–$10).
- [ ] Drive 200+ visitors to it from niche communities (Reddit, Discord, X).
- [ ] **Bar to advance:** 20+ paid signups OR 3 B2B letters of intent OR $500 in pre-sales.

Output: validation doc in `ideas/NN-NAME.md` updated with research findings.

### Phase 2 — Build (1–3 weeks)

Goal: ship the simplest version that delivers the core loop end-to-end.

- [ ] Single input → AI process → single output → Stripe paywall. That's the MVP.
- [ ] Stack per [04-STACK.md](./04-STACK.md).
- [ ] Stripe Checkout live. Test transaction passes.
- [ ] Pricing live per [08-PRICING-PATTERNS.md](./08-PRICING-PATTERNS.md). At least 3 tiers. Anchor against the human alternative on the landing page.
- [ ] Sentry + Plausible + BetterStack wired up.
- [ ] Transactional email working (Resend).
- [ ] Daily public posts during build (Twitter/X, Discord, niche communities). "Day 3 of building X. Here's what shipped today."
- [ ] **Bar to advance:** Real user (not the founder) completes the core loop and pays.

### Phase 3 — Launch (1 day)

Goal: visible, coordinated public launch.

**Pre-launch checklist:**
- [ ] Landing page polished. Hero is the value prop + the human-replacement anchor.
- [ ] Before/after demo at the top (image, video, or interactive).
- [ ] Testimonials from validation-phase users.
- [ ] Pricing visible. Yearly plan offers 5+ months free.
- [ ] FAQ with at least: how it works, refund policy (likely "no refunds — cost recovery"), data privacy, cancellation.
- [ ] Competitor comparison table on the landing page.
- [ ] Cross-promotion links to other portfolio products (when we have them).
- [ ] OG image looks great when shared.

**Launch day channels (in order):**
1. **Niche communities first.** The 5 places we validated in. Post the launch.
2. **Twitter/X thread** — visual proof, the anchor, pricing, link.
3. **Subreddits** — the 3 most relevant. Read each sub's rules first.
4. **Niche Discord servers** — only where permitted.
5. **Product Hunt** — same day or next day, depending on timing.
6. **Hacker News (Show HN)** if it's technical.
7. **Email list** — anyone who signed up during validation.

**Post-launch (first week):**
- [ ] Respond to every user comment/email within 4 hours.
- [ ] Daily build-in-public update.
- [ ] Ship at least 2 visible improvements based on feedback.
- [ ] Revenue post when first $100 hits. Then $1K. Then $5K.

### Phase 4 — Iterate (ongoing)

Goal: get to $5K MRR. No new product until we're there.

**Monthly:**
- [ ] Review MRR, churn, gross margin.
- [ ] Identify top feature request. Decide build/skip/queue.
- [ ] Test a price raise. (Always test up before down.)
- [ ] Add a seasonal preset / pack if applicable.

**Quarterly:**
- [ ] Competitor scan. Is anyone gaining on us?
- [ ] Review the niche. Has anything shifted?
- [ ] Consider an adjacent product only if we're at $5K MRR stable.

---

## Distribution Playbook (Detail)

We don't have Levels' audience. Here's how we compensate:

### Niche communities (free, slow, real)
- Reddit (relevant subs only, no spam — contribute first, then post)
- Niche Discord servers (ask first, post second)
- Industry forums (real estate, security, TTRPG, etc.)
- Professional Slack groups

### Content (free, medium, compounding)
- YouTube: before/after demos, 2–5 min, weekly
- TikTok: 30s before/after, 3x/week
- X/Twitter: daily build-in-public + revenue posts
- SEO: long-tail landing pages per use case (Interior AI's pattern)

### Paid (capital required, measurable)
- Meta/Instagram ads — before/after creative
- Google Ads — high-intent keywords
- Strict rule: CAC must be < 1 month of LTV. If we can't get there in 2 weeks, kill the ad campaign.

### Influencer (cash, fast, niche-dependent)
- Pay micro-influencers in the niche $200–$1,000 for a demo post
- Affiliate program: 20% recurring commission for 12 months

### One-shots (rare, big)
- Product Hunt launch — usually one day spike
- Press pitch to niche publications
- Podcast appearances in the niche

---

## What We Don't Do

- ❌ Build for 3 months in stealth then launch
- ❌ Launch without Stripe live
- ❌ Free tier on day one
- ❌ Spend on ads before organic validation
- ❌ Build a native mobile app at launch
- ❌ Launch on a Friday
