# Premium Fitness Super-App

> Unified fitness platform combining workout logging, GPS tracking, health data, and AI coaching.

## Status: 💡 Concept

## The Problem

Fitness enthusiasts use multiple apps:
- Hevy for workout logging
- Strava for runs/cycling
- Apple/Samsung Health for sleep/steps
- MyFitnessPal for nutrition
- Spotify for music

None of them talk to each other. No unified picture. No intelligent coaching.

## The Solution

One app that:
1. Logs workouts (strength training)
2. Tracks GPS activities (running, cycling)
3. Syncs health data (sleep, steps, heart rate)
4. Tracks nutrition and calories
5. Integrates with Spotify for workout music
6. **AI Coach** that sees everything and advises

### The AI Coach Difference

The AI Coach:
- Connects to all data sources
- Watches workouts via phone camera (optional)
- Gives real-time form feedback
- Tracks reps automatically
- Provides training advice based on full picture

## Target Audience

**Primary:** Serious fitness enthusiasts who use multiple apps
**Secondary:** People frustrated with fragmented tracking
**Tertiary:** Coaches managing clients

## Core Features

### MVP
- [ ] Workout logging (strength training)
- [ ] GPS activity tracking
- [ ] Health sync (Apple Health/Google Fit)
- [ ] Basic AI coach (text-based advice)
- [ ] Cross-platform (iOS, Android, web)

### V2
- [ ] Camera-based form tracking
- [ ] Automatic rep counting
- [ ] Nutrition logging + AI meal suggestions
- [ ] Spotify integration
- [ ] Coach/client management
- [ ] Social features (feed, challenges)

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Basic logging, limited AI |
| Pro | $14.99/mo | Full AI coach, all features |
| Coach | $49/mo | Manage up to 20 clients |

## Technical Approach

- **Mobile:** React Native or Flutter (cross-platform required)
- **Health data:** Apple HealthKit, Google Fit APIs
- **AI Coach:** GPT-4 with fitness-specific prompts
- **Camera tracking:** MediaPipe or similar pose estimation
- **Backend:** Supabase + serverless

## Competitive Landscape

| Competitor | Strength | Weakness |
|------------|----------|----------|
| Hevy | Great workout logging | No GPS, no AI |
| Strava | Great for running/cycling | No gym workouts |
| Apple Fitness+ | Integrated | Subscription fatigue, limited tracking |
| Whoop | Great health tracking | Expensive hardware |

**Our angle:** All-in-one + AI coaching that sees your complete fitness picture.

## Risks

- Requires native mobile apps (expensive to build/maintain)
- Highly competitive market
- Camera tracking is technically challenging
- Health integrations are complex

## Thesis Fit

| Principle | Score | Notes |
|-----------|-------|-------|
| Niche clarity | ⭐⭐⭐ | Fitness enthusiasts, but crowded |
| Pain intensity | ⭐⭐⭐ | Fragmentation is annoying, not painful |
| Build simplicity | ⭐ | Mobile apps, many integrations |
| Revenue path | ⭐⭐⭐⭐ | Proven subscription model |
| AI leverage | ⭐⭐⭐⭐ | Coaching is valuable |

## Concerns

**This may violate our thesis:**
- Requires mobile apps (not web-only)
- Complex integrations
- Very competitive market
- Not simple to build or maintain

**Consider:** Is there a simpler wedge? Just AI coaching without the super-app?

## Next Steps

1. [ ] Validate pain: How frustrated are users with multiple apps?
2. [ ] Scope check: Can we build a meaningful MVP in 2 weeks?
3. [ ] Consider pivot: AI coaching only (web-based, simpler)

---

→ Back to [Ideas Index](./00-INDEX.md)
