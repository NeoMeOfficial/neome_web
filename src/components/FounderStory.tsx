import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkle, ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-gabi.png";

export const FounderStory = () => {
  return (
    <section id="founder-story" className="py-16 md:py-20 px-0 md:px-8 bg-section-white">
      <div className="container mx-auto max-w-6xl">
        <Card className="rounded-3xl shadow-xl p-4 md:p-12 bg-white border-border/10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left: Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img 
                  src={founderImage} 
                  alt="Gabi, zakladateľka NeoMe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkle size={24} weight="fill" className="text-primary" />
              </div>
            </div>

            {/* Right: Story Content */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Quote with decorative marks */}
              <div className="relative">
                <Sparkle size={32} weight="fill" className="text-primary/30 absolute -top-2 -left-2" />
                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed pl-6">
                  <span className="text-foreground">Verím, že pohyb je </span>
                  <span className="gradient-text font-medium">liek</span>
                  <span className="text-foreground">, ktorý máme všetci nadosah.</span>
                </blockquote>
                <Sparkle size={32} weight="fill" className="text-primary/30 absolute -bottom-2 -right-2 transform rotate-180" />
              </div>

              {/* Signature */}
              <p className="text-lg text-muted-foreground pl-6">
                <span className="font-medium text-foreground">— Gabi</span>, zakladateľka NeoMe
              </p>

              {/* Brief intro */}
              <div className="space-y-4 pl-6 pt-2">
                <p className="text-base leading-relaxed">
                  <strong className="font-medium text-foreground">15+ rokov skúseností</strong> v tanci a tréningu. 
                  Sama som prešla materstvom a hľadaním rovnováhy medzi všetkými rolami, ktoré žena zohráva.
                </p>
                <p className="text-base leading-relaxed">
                  Vytvorila som NeoMe pre <span className="font-medium text-foreground gradient-text">skutočné ženy s reálnymi životmi</span> – 
                  pre tie, ktoré chcú byť silné, ale aj pokojné. Pre tie, ktoré si zaslúžia caring prístup k wellbeingu.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 pl-6">
                <Button 
                  asChild
                  size="lg"
                  className="group hover:scale-105 transition-transform"
                >
                  <Link to="/o-nas">
                    PREČÍTAJ SI MÔJ PRÍBEH
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};