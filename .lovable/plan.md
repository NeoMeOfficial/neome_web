

# Skutocne fotky premien v carouseli

## Prehled

Nahradim AI-generovane placeholder fotky skutocnymi fotkami klientiek. Upravim carousel tak, aby zvladol dva typy fotiek:
- **Kombinovane fotky** (pred/po uz v jednom obrazku): Danielka, Eliska, Katarina, Simona
- **Samostatne pary** (dva separatne subory): Laura (zaciatok + po 4 mesiacoch) a anonymna klientka (1000009054 + 1000009069)

## Mapovanie fotiek na transformacie

| # | Meno | Typ | Subory |
|---|------|-----|--------|
| 1 | Laura | separatne | Laura_Karabova_-_zaciatok_PP.jpg (pred) + Laura_Karabova_po_4mesiacoch (po) |
| 2 | anonymna | separatne | 1000009054.jpg (pred) + 1000009069.jpg (po) |
| 3 | Danielka | kombinovany | Danielka_Gajdosikova_vysleodk_PP_po_2mesiacoch.png |
| 4 | Eliska | kombinovany | Eliska.jpg |
| 5 | Katarina | kombinovany | Katarina_Tomcikova_progres.webp |
| 6 | Simona | kombinovany | Simona_Sokolova_PP.jpg |

## Dizajnove riesenie

- **Separatne pary** (Laura, anonymna): zachovam sucasny layout - dve fotky vedla seba s labelmi PRED/PO
- **Kombinovane fotky** (Danielka, Eliska, Katarina, Simona): zobrazim ako jednu siroku fotku na celu kartu - uz maju pred/po v sebe

Vsetky karty budu mat konzistentny aspect ratio (3:4) a zaoblene rohy. Fotky budu orezane cez `object-fit: cover` aby boli vizualne zjednotene.

## Technicky plan

1. **Skopirovat 8 fotiek** z user-uploads do `src/assets/` s cistymi nazvami
2. **Upravit data pole `transformations`** - pridat typ (combined/separate) pre kazdu transformaciu
3. **Upravit renderovanie karty** v carouseli - podla typu zobrazit bud jednu alebo dve fotky
4. **Aktualizovat mena a popisy** podla skutocnych mien z nazvov suborov

## Subory na upravu

- Kopirovat 8 fotiek do `src/assets/`
- `src/pages/Transformacie.tsx` - aktualizovat data a renderovanie kariet

