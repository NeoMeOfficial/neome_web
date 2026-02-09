import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Import images
import testimonialWorkout from "@/assets/testimonial-workout.jpg";
import testimonialRecipe from "@/assets/testimonial-recipe.jpg";
import testimonialMeditation from "@/assets/testimonial-meditation.jpg";
import testimonialCommunity from "@/assets/testimonial-community.png";
import testimonialExtras from "@/assets/testimonial-extras.jpg";
import testimonialJournal from "@/assets/testimonial-journal.jpg";
import testimonialPeriod from "@/assets/testimonial-period.jpg";

interface AppFeature {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  quote: string;
  image: string;
  link: string;
}

const appFeatures: AppFeature[] = [
  {
    id: "cvicenie",
    badge: "Cvičenie",
    title: "Programy šité",
    highlight: "na mieru",
    description: "Od post-partum po body-forming. Každý program je navrhnutý tak, aby rešpektoval tvoje telo a životnú fázu.",
    features: ["15-30 minútové tréningy", "Pre všetky úrovne", "Žiadne vybavenie"],
    quote: "Nemusíš sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel.",
    image: testimonialWorkout,
    link: "/cvicenie"
  },
  {
    id: "strava",
    badge: "Strava",
    title: "Zdravé recepty pre",
    highlight: "reálny život",
    description: "Jednoduché, chutné recepty, ktoré pripravíš aj s deťmi okolo. Bez extrémov, s láskyplným prístupom k strave.",
    features: ["Rýchle a jednoduché", "Pre celú rodinu", "S nutričnými hodnotami"],
    quote: "Konečne recepty, ktoré sú zdravé, ale jednoduché. A moje deti ich jedia!",
    image: testimonialRecipe,
    link: "/strava"
  },
  {
    id: "mysel",
    badge: "Myseľ",
    title: "Vnútorný pokoj",
    highlight: "každý deň",
    description: "Meditácie, dychové cvičenia a mindfulness techniky, ktoré ti pomôžu nájsť kľud aj v chaose každodenného života.",
    features: ["Vedené meditácie", "Dychové cvičenia", "5-15 minút"],
    quote: "Meditácie mi pomohli nájsť pokoj, ktorý som stratila. Už sa necítim tak preťažená.",
    image: testimonialMeditation,
    link: "/mysel"
  },
  {
    id: "komunita",
    badge: "Komunita",
    title: "Nie si v tom",
    highlight: "sama",
    description: "Pripoj sa k tisíckam žien, ktoré sa navzájom podporujú, inšpirujú a vytvárajú priestor bez súdenia.",
    features: ["Súkromná FB skupina", "Live Q&A s Gabi", "Vzájomná podpora"],
    quote: "Komunita je najlepšia časť. Konečne som našla ženy, ktoré ma chápú.",
    image: testimonialCommunity,
    link: "/komunita"
  },
  {
    id: "extras",
    badge: "Extras",
    title: "Doplnkové cvičenia",
    highlight: "a strečing",
    description: "Rozšír si svoj tréning o špecializované cvičenia na posilnenie, mobilitu a strečing.",
    features: ["Špecializované workouty", "Mobilita a flexibilita", "Bonusový obsah"],
    quote: "Rozšír si svoj tréning o špecializované cvičenia na posilnenie, mobilitu a strečing.",
    image: testimonialExtras,
    link: "/extras"
  },
  {
    id: "navyky",
    badge: "Denné návyky",
    title: "Denník návykov",
    highlight: "a reflexií",
    description: "Buduj si zdravé návyky a sleduj svoj pokrok s denným denníkom. Malé každodenné kroky vedú k veľkým zmenám.",
    features: ["Sledovanie pokroku", "Denné reflexie", "Motivácia"],
    quote: "Malé každodenné kroky vedú k veľkým zmenám.",
    image: testimonialJournal,
    link: "/extras"
  },
  {
    id: "periodka",
    badge: "Periodka",
    title: "Sledovanie",
    highlight: "menštruačného cyklu",
    description: "Jednoducho a anonymne sleduj svoju periodu. Vždy budeš vedieť, čo ťa čaká a lepšie porozumieš svojmu telu.",
    features: ["Anonymné sledovanie", "Predpovede cyklu", "Pochopenie tela"],
    quote: "Vždy budeš vedieť, čo ťa čaká a lepšie porozumieš svojmu telu.",
    image: testimonialPeriod,
    link: "/extras"
  }
];

export const AppOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = appFeatures[activeIndex];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            Čo v aplikácii nájdeš
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Všetko pre tvoju <span className="gradient-text font-normal">transformáciu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komplexná starostlivosť o telo, myseľ a ducha – navrhnutá pre skutočné ženy
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {appFeatures.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeIndex === index
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {feature.badge}
            </button>
          ))}
        </div>

        {/* Feature Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="overflow-hidden border-border/20 bg-white shadow-xl rounded-3xl">
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.badge}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/40" />
                  
                  {/* Quote overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <blockquote className="text-primary text-lg md:text-xl font-light italic leading-relaxed drop-shadow-lg">
                      "{activeFeature.quote}"
                    </blockquote>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-0">
                    {activeFeature.badge}
                  </Badge>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight">
                    {activeFeature.title}{" "}
                    <span className="gradient-text font-normal">{activeFeature.highlight}</span>
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {activeFeature.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {activeFeature.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button asChild size="lg" className="w-fit">
                    <a href={activeFeature.link}>
                      Zistiť viac
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots - Mobile */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {appFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              )}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
