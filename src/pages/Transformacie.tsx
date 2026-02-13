import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
import lifestyleYogaMat from "@/assets/lifestyle-yoga-mat.webp";
import lifestyleCoreWorkout from "@/assets/lifestyle-core-workout.jpg";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

import lauraBefore from "@/assets/transformation-laura-before.jpg";
import lauraAfter from "@/assets/transformation-laura-after.jpg";
import anonBefore from "@/assets/transformation-anon-before.jpg";
import anonAfter from "@/assets/transformation-anon-after.jpg";
import danielkaCombined from "@/assets/transformation-danielka.png";
import eliskaCombined from "@/assets/transformation-eliska.jpg";
import katarinaCombined from "@/assets/transformation-katarina.webp";
import simonaCombined from "@/assets/transformation-simona.jpg";

type Transformation =
{type: "separate";name: string;desc: string;before: string;after: string;tags: string[];} |
{type: "combined";name: string;desc: string;image: string;tags: string[];};

const transformations: Transformation[] = [
{ type: "separate", name: "Laura", desc: "Po 4 mesiacoch s NeoMe PP a BF", before: lauraBefore, after: lauraAfter, tags: ["Postpartum program", "Bodyforming"] },
{ type: "combined", name: "Danielka", desc: "Výsledok PP po 2 mesiacoch", image: danielkaCombined, tags: ["Postpartum program", "2 mesiace"] },
{ type: "separate", name: "Klientka NeoMe", desc: "Premena s NeoMe", before: anonBefore, after: anonAfter, tags: ["Viditeľné výsledky"] },
{ type: "combined", name: "Eliška", desc: "Premena s NeoMe", image: eliskaCombined, tags: ["Pevnejšie telo"] },
{ type: "combined", name: "Katarína", desc: "Progres s NeoMe", image: katarinaCombined, tags: ["Viditeľný progres"] },
{ type: "combined", name: "Simona", desc: "Postpartum premena", image: simonaCombined, tags: ["Postpartum program"] }];


const Transformacie = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {emblaApi.off("select", onSelect);};
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen">
      {/* Carousel and content sections */}


      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Transformácie
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-3 leading-[1.1]">
              Skutočné ženy,<br /><span className="gradient-text font-normal">skutočné výsledky</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Nie rýchle zmeny za krátky čas,<br />
              ale udržateľné zmeny, ktoré s tebou ostanú.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 md:py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/5 h-1/3 opacity-[0.05] z-0 hidden xl:block">
          <img src={lifestyleYogaMat} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
        <div className="absolute right-0 top-0 w-1/5 h-1/3 opacity-[0.05] z-0 hidden xl:block">
          <img src={lifestyleCoreWorkout} alt="" className="w-full h-full object-cover rounded-bl-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-12">
              Príbehy, ktoré inšpirujú
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonialMartina} alt="Martina" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-medium text-lg">Martina, 34</h3>
                    <p className="text-sm text-muted-foreground">Mamička dvoch detí</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Po narodení druhého dieťaťa som sa cítila úplne stratená. NeoMe mi pomohlo vrátiť sa k sebe bez tlaku a výčitiek. Prvýkrát sa cítim silná v tele aj v mysli."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">-8 kg</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepší spánok</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac energie</span>
                </div>
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonialLucia} alt="Lucia" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-medium text-lg">Lucia, 29</h3>
                    <p className="text-sm text-muted-foreground">Kariérna žena</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Nemusím sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel. Konečne som našla niečo, čo sa hodí do môjho rýchleho života."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Menej stresu</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pevnejšie telo</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac sebavedomia</span>
                </div>
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonialZuzana} alt="Zuzana" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-medium text-lg">Zuzana, 41</h3>
                    <p className="text-sm text-muted-foreground">Podnikateľka</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Meditácie a dychové cvičenia zmenili môj prístup k životu. Už sa nenechám tak ľahko rozhodiť a mám viac energie na rodinu aj biznis. Je to o celej mne, nie len o cvičení."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pokojnejšia myseľ</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepšia koncentrácia</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac radosti</span>
                </div>
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Pridaj sa k <span className="gradient-text font-medium">4000+ ženám</span>, ktoré už zmenili svoj život.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform">
                PRIDAJ SA K TISÍCKAM ŽIEN
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Before/After Transformations Carousel */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-accent/10 border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
              Pozri si premeny našich klientiek
            </h2>

            <div className="relative">
              {/* Carousel */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                  {transformations.map((t, i) =>
                  <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card className="rounded-2xl overflow-hidden shadow-lg border-border/20">
                      {t.type === "separate" ?
                      <div className="flex aspect-[4/5] overflow-hidden">
                            <div className="relative w-1/2">
                              <img src={t.before} alt={`${t.name} pred`} className="w-full h-full object-cover saturate-[0.85] brightness-[0.95] contrast-[1.05]" />
                              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
                              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                              <span className="absolute bottom-2 left-2 bg-foreground/80 text-background text-xs font-medium px-2 py-1 rounded z-10">PRED</span>
                            </div>
                            <div className="relative w-1/2">
                              <img src={t.after} alt={`${t.name} po`} className="w-full h-full object-cover saturate-[0.85] brightness-[0.95] contrast-[1.05]" />
                              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
                              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                              <span className="absolute bottom-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded z-10">PO</span>
                            </div>
                          </div> :

                      <div className="relative aspect-[4/5] overflow-hidden">
                            <img src={t.image} alt={`${t.name} premena`} className="w-full h-full object-cover object-top saturate-[0.85] brightness-[0.95] contrast-[1.05]" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                          </div>
                      }
                        <div className="p-4 min-h-[100px]">
                          <h3 className="font-medium text-base">{t.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{t.desc}</p>
                          <div className="flex gap-1.5 flex-wrap">
                            {t.tags.map((tag, j) =>
                          <span key={j} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{tag}</span>
                          )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors z-10">

                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors z-10">

                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, i) =>
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === selectedIndex ? 'bg-primary' : 'bg-primary/20'}`} />

              )}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                POZRIEŤ VŠETKY PRÍBEHY
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
      {/* Real Women Section - Quote Cards */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-section-white/50 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Pre <span className="gradient-text font-normal">skutočné ženy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">a reálny život medzi varením, prácou a únavou.

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Aj keď si to dnes nedala naplno – dala si zo seba všetko, čo si mala. <span className="font-medium text-foreground">A to je dosť.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Začni tam, kde si. <span className="font-medium text-foreground">Aj 15 minút sa počíta.</span> Nehľadaj ideálny deň. Začni v ten, ktorý máš."
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Tvoje tempo je správne tempo. <span className="font-medium text-foreground">Nikto iný nemá tvoj život.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Dnes nemáš energiu? Tak si daj len strečing. <span className="font-medium text-foreground">Aj to sa počíta.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Neporovnávaj sa s nikým. <span className="font-medium text-foreground">Ty si svoj vlastný štandard.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Nie si lenivá. Si unavená. <span className="font-medium text-foreground">A aj tak si tu.</span> To je odvaha."
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Starostlivosť o seba nie je sebeckosť. <span className="font-medium text-foreground">Je to nutnosť.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Každý deň je nový začiatok. <span className="font-medium text-foreground">Včerajšok nemusíš naprávať.</span> Stačí začať dnes."
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-20 px-4 md:px-8">
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
    </div>);

};

export default Transformacie;