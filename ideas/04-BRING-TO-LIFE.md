# 04 - Bring to Life (AI Creative Pipeline)

Platform that uses AI agents to solve the creative pipeline start to finish: story, sketch, design, structure, finished product.

**Owner:** Unassigned
**Status:** 💡 Concept
**Thesis fit:** 18 / 25
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-05-21
**Source:** Anthony's PDF, May 2026 (Section 3)

---

## Anthony's Original Notes (verbatim)

> **Bring to life**
>
> Platform that uses AI agents to solve for the creative pipeline start to finish.
>
> A. Story creation, conception and writing
> B. Sketch and storyboard (still or keyframe)
> C. Design/Artwork generation
> D. Structure/Edit
> E. Finished product: Combine A, B, C, D to bring it all together

---

## The Five Stages (verbatim from Anthony)

| Stage | What it does |
|---|---|
| **A. Story** | Conception and writing — narrative agent helps develop concept, write scenes, dialogue |
| **B. Sketch** | Storyboard and keyframe generation (still or animated) |
| **C. Design** | Artwork, characters, environments, assets |
| **D. Structure / Edit** | Pacing, scene order, refinement |
| **E. Finished** | Combine A+B+C+D into final deliverable (animatic, short, comic, video) |

## The Niche

The PDF doesn't lock the niche. We have to pick one to make the thesis fit. Three options, ranked:

1. **Solo creators making YouTube animated shorts** — high frequency, social-share native, willing to pay for tools. Probably the right wedge.
2. **Indie comic / webtoon creators** — pipeline-heavy, currently use 5 tools.
3. **Small studios pitching client concepts** — high willingness to pay but lower volume.

**Recommend wedge: solo creators making short animated content (YouTube, TikTok, IG Reels).**

## Strategic Note

This idea is **directly aligned with Floating Objects Studios' core capability.** We have an unfair advantage here that Levels doesn't have — we know the animation pipeline. We can:
1. Use this internally on Floating Objects client work (free QA)
2. Use that internal usage as case studies / marketing
3. Eat our own dog food, ship better than anyone else

## The Human Service We Replace

- Storyboard artist: $500–$2,000 per scene
- Concept artist: $1,000–$3,000 per asset set
- Editor: $50–$150/hr
- Full animation team: $10K+ for a 1-minute short

**Anchor:** "A 60-second animated short = $5K–$50K with a studio. This = $99/mo."

## The Core Loop

1. User inputs a story idea (sentence or paragraph)
2. Story Agent expands into a script
3. Sketch Agent generates a storyboard (10–30 frames)
4. Design Agent generates consistent character + environment assets
5. Edit Agent assembles into an animatic with timing
6. User refines per stage, then exports the final video / comic / PDF

## MVP Scope (≤3 weeks)

**Don't ship all 5 stages at launch.** Ship the wedge:

- [ ] **Story → Storyboard only.** Input a paragraph, get a 12-frame storyboard with character consistency.
- [ ] One character style at MVP (we pick) — let users upload reference for premium tier.
- [ ] Export: PDF storyboard + individual PNG frames.
- [ ] Stripe paywall.
- [ ] Public gallery (opt-in) of generated storyboards = marketing.

Future stages (C, D, E) ship one at a time, each as a paid upgrade.

## V2

- [ ] Stage C: Asset generation with LoRA-based character consistency
- [ ] Stage D: Animatic assembly with timing + transitions
- [ ] Stage E: Voice (ElevenLabs) + simple motion (Runway/Kling) → finished short
- [ ] Multi-character scenes
- [ ] Style presets per genre (anime, Pixar, noir, watercolor)

## Pricing

| Tier | Price | Includes |
|---|---|---|
| Free demo | $0 | 1 storyboard, 3 frames |
| Creator | $49/mo | 100 storyboards, 12 frames each, basic styles |
| Pro ⭐ | $99/mo | 500 storyboards, custom characters, video export (when shipped) |
| Studio | $299/mo | Unlimited, team seats, commercial license, priority |

Anchor: "Storyboard artist = $500+/scene. This = $49/mo for 100 storyboards."

## Tech (per [04-STACK.md](../04-STACK.md))

- Next.js + Vercel
- Supabase Postgres + Storage
- Inngest for the multi-stage pipeline
- OpenAI / Anthropic for Story Agent
- Flux on Replicate for image gen (better character consistency than SDXL)
- LoRA training for character consistency (premium feature)
- ElevenLabs for voice (V2)
- Runway / Kling for motion (V2)
- Stripe

## Risks

- **Scope discipline** — the temptation to ship all 5 stages will kill the launch. Start with story → storyboard.
- **Character consistency is the hard problem** — must solve before V2. Mitigation: LoRA training pipeline, locked into the wedge.
- **Compute cost** — image gen at scale is expensive. Mitigation: rate-limit free tier hard, anchor pricing high.
- **Crowded market** — many AI image / video tools exist. Our wedge: the pipeline framing (A→B→C→D→E), not a single image gen.

## Validation Plan

- [ ] Interview 5 YouTube animators / animation TikTokers
- [ ] Run a "we'll storyboard your script for $20" pre-order on the landing page
- [ ] Drive 200 visitors from r/animation, r/AfterEffects, r/TVPaint, animation Discord servers
- [ ] Bar: 20 pre-orders at $20 = $400 → green-light

## Thesis Fit Score

| Principle | Score | Notes |
|---|---|---|
| Niche clarity | 3 | "Creators" is broad — needs the YouTube-shorts wedge |
| Pain intensity | 4 | Storyboarding is genuinely painful for solo creators |
| Build simplicity | 2 | Character consistency is hard. Scope discipline critical. |
| Revenue path | 4 | $49–$299 tier works, B2B Studio plan possible |
| AI leverage | 5 | Replaces multiple roles |
| **Total** | **18** | At the threshold. Build only after validation. |
