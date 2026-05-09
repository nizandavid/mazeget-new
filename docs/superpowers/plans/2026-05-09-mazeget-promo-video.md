# Mazeget Promo Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 40-second branded promo video for the mazeget.com homepage hero section using HyperFrames.

**Architecture:** A single `index.html` HyperFrames composition with 6 scenes (Intro → בר מצווה → בת מצווה → ימי הולדת → Energy Burst → Outro) and 5 black-flash transitions between them. Each category scene shows the brand color + 3 real Vimeo thumbnail images. GSAP animates all entrances. The composition is rendered to an MP4 file.

**Tech Stack:** HyperFrames (npx), GSAP 3.14.2 (CDN), HTML/CSS, Node.js 18+

---

## File Structure

```
new mazeget/
  promo-video/
    index.html          ← main HyperFrames composition (created in Tasks 3–8)
    assets/
      logo-matzget.png  ← copied from public/logo-matzget.png (Task 1)
      bar-1.jpg         ← bar mitzvah thumbnails (Task 2)
      bar-2.jpg
      bar-3.jpg
      bat-1.jpg         ← bat mitzvah thumbnails (Task 2)
      bat-2.jpg
      bat-3.jpg
      bday-1.jpg        ← birthday thumbnails (Task 2)
      bday-2.jpg
      bday-3.jpg
  public/
    mazeget-promo.mp4   ← final rendered video (Task 9), added here for Astro
```

---

## Task 1: Set up the project folder

**Files:**
- Create: `promo-video/assets/` (directory)
- Copy: `public/logo-matzget.png` → `promo-video/assets/logo-matzget.png`

- [ ] **Step 1: Create the project folder and copy the logo**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
mkdir -p promo-video/assets
cp public/logo-matzget.png promo-video/assets/logo-matzget.png
```

Expected: No errors. The file `promo-video/assets/logo-matzget.png` now exists.

- [ ] **Step 2: Verify HyperFrames is available**

```bash
npx hyperframes --version
```

Expected: A version number printed (e.g. `1.x.x`). If you see an error, run `npm install -g hyperframes` first.

- [ ] **Step 3: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/
git commit -m "feat: add promo-video project folder"
```

---

## Task 2: Collect 9 thumbnail images from Vimeo

**Files:**
- Create: `promo-video/assets/bar-1.jpg`, `bar-2.jpg`, `bar-3.jpg`
- Create: `promo-video/assets/bat-1.jpg`, `bat-2.jpg`, `bat-3.jpg`
- Create: `promo-video/assets/bday-1.jpg`, `bday-2.jpg`, `bday-3.jpg`

> **Note for David (beginner-friendly):** This task is manual — no code required. You are picking real images from your Vimeo accounts to use in the video.

- [ ] **Step 1: Download bar mitzvah thumbnails (3 images)**

  1. Open https://vimeo.com/user87921799 (or user142276599) in your browser
  2. Pick 3 videos you like — ones with visually strong thumbnail images
  3. For each video: right-click the thumbnail image → "Save image as"
  4. Save them as `bar-1.jpg`, `bar-2.jpg`, `bar-3.jpg` inside `promo-video/assets/`

- [ ] **Step 2: Download bat mitzvah thumbnails (3 images)**

  1. Open https://vimeo.com/user87954991
  2. Same process — save as `bat-1.jpg`, `bat-2.jpg`, `bat-3.jpg`

- [ ] **Step 3: Download birthday thumbnails (3 images)**

  1. Open https://vimeo.com/user138830134
  2. Same process — save as `bday-1.jpg`, `bday-2.jpg`, `bday-3.jpg`

- [ ] **Step 4: Verify all 9 images are in place**

```bash
ls "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/promo-video/assets/"
```

Expected output (12 files):
```
bar-1.jpg   bar-2.jpg   bar-3.jpg
bat-1.jpg   bat-2.jpg   bat-3.jpg
bday-1.jpg  bday-2.jpg  bday-3.jpg
logo-matzget.png
```

