
## Pridanie zaverecnej CTA sekcie na stranku Transformacie

Skopirujem rovnaku zaverecnu sekciu "Zacni dnes. Zacni s NeoMe." z domovskej stranky (`OAplikacii.tsx`) na spodok stranky `Transformacie.tsx` -- pred uzatvarajuci `</div>`.

### Technicke detaily

**Subor:** `src/pages/Transformacie.tsx`

Na koniec stranky (pred posledny `</div>`) pridam tuto sekciu:

```tsx
{/* Final CTA */}
<section className="py-16 md:py-20 px-4 md:px-8">
  <div className="container mx-auto max-w-4xl text-center">
    <Card className="rounded-3xl shadow-xl p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
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
      <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
        STIAHNI SI NEOME APLIKÁCIU A ZAČNI
        <ArrowRight size={20} className="ml-2" />
      </Button>
      <p className="text-sm text-muted-foreground mt-6">
        Vyskúšaj zadarmo 7 dní. Zruš kedykoľvek.
      </p>
    </Card>
  </div>
</section>
```

Jedna zmena v jednom subore -- rovnaky dizajn a styling ako na domovskej stranke.
