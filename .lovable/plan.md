

## Oprava nadpisu v AppOverview

Aktualne je text zle - chyba "Buduj svoju Novu Ja" a texty su pomiesane. Opravim to nasledovne:

**Vysledok:**
- Riadok 1: **Buduj svoju Novu Ja** (cierny text, font-light)
- Riadok 2: **silnu - zdravu - sebavedomu** (hnedy/gradient text)

Tiez odstranime paragraf pod nadpisom ("Komplexna starostlivost...") ktory tam zostal.

### Technicke detaily

- **Subor:** `src/components/AppOverview.tsx`, riadky 111-116
- Zmenim `<h2>` na:
  ```
  Buduj svoju Novú Ja
  <br />
  <span class="gradient-text">silnú – zdravú – sebavedomú</span>
  ```
- Odstranime `<p>` element s textom "Komplexna starostlivost..." (riadky 114-116)

