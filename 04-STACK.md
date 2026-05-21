# 04 - Stack: What We Build With

The default tech stack for every product in this portfolio. The rule is "use what you know" — but for consistency across the portfolio, we converge on this stack unless a product has a real reason to deviate.

**Owner:** Anthony (final call), VD-Dev (execution)
**Related files:** [02-THESIS.md](./02-THESIS.md) | [07-LAUNCH-PROCESS.md](./07-LAUNCH-PROCESS.md)
**Last updated:** 2026-05-21

---

## The Philosophy

Levels uses raw PHP because that's what he knows. The principle isn't PHP — it's: **the stack should disappear so the operator can ship daily.**

For us: a modern, hosted, boring stack. No K8s. No microservices. No custom auth. No training our own models.

---

## Default Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend / fullstack | **Next.js (App Router)** on **Vercel** | One deploy. Built-in serverless. Decent for SEO. |
| Database | **Postgres on Supabase** | Free tier is generous. Auth + storage + row-level security included. |
| Auth | **Supabase Auth** or **Clerk** if multi-tenant gets weird | Don't build auth. |
| Payments | **Stripe** | Default. Use Stripe Checkout, not custom forms. |
| AI compute | **Replicate** (image/video), **Fal.ai** (fast image), **OpenAI** (text), **Anthropic** (text, longer context), **ElevenLabs** (voice) | Pay per use. Don't host models. |
| Background jobs | **Inngest** or **Trigger.dev** | Long-running AI generations need queues. |
| File storage | **Supabase Storage** or **Cloudflare R2** | R2 if egress matters. |
| Analytics | **Plausible** (web), **PostHog** (product) | Privacy-friendly, no GDPR fire. |
| Error / uptime | **Sentry** + **BetterStack** | |
| Email (transactional) | **Resend** | Cheap, dev-friendly. |
| Domain / DNS | **Cloudflare** | Free, fast, DDoS handled. |

## Anti-Patterns — Do Not Use

- ❌ Kubernetes for anything in this portfolio
- ❌ Custom auth systems
- ❌ Training our own image/video/voice models (Replicate/Fal/ElevenLabs are good enough; cost-out later)
- ❌ Native mobile apps at launch
- ❌ Microservices
- ❌ GraphQL unless there is a specific reason
- ❌ Self-hosted databases
- ❌ TypeScript compilation steps that slow deploys below 60s

## Cost Targets by Stage

| Stage | Total infra/month |
|---|---|
| Pre-launch | $0–$50 |
| 0–100 paying users | $100–$300 (mostly AI compute) |
| 100–1,000 paying users | $500–$3,000 |
| 1,000+ paying users | Scales with revenue. Target 80%+ gross margin. |

If AI compute > 25% of revenue, raise prices or cache more aggressively.

## Deploy Discipline

- Direct to production via git push. No staging.
- Multiple deploys per day. Levels ships 100+ commits/month.
- Feature flags for risky changes (use Supabase row, not a service).
- Database migrations via Supabase SQL editor. Don't over-engineer.

## When We Deviate

A product can use a different stack if:
1. It has a specific technical requirement (real-time multiplayer → consider Cloudflare Workers + Durable Objects).
2. The builder genuinely knows another stack better and can ship faster with it.

Otherwise: this stack. Consistency across portfolio = faster builds, shared learnings.
