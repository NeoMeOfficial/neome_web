# DECISIONS.md — Why NeoMe looks and sounds the way it does

This file captures **every deliberate choice** made while building NeoMe's design system, and the reasoning behind each one. It exists to prevent well-meaning "improvements" from quietly undoing intentional decisions.

**If you disagree with a decision here, don't silently revert it. Propose the change, cite this file, and ask.**

---

## Colour

### D1. Deep-brown (`#3D2921`) is the primary, not black
**Why:** Black is cold, corporate, and anti-body. NeoMe is warm and embodied. Deep-brown carries the same weight as black on screen but feels organic. It's the colour of earth, bark, strong coffee — all on-brand.

### D2. Cream (`#F8F5F0`) is the canvas, not white
**Why:** Pure white is clinical and SaaS-coded. Cream reads as *magazine paper* — editorial, soft, intentional. Every light surface uses cream by default; white is only allowed on small raised cards *over* cream, to create gentle layering.

### D3. Sage is decorative only — never UI chrome
**Why:** Early exploration used sage as the eyebrow/label colour, because "green = natural = wellness." This was a trope. Sage read as *generic organic-brand green* and flattened the personality. We moved eyebrows to warm-brown-55% (see D5) and reserved sage for:
- Decorative accents (cycle phase dots, quote mark flourishes)
- State/nature contexts (outdoor imagery overlays)
- One-off surface moments where *groundedness* is the message

**Sage is never a button, never an eyebrow, never a link colour.**

### D4. Terracotta (`#C1856A`) is the only warm action colour
**Why:** Colour is scarce in this system (1–2 moments per screen). Every colour must carry one job. Terracotta's job is "yes / act / now" — the only warm note. Giving it away to secondary roles dilutes urgency.

**Corollary:** Dusty-teal (`#89B0BC`) was considered for CTA because it's beautiful. Rejected — it's cool, and NeoMe's voice is warm. Dusty-teal is now reserved for *meditation/stillness* contexts (Myseľ tab, breathing exercises).

### D5. Eyebrow colour is warm-brown at 55%, not sage
**Why:** See D3. Warm-brown-55% sits in the editorial-luxury lineage (think Kinfolk, Cereal magazine) and keeps the colour accents (sage, terracotta, dusty-teal) for *meaning*, not chrome.

### D6. Palette hierarchy (promoted in tokens)
- **Primary:** Deep-brown · Cream · Sage _(the brand voice)_
- **Secondary:** Terracotta (action) · Dusty-teal (mind) · Sandy (warm neutral on dark)

This hierarchy is named in tokens — `--primary-ink`, `--primary-surface`, `--primary-accent`, `--accent-action`, `--accent-mind`, `--accent-warm`. Use the semantic name, not the raw colour.

### D7. Never pure white or pure black — even in dark mode
**Why:** The palette is closed. Breaking out of it makes the brand feel accidental. Dark surfaces are deep-brown. Light surfaces are cream. "Black" text is deep-brown. "White" text on dark is `#FFFFFF` — the one white exception, because cream-on-brown has insufficient contrast for body text.

---

## Typography

### D8. Fraunces + DM Sans — not Inter
**Why:** Inter is the default Lovable/shadcn starter font. It's everywhere. It has no voice. Fraunces gives NeoMe *editorial confidence* — sharp terminals, true italic, magazine weight — but with **even stroke contrast** and an **optical-size axis** (we use opsz 144) so it stays legible at display sizes where Bodoni's hairlines disappear. DM Sans is the quietest humanist sans on Google Fonts at weight 300 — it disappears, which is what a body font should do.

**History:** Originally specified Bodoni Moda. Switched to Fraunces after user feedback that Bodoni was beautiful but difficult to read, especially with Slovak diacritics (á, č, š, ť) crowding the cap-height. Fraunces keeps the editorial-luxury feel and fixes the legibility.

### D9. Display is weight 500, not 700
**Why:** At 700 the display feels *loud*. At 500 it feels *considered*. The brand is not shouting.

### D10. Body is DM Sans 300, line-height 1.72
**Why:** Weight 300 + generous leading reads as editorial prose, not app copy. Women reading about their bodies deserve generous line-height. Dense text feels anxious; NeoMe is the opposite.

### D11. Eyebrows are 12px, weight 500, letter-spacing 0.24em, UPPERCASE
**Why:** Classic editorial-luxury treatment. Not "LABEL" bold blue-500. Not sentence-case tag. The wide-tracked uppercase small label is the tell of thoughtful layout.

### D12. Italic Fraunces is reserved for pull-phrases and voice moments
**Why:** Italic is the brand's *whisper*. It's the pain-section pull-phrase. It's the "už roky tento problém neviem vyriešiť" confession. Using italic as body copy destroys the effect; using it once per section is devastating.

### D13. Display italic colour is terracotta
**Why:** Italic is a moment. Moments deserve warmth. This is one of the few times terracotta is allowed outside a CTA.

---

## Components

### D14. Hero is editorial, not SaaS
**Why:** The generated Lovable hero was gradient-heavy with a stacked-button CTA row. NeoMe's hero is **left-aligned long-form headline + eyebrow + one primary CTA + inset portrait**. It looks like the opening spread of a magazine, not a landing page.

