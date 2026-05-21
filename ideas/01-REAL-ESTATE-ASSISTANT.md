# 01 - Real Estate Assistant (NYC / Queens / Brooklyn / Nassau)

AI rental search assistant for renters in competitive NYC-area markets. Built around Anthony's actual notes: 48–72hr listing freshness, on-the-spot application readiness, 8 scam red flags, 15-min daily routine.

**Owner:** Unassigned
**Status:** 💡 Concept
**Thesis fit:** 21 / 25
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-05-21
**Source:** Anthony's PDF, May 2026 (Section 0)

---

## Anthony's Original Notes (verbatim)

> Tell me your top 3 must-have neighborhoods and any commute constraints, and I'll narrow the list and search live listings now.
>
> Have your documents ready before you start: pay stubs, last 2 tax returns, bank statements, references, credit report, ID. Small landlords decide fast and pick the renter who can show paperwork on the spot.
>
> Set up alerts on Facebook Marketplace and Craigslist for your specific criteria so you get pinged the moment something posts.
>
> Use me as a draft assistant for inquiries, lease review, and negotiation language.
>
> Pull live listings for your priority neighborhoods (no-fee, by-owner, with parking/driveway, under $3K)
>
> Flag the freshest ones (posted in last 48-72 hours)
>
> Draft an outreach message template you can customize and fire off the moment you see something
>
> Build you a document checklist so you can apply on the spot
>
> Map the strongest neighborhoods based on your commute
>
> When you find a promising listing, just paste the link or address here and I'll pull up property records, comp the rent, draft your outreach, and flag any red flags.
>
> Ranked listing sources - exactly where to look daily, weekly, and old-school methods
>
> Realistic price ranges for 2BRs with driveways in 29 specific neighborhoods across Queens, Brooklyn, and Nassau County
>
> Pre-built saved search links for Craigslist, Zillow, and Trulia (clickable, just bookmark them)
>
> Three message templates for outreach (short, medium, cold)
>
> Document checklist so you can apply on the spot
>
> Scam detection checklist (8 red flags)
> At-the-viewing checklist with specific questions to ask the landlord
>
> A 15-min daily routine so you stay on top of new listings
>
> Negotiation tips for getting better terms

---

## The Niche (specific)

**Primary user:** Renters in NYC outer-borough + Long Island markets looking for **2BR units with a driveway, no-fee, by-owner, under $3K**, across **29 named neighborhoods in Queens, Brooklyn, and Nassau County**.

This is not "renters everywhere." It is one specific search pattern that thousands of renters run every day and lose to faster applicants.

**Why this beats a generic rental app:**
- The user already knows Zillow exists. The pain isn't "find listings." It's "win the listing in 48 hours."
- Small landlords decide fast. The renter who shows up with documents + a strong inquiry + comp data wins.
- No app currently combines: freshness ranking + outreach drafts + comp data + scam detection + document readiness.

## The Pain (acute)

Anthony's notes name the actual loss conditions:
- Listings disappear in 48–72 hours
- Renter shows up without paperwork → loses to someone who has it
- Small landlords reward speed and signal, not credit score
- Scams cost time and deposits — there are reliable red flags but renters don't know them
- A broker fee is 15% of annual rent (~$4,500 on a $2,500/mo place)

## The Human Service We Replace

**A NYC broker — 15% of annual rent (~$4,500 typical).** Anchor on landing page: "Brokers charge 15%. This is $29/month."

## The Core Loop (single)

1. User inputs: neighborhoods (from the 29 covered), commute origin, budget, must-haves (driveway, no-fee, by-owner)
2. App pulls live listings from Craigslist, Zillow, Trulia, Facebook Marketplace via scraping/RSS/API
3. App ranks by freshness (last 48–72hr first), filters by user criteria
4. For each listing: AI drafts outreach message (short/medium/cold templates), pulls comp data, flags scam red flags
5. User pays for: unlimited searches, alerts, the AI assistant

## MVP Scope (≤3 weeks)

- [ ] Coverage: 5 of the 29 neighborhoods only at launch (likely Astoria, LIC, Jackson Heights, Forest Hills, Bayside — pick the highest-search-volume)
- [ ] Listing aggregation: Craigslist + Zillow + FB Marketplace (most aggressive)
- [ ] Freshness ranking + filters (no-fee, by-owner, driveway, ≤$3K)
- [ ] Three outreach templates (short / medium / cold) — AI customizes from listing + user profile
- [ ] Document checklist generator (user inputs situation; gets exact list)
- [ ] Scam red-flag detector (8 flags from Anthony's notes baked in — too good to be true, no in-person, wire transfer, etc.)
- [ ] Paste-a-link feature: paste listing URL → get comp + outreach + flags
- [ ] Stripe paywall on day one
- [ ] No app — mobile-responsive web only

## V2 (post-launch, only if MRR > $2K)

- [ ] All 29 neighborhoods
- [ ] Push/email alerts on new matching listings
- [ ] Lease review AI (paste lease text → get red flags + negotiation language)
- [ ] At-the-viewing checklist with landlord questions
- [ ] Negotiation script generator
- [ ] Saved searches with shareable links (Craigslist/Zillow/Trulia presets)

## Pricing

| Tier | Price | Notes |
|---|---|---|
| Free demo | $0 | One paste-a-listing analysis. No searches saved. |
| Search Pro | $29/mo | Unlimited searches, alerts, outreach drafts, comp data, scam flags |
| 30-Day Hunt | $49 one-time | For people running a single search cycle |

Anchor: "A NYC broker = ~$4,500. This = $29/month."

## Tech (per [04-STACK.md](../04-STACK.md))

- Next.js + Vercel
- Supabase Postgres for user data + saved searches
- Inngest for listing-scrape jobs (every 15 min)
- OpenAI / Anthropic for outreach drafts, comp analysis, scam flagging
- Plausible + PostHog
- Listing data: Craigslist RSS where possible, scrape elsewhere (legal review needed)

## Risks

- **Scraping ToS** — Craigslist and Zillow both prohibit aggressive scraping. Real risk. Mitigation: use RSS where available, respect robots, cache aggressively, never resell raw data, position as "user-agent scraping on behalf of the user" if challenged.
- **Listing freshness** — if our refresh isn't fast enough, the value disappears. 15-min cron job minimum.
- **NYC-only TAM** — narrow audience. Mitigation: dominate NYC first, then templated expansion (Boston, SF, LA, DC) — but only after $5K MRR.

## Validation Plan (Phase 1)

- [ ] Interview 5 NYC renters who searched in the last 6 months
- [ ] Build landing page with the "broker = $4,500, this = $29" anchor
- [ ] Drive 200 visitors from r/AskNYC, r/Queens, r/Brooklyn, r/NYCapartments
- [ ] Bar: 20 $5-deposit signups → green-light build

## Thesis Fit Score

| Principle | Score | Notes |
|---|---|---|
| Niche clarity | 5 | NYC, 29 specific neighborhoods, 2BR + driveway + no-fee |
| Pain intensity | 5 | Acute, repeating, expensive alternative |
| Build simplicity | 3 | Listing aggregation is the wildcard |
| Revenue path | 4 | $29/mo proven model, $49 one-time for short searches |
| AI leverage | 4 | Replaces broker guidance + scam detection + outreach |
| **Total** | **21** | |
