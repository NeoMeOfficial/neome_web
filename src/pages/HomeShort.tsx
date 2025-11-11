import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { Star, Play, Apple, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-yoga.jpg";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import appMockupMind from "@/assets/app-mockup-mind.png";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PromoBanner } from "@/components/PromoBanner";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const HomeShort = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("");
  
  const openVideoModal = (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <PromoBanner />
      <FloatingCTA />
      
      <VideoPlayerModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={currentVideoId}
        videoTitle={currentVideoTitle}
      />

      {/* HERO Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center pt-20 px-4 overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl animate-slide-up relative z-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                <Sparkle size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-light">4000+ žien už začalo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-light">230 5★ recenzií</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-white">
              Sila v každom<br />
              <span className="text-white font-normal">krátkom momente.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-light text-white">
              Holistický wellbeing pre skutočné ženy.<br />
              Silnejšie telo, pokojnejšia myseľ.
            </p>
            
            <p className="text-lg text-white/90 mb-8 font-light">
              Bez viny, bez extrémov. Len 15 minút denne.
            </p>

            <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground group hover:bg-primary/90 transition-all duration-300 mb-6">
              STIAHNUŤ APLIKÁCIU TERAZ
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-white/90 mb-6 text-sm">
              Vyskúšaj zadarmo 7 dní. Žiadna platobná karta potrebná.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-3 px-6 py-3 bg-black/90 hover:bg-black text-white rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Apple size={28} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Stiahni z</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </button>
              
              <button className="inline-flex items-center gap-3 px-6 py-3 bg-black/90 hover:bg-black text-white rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Download size={28} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Získaj na</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Statement */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Si unavená. A aj tak sa snažíš...
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Každá sekunda tvojho času je cenná. U nás v NeoMe veríme, že aj <strong className="font-medium gradient-text">15 minút denne je víťazstvo</strong>.
          </p>
          <p className="text-xl font-light gradient-text">
            NeoMe sa ti prispôsobí, nie naopak.
          </p>
        </div>
      </section>

      {/* Stats - Social Proof */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-light gradient-text">4000+</div>
              <p className="text-lg text-muted-foreground">Aktívnych žien</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-light gradient-text">230</div>
              <p className="text-lg text-muted-foreground">5★ Recenzií</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl md:text-6xl font-light gradient-text">15 min</div>
              <p className="text-lg text-muted-foreground">Denne stačí</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Ako to <span className="gradient-text font-medium">funguje?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-light text-primary mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-medium mb-4">Stiahni Aplikáciu</h3>
              <p className="text-muted-foreground">
                Zadarmo na iOS aj Android. Bez záväzkov.
              </p>
            </Card>

            <Card className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-light text-primary mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-medium mb-4">Vyber Si Svoj Plán</h3>
              <p className="text-muted-foreground">
                Prispôsob si obsah podľa svojich cieľov a času.
              </p>
            </Card>

            <Card className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-light text-primary mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-medium mb-4">Začni Transformáciu</h3>
              <p className="text-muted-foreground">
                15 minút denne. Viditeľné výsledky za 4 týždne.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features - 3 Pillars */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            Všetko, čo potrebuješ,<br />
            <span className="gradient-text font-medium">v jednej appke.</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Holistický prístup k wellbeingu.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img src={appMockup1} alt="Cvičenie" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-medium">Cvičenie</h3>
              <p className="text-muted-foreground">
                5-15 minútové tréningy prispôsobené tvojmu rytmu. Efektívne cvičenia pre ženské telo.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img src={appMockup2} alt="Strava" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-medium">Strava</h3>
              <p className="text-muted-foreground">
                Jednoduché recepty pre hormonálnu rovnováhu. Bez počítania kalórií.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img src={appMockupMind} alt="Myseľ" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-medium">Myseľ</h3>
              <p className="text-muted-foreground">
                Denné meditácie a dychové cvičenia. Nájdi svoj vnútorný pokoj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Combined Text + Video */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            Skutočné ženy, skutočné výsledky
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Pridaj sa k 4000+ ženám na transformačnej ceste.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Text Testimonial */}
            <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-white">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonialMartina} 
                  alt="Martina" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-lg">Martina, 34</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="hsl(var(--primary))" className="text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Po narodení druhého dieťaťa som sa cítila úplne stratená. NeoMe mi pomohlo vrátiť sa k sebe bez tlaku."
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">-8 kg</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac energie</span>
              </div>
            </Card>

            {/* Video Testimonial 1 */}
            <div 
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => openVideoModal("dQw4w9WgXcQ", "Luciin príbeh")}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <img 
                  src={testimonialLucia} 
                  alt="Lucia transformation video" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ml-1" fill="hsl(var(--primary))" />
                  </div>
                  <p className="text-white font-medium mt-4 text-lg">Lucia, 29</p>
                </div>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div 
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => openVideoModal("dQw4w9WgXcQ", "Zuzanina premena")}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <img 
                  src={testimonialZuzana} 
                  alt="Zuzana transformation video" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ml-1" fill="hsl(var(--primary))" />
                  </div>
                  <p className="text-white font-medium mt-4 text-lg">Zuzana, 41</p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <Card className="bg-white border-primary/20 p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <CheckCircle size={48} weight="fill" className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-light mb-4">30-dňová záruka vrátenia peňazí</h3>
            <p className="text-muted-foreground">
              Ak v priebehu prvých 30 dní zistíš, že NeoMe nie je pre teba, vrátime ti peniaze. Žiadne otázky.
            </p>
          </Card>
        </div>
      </section>

      {/* Simplified Pricing */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Vyber si svoj <span className="gradient-text font-medium">plán</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Monthly */}
            <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-medium mb-2">Mesačný</h3>
              <div className="mb-6">
                <span className="text-4xl font-light">€9.99</span>
                <span className="text-muted-foreground">/mesiac</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Neobmedzený prístup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Všetky tréningy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Recepty & meditácie</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">ZAČAŤ</Button>
            </Card>

            {/* Yearly - Popular */}
            <Card className="p-8 rounded-2xl border-4 border-primary shadow-xl relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                Najobľúbenejší
              </div>
              <h3 className="text-2xl font-medium mb-2">Ročný</h3>
              <div className="mb-6">
                <span className="text-4xl font-light">€79.99</span>
                <span className="text-muted-foreground">/rok</span>
                <p className="text-sm text-primary font-medium">Ušetríš 33%</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Všetko z mesačného</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Exkluzívny obsah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Prioritná podpora</span>
                </li>
              </ul>
              <Button className="w-full">VYBRAŤ PLÁN</Button>
            </Card>

            {/* Quarterly */}
            <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-medium mb-2">Kvartálny</h3>
              <div className="mb-6">
                <span className="text-4xl font-light">€24.99</span>
                <span className="text-muted-foreground">/3 mesiace</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Všetko z mesačného</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ušetríš 17%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flexibilita</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">ZAČAŤ</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Compact FAQ */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            Časté otázky
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/20 rounded-xl px-6 py-1">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Môžem zrušiť predplatné kedykoľvek?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Áno, môžeš zrušiť kedykoľvek v nastaveniach aplikácie. Budeš mať prístup až do konca plateného obdobia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/20 rounded-xl px-6 py-1">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Ako funguje záruka vrátenia peňazí?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Máš 30 dní na vyskúšanie. Ak nie si spokojná, kontaktuj nás a vrátime ti peniaze. Žiadne otázky.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/20 rounded-xl px-6 py-1">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Potrebujem špeciálne vybavenie?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nie. Väčšina tréningov nevyžaduje žiadne špeciálne vybavenie. Cvičíš s vlastnou váhou.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/20 rounded-xl px-6 py-1">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Ako dlho trvajú tréningy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                5-15 minút. Veríme, že aj krátky čas venovaný sebe je lepší ako žiadny. Cvič kedykoľvek počas dňa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="rounded-3xl shadow-xl p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/20">
            <Sparkle size={56} weight="fill" className="text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Začni svoju transformáciu dnes
            </h2>
            <p className="text-xl mb-10 text-muted-foreground leading-relaxed">
              Pridaj sa k 4000+ ženám, ktoré si vybrali seba.
            </p>
            <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 mb-4">
              STIAHNI APLIKÁCIU A ZAČNI
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
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
    </div>
  );
};

export default HomeShort;
