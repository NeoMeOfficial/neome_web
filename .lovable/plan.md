

## Zmenšenie medzery nad záverečnou CTA sekciou

Zmenším horný padding Final CTA sekcie na stránke Transformácie.

### Technické detaily

**Súbor:** `src/pages/Transformacie.tsx` (riadok 367)

Zmena z:
```tsx
<section className="py-16 md:py-20 px-4 md:px-8">
```

Na:
```tsx
<section className="pt-4 md:pt-6 pb-16 md:pb-20 px-4 md:px-8">
```

Rozdelím `py` (symetrický padding) na samostatný `pt` (horný) a `pb` (spodný), pričom horný výrazne zmenším.

