# Mazeget Promo Video — Design Spec
**Date:** 2026-05-09
**Tool:** HyperFrames (HTML → video)

---

## Goal

Create a 40-second promo video to play in the hero section of mazeget.com. It should immediately impress visiting families and show the full range of event presentations mazeget produces.

---

## Decisions Made

| Question | Answer |
|---|---|
| Platform | Website Hero (16:9, 1920×1080) |
| Mood | Energetic & Celebratory |
| Categories shown | All: בר מצווה, בת מצווה, ימי הולדת |
| Content type | Hybrid — motion graphics + real event thumbnails |
| Main tagline | "תעשו וואו לאורחים שלכם" |
| Language | Hebrew RTL throughout |

---

## Scene Structure

### Scene 1 — Intro (0:00–0:04, 4s)
- Background: deep purple gradient (`#1e0a4a → #4c1d95 → #7c3aed`)
- Mazeget logo fades in, centered
- Tagline slides up: **"תעשו וואו לאורחים שלכם"** in white
- Font: Secular One
- Transition into Scene 2

### Scene 2 — בר מצווה (0:04–0:12, 8s)
- Background: light purple (`#ede9fe`)
- Category title animates in: **"💜 בר מצווה"** in `#6d28d9`
- 3 real Vimeo thumbnails slide in from the right, staggered
- Fast exit transition into Scene 3

### Scene 3 — בת מצווה (0:12–0:20, 8s)
- Background: light pink (`#fdf2f8`)
- Category title: **"🩷 בת מצווה"** in `#BE185D`
- 3 real Vimeo thumbnails slide in from the right, staggered
- Fast exit transition into Scene 4

### Scene 4 — ימי הולדת (0:20–0:28, 8s)
- Background: light orange/yellow (`#fffbeb`)
- Category title: **"🎂 ימי הולדת"** in `#D97706`
- 3 real Vimeo thumbnails slide in from the right, staggered
- Fast exit transition into Scene 5

### Scene 5 — Energy Burst (0:28–0:34, 6s)
- Background: full-color gradient (purple → pink → orange, all brand colors)
- All 9 thumbnails flash rapidly in sequence — fast cuts, maximum energy
- No text overlays — pure visual impact

### Scene 6 — Outro (0:34–0:40, 6s)
- Background: dark purple (`#1e0a4a → #4c1d95`)
- Mazeget logo fades in
- URL: **mazeget.com** in light purple
- CTA button: **"צרו קשר עכשיו ←"** in purple button style
- Fades to black

---

## Visual Design

| Property | Value |
|---|---|
| Dimensions | 1920 × 1080 px |
| Duration | ~40 seconds |
| Primary font | Secular One (headings) |
| Secondary font | Heebo (body/labels) |
| Purple | `#6d28d9` / `#4c1d95` / `#1e0a4a` |
| Pink | `#BE185D` / `#db2777` |
| Orange | `#D97706` / `#f59e0b` |
| Text | White on dark, dark brand color on light |
| Direction | RTL (Hebrew) |

---

## Assets Required

- **9 thumbnail images** — 3 per category, sourced from Vimeo
  - בר מצווה: 3 thumbnails from `vimeo.com/user87921799` or `user142276599`
  - בת מצווה: 3 thumbnails from `vimeo.com/user87954991` or similar
  - ימי הולדת: 3 thumbnails from `vimeo.com/user138830134` or similar
- **Logo file:** `public/logo-matzget.png` (already in project)
- **Background music:** out of scope for now — video will be built silent first, music added in a later phase

---

## Technical Notes

- Built with HyperFrames as a single `index.html` composition
- Animations via GSAP (already part of HyperFrames)
- Thumbnails stored locally in a `promo-video/assets/` folder
- Output: MP4 file via `npx hyperframes render`
- Placed as the hero video on the mazeget homepage

---

## Out of Scope

- Social media cuts (Instagram/TikTok vertical versions) — future phase
- WhatsApp share version — future phase
- Music selection and audio sync — can be added after visual is approved