---

## Task 3: Write index.html — scene skeleton

Build the bare HTML structure with all 6 scenes and 5 transitions, no styling or animation yet. Run lint to verify the structure is valid.

**Files:**
- Create: `promo-video/index.html`

- [ ] **Step 1: Write the skeleton**

Create `promo-video/index.html` with this exact content:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <div data-composition-id="mazeget-promo" data-width="1920" data-height="1080">

    <!-- Scene 1: Intro (0–4.5s) -->
    <div id="s1" data-start="0" data-duration="4.5" data-track-index="0"></div>

    <!-- Transition 1 (4.0–5.0s) -->
    <div id="t1" data-start="4.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 2: Bar Mitzvah (4.5–12.5s) -->
    <div id="s2" data-start="4.5" data-duration="8" data-track-index="0"></div>

    <!-- Transition 2 (12.0–13.0s) -->
    <div id="t2" data-start="12.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 3: Bat Mitzvah (12.5–20.5s) -->
    <div id="s3" data-start="12.5" data-duration="8" data-track-index="0"></div>

    <!-- Transition 3 (20.0–21.0s) -->
    <div id="t3" data-start="20.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 4: Birthdays (20.5–28.5s) -->
    <div id="s4" data-start="20.5" data-duration="8" data-track-index="0"></div>

    <!-- Transition 4 (28.0–29.0s) -->
    <div id="t4" data-start="28.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 5: Energy Burst (28.5–34.5s) -->
    <div id="s5" data-start="28.5" data-duration="6" data-track-index="0"></div>

    <!-- Transition 5 (34.0–35.0s) -->
    <div id="t5" data-start="34.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 6: Outro (34.5–40.5s) -->
    <div id="s6" data-start="34.5" data-duration="6" data-track-index="0"></div>

    <style></style>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      window.__timelines["mazeget-promo"] = tl;
    </script>
  </div>
</body>
</html>
```

- [ ] **Step 2: Run lint to verify the structure**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/promo-video"
npx hyperframes lint
```

Expected: `✅ No errors` or similar. Fix any errors before continuing.

