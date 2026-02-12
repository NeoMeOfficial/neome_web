

## Pridanie podnadpisu na stránku Transformácie

Doplním text do existujúceho prázdneho `<p>` elementu (riadok 76-78) pod nadpisom "Skutočné ženy, skutočné výsledky":

**Text:**
"Nie rýchle zmeny za krátky čas, ale udržateľné zmeny, ktoré s tebou ostanú."

### Technické detaily

**Súbor:** `src/pages/Transformacie.tsx` (riadky 76-78)

Aktuálne je tam prázdny paragraf:
```tsx
<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">

</p>
```

Nahradím ho:
```tsx
<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
  Nie rýchle zmeny za krátky čas,<br />
  ale udržateľné zmeny, ktoré s tebou ostanú.
</p>
```

Jedna jednoduchá zmena, žiadne nové komponenty ani štýly.

