# 06 - Real-Time Game Generation (TTRPG / D&D)

> **Localized copy (2026-07-23)** of the catalog entry [`../../ideas/06-REAL-TIME-GAME-GENERATION.md`](../../ideas/06-REAL-TIME-GAME-GENERATION.md), kept here so the RPG Platform folder is self-contained and portable. The `ideas/` file remains the canonical catalog entry for scoring/pipeline purposes; if the two diverge, reconcile deliberately.

A D&D-style game master storytelling platform. A Game Master runs a game and uses the dungeon master agent to create worlds and experiences. The platform generates videos, images, and voice in real time and pushes them to the players. Completed games are turned into a video uploaded to the platform's YouTube channel. **The platform is an evolved version of roll20.net.**

**Owner:** Unassigned
**Status:** 💡 Concept
**Thesis fit:** 19 / 25
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-05-21
**Source:** Anthony's PDF, May 2026 (Section 5)

---

## Anthony's Original Notes (verbatim)

> **Real time game generation**
>
> A dungeons and dragons styled game master storytelling platform. A Game Master runs a game and uses the dungeon master agent to create worlds and experiences. He runs the game and the platform generated videos, images and in real time for the players.
>
> The GM creates scenarios, which are then converted into generations and pushed to the players.
>
> The GM is also able to get assistance from the AI in order to produce better results in real time.
>
> The production is a combination of images, videos and voice narration. All AI generated in real time.
>
> - The players generate a character sheet and stat sheet for their character (personality, details, skills equipment etc...)
>
> - The mechanics of the world is dictated by the system book. This is the structure that the game is run under.
>
> - Once a game is completed, the produced game is turned into a video that can be uploaded to the platforms YouTube channel.
>
> - the platform is an evolved version of roll20.net

---

## What Anthony Specifically Said

This idea has the most specific spec of the six. Anthony nailed it. Key callouts:

1. **"Evolved version of roll20.net"** — direct competitive positioning, not a hand-wave.
2. **Real-time multimodal generation** — images + video + voice during the session, not pre-baked.
3. **GM gets AI assistance to produce better results in real time** — the AI helps the GM mid-game, not just the players.
4. **Players generate full character sheets** (personality, stats, skills, equipment).
5. **System book defines world mechanics** — the rules layer.
6. **Completed games auto-upload to the platform's YouTube channel** — this is huge. The output IS the marketing engine. Every campaign becomes content for the platform.

## The Niche

**Active D&D / TTRPG Game Masters running campaigns with friends.** Specifically GMs, not players. GMs are the bottleneck (they prep 5–10 hours per session) and the buyer.

Sub-niches:
- Weekly home games (cash buyer for tools that reduce prep time)
- Streaming GMs (Twitch, YouTube — they NEED visual production)
- Pro GMs running paid games via StartPlaying.games

TTRPG market is $2B+ and growing post-Stranger Things / Critical Role.

## The Human Service We Replace

- Hours of GM prep per session
- Hiring a commission artist for character/scene illustrations: $50–$300 per piece
- Voice actors for NPCs (basically nobody does this — but pros wish they could)
- Video editor for streamed campaigns: $50–$150/hr

**Anchor:** "5–10 hours of GM prep per session. AI handles it in 15 minutes."

## The Core Loop

1. GM creates a campaign in the platform (world setup, system book selection, NPC roster)
2. Players generate characters (sheet + portrait)
3. Session starts. GM types or speaks scene descriptions.
4. Platform generates images / short video clips / voice narration in real time and pushes to players
5. GM can ask AI mid-session ("describe what's behind this door," "voice for this goblin")
6. Session ends → platform compiles highlights into a video → optional YouTube upload

## MVP Scope (≤4 weeks — slightly larger than usual because real-time multimodal)