- [ ] **Step 3: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/index.html
git commit -m "feat: add promo video skeleton with 6 scenes"
```

---

## Task 4: Add HTML content and CSS

Fill in each scene div with its content (logo, text, images) and add all CSS.

**Files:**
- Modify: `promo-video/index.html`

- [ ] **Step 1: Replace the empty scene divs and `<style>` block**

Replace the entire `promo-video/index.html` with this complete version:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <div data-composition-id="mazeget-promo" data-width="1920" data-height="1080">

    <!-- Scene 1: Intro (0–4.5s) -->
    <div id="s1" data-start="0" data-duration="4.5" data-track-index="0">
      <div class="scene-content intro-content">
        <img class="intro-logo" src="assets/logo-matzget.png" alt="Mazeget">
        <p class="intro-tagline">תעשו וואו לאורחים שלכם</p>
      </div>
    </div>

    <!-- Transition 1 (4.0–5.0s) -->
    <div id="t1" class="flash" data-start="4.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 2: Bar Mitzvah (4.5–12.5s) -->
    <div id="s2" class="cat-scene" data-start="4.5" data-duration="8" data-track-index="0">
      <div class="scene-content cat-content">
        <div class="cat-header">
          <span class="cat-emoji">💜</span>
          <h2 class="cat-title bar-title">בר מצווה</h2>
        </div>
        <div class="thumbs-row">
          <img class="thumb" src="assets/bar-1.jpg" alt="">
          <img class="thumb" src="assets/bar-2.jpg" alt="">
          <img class="thumb" src="assets/bar-3.jpg" alt="">
        </div>
      </div>
    </div>

    <!-- Transition 2 (12.0–13.0s) -->
    <div id="t2" class="flash" data-start="12.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 3: Bat Mitzvah (12.5–20.5s) -->
    <div id="s3" class="cat-scene" data-start="12.5" data-duration="8" data-track-index="0">
      <div class="scene-content cat-content">
        <div class="cat-header">
          <span class="cat-emoji">🩷</span>
          <h2 class="cat-title bat-title">בת מצווה</h2>
        </div>
        <div class="thumbs-row">
          <img class="thumb" src="assets/bat-1.jpg" alt="">
          <img class="thumb" src="assets/bat-2.jpg" alt="">
          <img class="thumb" src="assets/bat-3.jpg" alt="">
        </div>
      </div>
    </div>

    <!-- Transition 3 (20.0–21.0s) -->
    <div id="t3" class="flash" data-start="20.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 4: Birthdays (20.5–28.5s) -->
    <div id="s4" class="cat-scene" data-start="20.5" data-duration="8" data-track-index="0">
      <div class="scene-content cat-content">
        <div class="cat-header">
          <span class="cat-emoji">🎂</span>
          <h2 class="cat-title bday-title">ימי הולדת</h2>
        </div>
        <div class="thumbs-row">
          <img class="thumb" src="assets/bday-1.jpg" alt="">
          <img class="thumb" src="assets/bday-2.jpg" alt="">
          <img class="thumb" src="assets/bday-3.jpg" alt="">
        </div>
      </div>
    </div>

    <!-- Transition 4 (28.0–29.0s) -->
    <div id="t4" class="flash" data-start="28.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 5: Energy Burst (28.5–34.5s) -->
    <div id="s5" data-start="28.5" data-duration="6" data-track-index="0">
      <div class="scene-content burst-content">
        <img class="burst-thumb" src="assets/bar-1.jpg" alt="">
        <img class="burst-thumb" src="assets/bat-1.jpg" alt="">
        <img class="burst-thumb" src="assets/bday-1.jpg" alt="">
        <img class="burst-thumb" src="assets/bar-2.jpg" alt="">
        <img class="burst-thumb" src="assets/bat-2.jpg" alt="">
        <img class="burst-thumb" src="assets/bday-2.jpg" alt="">
        <img class="burst-thumb" src="assets/bar-3.jpg" alt="">
        <img class="burst-thumb" src="assets/bat-3.jpg" alt="">
        <img class="burst-thumb" src="assets/bday-3.jpg" alt="">
      </div>
    </div>

    <!-- Transition 5 (34.0–35.0s) -->
    <div id="t5" class="flash" data-start="34.0" data-duration="1.0" data-track-index="1"></div>

    <!-- Scene 6: Outro (34.5–40.5s) -->
    <div id="s6" data-start="34.5" data-duration="6" data-track-index="0">
      <div class="scene-content outro-content">
        <img class="outro-logo" src="assets/logo-matzget.png" alt="Mazeget">
        <p class="outro-url">mazeget.com</p>
        <div class="outro-cta">צרו קשר עכשיו ←</div>
      </div>
    </div>

    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }

      [data-composition-id="mazeget-promo"] {
        font-family: 'Heebo', sans-serif;
        direction: rtl;
      }

      /* Shared scene layout */
      .scene-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px 120px;
      }

      /* --- Scene 1: Intro --- */
      #s1 { background: linear-gradient(135deg, #1e0a4a 0%, #4c1d95 50%, #7c3aed 100%); }
      .intro-content { flex-direction: column; gap: 36px; }
      .intro-logo { height: 110px; object-fit: contain; }
      .intro-tagline {
        font-family: 'Secular One', sans-serif;
        font-size: 80px;
        color: white;
        text-align: center;
        text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
        max-width: 1400px;
      }

      /* --- Transition flash overlay --- */
      .flash { background: #000; width: 100%; height: 100%; }

      /* --- Category scenes (shared) --- */
      #s2 { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
      #s3 { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }
      #s4 { background: linear-gradient(135deg, #fffbeb, #fef3c7); }

      .cat-content {
        flex-direction: column;
        gap: 40px;
        justify-content: center;
      }

      .cat-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 24px;
      }
      .cat-emoji { font-size: 88px; line-height: 1; }
      .cat-title {
        font-family: 'Secular One', sans-serif;
        font-size: 100px;
        line-height: 1.1;
        text-align: center;
      }
      .bar-title { color: #4c1d95; }
      .bat-title { color: #9d174d; }
      .bday-title { color: #92400e; }

      .thumbs-row {
        display: flex;
        flex-direction: row;
        gap: 18px;
        width: 100%;
      }
      .thumb {
        flex: 1;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 14px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      }

      /* --- Scene 5: Energy Burst --- */
      #s5 { background: linear-gradient(135deg, #1e0a4a, #4c1d95); }
      .burst-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 14px;
        padding: 40px;
        align-items: stretch;
      }
      .burst-thumb {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
      }

      /* --- Scene 6: Outro --- */
      #s6 { background: linear-gradient(135deg, #1e0a4a, #4c1d95); }
      .outro-content { flex-direction: column; gap: 28px; }
      .outro-logo { height: 90px; object-fit: contain; }
      .outro-url {
        font-family: 'Heebo', sans-serif;
        font-size: 52px;
        color: #c4b5fd;
        letter-spacing: 2px;
      }
      .outro-cta {
        font-family: 'Secular One', sans-serif;
        font-size: 44px;
        color: white;
        background: #7c3aed;
        padding: 22px 64px;
        border-radius: 50px;
        box-shadow: 0 8px 32px rgba(124, 58, 237, 0.5);
      }
    </style>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      window.__timelines["mazeget-promo"] = tl;
    </script>
  </div>
</body>
</html>
```

