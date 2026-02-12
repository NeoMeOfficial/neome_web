

# Zjednotenie fotiek v carouseli premien

## Problem
Fotky v carouseli maju rozne velkosti a proporcie. Kombinovane fotky (Danielka) su ovela vyssie nez separate pary (Laura, Klientka). Vysledok vyzera nekonzistentne a "rozhazane". Navyse treba skryt tvare a pridat zjednocujuci filter.

## Riesenie

### 1. Rovnaka velkost vsetkych kariet
- Vsetky obrazky (aj combined, aj separate) budu mat fixnu vysku cez `aspect-[4/5]` na celej karte
- Combined fotky budu mat `object-cover` a `object-position: top` aby sa orezali zhora/zdola rovnomerne
- Separate pary budu mat rovnaky aspect ratio na kazdu polovicu

### 2. Skrytie tvari - gradient overlay
- Na kazdu fotku pridam gradient overlay zhora, ktory jemne zakryje oblast tvare
- `bg-gradient-to-b from-black/40 via-black/10 to-transparent` - tmavsi zhora (tvare), svetlejsi dole (telo)
- Toto je elegantny sposob ako skryt tvare bez orezavania

### 3. Zjednocujuci vizualny filter
- Pridam na vsetky fotky jemny sepiovy/hnedy filter cez CSS overlay
- `mix-blend-mode: multiply` s jemnou hnedou farbou pre konzistentny tonalny vzhled
- Mierne znizim saturacia cez `saturate-[0.85]` a pridam `brightness-[0.95]` pre jemnejsi vzhled
- Vsetky fotky budu vyzerat vizualne jednotne aj ked pochadza z roznych zdrojov

### 4. Konzistentny padding a spacing
- Kazda karta bude mat rovnaky padding a text area pod fotkou
- Fixna vyska textovej casti cez `min-h-[100px]`

## Technicke zmeny

### `src/pages/Transformacie.tsx`
- Upravit renderovanie obrazkov - pridat gradient overlay div cez `absolute inset-0`
- Pridat CSS filtre na img elementy: `saturate-[0.85] brightness-[0.95] contrast-[1.05]`
- Zjednotit aspect ratio na `aspect-[4/5]` pre vsetky typy kariet
- Pridat sepiovy color overlay `bg-primary/10` s `mix-blend-mode: multiply`
- Pridat horny gradient pre zakrytie tvari
- Pridat `min-h` na textovu cast karty pre konzistentnu vysku

## Vysledok
Vsetky karty budu rovnako velke, fotky budu mat jemny hnedy filter pre vizualnu jednotu a tvare budu skryte pod gradientom. Celkovy dojem bude profesionalny a cistejsi.
