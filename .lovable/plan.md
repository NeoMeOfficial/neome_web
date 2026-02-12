

# Realisticke fotky premien a upravene popisy

## Co sa zmeni

1. **Vygenerujem 12 novych fotiek** (6 parov pred/po) pomocou AI generovania obrazkov s detailnym promptom:
   - Zena v cvicebnom obleceni (legginy, sportovy top)
   - Odfotena z profilu alebo mierne z uhla
   - Podobna pozicia v oboch fotkach (pred aj po)
   - Realisticke, jemne zmeny - lepsie drzanie tela, pevnejsi stred, zdravsi vzhled
   - Bez tvare alebo s ciastocne viditelnou tvarou
   - Ziadne extremne premeny

2. **Upravim popisy a tagy** aby boli realistickejsie:
   - Ziadne extremne cisla ako "-8 kg za 3 mesiace"
   - Zamerim sa na pocity a jemne fyzicke zmeny: "Pevnejsie telo", "Lepsie drzanie tela", "Viac energie", "Silnejsi stred"
   - Dlhsie casove obdobia (4-8 mesiacov)

## Nove popisy premien

| Meno | Popis | Tagy |
|------|-------|------|
| Martina, 34 | Po 6 mesiacoch pravidelnosti | Pevnejsie telo, Viac energie |
| Lucia, 29 | Po 5 mesiacoch s NeoMe | Lepsie drzanie tela, Menej bolesti chrbta |
| Zuzana, 41 | Po 8 mesiacoch cvicenia | Silnejsi stred, Pokojnejsia mysel |
| Katarina, 36 | Po 6 mesiacoch treningov | Lepsie drzanie tela, Viac sily |
| Jana, 38 | Po 7 mesiacoch s aplikaciou | Viac sebavedomia, Lepsi spanok |
| Petra, 32 | Po 5 mesiacoch zmeny | Pevnejsie brucho, Zdravsie navyky |

## Technicky plan

1. **Vygenerovat 12 novych obrazkov** pomocou AI image generation s promptom zameranym na realisticke fitness premeny z profilu
2. **Nahradit existujuce subory** transformation-1-before.jpg az transformation-6-after.jpg
3. **Upravit pole `transformations`** v Transformacie.tsx s novymi popismi a tagmi

## Subory na upravu

- 12 obrazkovych suborov v `src/assets/` (nahradenie existujucich)
- `src/pages/Transformacie.tsx` - upravenie popisov a tagov

