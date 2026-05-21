# 02 - Thesis: The North Star

The single guiding document for every product in this portfolio. Built from real teardowns of [@levelsio](https://x.com/levelsio)'s live, profitable products — not generic indie advice.

**Owner:** Anthony
**Related files:** [03-LEVELSIO-TEARDOWNS.md](./03-LEVELSIO-TEARDOWNS.md) | [04-STACK.md](./04-STACK.md) | [08-PRICING-PATTERNS.md](./08-PRICING-PATTERNS.md)
**Last updated:** 2026-05-21

---

## What We Are Copying

We are copying the **structure**, not the brand. Levels' approach has four legs. Every product we ship must stand on all four.

1. **One operator** — Solo build, solo run, no team. He built Photo AI to $132K+/mo with zero employees.
2. **Niche replacement of an expensive human service** — Photographer ($250–$1,500/shoot) → Photo AI. Interior designer ($2K–$10K) → Interior AI. Recruiter/job board → Remote OK. The price anchor is always a human you'd otherwise hire.
3. **Charge from day one** — No free-tier-first. No audience-building-first. Stripe live before the launch tweet.
4. **Ship in public** — Revenue screenshots. Daily updates. Controversial tech opinions. The audience IS the distribution.

What we are not copying: his Twitter following. He had 350K+ followers when Photo AI launched. We don't. Our distribution math has to account for that — see Section 6.

---

## Our 10 Principles

### 1. Niche over broad
Pick one audience with one acute pain. "AI headshots for dating profiles" beats "AI photo editor." The narrower the wedge, the easier the marketing.

### 2. Replace a human, anchor the price against them
Every product must be a 10x–100x discount against an existing professional service. Photographer = $500. Photo AI = $19/mo. Interior designer = $5,000. Interior AI = $39/mo. The pitch writes itself.

### 3. Single core loop
One input → AI processes → one output → user pays. If you can't draw the loop in five boxes, scope down. Photo AI: upload selfies → train model → generate photos → pay for more credits. That's it.

### 4. Visible, shareable output
The product must produce something the user wants to post. Photos. Interior renders. Game clips. Job listings. The output is the marketing engine.

### 5. Boring stack, fast deploys
See [04-STACK.md](./04-STACK.md). Levels ships 100+ git commits a month with raw PHP + SQLite on a $40 VPS. We use a modern stack but follow the same rule: ship daily, deploy direct, no staging theater.

### 6. Web first, no native app at launch
Levels lost Avatar AI to Lensa because Lensa shipped a mobile app. He learned: web is fine if your product isn't a daily-use consumer toy. Mobile apps come after revenue, never before.

### 7. Paywall on launch
No free tier on day one. Paywall everything except a demo. Free users are noise. Paying customers are signal. Once revenue is proven, a thin free tier can be added for funnel.

### 8. Two weeks to MVP, or kill the scope
If the simplest version takes longer than two weeks, it's the wrong scope. Cut features, not corners. Levels' first Photo AI output was "so bad" by his own admission. It still made $5.4K MRR in week one.

### 9. Build in public, even without an audience
Post the build. Post the bugs. Post the revenue (even if it's $9). The audience compounds. We don't have a 600K follower head start — we earn one tweet at a time.

### 10. Monthly revenue is the only KPI that matters
Not signups. Not page views. Not feature count. MRR. Every decision is judged by whether it moves MRR up next month.

---

## What "A Good Product Idea" Looks Like in This Portfolio

Use this filter on every idea in [05-IDEAS.md](./05-IDEAS.md):

| Question | What we want |
|---|---|
| Who is the specific user? | A defined persona we can describe in one sentence |
| What human service does it replace? | A profession or paid service with a known cost |
| What is the single input → output loop? | One input, one output, payable |
| Can it be built in 2 weeks solo? | Yes |
| Can it be run by one person forever? | Yes |
| Is the output shareable? | Yes |
| Will anyone pay $20+/mo for it on day one? | Yes |

If any answer is no, scope down or kill the idea.

---

## What We Are Building Differently From Levels

We are not pretending to be him. Three places we deviate intentionally:

1. **We don't have a 600K Twitter following.** So our launch tactic isn't "tweet to my followers." It's: niche communities first (subreddits, niche Discords, professional forums), then content (YouTube demos, TikTok before/afters), then paid ads with strict CAC limits. See [07-LAUNCH-PROCESS.md](./07-LAUNCH-PROCESS.md).
2. **We use a modern stack** (Next.js, Postgres, hosted infra) because we know it. The principle is "use what you know," not "use PHP." Detail in [04-STACK.md](./04-STACK.md).
3. **We have a creative engine** (Floating Objects Studios, VonDoom Creative). For visual-output products we have an unfair advantage Levels doesn't — we can produce assets, design, and animation in-house.

---

## What "Done" Looks Like For The Portfolio

Three milestones, in order:

| Milestone | Target |
|---|---|
| **First product profitable** | $5K MRR — covers a person's living costs solo |
| **Two products profitable** | $15K MRR combined — portfolio is real |
| **Five products profitable** | $50K+ MRR combined — VonDoom indie arm is meaningful revenue |

We don't add product #2 until product #1 is at $5K MRR. We don't add #3 until #1 + #2 are stable. Discipline over breadth.
