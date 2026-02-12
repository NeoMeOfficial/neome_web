

# Premeny pred/po - horizontalny slider s fotkami

## Co sa zmeni

Sekcia "Pozri si premeny nasich klientiek" sa kompletne predesignuje:
- Namiesto 3 videii bude horizontalny slider (carousel) s 5-7 kartami premien
- Kazda karta bude zobrazovat fotku "pred" a "po" vedla seba
- Slider sa bude dat posuvat do stran (swipe na mobile, sipky na desktope)

## Dizajn kazdej karty premeny

Kazda karta bude obsahovat:
- Dva obrazky vedla seba (pred | po) s oznacenim "PRED" a "PO"
- Meno klientky a kratky popis (napr. "Martina, 34 - po 3 mesiacoch")
- Zaoblene rohy, jemny tien

## Fotky

Kedze nemam skutocne fotky premien, pouzijeme kvalitne placeholder obrazky z Unsplash (zdarma, bez licencie) - realisticke fotky zien pri cviceni/joge. Kazda premena bude mat 2 rozne fotky simulujuce "pred" a "po".

Ked budete mat skutocne fotky, jednoducho ich nahrate do chatu a nahradime placeholdery.

## Technicky plan

1. **Nahradit video grid** (riadky 183-243 v Transformacie.tsx) za Embla Carousel komponent (uz je nainstalovany v projekte)
2. **Vytvorit pole dat** s 6 premenami (meno, popis, before/after URL z Unsplash)
3. **Carousel layout**: na desktope viditelne 2-3 karty, na mobile 1 karta, s moznostou swipovat
4. **Kazda karta**: dva obrazky vedla seba s labelmi "PRED" / "PO", meno a vysledok pod nimi
5. **Navigacia**: sipky na bokoch + bodky (dots) pod sliderom
6. **Odstranit** VideoPlayerModal import a stav (videoModalOpen, currentVideoId, currentVideoTitle) ak sa videa uz nikde nepouzivaju

## Subory na upravu

- `src/pages/Transformacie.tsx` - nahradenie video sekcie za before/after carousel

