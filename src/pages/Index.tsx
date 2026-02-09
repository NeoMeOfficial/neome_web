import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-yoga.jpg";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ProgramsScroll } from "@/components/ProgramsScroll";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ProfessionalRecommendations } from "@/components/ProfessionalRecommendations";
import { PricingComparison } from "@/components/PricingComparison";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FounderStory } from "@/components/FounderStory";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { PromoBanner } from "@/components/PromoBanner";
import { Star as StarIcon } from "lucide-react";

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("");
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
      <GoogleReviews className="bg-white" />

      {/* Professional Recommendations Section */}
      <ProfessionalRecommendations />


      {/* Programs Section */}
      <ProgramsScroll className="bg-white" />

      {/* Pricing Section */}
      <PricingComparison className="bg-[#f1ede4]" />

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