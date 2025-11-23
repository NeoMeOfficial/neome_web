import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { Star, Play, Heart, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-yoga.jpg";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import appMockupMind from "@/assets/app-mockup-mind.png";
import appMockupExtras from "@/assets/app-mockup-extras.png";
import appMockupCommunity from "@/assets/app-mockup-community.png";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ProgramsScroll } from "@/components/ProgramsScroll";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ProfessionalRecommendations } from "@/components/ProfessionalRecommendations";
import { PricingComparison } from "@/components/PricingComparison";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FounderStory } from "@/components/FounderStory";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { PromoBanner } from "@/components/PromoBanner";
import { Apple, Star as StarIcon, Download, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const touchStartX = useRef<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("");
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const isMobile = useIsMobile();
  const features = [{
    title: "Cvičenie",
    subheading: "5-15 minútové tréningy prispôsobené tvojmu rytmu a cieľom",
    desc: "Tréningy na požiadanie, ktoré sa prispôsobia tvojmu denníku. Cvičenia zamerané na ženské telo: spevnenie brušného korzetu, zlepšenie metabolizmu a mobility. Vďaka krátkym tréningom už nemáš výhovorky – nájdeš si čas aj vtedy, keď si myslíš, že ho nemáš.",
    image: appMockup1,
    link: "/cvicenie"
  }, {
    title: "Strava",
    subheading: "Jednoduché recepty pre hormonálnu rovnováhu a trvalú energiu",
    desc: "Jednoduché a chutné recepty, ktoré zvládne celá rodina. Žiadne počítanie kalórií ani drastické obmedzenia. Zameraj sa na podporu hormonálnej rovnováhy, stabilnú energiu cez celý deň a jedlo, ktoré ťa naozaj zasýti a potešĺ.",
    image: appMockup2,
    link: "/strava"
  }, {
    title: "Myseľ",
    subheading: "Denné meditácie a dychové cvičenia pre mentálny pokoj",
    desc: "Krátke meditácie a dychové cvičenia na okamžité upokojenie mysle – aj keď máš len 3 minúty. Každý deň ti pripomíname, že si dosť presne taká, aká si. Získaj nástroje, ktoré ti pomôžu zvládnuť stres a vrátiť sa do svojho centra.",
    image: appMockupMind,
    link: "/mysel"
  }, {
    title: "Extras",
    subheading: "Špeciálne programy, výzvy a exkluzívny obsah pre tvoj rast",
    desc: "Prístup k špeciálnym programom, výzvám a exkluzívnemu obsahu. Nájdeš tu dodatočné nástroje pre tvoju osobnú transformáciu – od špeciálnych workoutov až po tematické výzvy, ktoré ťa posunú ďalej.",
    image: appMockupExtras,
    link: "/extras"
  }, {
    title: "Komunita",
    subheading: "Pripoj sa k tisíckam žien na podobnej transformačnej ceste",
    desc: "Pripoj sa k tisíckam žien, ktoré sú na podobnej ceste ako ty. Zdieľaj svoje úspechy, nájdi inšpiráciu v príbehoch ostatných a cíť podporu komunity, ktorá ťa povzbudí aj v náročnejších dňoch. Spolu to ide lepšie.",
    image: appMockupCommunity,
    link: "/komunita"
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-blur-in");
        }
      });
    }, {
      threshold: 0.1
    });
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  const openVideoModal = (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setIsVideoModalOpen(true);
  };
  return <div className="min-h-screen bg-white text-foreground">
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Floating CTA Button */}
      <FloatingCTA />

      {/* Video Player Modal */}
      <VideoPlayerModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoId={currentVideoId} videoTitle={currentVideoTitle} />

      {/* HERO Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 px-0 md:px-4 overflow-hidden shadow-lg" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* Subtle gradient overlay for text readability */}
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
              Sila v každom<br />
              <span className="text-white font-normal">krátkom momente.</span>
            </h1>
            
            <p className="text-lg md:text-2xl mb-4 font-light text-white">
              Holistický wellbeing pre skutočné ženy.<br />
              Silnejšie telo, pokojnejšia myseľ.
            </p>
            
            <p className="text-lg text-white/90 mb-8 font-light">
              Bez viny, bez extrémov.
            </p>

            {/* Primary CTA */}
            <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground group hover:bg-primary/20 hover:backdrop-blur-md hover:border-primary/30 border border-transparent transition-all duration-300 mb-6">
              STIAHNUŤ APLIKÁCIU TERAZ
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Secondary CTA */}
            <p className="text-white/90 mb-6 text-sm">
              Vyskúšaj zadarmo 7 dní. Žiadna platobná karta potrebná.
            </p>

          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Google Reviews Carousel */}
      <GoogleReviews />

      {/* Professional Recommendations Section */}
      <ProfessionalRecommendations />

      {/* What's in the App - Timeline Section */}
      <section id="o-aplikacii" ref={addToRefs} className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-section-white to-transparent opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Čo nájdeš v aplikácii
            </Badge>
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Tvoja kompletná cesta k <span className="gradient-text font-normal">lepšiemu ja</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Všetko, čo potrebuješ pre telo, myseľ a ducha – na jednom mieste
            </p>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24 relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />

            {/* Item 1 - Right */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:text-right md:pr-12">
                <div className="inline-block md:float-right">
                  <Badge className="mb-4">Cvičenie</Badge>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Programy šité <span className="gradient-text font-normal">na mieru</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Od post-partum po body-forming. Každý program je navrhnutý tak, aby rešpektoval tvoje telo a životnú fázu.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>15-30 minútové tréningy</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Pre všetky úrovne</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Žiadne vybavenie</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Heart size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Nemusíš sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel."
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 2 - Left */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:col-start-2 md:pl-12">
                <Badge className="mb-4">Strava</Badge>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Zdravé recepty <span className="gradient-text font-normal">pre reálny život</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jednoduché, chutné recepty, ktoré pripravíš aj s deťmi okolo. Bez extrémov, s láskyplným prístupom k strave.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Rýchle a jednoduché</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Pre celú rodinu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>S nutričnými hodnotami</span>
                  </li>
                </ul>
              </div>
              <div className="relative md:row-start-1 md:col-start-1">
                <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Sparkle size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Konečne recepty, ktoré sú zdravé, ale jednoduché. A moje deti ich jedia!"
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 3 - Right */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:text-right md:pr-12">
                <div className="inline-block md:float-right">
                  <Badge className="mb-4">Myseľ</Badge>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Vnútorný pokoj <span className="gradient-text font-normal">každý deň</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Meditácie, dychové cvičenia a mindfulness techniky, ktoré ti pomôžu nájsť kľud aj v chaose každodenného života.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Vedené meditácie</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Dychové cvičenia</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>5-15 minút</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Heart size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Meditácie mi pomohli nájsť pokoj, ktorý som stratila. Už sa necítim tak preťažená."
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 4 - Left */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:col-start-2 md:pl-12">
                <Badge className="mb-4">Komunita</Badge>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Nie si v tom <span className="gradient-text font-normal">sama</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pripoj sa k tisíckam žien, ktoré sa navzájom podporujú, inšpirujú a vytvárajú priestor bez súdenia.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Súkromná FB skupina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Live Q&A s Gabi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Vzájomná podpora</span>
                  </li>
                </ul>
              </div>
              <div className="relative md:row-start-1 md:col-start-1">
                <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Sparkle size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Komunita je najlepšia časť. Konečne som našla ženy, ktoré ma chápú."
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 5 - Right */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:text-right md:pr-12">
                <div className="inline-block md:float-right">
                  <Badge className="mb-4">Extras</Badge>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Doplnkové cvičenia a strečing
                  </h3>
                </div>
              </div>
              <div className="md:col-start-2">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground leading-relaxed">
                    Rozšír si svoj tréning o špecializované cvičenia na posilnenie, mobilitu a strečing. 
                    Objavuj nové cvičebné postupy, ktoré doplnia tvoju rutinu a pomôžu ti dosiahnuť tvoje ciele rýchlejšie a efektívnejšie.
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 6 - Left */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:col-start-2 md:pl-12">
                <Badge className="mb-4">Denné návyky</Badge>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Denník návykov a reflexií
                </h3>
              </div>
              <div className="md:col-start-1 md:row-start-1">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground leading-relaxed">
                    Buduj si zdravé návyky a sleduj svoj pokrok s denným denníkom. 
                    Zapisuj si reflexie, sleduj svoje pocity a vytváraj si priestor pre osobný rast. 
                    Malé každodenné kroky vedú k veľkým zmenám.
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 7 - Right */}
            <motion.div className="relative grid md:grid-cols-2 gap-8 items-center" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <div className="md:text-right md:pr-12">
                <div className="inline-block md:float-right">
                  <Badge className="mb-4">Periodka</Badge>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Sledovanie menštruačného cyklu
                  </h3>
                </div>
              </div>
              <div className="md:col-start-2">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Jednoducho a anonymne sleduj svoju periodu. Vždy budeš vedieť, čo ťa čaká a lepšie porozumieš svojmu telu.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5" />
                      <span>Sleduj svoj cyklus a príznaky</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5" />
                      <span>Pochop svoje príznaky</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5" />
                      <span>Personalizované odporúčania</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5" />
                      <span>Anonymný režim pre súkromie</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <ProgramsScroll />

      {/* Pricing Section */}
      <PricingComparison />

      {/* Comparison Section */}
      

      {/* Founder Story Section */}
      <FounderStory />

      {/* Proof & Guarantee Section */}
      

      {/* FAQ Section */}
      <section id="faq" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
              Máš otázky? Máme odpovede.
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  Ako funguje predplatné a môžem ho kedykoľvek zrušiť?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Predplatné sa automaticky obnovuje každý mesiac/kvartál/rok podľa zvoleného plánu. Môžeš ho zrušiť kedykoľvek v nastaveniach aplikácie a budeš mať prístup až do konca plateného obdobia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  Ako funguje vaša záruka vrátenia peňazí?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ak v priebehu prvých 30 dní zistíš, že NeoMe nie je pre teba, kontaktuj nás a vrátime ti peniaze. Žiadne otázky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  K čomu mám prístup s predplatným?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  S predplatným získaš neobmedzený prístup ku všetkým tréningom, receptom, meditáciám a exkluzívnemu obsahu. Každý týždeň pridávame nový obsah a budeš mať prístup ku celej knižnici.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  Aký je rozdiel medzi predplatným a programami?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Predplatné ti dáva prístup ku všetkému obsahu v aplikácii. Programy sú špeciálne 6-8 týždňové cielené plány, ktoré si môžu existujúci predplatitelia zakúpiť ako bonus pre špecifické ciele.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  Je aplikácia vhodná aj pre ženy, ktoré nie sú mamičky?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Áno! NeoMe je pre všetky ženy, ktoré chcú zlepšiť svoj wellbeing. Naše programy sú prispôsobené rôznym životným situáciám a cieľom.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  Môžem cvičiť s minimálnym vybavením?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Určite! Väčšina našich tréningov nevyžaduje žiadne špeciálne vybavenie. Niektoré programy využívajú len odporové gumy alebo činky, ale nie je to povinné.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
                <AccordionTrigger className="text-left font-light hover:no-underline">
                  Ako dlho trvajú tréningy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Naše tréningy trvajú 5-15 minút. Veríme, že aj krátky čas venovaný sebe je lepší ako žiadny. Môžeš ich robiť kedykoľvek počas dňa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={addToRefs} className="py-16 md:py-20 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="rounded-3xl shadow-xl p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
            
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Pamätaj, že na tebe záleží.
            </h2>
            <p className="text-xl mb-10 text-muted-foreground leading-relaxed">
              Každá transformácia začína jediným rozhodnutím.<br />
              Tým rozhodnutím môžeš byť ty. Teraz.
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light">
              Neo<span className="gradient-text font-medium">Me</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Ochrana údajov</a>
              <a href="#" className="hover:text-foreground transition-colors">Obchodné podmienky</a>
              <a href="/kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 NeoMe. Všetky práva vyhradené.
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;