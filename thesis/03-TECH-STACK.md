# Tech Stack

> Recommended tools, infrastructure, and patterns.

## Principles

- **Boring technology** — Proven tools over cutting-edge
- **Managed services** — Pay to not manage servers
- **Cost scales with revenue** — Usage-based pricing

## Recommended Stack

### Frontend
| Option | When to Use |
|--------|-------------|
| **Next.js + Vercel** | Default choice, great DX |
| **Plain HTML/JS** | Ultra-simple tools |
| **Remix** | When SSR matters |

### Backend
| Option | When to Use |
|--------|-------------|
| **Vercel Serverless** | Integrated with Next.js |
| **Cloudflare Workers** | Edge compute, cheap |
| **Railway** | When you need persistent servers |

### Database
| Option | When to Use |
|--------|-------------|
| **Supabase (Postgres)** | Default choice, generous free tier |
| **PlanetScale (MySQL)** | Scaling concerns |
| **SQLite + Turso** | Read-heavy, simple |
| **Redis (Upstash)** | Caching, queues |

### AI APIs
| Service | Use Case |
|---------|----------|
| **OpenAI** | Text generation, GPT-4 |
| **Anthropic** | Claude, longer context |
| **Replicate** | Image generation, open models |
| **Fal.ai** | Fast image generation |
| **ElevenLabs** | Voice synthesis |

### Payments
| Service | Notes |
|---------|-------|
| **Stripe** | Default, global |
| **Lemon Squeezy** | Handles tax/VAT |
| **Paddle** | Merchant of record |

### Auth
| Service | Notes |
|---------|-------|
| **Clerk** | Best DX, generous free tier |
| **NextAuth** | Self-hosted, flexible |
| **Supabase Auth** | If already using Supabase |

### Analytics
| Service | Notes |
|---------|-------|
| **Plausible** | Privacy-friendly, simple |
| **PostHog** | Product analytics |
| **Simple Analytics** | Ultra-minimal |

### Monitoring
| Service | Notes |
|---------|-------|
| **Sentry** | Error tracking |
| **BetterStack** | Uptime + logs |

## Anti-Patterns

❌ **Avoid:**
- Kubernetes (overkill)
- Custom auth systems (security risk)
- Training your own models (expensive, slow)
- Mobile apps at launch (double the work)
- Microservices (unnecessary complexity)

## Cost Targets

| Stage | Monthly Infra |
|-------|---------------|
| Pre-launch | $0-20 |
| 0-100 users | $20-50 |
| 100-1000 users | $50-200 |
| 1000+ users | Scale with revenue |

---

→ Next: [Monetization](./04-MONETIZATION.md) | Back: [Product Formula](./02-PRODUCT-FORMULA.md)
