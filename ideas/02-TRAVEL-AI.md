# "I Was Here" — AI Travel Assistant

> Real-time AI guide that gives you context and stories at iconic locations.

## Status: 💡 Concept

## The Problem

At tourist spots, you either:
- Pay for expensive guided tours
- Read dry Wikipedia articles
- Miss the interesting stories entirely

## The Solution

An AI travel assistant that:
1. Knows your location (GPS)
2. Scrapes social media for trending spots nearby
3. Provides real-time audio/text commentary
4. Tells stories, history, and hidden gems
5. Listens and responds to questions about what you're seeing

## Target Audience

**Primary:** Solo travelers who want richer experiences
**Secondary:** Tourists who don't want to pay for guides
**Tertiary:** Locals exploring their own city

## Core Features

### MVP
- [ ] Location detection
- [ ] Place identification (landmark recognition?)
- [ ] AI-generated commentary (history, stories, tips)
- [ ] Voice output (optional)
- [ ] Simple Q&A about location

### V2
- [ ] Social scraping (trending nearby spots from Instagram/TikTok)
- [ ] Personalization (interests, pace, depth)
- [ ] Saved journeys/memories
- [ ] Photo integration (analyze what you're looking at)
- [ ] Offline mode for poor connectivity

## Monetization

| Model | Price | Notes |
|-------|-------|-------|
| Free | $0 | 3 locations/day |
| Day Pass | $5 | Unlimited for 24 hours |
| Pro | $9.99/mo | Unlimited, all features |

## Technical Approach

- **Location:** GPS + Google Places API
- **AI:** GPT-4 for commentary, ElevenLabs for voice
- **Social:** Instagram/TikTok scraping (or official APIs where available)
- **Stack:** Next.js PWA (mobile-first, no native app needed)

## Competitive Landscape

| Competitor | Weakness |
|------------|----------|
| Audio tour apps | Pre-recorded, not interactive |
| Google Maps | Facts, not stories |
| Tour guides | Expensive, scheduled |

**Our angle:** AI guide that's always with you, always responsive, always interesting.

## Risks

- Battery drain (GPS + AI)
- Connectivity in remote areas
- Accuracy of AI-generated history
- Social scraping legal/TOS issues

## Thesis Fit

| Principle | Score | Notes |
|-----------|-------|-------|
| Niche clarity | ⭐⭐⭐ | Travelers, but broad |
| Pain intensity | ⭐⭐⭐ | Nice-to-have, not must-have |
| Build simplicity | ⭐⭐⭐ | Location + AI straightforward |
| Revenue path | ⭐⭐⭐ | Day pass model works |
| AI leverage | ⭐⭐⭐⭐ | Replaces $50+ guided tours |

## Questions to Resolve

- How do we ensure historical accuracy?
- PWA vs native app (battery, GPS reliability)?
- What's the real-time listening feature scope?

## Next Steps

1. [ ] User research: What do travelers actually want?
2. [ ] Test: GPS + AI commentary prototype
3. [ ] Validate: Would people pay $5/day for this?

---

→ Back to [Ideas Index](./00-INDEX.md)
