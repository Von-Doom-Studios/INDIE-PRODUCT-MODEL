# 02 - Vision and Approach: RPG Platform

> **An AI-native virtual tabletop — an evolved Roll20 — where the GM's words become the production.** The customer is the Game Master, not the players. GMs burn 5–10 hours of prep per session and can't afford commission artists ($50–$300/piece) or voice work; this platform collapses that into real-time generation during play.

**Owner:** Anthony (product)
**Status:** ✅ Agreed direction — beta-first, per the recommendation below (2026-07-23)
**Related files:** [01-GETTING-STARTED.md](./01-GETTING-STARTED.md) | [reference/06-REAL-TIME-GAME-GENERATION.md](./reference/06-REAL-TIME-GAME-GENERATION.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-07-23

---

## What We're Building

The elevator pitch above, unpacked — the end product, functioning end to end:

1. **Setup.** The GM creates a campaign: world, NPC roster, and a **system book** that dictates the mechanics. The system book is a *pluggable module*, not a hard-coded ruleset — Pathfinder 2e (Player Core Remaster, in [`reference/`](./reference/README.md)) is the first Bible, but it is one of many and we may pivot. Players build character sheets — personality, stats, skills, equipment — with AI assist and an auto-generated portrait.

2. **Live session (the heart of it).** The GM types or speaks scene descriptions. The platform turns them into images (sub-5-second generation — pacing dies past that), voice narration, and eventually short video clips, and **pushes** them to every player's screen in real time over websockets. Players don't refresh; the table just comes alive.

3. **GM copilot mid-game.** The GM can ask the AI for help live — "describe what's behind this door," "give this goblin a voice," rules lookups against the system book. The AI makes the GM better *during* the session, not just before it.

4. **After the session.** The platform compiles the session into a highlight video for the platform's YouTube channel. Every finished campaign becomes marketing — **the output is the distribution engine.**

5. **Business.** Free tier → $19 GM Pro → $49 Party (GM + 6 player seats) → $99 Studio (video export, custom voices, auto-upload). Stack: Next.js/Vercel, Supabase (Postgres + Storage + Realtime), Fal.ai images, ElevenLabs voice, Claude for narrative and the world bible's long context, Stripe. Full detail in the [catalog entry](./reference/06-REAL-TIME-GAME-GENERATION.md).

**The strategic wedge:** don't out-Roll20 Roll20 on dice mechanics — beat them on being AI-native and generative in real time.

## Deviations From the Catalog Entry

Named explicitly, per portfolio ground rules:

- **Launch system book is Pathfinder 2e, not D&D 5e SRD.** The catalog entry assumed 5e SRD for IP safety. PF2e Remaster is arguably *better* on that front — its game mechanics are published under the ORC license, which is friendlier than Wizards of the Coast's terms. Boundary that holds either way: the product uses ORC-licensed *mechanics*; it never ships the book's text or art verbatim (the PDF in `reference/` is a paid Paizo product, internal reference only, private repo).
- **System-book pluggability is now a first-class architectural requirement,** not a V2 nice-to-have, because the Bible choice itself is provisional.

## The Approach: Beta-First, Not Plan-First

Decision (2026-07-23): **build the beta from the existing spec rather than running a separate planning phase first.** Three reasons:

1. **The plan mostly already exists.** Idea #06 is the most specified idea in the catalog — MVP scope, deferred-to-V2 list, pricing, stack, risks, validation bar. A separate planning pass would largely re-derive that document. The real gap is working-level docs (data model, session flow, system-book format), which are hours of work inside this folder, not a separate workstream.
2. **The #1 risk is only answerable by building.** If image generation is slower than ~5 seconds, the product doesn't work. The pipeline's listed next step for #06 is literally "spike on real-time image gen latency." No amount of planning resolves that — a thin working slice does.
3. **The portfolio's own discipline favors it.** Per [../06-PIPELINE.md](../06-PIPELINE.md), nothing advances to 🚧 Building without validation (20+ paid waitlist / $500 pre-sales / 3 LOIs). The beta is **not** the product build — it is the latency spike *and* the validation demo. Showing GMs a live "type a scene, image appears on the players' screens in 4 seconds" is a far stronger waitlist-converter than a landing page.

### Sequence

1. `03-PRODUCT-SPEC.md` — the end product in working detail: data model, session flow, the system-book abstraction (what a Bible must encode: character creation, checks, combat flow, conditions), and the PF2e deviation made explicit.
2. `04-BETA-SCOPE.md` — the thin slice and nothing else: **GM console → real-time image generation → live player view.** No dice engine, no video compilation, no billing.
3. Build the beta against those two docs.

Deeper strategy work (competitive teardown, GTM, financial model) is deliberately deferred until the latency question is answered — a "no" there changes everything such a plan would say.

## Division of Labor

- **This session (product):** specs above + beta build, working out of `rpg-platform/`.
- **Co-work agent (structure/business):** business plan, organizational system, and the standardized folder/working structure for all future projects. This document is the shareable briefing for that agent.
- When the co-work agent's system lands, Anthony signals, and this folder's locations/structure/working strategy get migrated to conform. Until then, current layout stands.