- [ ] Campaign / character creation with AI assist
- [ ] Real-time image generation from GM prompts (Fal.ai for speed, ≤5 sec generations)
- [ ] Player view that auto-updates when GM generates ("push" via WebSockets / Server-Sent Events)
- [ ] Character sheet creation with auto-generated portrait
- [ ] Voice narration on-demand (ElevenLabs, pre-cached NPC voices)
- [ ] One supported system at launch — D&D 5e SRD (open license, no Wizards of the Coast IP issue)
- [ ] Stripe paywall

**Defer for V2:** real-time video generation (expensive, slow), YouTube upload pipeline, full Roll20 dice/mechanics replacement.

## V2

- [ ] Real-time video clip generation for key scenes (Runway/Kling)
- [ ] Session recording + AI highlight reel + YouTube upload
- [ ] Custom voice cloning for NPCs
- [ ] More systems: Pathfinder, Call of Cthulhu, Blades in the Dark
- [ ] Player portals (game-to-game webring, Vibe Jam–style cross-promotion across campaigns)
- [ ] Stream-friendly mode (OBS overlay)

## Pricing

| Tier | Price | Notes |
|---|---|---|
| Free | $0 | 1 campaign, 3 sessions/mo, basic image gen |
| GM Pro | $19/mo | Unlimited sessions, full image + voice, all systems |
| Party | $49/mo ⭐ | GM Pro + up to 6 player seats |
| Studio | $99/mo | Video export, custom voices, YouTube auto-upload |

Anchor: "Commission artists for one campaign = $500+. This = $19/mo."

## Tech (per [04-STACK.md](../04-STACK.md))

- Next.js + Vercel
- Supabase Postgres + Storage + Realtime (WebSockets free with Supabase)
- Fal.ai for fast image gen (sub-5-second is critical for real-time)
- ElevenLabs for voice
- Runway / Kling for V2 video
- Anthropic Claude for narrative/GM assist (long context for world bibles)
- Stripe

## Risks

- **Real-time latency** — if image gen is slower than ~5 seconds, the pacing kills the session. Spike Fal.ai early.
- **Compute cost** — image gen per session is high. Mitigation: cache aggressively (locations get reused), tier hard on free users.
- **Roll20 incumbent** — they have inertia. Wedge: AI-native, mid-session generation, post-session video. Don't try to out-Roll20 Roll20 on mechanics.
- **D&D 5e IP** — use SRD only. Don't reference proprietary monsters/spells in defaults.
- **Multi-user real-time** — actually complex. Mitigation: Supabase Realtime handles the heavy lift.

## Why This Is a Strong Pick

1. **The output IS the marketing.** Every completed campaign becomes a video. Auto-uploaded to YouTube. Every successful GM is a billboard for the platform.
2. **Specific, named competitor** (Roll20) with a clear wedge (AI-native real-time generation).
3. **TTRPG community is large, vocal, and online** — Reddit, Discord, podcasts, YouTube. Distribution is reachable.
4. **B2B-like ACV** — $49 Party plan × thousands of weekly games = real revenue.
5. **Aligns with Floating Objects Studios** — we know visual storytelling.

## Validation Plan

- [ ] Interview 5 active GMs (weekly campaigns)
- [ ] Build a "we generate art for your session for free" landing test
- [ ] Drive traffic from r/DnD, r/RPG, r/dndbehindthescreen, GM Discords
- [ ] Bar: 30 GMs sign up for the free trial + 5 convert at $19 → green-light

## Thesis Fit Score

| Principle | Score | Notes |
|---|---|---|
| Niche clarity | 4 | "Active TTRPG GMs" — specific |
| Pain intensity | 4 | 5–10 hours prep per session, recurring weekly |
| Build simplicity | 2 | Real-time multi-user multimodal is real complexity |
| Revenue path | 4 | $19–$99 tiers, churn risk lower (campaigns last months) |
| AI leverage | 5 | Replaces hours of prep + commission artists + voice actors |
| **Total** | **19** | Strong contender, especially long-term |
