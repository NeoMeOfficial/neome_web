

# Presun sekcie "Pre skutocne zeny" z O aplikacii do Transformacie

## Co sa zmeni

### 1. `src/pages/OAplikacii.tsx`
- Odstranenie celej sekcie "Pre skutocne zeny" (riadky 55-126) - nadpis, popis aj vsetkych 8 quote kariet
- Odstranenie importu `motion` z framer-motion (uz sa nepouziva)
- Vysledna struktura: **Hero** -> **AppOverview** -> **Final CTA**

### 2. `src/pages/Transformacie.tsx`
- Pridanie sekcie "Pre skutocne zeny" (nadpis + 8 quote kariet) na koniec stranky, za sekciu "Pozri ich transformacie" (za riadok 259)
- Pridanie importu `motion` z framer-motion (uz je importovany)
- Vysledna struktura: **Hero** -> **Pribehy ktore inspiruju** -> **Pozri ich transformacie** -> **Pre skutocne zeny**

