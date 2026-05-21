# AI Dungeon Master Platform

> Real-time D&D-style game master platform with AI-generated visuals, voice, and storytelling.

## Status: 💡 Concept

## The Problem

Running tabletop RPG sessions:
- Requires extensive GM preparation
- Visual aids are time-consuming to create
- Voice acting is inconsistent
- No way to capture and share the experience

Platforms like Roll20 help with mechanics but don't solve creative production.

## The Solution

A platform where:
1. **GM creates scenarios** using AI assistance
2. **AI generates** images, videos, and voice narration in real-time
3. **Players see** rich visual/audio content pushed to them
4. **System book** defines world mechanics and game rules
5. **Post-game export** compiles session into shareable video

## Target Audience

**Primary:** Active D&D/TTRPG Game Masters
**Secondary:** TTRPG players who want richer experiences
**Tertiary:** Content creators who stream/record sessions

## Why This Is Interesting

- TTRPG market is growing ($2B+ and rising)
- AI can solve the "GM prep time" problem
- Visual content = shareable = viral potential
- Aligns with Floating Objects Studios capabilities

## Core Features

### MVP
- [ ] Campaign/world creation with AI assistance
- [ ] Real-time image generation from GM prompts
- [ ] Character sheet creation (players design their characters)
- [ ] Session streaming to players
- [ ] Basic voice narration (text-to-speech)

### V2
- [ ] AI video generation for key scenes
- [ ] Custom voice models for NPCs
- [ ] System book framework (rules, mechanics)
- [ ] Session recording and video export
- [ ] YouTube channel integration for exports
- [ ] Player portals (webring between campaigns)

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 3 sessions/mo, basic features |
| GM Pro | $19/mo | Unlimited sessions, all generation |
| Party | $49/mo | Full party access (GM + 5 players) |
| Studio | $99/mo | Video export, custom voices |

## Technical Approach

- **Images:** Flux/SDXL with LoRAs for fantasy styles
- **Video:** Runway/Kling for motion (key scenes only)
- **Voice:** ElevenLabs for narration/NPCs
- **Real-time:** WebSockets for pushing content to players
- **Stack:** Next.js + Supabase + Vercel

## Competitive Landscape

| Competitor | Weakness |
|------------|----------|
| Roll20 | Mechanics focus, no AI generation |
| Foundry VTT | Self-hosted, technical |
| AI Dungeon | Text-only, no GM tools |
| Fantasy Grounds | Old-school, expensive |

**Our angle:** AI-powered production studio for your campaign.

## Risks

- AI generation speed (real-time is hard)
- Compute costs per session
- Complex multi-user real-time system
- Niche audience

## Thesis Fit

| Principle | Score | Notes |
|-----------|-------|-------|
| Niche clarity | ⭐⭐⭐⭐⭐ | TTRPGers are specific |
| Pain intensity | ⭐⭐⭐⭐ | GM prep is brutal |
| Build simplicity | ⭐⭐ | Real-time multi-user adds complexity |
| Revenue path | ⭐⭐⭐⭐ | Proven subscription in this space |
| AI leverage | ⭐⭐⭐⭐⭐ | Replaces hours of prep + production |

## Internal Synergy

This could be a Floating Objects Studios product:
- Animation expertise
- Understanding of storytelling production
- Can demo with internal campaigns

## Next Steps

1. [ ] Interview 5 active GMs about prep pain points
2. [ ] Prototype: GM writes prompt → AI generates scene image → pushes to players
3. [ ] Test latency/cost of real-time generation

---

→ Back to [Ideas Index](./00-INDEX.md)
