

# Reorganizacia navigacie a obsahu stranok

## Prehlad

Toto je velka strukturalna zmena. Povodna domovska stranka (Index.tsx) sa rozpadne do viacerych samostatnych okien a aktualna stranka "O aplikacii" sa stane novou domovskou strankou.

## Nova navigacia (Header.tsx)

```
Domov | Transformacie | Preco NeoMe | Programy | Cena | O Nas | Kontakt
```

## Rozpis stranok

### 1. DOMOV (`/`) - povodne "O aplikacii"

Aktualna OAplikacii.tsx sa stane domovskou strankou. Zmeny:
- Hero sekcia: namiesto aktualnej fotky (`lifestyle-yoga-mat.webp`) pouzijeme velku hero fotku z povodnej domovskej stranky (`hero-yoga.jpg`) - rovnaky fullscreen styl s textom "Pomozeme ti zacat tam, kde si."
- Pridame dva badge: "4000+ zien uz zacalo" a "4.9 hviezdiciek z 230 hodnoteni"
- Zvysok stranky zostava: AppOverview (01-07) + Final CTA

### 2. TRANSFORMACIE (`/transformacie`) - bez zmien

Zostava ako je.

### 3. PRECO NEOME (`/preco-neome`) - NOVA STRANKA

Obsahuje sekcie presunuté z povodnej Index.tsx:
- `ComparisonSection` (Preco zeny volia NeoMe)
- `StatsShowcase` (Dovera viac ako 4000 zien) - alebo `GoogleReviews`
- `ProfessionalRecommendations` (Odporucania lekarov)

### 4. PROGRAMY (`/programy`) - NOVA STRANKA (alebo upravena existujuca)

Obsahuje sekciu `ProgramsScroll` presunutu z Index.tsx - "Pre cielenu transformaciu nasleduj strukturovany program".

Pozn.: Stranka `/programy` uz existuje (Programy.tsx s 520 riadkami). Rozhodnutie: budem ju ponechavat a pridam do nej `ProgramsScroll` komponent na zaciatok, alebo ju nahradim. Kedze user povedal "skopiruj celu sekciu", pridam `ProgramsScroll` na zaciatok existujucej stranky Programy.

### 5. CENA (`/cena`) - NOVA STRANKA

Obsahuje:
- `PricingComparison` - sekcia "Pridaj sa aj ty k nam" s cenovou tabulkou (cvicenia, streciny, recepty...)
- Ukonci sa "30 dnova zaruka vratenia penazi"

### 6. O NAS (`/o-nas`) - bez zmien
### 7. KONTAKT (`/kontakt`) - bez zmien

## Zmeny v povodnej domovskej stranke (Index.tsx)

Index.tsx uz nebude pouzivana ako domovska stranka. Route `/` bude smerovat na OAplikacii (premenujeme). Povodny Index.tsx mozeme ponechat pod `/home-old` alebo ho odstranit.

---

## Technicke detaily

### Subory na vytvorenie:
1. **`src/pages/PrecoNeoMe.tsx`** - nova stranka s `ComparisonSection`, `GoogleReviews`, `ProfessionalRecommendations`
2. **`src/pages/Cena.tsx`** - nova stranka s `PricingComparison` + zaruka

### Subory na upravu:

3. **`src/App.tsx`**:
   - Route `/` -> `OAplikacii` (novy Domov)
   - Pridat route `/preco-neome` -> `PrecoNeoMe`
   - Pridat route `/cena` -> `Cena`
   - Povodny Index ponechat pod `/home-old` pre pripad navratu

4. **`src/pages/OAplikacii.tsx`**:
   - Zmenit hero fotku z `lifestyle-yoga-mat.webp` na `hero-yoga.jpg` (fullscreen styl ako povodna homepage)
   - Pridat badges "4000+ zien uz zacalo" a "4.9 hviezdiciek z 230 hodnoteni"
   - Badge "O aplikacii NeoMe" dat prec

5. **`src/pages/Programy.tsx`**:
   - Pridat `ProgramsScroll` komponent (sekcia z povodnej homepage)

6. **`src/components/Header.tsx`**:
   - Novy navLinks:
     ```
     { label: "Domov", to: "/" },
     { label: "Transformácie", to: "/transformacie" },
     { label: "Prečo NeoMe", to: "/preco-neome" },
     { label: "Programy", to: "/programy" },
     { label: "Cena", to: "/cena" },
     { label: "O Nás", to: "/o-nas" },
     { label: "Kontakt", to: "/kontakt" },
     ```

