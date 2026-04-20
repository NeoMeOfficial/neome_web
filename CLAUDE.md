# CLAUDE.md — NeoMe Project Orientation

**Read this file first, every session. Then read `DECISIONS.md`, then the `design-system/` folder.**

This file is the anchor for every change to the NeoMe website (`neome_web` repo). It tells you what NeoMe is, how it looks and sounds, and what you must never do without asking.

---

## What NeoMe is

NeoMe is a Slovak holistic-wellbeing platform for women, founded by **Gabi Drobová**. It combines fitness programmes, nutrition, mindfulness (Myseľ), community, and cycle tracking into one app + website.

**The brand promise, in one line:**
> *Aj krátky čas venovaný sebe je viac ako nič.* — "Even a short time spent on yourself is more than nothing."

**Audience:** Real women — often mothers, often busy, often tired. They are not trying to become elite athletes. They want to feel like themselves again, with 15 minutes a day.

**Voice:** Grounded, warm, embodied. Never preachy, never performative, never "wellness-industrial." Like a friend who happens to know what she's doing.

---

## Design direction in one paragraph

NeoMe is **editorial-luxury meets holistic wellbeing**. The foundation is **deep-brown + cream** (voice + canvas). **Sage** grounds it as a decorative/state colour. **Terracotta** is the only warm action colour — used sparingly, 1–2 moments per screen max. The typography pairs **Fraunces** (serif display, editorial, optical-size 144) with **DM Sans** (quiet sans body). Every screen should feel *quiet, confident, and intentional* — closer to a printed magazine than a SaaS dashboard. Photography is warm, soft-light, real-woman — never stock, never over-styled. There is always air. There is never clutter.

---

## Where everything lives

```
/CLAUDE.md               ← you are here
/DECISIONS.md            ← every deliberate choice + its reason
/design-system/
  README.md              ← index + how to use
  tokens.css             ← the CSS variables (source of truth)
  tailwind-tokens.ts     ← paste-in for tailwind.config.ts
  type.md                ← font system, scale, editorial patterns
  color.md               ← palette, hierarchy, do/don't
  imagery.md             ← photography voice + treatments
  voice.md               ← Slovak copywriting rules + sample phrases
  components/
    hero.md
    pain-section.md
    programme-card.md
    testimonial.md
    button.md
    eyebrow.md
  assets/                ← logos, monograms, section covers
```

---

## Hard rules (do not break without explicit user approval)

1. **Never use Inter, Roboto, or system sans-serif for UI text.** Body is **DM Sans 300**. Display is **Fraunces 500** with optical-size 144 (italic 400 for voice moments). That's it.
2. **Eyebrows/labels are warm-brown at 55% opacity** (`rgba(61,41,33,0.55)`), 12px, weight 500, letter-spacing 0.24em, UPPERCASE. **Never sage.** Sage is decorative, not UI.
3. **Terracotta (`#C1856A`) is the only CTA colour.** Dusty-teal is for meditation/stillness contexts only. Sage is never a button.
4. **No pure white surfaces as page background.** Use `cream` (`#F8F5F0`). Pure white is allowed only on small raised cards over cream.
5. **No pure black.** Dark surfaces are `deep-brown` (`#3D2921`).
6. **Never add neumorphism, glassmorphism (as page chrome), heavy gradients, or drop shadows harder than `--shadow-md`.** These were in the generated Lovable starter and conflict with the editorial direction.
7. **Never use emoji in the UI.** NeoMe's voice is quiet and grounded. Emoji break it.
8. **Do not replace or restructure the scroll-driven video section on the homepage.** It is intentionally preserved. The user will identify the exact DOM location; until then, flag any homepage edit that touches video/scroll logic and ask.
9. **Section vertical padding is at least 128px desktop / 80px mobile.** Air is non-negotiable.
10. **Never invent copy in Slovak.** If you need new Slovak strings, propose them in English first and ask the user (or Gabi) to translate/approve. Voice is fragile.

---

## Workflow expectations

### First prompt in any session

Before editing anything, summarise (in 5 bullets) what you understand from this file + `DECISIONS.md` + `design-system/`. Wait for confirmation.

### When making changes

Work in **three phases**, one commit per phase unless told otherwise:

1. **Tokens** — `src/index.css` + `tailwind.config.ts` aligned to `design-system/tokens.css`. No component edits.
2. **Copy + voice** — Slovak strings, eyebrows, empty states, button labels aligned to `voice.md`.
3. **Components** — structural changes to heroes, cards, sections aligned to `design-system/components/*`.

### When unsure

**Ask. Do not guess.** Voice and aesthetic decisions are easier to get right with one question than to fix after a 30-file PR. Quote the relevant section of the handoff when you ask ("`color.md` says sage is never a CTA — should this stillness-meditation card use dusty-teal instead?").

### When you push back

If you think a rule is wrong for a specific case, say so. The rules exist to hold the line, not to override judgment. But flag the exception explicitly — never silently break a rule.

---

## What success looks like

A visitor lands on the homepage and thinks *this feels different from every other wellness app.* It feels quiet. It feels like it was made by people who cared. It feels like it's talking to *her*, not at her.

Every change you make should push toward that feeling, or protect it.
