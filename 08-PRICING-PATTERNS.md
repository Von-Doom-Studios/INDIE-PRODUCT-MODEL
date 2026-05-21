# 08 - Pricing Patterns

The pricing playbook for every product. Anchored to actual prices on photoai.com and interiorai.com — not generic SaaS advice.

**Owner:** Anthony, VD-Finance (advise)
**Related files:** [02-THESIS.md](./02-THESIS.md) | [03-LEVELSIO-TEARDOWNS.md](./03-LEVELSIO-TEARDOWNS.md)
**Last updated:** 2026-05-21

---

## Pricing Rules (Non-Negotiable)

1. **Charge from day one.** No free tier on launch. A 3-day money-back guarantee only if compute costs allow it; otherwise no refunds (Levels' model).
2. **Anchor against the human alternative on the landing page.** "$29/mo vs $500 photoshoot" not "$29/mo for 100 credits."
3. **Three or four tiers.** No more. Middle tier marked "Most Popular."
4. **Yearly plan = 5+ months free.** Drives signup-time cash and kills churn.
5. **Tier on quality, not just quantity.** "Low / Medium / High / Ultra" is Levels' pattern — and it works because the upgrade reason is qualitative, not just "more."
6. **AI compute cost ≤ 25% of revenue.** If not, raise prices or cache more aggressively. Target 80%+ gross margin once stable.

---

## Three Models We Use

### A. Credit-Based (default for AI generation tools)

Best when usage varies wildly per user (Photo AI, Interior AI, image/video gen).

**Template:**
| Tier | Price | Credits | Quality | Notes |
|---|---|---|---|---|
| Starter | $19/mo | 50 | Low | 1 model, personal use |
| Pro | $49/mo | 1,000 | Medium | 3 models, commercial license |
| Premium ⭐ | $99/mo | 3,000 | High | 10 models, video, editing |
| Ultra | $199/mo | 10,000 | Ultra | 50 models, priority, API |

Different actions cost different credits (1 photo = 1 credit, 1 video = 10 credits). Credits roll over (Levels does this).

### B. Subscription / Flat (best for SaaS-like daily-use tools)

Best when the product is used regularly and the value is "unlimited access."

**Template:**
| Tier | Price | Limit | Notes |
|---|---|---|---|
| Starter | $19/mo | 50 actions/mo | Solo |
| Pro ⭐ | $49/mo | 500 actions/mo | Most users |
| Team | $149/mo | Unlimited + 5 seats | B2B |

### C. B2B Job-Board / Directory (Remote OK pattern)

Best when one side pays and the other side uses free (job boards, marketplaces).

**Template:**
| Tier | Price | Notes |
|---|---|---|
| Single post | $299 | One-off |
| 3-pack | $799 | Save $98 |
| Annual unlimited | $2,990 | For active hiring teams |

Plus a workers-side free product (browsing, alerts) to build the audience that makes B2B paid worth it.

### D. Sub-niche B2B Plan (Interior AI pattern)

Same product, separate plan, separate landing page, separate ROI pitch.

Example from Interior AI: same engine, but the "Virtual Staging AI" plan is sold to real estate agents at $390/year with a clear ROI math ("$3,500 extra per home sold").

This is the highest-leverage pricing move. Same backend, different price + different pitch = 3–10x the LTV.

---

## Anchor Phrases We Use

Take from Photo AI's landing page math. Always show the cost of the human alternative:

| Product type | Anchor |
|---|---|
| Photo / portrait | "Professional photoshoot = $250–$1,500. This = $19/mo." |
| Interior / design | "Interior designer = $2,000–$10,000. This = $39/mo." |
| Workforce / agents | "One employee = $50K–$80K/year. This = $99/mo, runs 24/7." |
| Game master tooling | "GM prep = 5–10 hours per session. This = 15 min." |
| Real estate broker | "Broker fee = 15% of annual rent ($4,500 on a $2,500/mo place). This = $29/mo for the whole search." |

The anchor goes above the fold, near the pricing.

---

## Annual Discount Math

Monthly $29 × 12 = $348/yr
Annual $144/yr = "$12/mo" displayed
Marketing line: **"6 months free with annual"** (close to Levels' "5-6+ months free")

The annual line is what drives cash flow. Levels famously reports "monthly revenue" not strict MRR because so much is annual prepay.

---

## When to Raise Prices

- After 3 months of stable conversion → test a $5/mo bump on new signups only.
- When a free trial exists, test removing the trial entirely.
- When churn drops below 5%/mo, prices are too low.
- When churn is above 10%/mo, the product or pricing is wrong — diagnose before discounting.

## When to Lower Prices

Almost never. Better: keep price, add a cheaper-tier with restricted features. Tier down, don't price down.

---

## Refund Policy

Default: **no refunds, especially on AI generation products** (Levels' model — GPU costs are sunk).

Exceptions:
- 24-hour window if user never used a credit and asks politely.
- Stripe chargebacks fought when fraudulent, accepted when honest user error.

Make this clear at signup. One sentence above the Stripe button: "All sales final. Cancel anytime."

---

## Pricing Page Checklist

- [ ] 3–4 tiers visible
- [ ] Middle tier marked "Most Popular" (anchoring)
- [ ] Monthly / Yearly toggle. Yearly default-selected once we know it converts better.
- [ ] "Save 6 months" badge on yearly
- [ ] Human-alternative anchor above pricing
- [ ] Feature comparison row-by-row
- [ ] "All sales final. Cancel anytime." next to the buy button
- [ ] Stripe Checkout (hosted, not custom forms)