### D15. Pain section uses the editorial list pattern
**Why:** After exploring four layouts, we landed on **asymmetric editorial**: italic pull-phrase on the left, thin-rule list on the right. **No numerals.** It reads as a confession followed by evidence, not a feature list.

**Variant "B" (with roman numerals) and "D" (two-column stanza) were explored and rejected** — numerals felt catalogue-y; two-column felt heavier per item but lost rhythm.

### D16. Programme cards use a cream-left-fade over bright photography
**Why:** The photography provided is bright and soft, not dark. Standard bottom-scrim treatment would've destroyed the light. Instead: horizontal cream gradient from the left fades into the photo, type sits on the faded side, the *subject of the photo* (hands, legs, band) stays fully visible on the right. Type is deep-brown, not white.

### D17. Progress bars and accents on programme cards are terracotta, not sandy
**Why:** On bright photography, sandy disappears. Terracotta holds its weight and reads as "in progress" / "come back."

### D18. Testimonials use portrait + italic pull-quote + deep-brown surface
**Why:** Quotes are voice moments. Voice moments live in italic Fraunces. Dark surface isolates them from the cream flow of the page and signals "slow down, read this."

### D19. Buttons are pill-shaped, never rounded-rectangle
**Why:** Pills read as soft + human; rounded-rects read as software. NeoMe is not software-first.

### D20. No icons in buttons unless semantically essential
**Why:** Chevrons and sparkles are visual noise. The typography carries the call. If an icon is truly needed (external link, play), use Lucide at 1em size, not Phosphor and not emoji.

---

## Photography

### D21. No stock photography, ever
**Why:** Stock betrays the brand immediately. Better to use a placeholder rectangle than a generic woman-doing-yoga-on-a-cliff.

### D22. Real women, natural light, warm colour grade
**Why:** Every on-brand photo is a woman who could plausibly be *you*. Not models. Soft light (morning, overcast, window). Warm LUT (slight orange-shift, lifted shadows). This matches the editorial-luxury lineage (Kinfolk, Cereal, Goop in its best years).

### D23. Three photo treatments, named
- **Bottom scrim** — for dark-ready photos where copy sits at the bottom
- **Cream-left-fade** — for bright photos (programme cards, see D16)
- **Brown wash** — full-bleed hero inset, low opacity deep-brown multiply

No other treatments. A photo either fits one of these or it isn't on-brand.

---

## Voice & copy

### D24. Slovak copy is written, not translated
**Why:** Translated-from-English wellness copy is instantly detectable in Slovak. Gabi's voice is native; the website must sound native. **Claude Code: never invent Slovak strings.** Propose in English, ask for translation.

### D25. "Aj krátky čas venovaný sebe je viac ako nič" is the north-star phrase
**Why:** It distills the brand promise. It gives permission. It assumes the reader is tired. It's the first real-woman wellness line in Slovak that doesn't sound like a marketing team wrote it. Protect it.

### D26. No exclamation marks in long-form copy
**Why:** NeoMe doesn't need to convince. Calm voice = confident voice.

### D27. Numbers over adjectives
**Why:** "15 minút denne" beats "just a few minutes a day." Specifics earn trust; adjectives leak it.

---

## System

### D28. Dark-first hero was explored and rejected
**Why:** Tested a deep-brown hero-first variant. Landing experience tipped too editorial/fashion-brand and lost the "welcoming warmth" on first impression. Cream leads the welcome. Brown carries the depth (pain section, testimonials, final CTA, footer).

### D29. Dusty-teal was updated from `#A9BFC5` to `#89B0BC`
**Why:** Original was too pale and fell out of the palette's saturation. `#89B0BC` holds its weight against cream and deep-brown and reads as "breath" without drifting teal-blue.

### D30. `--dusty-teal` is the preferred token name; `--dusty-blue` is a legacy alias
**Why:** Early iterations called it "dusty blue." Gabi and the team prefer "teal" as it's more accurate. Both tokens resolve to the same value; new code should use `--dusty-teal`.

### D31. Grain overlay is not optional
**Why:** 2.8% SVG grain across every page. It separates "feels made" from "feels generated." Ship with it.

### D32. Minimum animation duration is 300ms
**Why:** Faster than that and the brand feels twitchy. NeoMe is slow on purpose.

### D33. Section vertical padding is 128px+ on desktop
**Why:** Air carries the brand. Dense sections feel anxious. The photography and type can hold more whitespace than most designers are comfortable giving them; give it anyway.

---

## What we haven't decided yet

Flag any of these if you hit them:

- [ ] **Dark mode (full).** We have dark *sections*, not a full dark-mode toggle. Needs a separate pass.
- [ ] **Form field styling beyond buttons.** Inputs, toggles, checkboxes need an editorial treatment pass.
- [ ] **Blog article template.** Not yet designed. When doing, start from the editorial list + pull-phrase pattern — don't default to a stock blog layout.
- [ ] **Pricing page.** Current Lovable version is generic. Needs a sage-savings-chip pattern and an editorial comparison treatment.
- [ ] **Onboarding flow.** App onboarding not yet scoped in this design pass.

When one of these is scoped, add a decision entry here as you go.
