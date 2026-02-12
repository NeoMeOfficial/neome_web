import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

import testimonialWorkout from "@/assets/testimonial-workout.jpg";
import testimonialRecipe from "@/assets/testimonial-recipe.jpg";
import testimonialMeditation from "@/assets/testimonial-meditation.jpg";
import testimonialCommunity from "@/assets/testimonial-community.png";
import testimonialExtras from "@/assets/testimonial-extras.jpg";
import testimonialJournal from "@/assets/testimonial-journal.jpg";
import testimonialPeriod from "@/assets/testimonial-period.jpg";

const appFeatures = [
{
  id: "cvicenie",
  number: "01",
  badge: "Cvičenie",
  title: "Online programy",
  highlight: "pre busy ženy",
  description: "Či už si po pôrode alebo ideš do plaviek. Každý zo 4 programov je navrhnutý tak, aby rešpektoval tvoje telo a životnú fázu.",
  features: ["15-30 minútové tréningy", "Pre všetky úrovne", "Žiadne vybavenie"],
  quote: "Venovať si 15-min nie je veľa.  Keď to je však pravidelne - každý deň, má to fantastické účinky na moje telo aj myseľ.",
  image: testimonialWorkout,
  link: "/cvicenie"
},
{
  id: "strava",
  number: "02",
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
  number: "03",
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
  number: "04",
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
  number: "05",
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
  number: "06",
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
  number: "07",
  badge: "Periodka",
  title: "Sledovanie",
  highlight: "menštruačného cyklu",
  description: "Jednoducho a anonymne sleduj svoju periodu. Vždy budeš vedieť, čo ťa čaká a lepšie porozumieš svojmu telu.",
  features: ["Anonymné sledovanie", "Predpovede cyklu", "Pochopenie tela"],
  quote: "Vždy budeš vedieť, čo ťa čaká a lepšie porozumieš svojmu telu.",
  image: testimonialPeriod,
  link: "/extras"
}];


export const AppOverview = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">Čo v aplikácii nájdeš
          </Badge>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">Komplexnú starostlivosť o tvoje telo a myseľ.
          </p>
          <h2 className="text-4xl md:text-6xl font-light mb-2">Buduj svoju
            <span className="gradient-text font-normal"> Novú Ja</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6"><span className="gradient-text font-normal">Silnú – Zdravú – Sebavedomú</span></h3>
        </div>

        {/* All features stacked */}
        <div className="space-y-12 md:space-y-16">
          {appFeatures.map((feature, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <div key={feature.id} className="space-y-6">
                {/* Editorial Section Header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-end gap-4 md:gap-6">

                  <span className="text-6xl md:text-8xl font-extralight text-primary/15 leading-none">
                    {feature.number}
                  </span>
                  <div className="flex items-center gap-4 flex-1 pb-2">
                    <span className="text-2xl md:text-3xl font-light text-foreground whitespace-nowrap">
                      {feature.badge}
                    </span>
                    <div className="h-px bg-border flex-1" />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>

                <Card className="overflow-hidden border-border/20 bg-white shadow-xl rounded-3xl">
                  <div className={`grid lg:grid-cols-2 ${!imageFirst ? "lg:[direction:rtl]" : ""}`}>
                    {/* Image Side */}
                    <div className="relative h-[300px] lg:h-[480px] overflow-hidden lg:[direction:ltr]">
                      <img
                          src={feature.image}
                          alt={feature.badge}
                          className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/40" />

                      {/* Quote overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <blockquote className="text-primary text-lg md:text-xl font-light italic leading-relaxed drop-shadow-lg">
                          "{feature.quote}"
                        </blockquote>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center lg:[direction:ltr]">

                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight">
                        {feature.title}{" "}
                        <span className="gradient-text font-normal">{feature.highlight}</span>
                      </h3>

                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {feature.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {feature.features.map((feat, i) =>
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check size={14} className="text-primary" />
                            </div>
                            <span className="text-foreground">{feat}</span>
                          </div>
                          )}
                      </div>

                      {/* CTA Button */}
                      <Button asChild size="lg" className="w-fit">
                        <a href={feature.link}>
                          Zistiť viac
                          <ArrowRight size={18} className="ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
                </motion.div>
              </div>);

          })}
        </div>
      </div>
    </section>);

};