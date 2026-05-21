# 05 - Premium Fitness Super-App

A premium fitness app that blends Hevy + Strava + Samsung Health + Apple Health into one unified experience. Spotify AI integration. AI training coach that watches workouts through phone camera, gives form feedback, counts reps.

**Owner:** Unassigned
**Status:** 💡 Concept
**Thesis fit:** 15 / 25
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-05-21
**Source:** Anthony's PDF, May 2026 (Section 4)

---

## Anthony's Original Notes (verbatim)

> **Premium exercise app** that blends apps like heavy, Strava and Samsung health together to create a unique experience that connects a user's fitness world.
>
> Hevy features:
> Strava features:
> Samsung and Apple health features:
> - Daily activity
> - Calorie & Nutrition tracker
> - Sleep tracker
>
> Spotify AI integration
>
> AI training coach:
> Connect to all other major features in the platform and provides training and advice based on future data.
> Can watch your workout through phone camera in training mode. Assistant gives feedback on form and motivation on reps. Also tracks your workout. Can track and tire gym session.

---

## The Core Anthony Spec'd

| Capability | Source app |
|---|---|
| Strength workout logging | Hevy |
| GPS-tracked activity (run, ride) | Strava |
| Daily activity, calories/nutrition, sleep | Apple Health / Samsung Health |
| Music | Spotify (with AI integration) |
| **AI coach that watches form, counts reps, motivates** | NEW — this is the wedge |

The AI camera coach is the unique value. Everything else is integration.

## Honest Thesis Assessment

This idea **violates two core thesis principles** as currently scoped:

1. **"Web first, no native app at launch"** — fitness apps essentially require native. Background GPS, HealthKit access, camera access, push notifications. PWA can't do this reliably.
2. **"Two weeks to MVP, or scope down"** — the integrations alone (HealthKit, Google Fit, Strava OAuth, Spotify) would take longer than two weeks before we even build the AI coach.

Score is 15 because of these violations.

**Recommendation: pivot the scope before building.**

## Proposed Pivot — The Single Wedge

Strip everything except the AI camera coach. Ship that first.

**"AI Form Coach"** — open the app, prop the phone, do your workout, AI watches, counts reps, gives form feedback, motivates. That's it. No integrations. No GPS. No nutrition.

If that works, integrations come later (and at that point, justify going native).

## The Human Service We Replace

- Personal trainer: $50–$150/hr
- Form-check sessions: $80+/session

**Anchor:** "Personal trainer = $80/session. AI Form Coach = $19/mo."

## The Core Loop (pivoted version)

1. User opens app, picks exercise (squat, deadlift, bench, etc.)
2. Props phone, hits "Start"
3. AI (MediaPipe / pose estimation) watches in real time
4. Counts reps, calls out form issues ("knees caving," "rounding back")
5. Motivational cues between sets
6. Logs the session

## MVP Scope (≤3 weeks) — pivoted

- [ ] **Mobile-responsive web with camera + WebGL** for in-browser pose estimation (MediaPipe Tasks)
- [ ] Support 5 exercises at launch (squat, deadlift, bench, OHP, row)
- [ ] Per-exercise form checks
- [ ] Rep counting
- [ ] Session log (basic, no integrations)
- [ ] Stripe paywall
- [ ] If web pose estimation isn't reliable enough → spike PWA with native-like behavior; only go native if validation justifies the build cost

## V2 (only after $5K MRR)

- [ ] Native iOS app (Capacitor wrap is fine — same codebase)
- [ ] HealthKit / Google Fit integration
- [ ] More exercises (50+)
- [ ] AI coach text/voice in real time
- [ ] Workout programs

## V3 (only after $20K MRR)

- [ ] Strava integration
- [ ] Spotify integration
- [ ] Nutrition tracking
- [ ] The "super-app" Anthony originally described

## Pricing (pivoted version)

| Tier | Price | Notes |
|---|---|---|
| Free | $0 | 3 sessions/week |
| Pro | $19/mo | Unlimited sessions, all exercises |
| Coach | $49/mo | Manage 10 clients (for personal trainers — B2B sub-niche) |

Anchor: "Trainer = $80/session. This = $19/mo."

## Tech (per [04-STACK.md](../04-STACK.md))

- Next.js PWA
- MediaPipe Tasks (in-browser pose estimation — runs on-device)
- Supabase Postgres
- Stripe
- For V2 native: Capacitor wrap of the same Next.js app

## Risks

- **Pose estimation reliability in-browser** — biggest open question. Spike this in week 1 before committing.
- **Crowded market** — Hevy, Strong, Fitbod, Whoop, dozens of fitness AI apps. Wedge has to be unique.
- **User retention** — fitness apps churn hard. Mitigation: focus on the form-coach value, not "another tracker."

## Validation Plan

- [ ] Spike MediaPipe in browser — does squat detection work reliably?
- [ ] Interview 5 lifters who lift solo at home
- [ ] Landing page demo (video of the camera coaching a real lift)
- [ ] Drive traffic from r/Fitness, r/PowerLifting, r/HomeGym
- [ ] Bar: 20 $5-deposit signups → green-light

## Thesis Fit Score (pivoted)

| Principle | Score | Notes |
|---|---|---|
| Niche clarity | 3 | Lifters lifting solo — defined but big |
| Pain intensity | 3 | Form is a real concern but not acute monthly |
| Build simplicity | 2 | Pose estimation is the wildcard |
| Revenue path | 3 | $19/mo, fitness churns |
| AI leverage | 4 | Replaces trainer form-checks |
| **Total (pivoted)** | **15** | Below threshold. Build only after #01 or #03. |

**Original scope ("super-app") would score lower (~10) and isn't recommended.**
