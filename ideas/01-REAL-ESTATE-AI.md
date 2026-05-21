# Real Estate AI Assistant

> AI-powered rental/home search assistant that turns house hunting into a streamlined, guided process.

## Status: 💡 Concept

## The Problem

Finding an apartment or home is:
- Time-consuming (hours daily checking listings)
- Scattered (Craigslist, Zillow, FB Marketplace, etc.)
- Stressful (scams, competition, paperwork)
- Expensive if you use a broker

## The Solution

An AI assistant that:
1. Pulls live listings from multiple sources based on user criteria
2. Flags freshest postings (48-72 hour window is critical)
3. Drafts outreach messages instantly
4. Provides document checklists for fast applications
5. Detects scams (8+ red flags)
6. Gives negotiation advice and lease review

## Target Audience

**Primary:** Renters in competitive markets (NYC, SF, LA)
- Apartment hunters with specific needs (parking, no-fee, under $X)
- People relocating to new cities
- First-time renters who need guidance

**Secondary:** Home buyers
- Especially first-time buyers overwhelmed by process

## Core Features

### MVP (Week 1-2)
- [ ] Location/criteria input
- [ ] Live listing aggregation (Craigslist, Zillow, Trulia APIs or scraping)
- [ ] Freshness ranking
- [ ] Outreach message templates (short, medium, cold)
- [ ] Document checklist generator
- [ ] Basic scam detection

### V2
- [ ] Saved search alerts (push/email)
- [ ] Rent comping (property records integration)
- [ ] At-the-viewing checklist
- [ ] Lease review AI
- [ ] Neighborhood commute analysis

## Monetization

| Model | Price | Notes |
|-------|-------|-------|
| Free tier | $0 | 3 searches, basic features |
| Pro | $29/mo | Unlimited searches, alerts, all features |
| One-time | $49 | 30-day access (for single search) |

**Alternative:** Per-search pricing ($5/search)

## Technical Approach

- **Listing data:** Scrape or API (Zillow, Craigslist, Apartments.com)
- **AI:** GPT-4 for message drafting, scam analysis, lease review
- **Stack:** Next.js + Supabase + Vercel

## Competitive Landscape

| Competitor | Weakness |
|------------|----------|
| Zillow/Trulia | No personalized guidance, just listings |
| Apartment List | Broad, not niche-focused |
| Brokers | Expensive (15% fee) |

**Our angle:** AI guidance, not just listings. We're the expert assistant, not the database.

## Risks

- Scraping legal issues (terms of service)
- Listing data freshness/accuracy
- Competitive market (many players)

## Thesis Fit

| Principle | Score | Notes |
|-----------|-------|-------|
| Niche clarity | ⭐⭐⭐⭐ | Clear: renters in competitive markets |
| Pain intensity | ⭐⭐⭐⭐⭐ | High: finding housing is stressful |
| Build simplicity | ⭐⭐⭐ | Listing aggregation adds complexity |
| Revenue path | ⭐⭐⭐⭐ | Clear subscription/one-time model |
| AI leverage | ⭐⭐⭐⭐ | Replaces broker guidance |

## Next Steps

1. [ ] Validate: Survey renters about biggest pain points
2. [ ] Research: Listing data sources (legal options)
3. [ ] MVP scope: Narrow to single city (NYC?)

---

→ Back to [Ideas Index](./00-INDEX.md)
