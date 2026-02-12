import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppOverview } from "@/components/AppOverview";
import { ArrowRight } from "lucide-react";
import { Sparkle } from "@phosphor-icons/react";
import { Star as StarIcon } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

const OAplikacii = () => {
  return <div className="min-h-screen">
      {/* Hero Section - Fullscreen with background image */}
      <section className="relative min-h-screen flex items-center pt-20 px-0 md:px-4 overflow-hidden shadow-lg" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl animate-slide-up relative z-10">
          <div className="max-w-2xl">
            {/* Stats Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                <Sparkle size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-light">4000+ žien už začalo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                <StarIcon size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-light">4.9 hviezdičiek z 230 hodnotení</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight text-white">
              Pomôžem ti získať pevné telo a pokojnú myseľ.
            </h1>
            
            <p className="text-lg md:text-2xl mb-8 font-light text-white">
              Každý deň aspoň 15-min pre seba!
            </p>

            {/* Primary CTA */}
            <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground group hover:bg-primary/20 hover:backdrop-blur-md hover:border-primary/30 border border-transparent transition-all duration-300 mb-6">
              STIAHNUŤ APLIKÁCIU TERAZ
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-white/90 mb-6 text-sm">
              Vyskúšaj zadarmo 7 dní. Žiadna platobná karta potrebná.
            </p>
          </div>
        </div>
      </section>

      {/* What's in the App - Full Overview Section */}
      <AppOverview />

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
              STIAHNI APLIKÁCIU A ZAČNI
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Vyskúšaj zadarmo 7 dní. Zruš kedykoľvek.
            </p>
          </Card>
        </div>
      </section>
    </div>;};
export default OAplikacii;