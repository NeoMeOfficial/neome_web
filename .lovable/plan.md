
# Reorganizacia stranky O aplikacii + nova stranka Transformacie

## Prehlad zmien

Stranka **O aplikacii** bude zjednodusena a dve sekcie sa presunu do novej stranky **Transformacie**, ktora sa objavi v menu.

## Nova struktura stranky O aplikacii

1. Hero sekcia (zostava)
2. **Pre skutocne zeny** - presunuta PRED AppOverview (bez casti "Nie si len mama" s fotkou tehotnej zeny)
3. AppOverview (01-07 Periodka) - zostava
4. Final CTA "Zacni dnes..." - zostava

## Nova stranka: Transformacie (`/transformacie`)

Bude obsahovat:
1. **Pribehy, ktore inspiruju** - 3 testimonial karty (Martina, Lucia, Zuzana)
2. **Pozri ich transformacie** - 3 video karty

## Menu

Pridam polozku **Transformacie** do navigacie v Header.tsx.

---

## Technicke detaily

### 1. Zmeny v `src/pages/OAplikacii.tsx`

**Presun sekcie "Pre skutocne zeny" (riadky 82-284):**
- Presuniem quote cards grid (riadky 83-239) PRED `<AppOverview />` (pred riadok 76)
- Odstranim cast "Nie si len mama" s fotkou tehotnej zeny (riadky 241-281)

**Odstranenie sekcii presunytych do novej stranky:**
- Odstranim sekciu "Pribehy, ktore inspiruju" (riadky 287-418)
- Odstranim sekciu "Pozri ich transformacie" (riadky 420-501)
- Odstranim nepotrebne importy (testimonialMartina, testimonialLucia, testimonialZuzana, lifestyleCoreWorkout, lifestylePregnancy, lifestyleCollage, VideoPlayerModal, Play, Star, Heart)
- Odstranim useState pre video modal

**Vysledna struktura OAplikacii:**
Hero → Pre skutocne zeny (len quote cards) → AppOverview → Final CTA

### 2. Nova stranka `src/pages/Transformacie.tsx`

- Obsahuje hero/header sekciu
- Sekciu "Pribehy, ktore inspiruju" (testimonial karty)
- Sekciu "Pozri ich transformacie" (video karty)
- Pouzije VideoPlayerModal pre prehravanie videi
- Importy: testimonialMartina, testimonialLucia, testimonialZuzana, lifestyleYogaMat, lifestyleCoreWorkout

### 3. Zmeny v `src/components/Header.tsx` (riadok 36-43)

Pridam novu polozku do `navLinks`:
```
{ label: "Transformácie", to: "/transformacie" }
```

### 4. Zmeny v `src/App.tsx`

Pridam novy route:
```
<Route path="/transformacie" element={<Transformacie />} />
```
