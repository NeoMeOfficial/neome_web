import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppOverview } from "@/components/AppOverview";
import { ArrowRight } from "lucide-react";
import lifestyleYogaMat from "@/assets/lifestyle-yoga-mat.webp";
import { motion } from "framer-motion";

const OAplikacii = () => {
  return <div className="min-h-screen">
      {/* Hero Split Section */}
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
            {/* Left Content */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                O aplikácii NeoMe
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1]">
                Pomôžeme ti začať tam, kde si.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">Každý deň aspoň 15-min pre seba!
            </p>
            </motion.div>

            {/* Right Image */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img src={lifestyleYogaMat} alt="Žena pripravujúca podložku na cvičenie" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
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
    </div>;
};
export default OAplikacii;
