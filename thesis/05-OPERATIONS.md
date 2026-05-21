# Operations

> Running products with minimal overhead.

## Principle: Automate Everything

If you do something more than 3 times, automate it.

## Support

### Tier 1: Self-Service (Goal: 80%+ of issues)
- **FAQ page** — Answer common questions before they're asked
- **In-app guidance** — Tooltips, onboarding flows
- **Status page** — "Is it down?" answered automatically
- **Error messages** — Helpful, specific, actionable

### Tier 2: Automated Response
- **Email templates** — Pre-written responses for common issues
- **AI chatbot** — Handle simple queries (Intercom, Crisp)
- **Canned responses** — Keyboard shortcuts for repeat answers

### Tier 3: Human (Last Resort)
- **Time-boxed** — Check support 2x/day max
- **Batch process** — Handle all tickets at once
- **Template library** — Respond, then templatize for next time

## Monitoring

### Must-Have
| What | Tool | Why |
|------|------|-----|
| Uptime | BetterStack | Know before users do |
| Errors | Sentry | Catch exceptions |
| Revenue | Stripe Dashboard | Daily check |

### Nice-to-Have
| What | Tool | Why |
|------|------|-----|
| Usage | PostHog | Understand behavior |
| Performance | Vercel Analytics | Load times |

### Daily Routine (15 min max)
1. Check uptime (1 min)
2. Check revenue (1 min)
3. Scan errors (5 min)
4. Process support queue (8 min)

## Maintenance

### Weekly
- Review error trends
- Check API costs
- Backup critical data

### Monthly
- Update dependencies (security)
- Review pricing vs. costs
- Prune unused features

### Quarterly
- Review product roadmap
- Assess competition
- Consider price adjustments

## Scaling Triggers

**Add automation when:**
- Support takes >1 hour/day
- Same question asked 5+ times
- Manual process happens daily

**Consider help when:**
- Can't take vacation without product issues
- Support overwhelms core work
- Revenue justifies it ($10K+ MRR)

## Cost Management

### Watch These
- AI API costs (can spike unexpectedly)
- Bandwidth (video/image heavy products)
- Database size

### Control Levers
- Rate limiting
- Compression
- Caching
- Usage caps

---

→ Next: [Case Studies](./06-CASE-STUDIES.md) | Back: [Monetization](./04-MONETIZATION.md)
