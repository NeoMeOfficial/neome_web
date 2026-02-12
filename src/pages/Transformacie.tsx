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

import t1Before from "@/assets/transformation-1-before.jpg";
import t1After from "@/assets/transformation-1-after.jpg";
import t2Before from "@/assets/transformation-2-before.jpg";
import t2After from "@/assets/transformation-2-after.jpg";
import t3Before from "@/assets/transformation-3-before.jpg";
import t3After from "@/assets/transformation-3-after.jpg";
import t4Before from "@/assets/transformation-4-before.jpg";
import t4After from "@/assets/transformation-4-after.jpg";
import t5Before from "@/assets/transformation-5-before.jpg";
import t5After from "@/assets/transformation-5-after.jpg";
import t6Before from "@/assets/transformation-6-before.jpg";
import t6After from "@/assets/transformation-6-after.jpg";

const transformations = [
  { name: "Martina, 34", desc: "Po 3 mesiacoch cvičenia", before: t1Before, after: t1After, tags: ["-8 kg", "Viac energie"] },
  { name: "Lucia, 29", desc: "Po 4 mesiacoch s NeoMe", before: t2Before, after: t2After, tags: ["Pevnejšie telo", "Menej stresu"] },
  { name: "Zuzana, 41", desc: "Po 6 mesiacoch pravidelnosti", before: t3Before, after: t3After, tags: ["Lepšia kondícia", "Pokojnejšia myseľ"] },
  { name: "Katarína, 36", desc: "Po 5 mesiacoch tréningov", before: t4Before, after: t4After, tags: ["-6 kg", "Silnejší core"] },
  { name: "Jana, 38", desc: "Po 4 mesiacoch s aplikáciou", before: t5Before, after: t5After, tags: ["Lepší spánok", "Viac sebavedomia"] },
  { name: "Petra, 32", desc: "Po 3 mesiacoch zmeny", before: t6Before, after: t6After, tags: ["-5 kg", "Zdravšie návyky"] },
];

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
    return () => { emblaApi.off("select", onSelect); };
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
                  {transformations.map((t, i) => (
                    <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card className="rounded-2xl overflow-hidden shadow-lg border-border/20">
                        <div className="flex">
                          {/* Before */}
                          <div className="relative w-1/2">
                            <img src={t.before} alt={`${t.name} pred`} className="w-full aspect-[3/4] object-cover" />
                            <span className="absolute top-2 left-2 bg-foreground/80 text-background text-xs font-medium px-2 py-1 rounded">PRED</span>
                          </div>
                          {/* After */}
                          <div className="relative w-1/2">
                            <img src={t.after} alt={`${t.name} po`} className="w-full aspect-[3/4] object-cover" />
                            <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">PO</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-base">{t.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{t.desc}</p>
                          <div className="flex gap-1.5 flex-wrap">
                            {t.tags.map((tag, j) => (
                              <span key={j} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === selectedIndex ? 'bg-primary' : 'bg-primary/20'}`}
                />
              ))}
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nie inštagram fotky. Ale reálny život medzi varením, e-mailami, únavou a túžbou byť chvíľu sama.
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
    </div>);

};

export default Transformacie;