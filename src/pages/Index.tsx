import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { Star, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-yoga.jpg";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import appMockupMind from "@/assets/app-mockup-mind.png";
import appMockupExtras from "@/assets/app-mockup-extras.png";
import appMockupCommunity from "@/assets/app-mockup-community.png";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ProgramsScroll } from "@/components/ProgramsScroll";
import { FloatingCTA } from "@/components/FloatingCTA";
import { StatsShowcase } from "@/components/StatsShowcase";
import { ProfessionalRecommendations } from "@/components/ProfessionalRecommendations";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingComparison } from "@/components/PricingComparison";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FounderStory } from "@/components/FounderStory";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { PromoBanner } from "@/components/PromoBanner";
import { Apple, Star as StarIcon, Download } from "lucide-react";

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

  const features = [
    {
      title: "Cvičenie",
      subheading: "5-15 minútové tréningy prispôsobené tvojmu rytmu a cieľom",
      desc: "Tréningy na požiadanie, ktoré sa prispôsobia tvojmu denníku. Cvičenia zamerané na ženské telo: spevnenie brušného korzetu, zlepšenie metabolizmu a mobility. Vďaka krátkym tréningom už nemáš výhovorky – nájdeš si čas aj vtedy, keď si myslíš, že ho nemáš.",
      image: appMockup1,
      link: "/cvicenie"
    },
    {
      title: "Strava",
      subheading: "Jednoduché recepty pre hormonálnu rovnováhu a trvalú energiu",
      desc: "Jednoduché a chutné recepty, ktoré zvládne celá rodina. Žiadne počítanie kalórií ani drastické obmedzenia. Zameraj sa na podporu hormonálnej rovnováhy, stabilnú energiu cez celý deň a jedlo, ktoré ťa naozaj zasýti a potešĺ.",
      image: appMockup2,
      link: "/strava"
    },
    {
      title: "Myseľ",
      subheading: "Denné meditácie a dychové cvičenia pre mentálny pokoj",
      desc: "Krátke meditácie a dychové cvičenia na okamžité upokojenie mysle – aj keď máš len 3 minúty. Každý deň ti pripomíname, že si dosť presne taká, aká si. Získaj nástroje, ktoré ti pomôžu zvládnuť stres a vrátiť sa do svojho centra.",
      image: appMockupMind,
      link: "/mysel"
    },
    {
      title: "Extras",
      subheading: "Špeciálne programy, výzvy a exkluzívny obsah pre tvoj rast",
      desc: "Prístup k špeciálnym programom, výzvám a exkluzívnemu obsahu. Nájdeš tu dodatočné nástroje pre tvoju osobnú transformáciu – od špeciálnych workoutov až po tematické výzvy, ktoré ťa posunú ďalej.",
      image: appMockupExtras,
      link: "/extras"
    },
    {
      title: "Komunita",
      subheading: "Pripoj sa k tisíckam žien na podobnej transformačnej ceste",
      desc: "Pripoj sa k tisíckam žien, ktoré sú na podobnej ceste ako ty. Zdieľaj svoje úspechy, nájdi inšpiráciu v príbehoch ostatných a cíť podporu komunity, ktorá ťa povzbudí aj v náročnejších dňoch. Spolu to ide lepšie.",
      image: appMockupCommunity,
      link: "/komunita"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-blur-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!featureSectionRef.current) return;
      
      const rect = featureSectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      
      // Calculate scroll progress within the section
      if (rect.top <= 0 && rect.bottom > 0) {
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

  // Touch/swipe gesture support for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!featureSectionRef.current) return;

      const rect = featureSectionRef.current.getBoundingClientRect();
      const isInSection = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isInSection) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - touchEndY;
      const deltaX = touchStartX.current - touchEndX;

      // Check if it's primarily a vertical swipe (not horizontal)
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          // Swiped up - next feature
          setActiveFeatureIndex(prev => Math.min(prev + 1, features.length - 1));
        } else {
          // Swiped down - previous feature
          setActiveFeatureIndex(prev => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [features.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!featureSectionRef.current) return;

      const rect = featureSectionRef.current.getBoundingClientRect();
      const isInSection = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isInSection) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveFeatureIndex(prev => Math.min(prev + 1, features.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveFeatureIndex(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [features.length]);

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

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Floating CTA Button */}
      <FloatingCTA />

      {/* Video Player Modal */}
      <VideoPlayerModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={currentVideoId}
        videoTitle={currentVideoTitle}
      />

      {/* HERO Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center pt-20 px-0 md:px-4 overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
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

      {/* Empathy Section */}
      <section id="empatia" ref={addToRefs} className="py-12 md:py-16 px-0 md:px-8 opacity-0 bg-section-beige">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-3xl shadow-xl p-4 md:p-16 text-center bg-primary border-0">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
              Si unavená. A aj tak sa snažíš...
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-white opacity-90">
              Viem to. Každá sekunda tvojho času je cenná a snaha nájsť čas na seba je často zdrojom stresu, nie radosti.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-white opacity-90">
              U nás v NeoMe veríme, že aj <strong className="font-medium text-white">15 minút denne je víťazstvo</strong>. Nie je to o dokonalosti. Je to o tvojom rozhodnutí, že si to zaslúžiš.
            </p>
            <p className="text-xl font-light text-white">
              NeoMe sa ti prispôsobí, nie naopak.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Showcase Section */}
      <StatsShowcase />

      {/* Professional Recommendations Section */}
      <ProfessionalRecommendations />

      {/* Holistic Value Section - Scroll Spacer Container */}
      <div 
        ref={(el) => {
          addToRefs(el);
          if (el) featureSectionRef.current = el as HTMLDivElement;
        }}
        style={{ height: `${features.length * 150}vh` }}
        className="relative opacity-0"
      >
        {/* Sticky Content */}
        <section 
          id="o-aplikacii" 
          className="sticky top-0 min-h-screen flex items-center py-12 md:py-16 px-0 md:px-8"
        >
          <div className="container mx-auto max-w-7xl w-full">
            <Card className="rounded-3xl shadow-xl p-3 md:p-12 lg:p-16 bg-[#F1EDE4] border-border/10">
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

                {/* Right: Single Card */}
                <div className="space-y-8 order-1 lg:order-2 min-h-[600px] flex flex-col justify-center">
                  {/* Small highlight tag */}
                  <div className="inline-block">
                    <span className="text-sm font-medium uppercase tracking-wider text-primary relative">
                      Všetko na jednom mieste
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                    </span>
                  </div>
                  
                  {/* Large headline */}
                  <h2 className="text-3xl md:text-5xl font-light leading-tight">
                    Všetko, čo potrebuješ,<br />
                    <span className="gradient-text font-normal">v jednej appke.</span>
                  </h2>
                  
                  {/* Subheading */}
                  <p className="text-lg text-muted-foreground font-light mb-2">
                    Holistický prístup k wellbeingu. Telo, myseľ a komunita v jednej aplikácii.
                  </p>
                  
                  {/* Notebook-style Tabs Container */}
                  <div className="relative">
                    {/* Tabs - Behind the card */}
                    <div className="flex gap-1 items-end relative z-0 pb-0">
                      {features.map((feature, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFeatureIndex(index)}
                          className={`
                            relative px-3 md:px-5 py-2 md:py-3 text-xs md:text-sm font-medium 
                            transition-all duration-300 cursor-pointer
                            rounded-t-xl border-t border-x
                            backdrop-blur-sm
                            ${activeFeatureIndex === index 
                              ? 'bg-white/40 text-primary border-white/30 shadow-[0_-3px_10px_rgba(0,0,0,0.04)]' 
                              : 'bg-white/20 text-muted-foreground border-white/20 hover:bg-white/30 hover:text-foreground'
                            }
                          `}
                        >
                          <span className="block truncate max-w-[60px] md:max-w-none whitespace-nowrap">
                            {feature.title}
                          </span>
                        </button>
                      ))}
                    </div>
                    
                    {/* Feature Card - Glass morphism on top */}
                    <div className="relative z-10 -mt-[1px] p-6 md:p-8 rounded-2xl border border-white/30 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-700 min-h-[320px] flex flex-col">
                      {/* Glass shine effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Animated content wrapper */}
                      <div key={activeFeatureIndex} className="animate-fade-in relative z-10">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
                          {features[activeFeatureIndex].title}
                        </h3>
                        <p className="text-sm md:text-base text-primary font-medium mb-4">
                          {features[activeFeatureIndex].subheading}
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                          {features[activeFeatureIndex].desc}
                        </p>
                      </div>
                      
                      <Button 
                        asChild
                        className="relative z-10 w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all backdrop-blur-sm"
                      >
                        <a href={features[activeFeatureIndex].link}>
                          Chcem vedieť viac
                          <ArrowRight size={16} className="ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* Programs Section */}
      <ProgramsScroll />

      {/* Pricing Section */}
      <PricingComparison />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Founder Story Section */}
      <FounderStory />

      {/* Proof & Guarantee Section */}
      <section id="dokaz" ref={addToRefs} className="py-12 md:py-16 px-0 md:px-8 opacity-0 bg-section-beige">
        <div className="container mx-auto max-w-6xl">
          <Card className="rounded-3xl shadow-xl p-4 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-12">
              Už <span className="gradient-text font-normal">4000 žien</span> pocítilo ten rozdiel.
            </h2>

            <GoogleReviews />

            <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 p-8 md:p-10 rounded-2xl text-center">
              <CheckCircle size={48} weight="fill" className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-light mb-4">Nulové riziko. Pocit, že to funguje.</h3>
              <p className="text-lg max-w-2xl mx-auto">
                S našou <strong className="font-medium">zárukou vrátenia peňazí do 30 dní</strong> neriskuješ nič. 
                Dáme ti čas na to, aby si pocítila, ako sa meníš.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <section id="testimonials" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-7xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-4">
              Príbehy, ktoré inšpirujú
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-16">
              Skutočné ženy, skutočné výsledky.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonialMartina} 
                    alt="Martina" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">Martina, 34</h3>
                    <p className="text-sm text-muted-foreground">Mamička dvoch detí</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Po narodení druhého dieťaťa som sa cítila úplne stratená. NeoMe mi pomohlo vrátiť sa k sebe bez tlaku a výčitiek. Prvýkrát sa cítim silná v tele aj v mysli."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">-8 kg</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepší spánok</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac energie</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button 
                    variant="outline" 
                    className="bg-white text-primary hover:bg-white/90 border-white"
                  >
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonialLucia} 
                    alt="Lucia" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">Lucia, 29</h3>
                    <p className="text-sm text-muted-foreground">Kariérna žena</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Nemusím sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel. Konečne som našla niečo, čo sa hodí do môjho rýchleho života."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Menej stresu</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pevnejšie telo</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac sebavedomia</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button 
                    variant="outline" 
                    className="bg-white text-primary hover:bg-white/90 border-white"
                  >
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonialZuzana} 
                    alt="Zuzana" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">Zuzana, 41</h3>
                    <p className="text-sm text-muted-foreground">Podnikateľka</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Meditácie a dychové cvičenia zmenili môj prístup k životu. Už sa nenechám tak ľahko rozhodiť a mám viac energie na rodinu aj biznis. Je to o celej mne, nie len o cvičení."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pokojnejšia myseľ</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepšia koncentrácia</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac radosti</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button 
                    variant="outline" 
                    className="bg-white text-primary hover:bg-white/90 border-white"
                  >
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

      {/* Video Testimonials Section */}
      <section id="video-testimonials" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-7xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-accent/10 border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
              Pozri ich transformácie
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              Nech ich príbehy ťa inšpirujú k vlastnej zmene.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video Card 1 */}
              <div 
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openVideoModal("dQw4w9WgXcQ", "Martinina cesta - Ako som stratila 8 kg")}
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <img 
                    src={testimonialMartina} 
                    alt="Martina transformation video" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-primary ml-1" fill="hsl(var(--primary))" />
                    </div>
                    <p className="text-white font-medium mt-4 text-lg">Martinina cesta</p>
                    <p className="text-white/80 text-sm">3:45</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">
                    Ako som stratila 8 kg a získala energiu
                  </p>
                </div>
              </div>

              {/* Video Card 2 */}
              <div 
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openVideoModal("dQw4w9WgXcQ", "Luciin príbeh - 15 minút denne")}
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
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
                    <p className="text-white font-medium mt-4 text-lg">Luciin príbeh</p>
                    <p className="text-white/80 text-sm">2:30</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">
                    15 minút denne, ktoré zmenili môj život
                  </p>
                </div>
              </div>

              {/* Video Card 3 */}
              <div 
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openVideoModal("dQw4w9WgXcQ", "Zuzanina premena - Od vyhorenia k pokoju")}
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
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
                    <p className="text-white font-medium mt-4 text-lg">Zuzanina premena</p>
                    <p className="text-white/80 text-sm">4:15</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">
                    Od vyhorenia k vnútornému pokoju
                  </p>
                </div>
              </div>
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
            <Sparkle size={56} weight="fill" className="text-primary mx-auto mb-6" />
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
    </div>
  );
};

export default Index;