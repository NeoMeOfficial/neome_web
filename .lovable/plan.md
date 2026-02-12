

# Nova hierarchia Final CTA karty

## Struktura

Striedanie velky-maly-velky-maly vytvori zaujimavu vizualnu dynamiku:

1. **"Zacni dnes."** - podnadpis (mensi, jemnejsi text)
2. **"Zacni s NeoMe."** - hlavny nadpis (velky, vyrazny)
3. **"Krok po kroku si buduj svoju Novu Ja."** - podnadpis (mensi, s gradient zvyraznenim "Novu Ja")
4. **"Silnu – Zdravu – Sebavedomu"** - hlavny nadpis (velky, gradient)

Toto vytvori rytmus: male → VELKE → male → VELKE, co vizualne "buduje" emocionalny crescendo.

## Technicke detaily

### Zmeny v `src/pages/OAplikacii.tsx` (riadky 508-520)

Nahradim aktualny rozdeleny text novou strukturou:

```tsx
<p className="text-lg md:text-xl text-muted-foreground mb-2">
  Začni dnes.
</p>
<h2 className="text-4xl md:text-6xl font-light mb-4">
  Začni s NeoMe.
</h2>
<p className="text-lg md:text-xl text-muted-foreground mb-2 leading-relaxed">
  Krok po kroku si buduj svoju{" "}
  <span className="gradient-text font-normal">Novú Ja</span>.
</p>
<p className="text-4xl md:text-6xl gradient-text font-normal mb-8">
  Silnú – Zdravú – Sebavedomú
</p>
```

