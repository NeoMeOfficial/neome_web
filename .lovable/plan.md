
# Graficka uprava Final CTA karty

## Problem
Karta "Zacni dnes..." ma prilis dlhy nadpis, ktory vizualne splyna do jedneho bloku textu bez jasnej hierarchie. Text "Zacni dnes. Zacni s NeoMe a krok po kroku si buduj svoju Novu Ja. Silnu - Zdravu - Sebavedomu" je vsetko v jednom h2 elemente a nevyzera dobre.

## Riesenie
Rozdelim text do jasnej vizualnej hierarchie s viacerymi urovnami:

1. **Hlavny nadpis** - "Zacni dnes." - velky, vyrazny, samostatny riadok
2. **Podnadpis** - "Zacni s NeoMe a krok po kroku si buduj svoju **Novu Ja**." - mensi text pod nadpisom, s gradient zvyraznenim "Novu Ja"
3. **Tagline** - "Silnu - Zdravu - Sebavedomu" - gradient text, vizualne oddeleny, ako statement

## Technicke detaily

### Zmeny v `src/pages/OAplikacii.tsx` (riadky 508-511)

Nahradim aktualny jednolity h2 element troma oddelenymi textovymi blokmi:

```tsx
<h2 className="text-5xl md:text-7xl font-light mb-4">
  Začni dnes.
</h2>
<p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
  Začni s NeoMe a krok po kroku si buduj svoju{" "}
  <span className="gradient-text font-normal">Novú Ja</span>.
</p>
<p className="text-2xl md:text-3xl gradient-text font-normal mb-8">
  Silnú – Zdravú – Sebavedomú
</p>
```

Toto vytvori jasnu vizualnu hierarchiu:
- Velky hlavny nadpis pritiahne pozornost
- Stredny popis vysvetli kontext
- Gradient tagline uzavrie sekciu s emotivnym statementom
