# 08 - Main Character

**Status:** ✅ Validated — committed as first build
**Owner:** Anthony (product), VD-Ops (coordination), VD-Dev (build)
**Working domain:** maincharacter.ai
**Captured:** 2026-05-24
**Decision:** This is product #01 in the build queue, ahead of all other ideas.

---

## The Idea

A Photo AI–style platform where the user replaces the subject of an existing meme with themselves (or someone who has consented). Only the person changes. Everything else in the meme — composition, text, framing, recognizable visual cues — is preserved so the meme is still instantly recognizable.

**Tagline candidates:** "Be the main character." / "Put yourself in the meme." / "Main character energy, on demand."

## The Hook

Memes are evergreen and constantly regenerating. New formats hit every week. The product gets a free traffic event every time the internet picks a new meme. Every paid user produces output that is *designed* to be shared publicly — distribution is built into the product loop.

## The Loop

1. **Onboard** — user creates an account, trains a personal face model from 10–20 selfies (Photo AI pattern), or takes a single on-the-spot photo for one-shot face-swaps
2. **Find a meme** — search via third-party API (Giphy / Tenor / Imgflip) at user request *or* upload their own template
3. **Swap** — AI replaces the original subject's face/body with the user's likeness, preserving composition, text, and visual cues
4. **Pay** — free preview with watermark; pay to download clean (or use credits if subscribed)
5. **Share** — output is designed to be posted; we get free distribution

## Thesis Fit

| Question | Answer |
|---|---|
| Specific user? | Anyone with a smartphone, a sense of humor, and a group chat. The strongest persona: 18–34 social-media-native, posts memes already, wants to be the protagonist of them. |
| Replaces a human? | Soft anchor: paying a meme artist on Fiverr ($15–$50 per custom edit) or learning Photoshop. The real pitch is desire-based, not cost-replacement based — "be the main character" not "fire your meme artist." |
| Single input → output loop? | Yes. Five boxes. |
| 2-week MVP solo? | Yes. Same infra as Photo AI face-model pipeline + meme-search API + face-swap inference. |
| One-person to run forever? | Yes. |
| Shareable output? | **Strongest in the entire portfolio.** Memes are literally designed to be shared. |
| Pay $20+/mo on day one? | Likely yes for the meme-active demographic. Tiered pricing maps cleanly to Photo AI. |

**Score:** 5 / 4 / 5 / 4 / 5 = **23 / 25**

This is the highest-scoring idea in the catalog. It wins primarily on *built-in distribution* (every paying user produces public, shareable output) and *MVP simplicity* (same loop as Photo AI, narrower spec). It loses one point on the human-anchor principle because the cost-replacement framing is weak; the desire framing is strong, which we explicitly accept as a thesis deviation.

## Pricing (draft, mirrors Photo AI)

- **Starter — $19/mo** — 30 memes/mo, 1 face model, watermarked free downloads, HD watermarked-removed downloads, no commercial license
- **Pro — $39/mo** ⭐ — 200 memes/mo, 3 face models, HD no-watermark, basic commercial license
- **Premium — $79/mo** — 800 memes/mo, 10 face models, video memes, multi-person memes, full commercial license
- **Yearly:** 5 months free (Photo AI pattern — locks in retention)

## IP Strategy

Two-tier approach. (A "Pro template library" tier was considered and deferred until we have real audience — owned templates are worthless before brand recognition.)

**Tier 1 — Third-party meme search (default flow)**
- User searches via Giphy / Tenor / Imgflip API at their request
- We don't curate a template gallery on the landing page (preserves DMCA safe-harbor posture)
- User confirms "this is the meme I want"
- We perform the face swap
- DMCA takedown process in place from day one
- ToS explicitly puts template-selection responsibility on the user

**Tier 2 — User uploads their own template**
- Same legal posture as Tier 1, even cleaner
- Pro/Premium feature ("upload custom templates")

**What we explicitly do NOT do at launch:**
- Curate or host our own meme template gallery (breaks the "user picked it" defense)
- Use named meme templates ("Disaster Girl", "Distracted Boyfriend") as marketing assets
- Train any model on copyrighted meme images we don't have rights to

## Consent / Anti-Abuse Strategy

Friction-light but defensible.

- **Attestation checkbox** on every generation: "This is me, or someone who has consented to being placed in this image."
- **On-the-spot selfie option** as one of the input paths. First-time users are nudged toward this with framing like "get started in 10 seconds" — feature, not friction.
- **Hard celebrity block** — off-the-shelf face recognition API checks input faces against a known-public-figures list. Reject with "we can't use public figures in this product."
- **Mandatory watermark on all Starter outputs.** Pro/Premium removes watermark, but accounts are tied to verified payment method — payment method is the actual abuse deterrent.
- **C2PA Content Credentials** embedded in every output. Invisible metadata tag that says "made by Main Character on [date] with AI." Standard adopted by Adobe, OpenAI, Meta. Cheap to add, gives us a paper trail.
- **Abuse reporting** via web form. Two strikes → account closure.
- **No liveness check at signup.** Friction too high for a meme product. Combination of attestation + payment verification + celebrity block + C2PA is enough.

## What "Done" Looks Like for MVP (2 weeks)

- Auth + Stripe + face-model training pipeline
- One face-swap inference path (Replicate or fal)
- Giphy/Tenor search integration (user-initiated only)
- User upload as second input path
- Camera capture as third input path
- Attestation gate + celebrity block + watermark + C2PA
- 3 pricing tiers live, yearly discount enabled
- Landing page with demo (no template gallery — see IP strategy)

## Launch Plan (preliminary)

- **Niche communities first** — r/memes, r/dankmemes, meme-focused Discords, Twitter meme accounts
- **Influencer partnerships** — pay 5–10 mid-tier meme accounts for demo posts
- **TikTok/Reels** — before/after videos. The output IS the marketing.
- **Build in public on X** — daily progress, revenue screenshots once live
- **NOT relying on Product Hunt** — spike, not strategy

Full launch plan written after MVP scope locks. See [07-LAUNCH-PROCESS.md](../07-LAUNCH-PROCESS.md).

## Open Decisions

- [ ] Confirm `maincharacter.ai` available + trademark-clear → register
- [ ] Pick face-swap model (Replicate options vs fal vs self-hosted)
- [ ] Pick celebrity-block API (AWS Rekognition vs alternatives)
- [ ] Finalize pricing tier numbers above
- [ ] Decide: web-only at launch (thesis default) or include PWA install prompt for mobile capture flow

## Build Tracking

This product gets its own dedicated tracking issue and a project board separate from this catalog file. See `06-PIPELINE.md` for status.