- [ ] **Step 2: Preview to check the static layout**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/promo-video"
npx hyperframes preview
```

Open the URL it gives you in your browser. Use the timeline scrubber to jump to each scene time and check that:
- t=0: Dark purple background (even though it's empty of animations)
- t=5: Purple background, "בר מצווה" category title visible, 3 thumbnails visible
- t=13: Pink background, "בת מצווה" visible
- t=21: Yellow/orange background, "ימי הולדת" visible
- t=29: Dark background, 3×3 grid of thumbnails
- t=35: Dark purple background, logo + URL + CTA button visible

- [ ] **Step 3: Run validate to check contrast**

```bash
npx hyperframes validate
```

Expected: Passes or shows contrast warnings. If warnings appear on the intro/outro (white text on dark purple), they should pass — if not, increase font brightness toward pure white.

- [ ] **Step 4: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/index.html
git commit -m "feat: add promo video scenes with content and CSS"
```

---

## Task 5: Add GSAP animations — transitions + Scene 1 + Scene 6

**Files:**
- Modify: `promo-video/index.html` (the `<script>` block at the bottom)

- [ ] **Step 1: Replace the empty `<script>` block with this**

Find this in index.html:
```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      window.__timelines["mazeget-promo"] = tl;
    </script>
```

Replace it with:
```html
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });

      // --- Transition flashes ---
      tl.fromTo("#t1", { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.in" }, 4.0);
      tl.to("#t1", { opacity: 0, duration: 0.25, ease: "power2.out" }, 4.75);

      tl.fromTo("#t2", { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.in" }, 12.0);
      tl.to("#t2", { opacity: 0, duration: 0.25, ease: "power2.out" }, 12.75);

      tl.fromTo("#t3", { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.in" }, 20.0);
      tl.to("#t3", { opacity: 0, duration: 0.25, ease: "power2.out" }, 20.75);

      tl.fromTo("#t4", { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.in" }, 28.0);
      tl.to("#t4", { opacity: 0, duration: 0.25, ease: "power2.out" }, 28.75);

      tl.fromTo("#t5", { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.in" }, 34.0);
      tl.to("#t5", { opacity: 0, duration: 0.25, ease: "power2.out" }, 34.75);

      // --- Scene 1: Intro ---
      tl.from("#s1 .intro-logo", { opacity: 0, scale: 0.82, duration: 1.0, ease: "power3.out" }, 0.3);
      tl.from("#s1 .intro-tagline", { y: 55, opacity: 0, duration: 0.9, ease: "expo.out" }, 0.9);

      // --- Scene 6: Outro ---
      tl.from("#s6 .outro-logo", { opacity: 0, scale: 0.82, duration: 1.0, ease: "power3.out" }, 35.0);
      tl.from("#s6 .outro-url", { y: 35, opacity: 0, duration: 0.7, ease: "expo.out" }, 35.6);
      tl.from("#s6 .outro-cta", { y: 30, opacity: 0, scale: 0.88, duration: 0.7, ease: "back.out(1.7)" }, 36.2);
      tl.to("#s6", { opacity: 0, duration: 0.9, ease: "power2.in" }, 39.5);

      window.__timelines["mazeget-promo"] = tl;
    </script>
```

