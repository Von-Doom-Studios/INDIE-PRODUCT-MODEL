# 02 - "I Was Here" (AI Travel Guide)

AI travel assistant that gives guided experiences at iconic locations. Scrapes socials for trending spots nearby, listens and assists in real time.

**Owner:** Unassigned
**Status:** 💡 Concept
**Thesis fit:** 16 / 25
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-05-21
**Source:** Anthony's PDF, May 2026 (Section 1)

---

## Anthony's Original Notes (verbatim)

> **I was here:**
>
> Ai travel assistant that gives guided experiences at iconic locations.
> Can scrape socials for trending locations near you.
> Listens and assists in real time?

---

## The Concept

Three core capabilities, taken directly from the notes:
1. **Guided experiences at iconic locations** — AI narrates context, history, and stories when the user arrives at a known landmark.
2. **Trending nearby from socials** — scrapes Instagram / TikTok / X for what's hot near the user's GPS right now.
3. **Real-time listening and assistance** — voice-first, the AI hears the user and the environment and answers in flow ("What is this monument?" "Where's a good coffee shop tourists don't know?").

The third capability is the wedge that separates this from existing audio-tour apps (Detour, GuideAlong, VoiceMap). Those are pre-recorded. This is live.

## The Niche

Initial best-guess (needs validation):
- **Solo travelers and couples** in major tourist cities who want context but resent paid tour groups
- **Locals exploring their own city** (high frequency, low session cost)
- Possibly **content creators** scouting locations they saw on TikTok

## The Pain

Not as acute as the other ideas in the portfolio. This is a "delight" product more than a "solve a $500 pain" product.

- Paid guided tours: $30–$100, scheduled, in a group, English-only
- Wikipedia: text, no context to where you are
- Google Maps: places, not stories

The human-replacement anchor is weaker here. Score reflects this.

## The Core Loop

1. User opens app at a location (or mid-walk)
2. App detects GPS → identifies what's near
3. Voice interface: "Tell me about this place" / "What's trending nearby?" / "Hidden gem?"
4. AI responds with narration (text + optional ElevenLabs voice)
5. Optional: passive listening mode — AI offers info when the user looks at something specific

## MVP Scope (≤3 weeks)

- [ ] PWA, mobile-first (not native — yet)
- [ ] One or two cities at launch (NYC + Rome, maybe — high-density tourist + landmark-heavy)
- [ ] Landmark identification via Google Places API + curated landmark list per city
- [ ] AI narration (GPT-4) with strong "you are at X, tell stories not facts" prompt
- [ ] Voice output (ElevenLabs)
- [ ] Voice input (Whisper) — push-to-talk only at MVP, no passive listening
- [ ] Trending-nearby feature: scrape Instagram location hashtags (or use a 3rd-party social listening API)

## V2

- [ ] Passive listening mode
- [ ] Personalization (interests, pace, depth)
- [ ] Saved journeys / shareable trip recaps
- [ ] Photo-look-and-explain (point camera, ask)
- [ ] Offline mode for poor signal areas
- [ ] More cities

## Pricing

| Tier | Price | Notes |
|---|---|---|
| Free | $0 | 3 questions/day, 1 city |
| Day Pass | $5 | Unlimited for 24 hours, any city |
| Pro | $9.99/mo | Unlimited, all cities, voice mode |

Anchor: "Guided walking tour = $30–$80 for 2 hours. This = $5/day or $9.99/month."

## Tech (per [04-STACK.md](../04-STACK.md))

- Next.js PWA
- Whisper (OpenAI) for voice input
- GPT-4 for narration
- ElevenLabs for voice output
- Google Places API for landmark lookup
- Supabase for user data
- Stripe

## Risks

- **Pain isn't acute** — "nice to have" risk. Validation will show whether anyone pays $5.
- **Voice UX is hard** — PWA voice on iOS Safari is constrained. May force native eventually (violates thesis).
- **Battery drain** — GPS + voice + AI = phone heat. Mitigation: optimize, allow text-only mode.
- **Content quality** — AI hallucinating history. Mitigation: ground in a per-city curated knowledge base, not pure LLM.
- **Social scraping legal** — same Craigslist/Zillow risk as #01. Probably use official APIs or paid social-listening services.

## Validation Plan

- [ ] Interview 5 frequent travelers and 5 city-resident tourists
- [ ] Landing page with demo video (mockup is fine)
- [ ] Drive 200 visitors from r/travel, r/solotravel, r/NYC, r/Rome
- [ ] Bar: 20 $5-deposit signups → green-light

## Recommendation

**Probably defer in favor of #01 or #03.** Thesis fit 16 is below our threshold. If we do build it, it should be after the first product hits $5K MRR — this one is harder to monetize at $20+/mo and would distract.

## Thesis Fit Score

| Principle | Score | Notes |
|---|---|---|
| Niche clarity | 3 | Travelers is too broad; needs sub-niche |
| Pain intensity | 3 | Delight, not acute |
| Build simplicity | 3 | Voice + GPS + AI + scraping is real surface area |
| Revenue path | 3 | $5/day works but ARPU is low |
| AI leverage | 4 | Replaces $50+ tours |
| **Total** | **16** | Below the 18 threshold |
