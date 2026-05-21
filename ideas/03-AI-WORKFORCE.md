# 03 - AI Workforce (Security + Construction)

100+ pre-trained AI workers, one-click install, built specifically for the security and construction industries. Turn one employee into a high-performing team.

**Owner:** Unassigned
**Status:** 💡 Concept
**Thesis fit:** 21 / 25
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../06-PIPELINE.md](../06-PIPELINE.md)
**Last updated:** 2026-05-21
**Source:** Anthony's PDF, May 2026 (Section 2)

---

## Anthony's Original Notes (verbatim)

> **Security and construction**
>
> AI workforce that turns one employee into a high performing team.
> 100+ Pre-Trained AI Workers. Install in One Click.
>
>  Contracts
>
> RFP's bidding
>
> Research Agent
> Scans sources, compiles insights, delivers summaries.
>
> Active
> Reporting Agent
> Generates reports from live data on schedule.
>
> Active
> Email Agent
> Drafts, sends, and follows up on communications.
>
> Active
> Sales Agent
> Qualifies leads, updates CRM, tracks pipeline.
>
> Active
> Data Agent
> Cleans, transforms, and visualizes datasets.
>
> Active
> Operations Agent
> Manages workflows, flags bottlenecks, optimizes.

---

## The Niche (specific — this is the wedge)

**Small security firms and small construction firms.** Not "small businesses" generally. Specifically these two verticals because:

1. **Fragmented industries** — thousands of small players, no dominant SaaS incumbent.
2. **High admin burden** — contracts, RFPs, bids, compliance, insurance, scheduling. Most owners spend half their week on paperwork.
3. **Not tech-native** — competition from AI tools is low.
4. **B2B revenue** — these businesses pay for time saved. ACV is much higher than consumer.
5. **Contract/RFP work** — bidding on government and commercial contracts is a specific, AI-shaped problem (read 100-page RFPs, draft compliant proposals).

The "100+ AI workers" framing is the marketing wedge but the actual MVP is 3–5 specialized agents.

## The Human Service We Replace

- Office manager / admin assistant: $40K–$60K/year
- Sales coordinator: $50K–$70K/year
- Bid manager (construction): $70K–$100K/year

**Anchor:** "One admin hire = $50K+/year. This = $299/mo, runs 24/7, never quits."

## The Core Loop

1. Owner installs an agent ("Email Agent")
2. Connects Gmail / Outlook / CRM
3. Agent observes inbox, drafts responses, schedules follow-ups, updates CRM
4. Owner reviews/approves from a single dashboard
5. Each agent has a job and a clear deliverable

## MVP Scope (≤3 weeks)

Don't ship 100 agents. Ship **3 high-value agents** for security/construction specifically:

- [ ] **Email Agent** — drafts replies to RFQs, bid invitations, vendor emails. Integrates Gmail + Outlook.
- [ ] **RFP / Bid Agent** — accepts a PDF RFP, extracts requirements, drafts a compliant response from the firm's past bids + capability statement.
- [ ] **Reporting Agent** — pulls from QuickBooks / job sites, generates weekly project status PDFs and revenue reports.
- [ ] Simple dashboard, no chat UI required — each agent is a tile with status + queue + recent actions.
- [ ] Onboarding: 15-min wizard to connect tools and answer firm-specific questions (services offered, past work, key clients).
- [ ] Stripe paywall (annual plans available with 6 months free).

## V2

- [ ] Research Agent (market scans, prospect lists)
- [ ] Sales Agent (CRM + pipeline tracking)
- [ ] Data Agent (cost analysis, margin reports)
- [ ] Operations Agent (scheduling, bottleneck detection)
- [ ] Industry preset packs ("Security Firm Starter Pack," "GC Starter Pack")
- [ ] Compliance tracker (licenses, insurance, certifications expiring)

## Pricing (B2B tier)

| Tier | Price | Agents | Seats |
|---|---|---|---|
| Starter | $99/mo | 3 agents (Email, Reporting, RFP) | 2 |
| Pro ⭐ | $299/mo | All 6 agents | 10 |
| Enterprise | Custom (target $999+/mo) | All + custom agents + priority | Unlimited |

Annual: 6 months free. This drives big cash flow on signup.

Anchor: "$50K+/year office hire vs $299/mo = saves $46,000/year."

## Tech (per [04-STACK.md](../04-STACK.md))

- Next.js + Vercel
- Supabase Postgres (multi-tenant with RLS)
- Clerk for auth (B2B needs team / SSO eventually)
- Inngest for agent scheduled runs
- Anthropic Claude (long context for RFPs) + OpenAI for general agents
- Gmail / Outlook OAuth
- QuickBooks Online API
- Stripe (annual plans default-selected at checkout)
- Puppeteer / React-PDF for report generation

## Risks

- **Integration sprawl** — every customer wants a different CRM. Mitigation: ship with 2 (HubSpot, Pipedrive). Refuse the rest until $10K MRR.
- **Industry-specific knowledge** — the RFP agent in particular needs domain training. Mitigation: build a private corpus of public RFPs and bid responses.
- **Trust gap** — these businesses are conservative. AI drafting customer emails is scary. Mitigation: "review before send" mode by default; auto-send is opt-in per agent.
- **Sales cycle** — B2B is slower than consumer. Mitigation: pricing high enough to absorb the cycle. Target 50 customers at $299 = $15K MRR.

## Validation Plan

- [ ] Interview 5 security firm owners and 5 small GC owners
- [ ] Ask specifically: "Walk me through your last RFP submission. What took the longest?"
- [ ] Landing page targeted to the verticals
- [ ] Outreach via: security industry associations (ASIS), construction trade groups (AGC chapters), LinkedIn DMs to firm owners
- [ ] Bar: 3 letters of intent from real firms → green-light build

## Why This Is a Top Pick

1. **Highest-revenue path in the portfolio.** B2B + $299/mo = 30 customers to $9K MRR.
2. **The niche is real.** Security + construction = a clear vertical with shared pain (RFPs, compliance, admin).
3. **Aligns with VonDoom's existing client work.** We already write proposals, do design, build websites. We understand small B2B operators.
4. **Defensible long-term** — once we have 100 firms on the platform, the RFP/bid corpus alone is a moat.

## Thesis Fit Score

| Principle | Score | Notes |
|---|---|---|
| Niche clarity | 5 | Security + construction firms specifically |
| Pain intensity | 4 | Admin burden is real, RFPs are painful |
| Build simplicity | 2 | Integrations + agent reliability is real work |
| Revenue path | 5 | B2B, $99–$999+/mo, annual prepay |
| AI leverage | 5 | Replaces a $50K hire |
| **Total** | **21** | Tied for top pick |
