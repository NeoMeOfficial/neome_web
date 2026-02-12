

## Grafická úprava hero fotky

### Čo urobím
Použijem AI model na úpravu obrázka `hero-yoga.jpg` -- konkrétne na to, aby postava na fotke mala plochšie brucho, pričom zvyšok fotky zostane nezmenený.

### Postup
1. Načítam aktuálny obrázok `hero-yoga.jpg`
2. Pomocou AI modelu (google/gemini-2.5-flash-image) pošlem inštrukciu na úpravu -- zploštenie brucha postavy
3. Výsledný obrázok uložím späť do projektu ako nový hero obrázok
4. Aktualizujem import v `OAplikacii.tsx` ak bude potrebné

### Technické detaily
- Použijem edge funkciu na volanie Lovable AI s modelom `google/gemini-2.5-flash-image` pre úpravu obrázka
- Vstupom bude aktuálna fotka + textová inštrukcia na úpravu
- Výstup uložím ako nový súbor v `src/assets/`
- Ak kvalita nebude dostatočná, môžem skúsiť `google/gemini-3-pro-image-preview` pre lepší výsledok

### Upozornenie
AI úprava obrázkov nemusí byť vždy dokonalá -- výsledok ti ukážem a podľa potreby môžeme upraviť ďalej alebo skúsiť iný prístup.

