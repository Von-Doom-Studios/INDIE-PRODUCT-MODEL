# 01 - Getting Started: Medicaid 1115 Platform

A marketplace connecting local NYC grocers with Medicaid enrollees for food delivery funded under the NY State Medicaid Section 1115 waiver's social care benefits. Mercato-style storefront and fulfillment, waiver-compliant eligibility and billing underneath.

**Owner:** Anthony (product)
**Status:** 🆕 Setup — awaiting context from Anthony
**Related files:** [../02-THESIS.md](../02-THESIS.md) | [../05-IDEAS.md](../05-IDEAS.md) | [../06-PIPELINE.md](../06-PIPELINE.md) | [../04-STACK.md](../04-STACK.md)
**Last updated:** 2026-07-22

---

## What This Folder Is

The working folder for **Medicaid 1115 Platform**. Unlike the other products in this portfolio, it does not descend from an entry in [../ideas/](../ideas/) — it originated directly from Anthony and needs a catalog entry and thesis-fit score added (see Open below).

**The shape of it, as understood today:**

- **Two-sided marketplace.** Local grocers and bodegas on the supply side; Medicaid enrollees with an approved social-care need on the demand side.
- **The buyer is not the eater.** Food is paid for through the 1115 waiver — via Social Care Networks / managed care plans — not out of the enrollee's pocket. That makes this closer to B2B2C healthcare billing than to consumer grocery delivery, whatever the storefront looks like.
- **Mercato is the UX reference,** not the business model. Mercato is a consumer checkout over independent grocers. Here the checkout is an eligibility-and-authorization flow that happens to look like a cart.

Everything above is a working assumption until Anthony's context lands. Nothing here is validated.

## Folder Map

| File | Purpose |
|---|---|
| `01-GETTING-STARTED.md` | This file. Entry point and folder map. |

Files 02+ get added once Anthony provides project context. Numbering follows the [agent-guides FOLDER-STRUCTURE](https://github.com/Von-Doom-Studios/agent-guides/blob/main/01-FOLDER-STRUCTURE.md) layers: orientation → strategy → execution → growth/measurement.

Likely additions once context lands: strategy, the reimbursement/unit-economics model, the regulatory-and-compliance file (this product needs one that the other portfolio products do not), grocer supply-side operations, and the enrollee-facing product spec.

## Ground Rules

- This folder follows the agent-guides folder standard: numbered `NN-SCREAMING-KEBAB.md` files, header block on every file (owner, related files, last updated), cross-links everywhere.
- The portfolio thesis in [../02-THESIS.md](../02-THESIS.md) governs. **This product strains several thesis rules** — regulated market, long enterprise sales cycle, two-sided supply problem, no charge-from-day-one consumer. Those deviations get named and argued explicitly in the strategy file, not assumed away.
- Catalog scoring and pipeline status live in [../05-IDEAS.md](../05-IDEAS.md) and [../06-PIPELINE.md](../06-PIPELINE.md). Update those when this product's status changes — do not fork status tracking into this folder.
- Nothing advances to 🚧 Building without clearing the validation bar in [../06-PIPELINE.md](../06-PIPELINE.md).
- **No PHI in this repo.** Not in examples, not in test fixtures, not in screenshots. Any handling of enrollee data gets designed in the compliance file before it gets built.

## Open

- [ ] Anthony to provide project context → expand into files 02+
- [ ] Add catalog entry in [../ideas/](../ideas/) and score against the thesis; register in [../05-IDEAS.md](../05-IDEAS.md) and [../06-PIPELINE.md](../06-PIPELINE.md)
- [ ] Confirm who actually pays and who contracts: Social Care Network, managed care plan, or state directly
- [ ] Confirm scope: build the platform, or become a contracted provider running on it
- [ ] Name / domain decision
