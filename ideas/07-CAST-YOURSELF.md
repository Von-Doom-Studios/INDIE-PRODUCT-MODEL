# 07 - Cast Yourself (working title)

**Status:** 💡 Concept — captured, not in active build queue
**Owner:** Anthony (idea), VD-Ops (catalog)
**Working domain:** castyourself.ai (not yet checked/registered)
**Captured:** 2026-05-24

---

## The Idea

A platform where users generate cinematic still frames of themselves as the lead of a movie that doesn't exist. User uploads a photo of themselves, describes the scene, picks the look, gets back a series of frames that feel like screenshots from a real film.

The product is for people who have a film idea in their head and want to see it. Directors pitching a concept. Writers visualizing a script. Hobbyists who want to live inside a movie they imagined.

## The Loop

1. **Upload** a photo of yourself (or use saved face model — shared infra with Main Character if both products ship)
2. **Describe the scene** — what's happening, where, when
3. **Camera & lighting** — wide shot / close-up / dutch angle / golden hour / neon / candlelit / etc.
4. **Production equipment** — specific cinema cameras and lenses: ARRI Alexa, RED Komodo / V-Raptor, Sony Venice, Panasonic Varicam, Zeiss Supreme Primes, Cooke S4i, anamorphic vs spherical, etc. Real gear gives real visual fingerprints (sensor look, lens character, flare behavior).
5. **Look / treatment** — genre (dystopian, romance, neo-noir, period drama), color grade (teal-orange, bleach bypass, Kodak Vision3, etc.). Named-director presets considered but may carry IP/likeness risk — deferred to research phase.
6. **Inspiration** — reference a specific film or TV series whose visual language the user wants to borrow (Blade Runner 2049, Euphoria, The Crown, Better Call Saul, etc.). This acts as a high-level style prompt that ties together camera, lighting, look, and color grade in one selection.
7. **Generate** — get a set of stills back. Pay for more.

## Saved Projects & Styles

Users can save:
- **Projects** — a named collection of stills with shared face model, scene context, and look settings. Lets a user develop a coherent "film" across many generations.
- **Styles** — a saved combination of camera + lighting + equipment + look + inspiration. Reusable across projects.

Pricing leverages this:
- Starter — limited number of saved projects and styles
- Pro — more saved projects and styles
- Premium — unlimited saved projects and styles + advanced character/scene consistency across a project

## Why It Fits the Thesis (preliminary read)

- ✅ **Visible, shareable output** — cinematic stills are extremely postable. "Trailers for movies that don't exist" is already a TikTok trend.
- ✅ **Single core loop** — same five-box loop as Photo AI, narrower output spec.
- ✅ **Creative engine advantage** — Floating Objects Studios understands cinematography. We can curate look presets that an indie hacker without film background can't.
- ✅ **Quality tiering maps cleanly** — Starter (basic stills) / Pro (4K, advanced grading, character consistency across frames) / Premium (multi-frame "scene packs," motion video, custom looks).
- ⚠️ **Anchor pricing** — replaces a film concept artist / storyboard artist ($100–$500 per frame) or a stills photographer on set. Real anchor exists but the buyer (aspiring filmmakers) is a thinner market than dating-profile-Photo-AI.
- ⚠️ **Niche definition** — needs sharpening. "Aspiring filmmakers" is broad. Possible sharper personas: indie directors raising money, screenwriters pitching, music video directors, ad creatives building moodboards.

## Open Questions for Later

1. Is the buyer the *filmmaker* (small, willing-to-pay) or the *cinephile-fan* (large, lower willingness to pay)?
2. Does "director style" presets create IP issues (Wes Anderson is a real person)? Likely safer to use *genre/film/era* presets than named directors.
3. Could this be a Pro tier of Main Character instead of a separate product? Same face-model infra, different output spec.

## Status

Captured for the catalog. Not in active development. Revisit after Main Character ships and we know whether Anthony wants product #02 to be adjacent (shared face-model infra) or fully separate.