- [ ] **Step 2: Preview and check Scene 1 and Scene 6**

```bash
npx hyperframes preview
```

- Scrub to t=0: logo should animate in, then tagline slides up
- Scrub to t=35: logo fades in, URL appears, CTA button bounces in
- Scrub to t=39.5: everything fades to black

- [ ] **Step 3: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/index.html
git commit -m "feat: add intro, outro and transition animations"
```

---

## Task 6: Add GSAP animations — Category Scenes 2, 3, 4

**Files:**
- Modify: `promo-video/index.html` (add to the `<script>` block, before the `window.__timelines` line)

- [ ] **Step 1: Add category scene animations**

Inside the `<script>` block, directly before `window.__timelines["mazeget-promo"] = tl;`, add:

```js
      // --- Scene 2: Bar Mitzvah (starts at 4.5s) ---
      tl.from("#s2 .cat-emoji",                      { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, 5.0);
      tl.from("#s2 .cat-title",                      { y: -40, opacity: 0, duration: 0.6, ease: "power3.out" }, 5.3);
      tl.from("#s2 .thumbs-row .thumb:nth-child(1)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 5.6);
      tl.from("#s2 .thumbs-row .thumb:nth-child(2)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 5.85);
      tl.from("#s2 .thumbs-row .thumb:nth-child(3)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 6.1);

      // --- Scene 3: Bat Mitzvah (starts at 12.5s) ---
      tl.from("#s3 .cat-emoji",                      { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, 13.0);
      tl.from("#s3 .cat-title",                      { y: -40, opacity: 0, duration: 0.6, ease: "power3.out" }, 13.3);
      tl.from("#s3 .thumbs-row .thumb:nth-child(1)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 13.6);
      tl.from("#s3 .thumbs-row .thumb:nth-child(2)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 13.85);
      tl.from("#s3 .thumbs-row .thumb:nth-child(3)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 14.1);

      // --- Scene 4: Birthdays (starts at 20.5s) ---
      tl.from("#s4 .cat-emoji",                      { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, 21.0);
      tl.from("#s4 .cat-title",                      { y: -40, opacity: 0, duration: 0.6, ease: "power3.out" }, 21.3);
      tl.from("#s4 .thumbs-row .thumb:nth-child(1)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 21.6);
      tl.from("#s4 .thumbs-row .thumb:nth-child(2)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 21.85);
      tl.from("#s4 .thumbs-row .thumb:nth-child(3)", { y: 60, opacity: 0, duration: 0.5, ease: "power2.out" }, 22.1);
```

- [ ] **Step 2: Preview and check all 3 category scenes**

```bash
npx hyperframes preview
```

- Scrub to t=5: emoji pops in, title slides from right, 3 thumbnails slide in staggered
- Scrub to t=13: same pattern in pink
- Scrub to t=21: same pattern in orange/yellow

- [ ] **Step 3: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/index.html
git commit -m "feat: add category scene animations (bar/bat/birthday)"
```

---

## Task 7: Add GSAP animations — Energy Burst (Scene 5)

**Files:**
- Modify: `promo-video/index.html` (add to the `<script>` block)

- [ ] **Step 1: Add the energy burst animations**

Inside the `<script>` block, directly before `window.__timelines["mazeget-promo"] = tl;`, add:

```js
      // --- Scene 5: Energy Burst (starts at 28.5s) ---
      // 9 thumbnails pop in rapidly in a 3x3 grid — row by row
      tl.from("#s5 .burst-thumb:nth-child(1)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 29.1);
      tl.from("#s5 .burst-thumb:nth-child(2)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 29.3);
      tl.from("#s5 .burst-thumb:nth-child(3)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 29.5);
      tl.from("#s5 .burst-thumb:nth-child(4)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 29.7);
      tl.from("#s5 .burst-thumb:nth-child(5)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 29.9);
      tl.from("#s5 .burst-thumb:nth-child(6)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 30.1);
      tl.from("#s5 .burst-thumb:nth-child(7)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 30.3);
      tl.from("#s5 .burst-thumb:nth-child(8)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 30.5);
      tl.from("#s5 .burst-thumb:nth-child(9)", { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, 30.7);
```

- [ ] **Step 2: Preview and check Scene 5**

```bash
npx hyperframes preview
```

Scrub to t=29: thumbnails should pop in one by one in a 3×3 grid, all visible by t=31, filling the dark screen with energy.

- [ ] **Step 3: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/index.html
git commit -m "feat: add energy burst scene animations"
```

---

## Task 8: Lint, validate, and inspect

Full quality pass before rendering.

**Files:**
- Modify: `promo-video/index.html` (fix any issues found)

- [ ] **Step 1: Run lint**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/promo-video"
npx hyperframes lint
```

Expected: `✅ No errors`. Fix any errors reported before continuing.

- [ ] **Step 2: Run validate (contrast check)**

```bash
npx hyperframes validate
```

Expected: Passes or shows contrast warnings. If any contrast warnings appear:
- White text on dark purple → already passes (contrast ratio ~15:1)
- Dark text on light backgrounds → if warned, darken the color slightly (e.g. `#4c1d95` → `#3b0e8a`)

- [ ] **Step 3: Run inspect (overflow check)**

```bash
npx hyperframes inspect
```

Expected: No overflow issues. Common fixes:
- If `intro-tagline` overflows: reduce font-size from `80px` to `68px`
- If `cat-title` overflows: reduce font-size from `100px` to `88px`

- [ ] **Step 4: Final preview — watch the full video**

```bash
npx hyperframes preview
```

Play the video from t=0 to t=40.5 and check the full flow feels right. Pay attention to:
- Transitions fire cleanly between scenes
- Each category has a clear moment to shine
- Energy burst feels exciting
- Outro is clean and readable

- [ ] **Step 5: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add promo-video/index.html
git commit -m "fix: address lint, validate, and inspect issues"
```

---

## Task 9: Render to MP4

**Files:**
- Create: `promo-video/mazeget-promo.mp4`
- Copy to: `public/mazeget-promo.mp4`

- [ ] **Step 1: Render the video**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/promo-video"
npx hyperframes render --output mazeget-promo.mp4
```

This takes 2–5 minutes. Expected: `✅ Rendered to mazeget-promo.mp4`

- [ ] **Step 2: Verify the file plays correctly**

```bash
open mazeget-promo.mp4
```

Watch the full 40 seconds in QuickTime. Check that all animations played correctly and thumbnails are visible.

- [ ] **Step 3: Copy to the Astro public folder**

```bash
cp "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/promo-video/mazeget-promo.mp4" \
   "/Users/davidnizan/Ai projects/mazeget_com/new mazeget/public/mazeget-promo.mp4"
```

- [ ] **Step 4: Commit**

```bash
cd "/Users/davidnizan/Ai projects/mazeget_com/new mazeget"
git add public/mazeget-promo.mp4
git commit -m "feat: add rendered promo video to public assets"
```

---

## Out of Scope (Future)

- Embedding the video in the homepage hero section (separate task)
- Adding background music
- Social media / vertical cuts for Instagram
- WhatsApp share version
