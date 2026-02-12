

# Oprava chýbajúcej route pre stránku Kontakt

## Problém
V `src/App.tsx` je komponent `Contact` importovaný (riadok 18), ale chýba jeho route. Pri poslednej reorganizácii sa route `/kontakt` omylom vymazala.

## Riešenie
Pridať jeden riadok do `src/App.tsx` - route pre `/kontakt`:

```
<Route path="/kontakt" element={<Contact />} />
```

Pridám ho pred catch-all route `*` (pred riadok 60).

## Rozsah zmien
- **1 súbor**: `src/App.tsx` - pridanie jedného riadku

