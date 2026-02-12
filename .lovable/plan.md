

# Upokojenie vizualneho chaosu v CTA karte

## Problem
Aktualne sa striedaju rozne farby (muted-foreground vs gradient), rozne velkosti (text-lg vs text-6xl) a rozne fonty (font-light vs font-normal), co posobi chaoticky. "Silnu - Zdravu - Sebavedomu" sa na mobile moze lamat do viacerych riadkov.

## Riesenie
Zjednotim vizualny styl - vsetky texty budu v jednej farbe (foreground/primary), rovnakom fonte (font-light), a pouzijeme len dve velkosti: mensi pre podnadpisy a vacsi pre nadpisy. Gradient ponecham len na poslednom riadku ako jediny akcent.

### Nova struktura (riadky 508-520)

```tsx
<p className="text-base md:text-lg text-foreground/60 mb-2">
  Začni dnes.
</p>
<h2 className="text-3xl md:text-5xl font-light text-foreground mb-3">
  Začni s NeoMe.
</h2>
<p className="text-base md:text-lg text-foreground/60 mb-3">
  Krok po kroku si buduj svoju Novú Ja.
</p>
<p className="text-2xl md:text-4xl font-light gradient-text whitespace-nowrap mb-8">
  Silnú – Zdravú – Sebavedomú
</p>
```

### Co sa meni
- **Jedna farba**: podnadpisy su `text-foreground/60` (jemne stlmene), nadpisy su `text-foreground` alebo `gradient-text` - ziadne rozne farebne systemy
- **Jeden font**: vsetko je `font-light`, ziadne miiesanie s `font-normal`
- **Gradient len na konci**: "Novu Ja" uz nebude mat gradient, jediny gradient bude posledny riadok ako vizualny vrchol
- **Silnu-Zdravu-Sebavedomu na jednom riadku**: `whitespace-nowrap` + mierne zmensena velkost (`text-2xl md:text-4xl`) zabezpeci, ze sa text nezalomi
- **Mensie rozdiely vo velkostiach**: podnadpisy su `text-base/text-lg`, nadpisy `text-3xl/text-5xl` - nie tak extremny skok ako predtym

