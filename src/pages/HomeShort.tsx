import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { Star, Play, Apple, Download, Dumbbell, Baby, Zap, Crown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-yoga.jpg";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import appMockupMind from "@/assets/app-mockup-mind.png";
import appMockupExtras from "@/assets/app-mockup-extras.png";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
import postpartumImg from "@/assets/postpartum-program.jpg";
import bodyformingImg from "@/assets/bodyforming-program.jpg";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PromoBanner } from "@/components/PromoBanner";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { Link } from "react-router-dom";

const HomeShort = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("");
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "Cvičenie",
      desc: "5-15 minútové tréningy prispôsobené tvojmu rytmu a cieľom. Efektívne cvičenia zamerané na ženské telo.",
      image: appMockup1,
    },
    {
      title: "Strava",
      desc: "Jednoduché recepty pre hormonálnu rovnováhu a trvalú energiu. Žiadne počítanie kalórií.",
      image: appMockup2,
    },
    {
      title: "Myseľ",
      desc: "Denné meditácie a dychové cvičenia pre mentálny pokoj. Už len 3 minúty robia rozdiel.",
      image: appMockupMind,
    },
    {
      title: "Extras",
      desc: "Špeciálne programy, výzvy a exkluzívny obsah pre tvoj osobný rast.",
      image: appMockupExtras,
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!featureSectionRef.current) return;
      
      const rect = featureSectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        const scrollProgress = -rect.top;
        const scrollPerFeature = sectionHeight / features.length;
        const newIndex = Math.min(
          Math.floor(scrollProgress / scrollPerFeature),
          features.length - 1
        );
        setActiveFeatureIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);
  
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
              Bez viny, bez extrémov. Len 15 minút denne.
            </p>

            <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground group hover:bg-primary/90 transition-all duration-300 mb-6">
              STIAHNUŤ APLIKÁCIU TERAZ
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-white/90 mb-6 text-sm">
              Vyskúšaj zadarmo 7 dní. Žiadna platobná karta potrebná.
            </p>

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

      {/* Core Features - Interactive Scroll */}
      <div 
        ref={featureSectionRef}
        style={{ height: `${features.length * 60}vh` }}
        className="relative"
      >
        <section className="sticky top-0 min-h-screen flex items-center py-16 md:py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-7xl w-full">
            <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-[#F1EDE4] border-border/10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Dynamic Image */}
                <div className="relative flex items-center justify-center order-2 lg:order-1 h-[600px]">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                        activeFeatureIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={feature.image} 
                        alt={`NeoMe App - ${feature.title}`} 
                        className="w-72 h-auto rounded-3xl shadow-2xl"
                      />
                    </div>
                  ))}
                </div>

                {/* Right: Feature Content */}
                <div className="space-y-8 order-1 lg:order-2 min-h-[600px] flex flex-col justify-center">
                  <div className="inline-block">
                    <span className="text-sm font-medium uppercase tracking-wider text-primary relative">
                      Všetko na jednom mieste
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-light leading-tight">
                    Všetko, čo potrebuješ,<br />
                    <span className="gradient-text font-normal">v jednej appke.</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground font-light">
                    Holistický prístup k wellbeingu. Telo, myseľ a komunita.
                  </p>
                  
                  <div className="p-6 rounded-2xl border-2 border-primary/50 bg-white shadow-lg transition-all duration-700 min-h-[200px] flex flex-col">
                    <h3 className="text-2xl font-medium mb-2">{features[activeFeatureIndex].title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {features[activeFeatureIndex].desc}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex gap-2 justify-center pt-4">
                    {features.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeFeatureIndex === index 
                            ? 'w-8 bg-primary' 
                            : 'w-2 bg-primary/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* Featured Programs - 2 Key Programs */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            Štrukturované <span className="gradient-text font-medium">programy</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Pre tie, ktoré chcú cielenú transformáciu.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Postpartum Program */}
            <Card className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-rose-400 flex items-center justify-center shadow-lg">
                  <Baby size={32} className="text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full font-medium mb-2">
                    Level 1
                  </span>
                  <h3 className="text-2xl font-medium">Postpartum</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Program pre mamičky, ktoré potrebujú obnoviť silu brušného korzetu a vrátiť sa k pohybu bezpečne.
              </p>

              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-6 border-t-4 border-rose-400">
                <img 
                  src={postpartumImg} 
                  alt="Postpartum Program" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">8 týždňov</span>
                <Button className="bg-rose-400 hover:bg-rose-500 text-white">
                  ZISTI VIAC
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>

            {/* BodyForming Program */}
            <Card className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center shadow-lg">
                  <Dumbbell size={32} className="text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium mb-2">
                    Level 2
                  </span>
                  <h3 className="text-2xl font-medium">BodyForming</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Ideálne pre formovanie tela a posilnenie svalov bez špeciálneho vybavenia. Efektívne a účinné.
              </p>

              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-6 border-t-4 border-purple-400">
                <img 
                  src={bodyformingImg} 
                  alt="BodyForming Program" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">6 týždňov</span>
                <Button className="bg-purple-400 hover:bg-purple-500 text-white">
                  ZISTI VIAC
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Máme aj ďalšie programy pre pokročilé úrovne
            </p>
            <Button variant="outline" size="lg">
              POZRIEŤ VŠETKY PROGRAMY
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why NeoMe vs Others - Comparison */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Prečo si vybrať <span className="gradient-text font-medium">NeoMe?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-medium mb-3">Úspora času</h3>
              <p className="text-muted-foreground mb-4">
                Len 15 minút denne namiesto hodín v posilňovni.
              </p>
              <p className="text-sm text-primary font-medium">Žiadne výhovorky</p>
            </Card>

            <Card className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-medium mb-3">Z pohodlia domova</h3>
              <p className="text-muted-foreground mb-4">
                Cvič kedykoľvek a kdekoľvek. Žiadne cestovanie.
              </p>
              <p className="text-sm text-primary font-medium">Vždy dostupné</p>
            </Card>

            <Card className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-medium mb-3">Dostupná cena</h3>
              <p className="text-muted-foreground mb-4">
                Za cenu dvoch káv mesačne. Nie stovky eur.
              </p>
              <p className="text-sm text-primary font-medium">Od €9.99/mesiac</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Story - Compact Version */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-5xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 bg-white border-border/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <p className="text-foreground/60 text-center px-8">
                    [Gabi - zakladateľka]
                  </p>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <Sparkle size={32} weight="fill" className="text-primary" />
                
                <blockquote className="text-2xl font-light italic leading-relaxed">
                  <span className="text-foreground">Verím, že pohyb je </span>
                  <span className="gradient-text font-medium">liek</span>
                  <span className="text-foreground">. Ale nie každý pohyb je liečivý.</span>
                </blockquote>

                <p className="text-lg text-muted-foreground">
                  <span className="font-medium text-foreground">— Gabi</span>, zakladateľka NeoMe
                </p>

                <p className="text-base leading-relaxed">
                  15+ rokov skúseností v tanci a tréningu. Vytvorila som NeoMe pre skutočné ženy s reálnymi životmi – 
                  pre tie, ktoré chcú byť silné, ale aj pokojné.
                </p>

                <Button asChild size="lg" variant="outline">
                  <Link to="/o-nas">
                    PREČÍTAJ SI MÔJ PRÍBEH
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials - Expanded with 4 stories */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            Skutočné ženy, skutočné výsledky
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Pridaj sa k 4000+ ženám na transformačnej ceste.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* Text Testimonial 1 */}
            <Card className="p-6 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-white">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonialMartina} 
                  alt="Martina" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Martina, 34</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="hsl(var(--primary))" className="text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                "Po pôrode som sa cítila stratená. NeoMe mi pomohlo vrátiť sa k sebe."
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">-8 kg</span>
              </div>
            </Card>

            {/* Text Testimonial 2 */}
            <Card className="p-6 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-white">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonialZuzana} 
                  alt="Zuzana" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">Zuzana, 41</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="hsl(var(--primary))" className="text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                "Meditácie zmenili môj prístup k životu. Už sa nenechám rozhodiť."
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Pokoj</span>
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
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <CheckCircle size={48} weight="fill" className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-light mb-4">30-dňová záruka vrátenia peňazí</h3>
            <p className="text-muted-foreground">
              Ak nie si spokojná, vrátime ti peniaze. Žiadne otázky.
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
