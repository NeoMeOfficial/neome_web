import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-yoga.jpg";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ProgramsScroll } from "@/components/ProgramsScroll";

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

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

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
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
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl animate-slide-up relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm mb-6">
              <Sparkle size={16} weight="fill" className="text-primary" />
              <span className="text-sm font-light">4000 žien už začalo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-white">
              Sila v Každom<br />
              <span className="gradient-text font-normal">Krátkom Momente.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-light text-white">
              Holistický wellbeing pre skutočné ženy.<br />
              Silnejšie telo, pokojnejšia myseľ.
            </p>
            
            <p className="text-lg text-white/90 mb-10 font-light">
              Bez viny, bez extrémov.
            </p>

            <Button size="lg" className="neuro-button text-base px-8 py-6 bg-primary text-primary-foreground group">
              🔥 STIAHNUŤ APLIKÁCIU A ZAČAŤ ZDARMA
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section id="empatia" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-3xl shadow-xl p-10 md:p-16 text-center bg-white border-border/10">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Si unavená. A aj tak sa snažíš...
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Viem to. Každá sekunda tvojho času je cenná a snaha nájsť čas na seba je často zdrojom stresu, nie radosti.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              U nás v NeoMe veríme, že aj <strong className="font-medium gradient-text">15 minút denne je víťazstvo</strong>. Nie je to o dokonalosti. Je to o tvojom rozhodnutí, že si to zaslúžiš.
            </p>
            <p className="text-xl font-light gradient-text">
              NeoMe sa ti prispôsobí, nie naopak.
            </p>
          </Card>
        </div>
      </section>

      {/* Proof & Guarantee Section */}
      <section id="dokaz" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
              Už <span className="gradient-text font-normal">4000 Žien</span> Pocítilo Ten Rozdiel.
            </h2>

            <GoogleReviews placeId="ChIJuw32973k-4wR1REI2QTcpNk" />

            <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 p-8 md:p-10 rounded-2xl text-center">
              <CheckCircle size={48} weight="fill" className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-light mb-4">Nulové Riziko. Pocit, že to funguje.</h3>
              <p className="text-lg max-w-2xl mx-auto">
                S našou <strong className="font-medium">zárukou vrátenia peňazí do 30 dní</strong> neriskuješ nič. 
                Dáme ti čas na to, aby si pocítila, ako sa meníš.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Holistic Value Section */}
      <section id="o-aplikacii" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-7xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-[#F1EDE4] border-border/10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: App Mockups */}
              <div className="relative flex items-center justify-center gap-6 order-2 lg:order-1 lg:sticky lg:top-24 self-start">
              <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={appMockup1} 
                  alt="NeoMe App - Workout Screen" 
                  className="w-64 h-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="relative z-20 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={appMockup2} 
                  alt="NeoMe App - Nutrition Screen" 
                  className="w-64 h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right: Content + Accordion */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Small highlight tag */}
              <div className="inline-block">
                <span className="text-sm font-medium uppercase tracking-wider text-primary relative">
                  Všetko na jednom mieste
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                </span>
              </div>
              
              {/* Large headline */}
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Všetko, čo potrebuješ,<br />
                <span className="gradient-text font-normal">v jednej Appke.</span>
              </h2>
              
              {/* Subheading */}
              <p className="text-lg text-muted-foreground font-light">
                Holistický prístup k wellbeingu. Telo, myseľ a komunita v jednej aplikácii.
              </p>
              
              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    title: "Cvičenie",
                    subheading: "5-15 minútové tréningy prispôsobené tvojmu rytmu a cieľom",
                    desc: "Tréningy na požiadanie, ktoré sa prispôsobia tvojmu denníku. Cvičenia zamerané na ženské telo: spevnenie brušného korzetu, zlepšenie metabolizmu a mobility. Vďaka krátkym tréningom už nemáš výhovorky – nájdeš si čas aj vtedy, keď si myslíš, že ho nemáš."
                  },
                  {
                    title: "Strava",
                    subheading: "Jednoduché recepty pre hormonálnu rovnováhu a trvalú energiu",
                    desc: "Jednoduché a chutné recepty, ktoré zvládne celá rodina. Žiadne počítanie kalórií ani drastické obmedzenia. Zameraj sa na podporu hormonálnej rovnováhy, stabilnú energiu cez celý deň a jedlo, ktoré ťa naozaj zasýti a potešĺ."
                  },
                  {
                    title: "Myseľ",
                    subheading: "Denné meditácie a dychové cvičenia pre mentálny pokoj",
                    desc: "Krátke meditácie a dychové cvičenia na okamžité upokojenie mysle – aj keď máš len 3 minúty. Každý deň ti pripomíname, že si dosť presne taká, aká si. Získaj nástroje, ktoré ti pomôžu zvládnuť stres a vrátiť sa do svojho centra."
                  },
                  {
                    title: "Extras",
                    subheading: "Špeciálne programy, výzvy a exkluzívny obsah pre tvoj rast",
                    desc: "Prístup k špeciálnym programom, výzvam a exkluzívnemu obsahu. Nájdeš tu dodatočné nástroje pre tvoju osobnú transformáciu – od špeciálnych workoutov až po tematické výzvy, ktoré ťa posunú ďalej."
                  },
                  {
                    title: "Komunita",
                    subheading: "Pripoj sa k tisíckam žien na podobnej transformačnej ceste",
                    desc: "Pripoj sa k tisíckam žien, ktoré sú na podobnej ceste ako ty. Zdieľaj svoje úspechy, nájdi inšpiráciu v príbehoch ostatných a cíť podporu komunity, ktorá ťa povzbudí aj v náročnejších dňoch. Spolu to ide lepšie."
                  }
                ].map((pillar, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i + 1}`}
                    className="border-2 border-border/30 rounded-xl px-6 py-1 bg-white/50 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="text-left flex-1 pr-4">
                        <h3 className="text-xl font-medium mb-1">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">
                          {pillar.subheading}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4 pt-0">
                      {pillar.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <ProgramsScroll />

      {/* Pricing Section */}
      <section id="ceny" ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
              Začni Zadarmo.
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              Pokračuj s Hodnotou, Ktorú Cítiš.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Free Tier */}
              <Card className="p-8 border-2 border-border/20 hover:border-primary/40 transition-all rounded-2xl shadow-md bg-white">
              <h3 className="text-2xl font-medium mb-2">Zadarmo</h3>
              <p className="text-sm text-muted-foreground mb-6">Prístup k základom aplikácie</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ukážkové tréningy a recepty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Bez časového obmedzenia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Vyskúšaj, či je NeoMe pre teba</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                STIAHNUŤ ZDARMA
              </Button>
            </Card>

              {/* Subscription Tier - RECOMMENDED */}
              <Card className="p-8 border-2 border-primary shadow-xl rounded-2xl relative overflow-hidden bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                ODPORÚČANÉ
              </div>
              
              <h3 className="text-2xl font-medium mb-2">Predplatné</h3>
              <p className="text-sm text-muted-foreground mb-2">Kvartálne (Ušetri 25%)</p>
              <p className="text-3xl font-light mb-6">
                <span className="gradient-text font-medium">€XX</span>/3 mesiace
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Neobmedzený prístup ku všetkým 4 pilierom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Nový obsah každý týždeň</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prístup k celej knižnici</span>
                </li>
              </ul>

              <Button className="w-full neuro-button bg-primary text-primary-foreground">
                PRIHLÁSIŤ SA
              </Button>
            </Card>

              {/* Programs Tier */}
              <Card className="p-8 border-2 border-border/20 hover:border-primary/40 transition-all rounded-2xl shadow-md bg-white">
              <h3 className="text-2xl font-medium mb-2">Programy</h3>
              <p className="text-sm text-muted-foreground mb-6">Individuálne Zakúpenie</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">6-8 týždňové cielené plány</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">K dispozícii pre existujúcich predplatiteľov</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Jednorazová platba</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                POZRIEŤ PROGRAMY
              </Button>
              </Card>
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
                Je aplikácia vhodná aj pre ženy, ktoré nie sú mamičky?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Áno! NeoMe je pre všetky ženy, ktoré chcú zlepšiť svoj wellbeing. Naše programy sú prispôsobené rôznym životným situáciám a cieľom.
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
                Môžem cvičiť s minimálnym vybavením?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Určite! Väčšina našich tréningov nevyžaduje žiadne špeciálne vybavenie. Niektoré programy využívajú len odporové gumy alebo činky, ale nie je to povinné.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Ako dlho trvajú tréningy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Naše tréningy trvajú 5-15 minút. Veríme, že aj krátky čas venovaný sebe je lepší ako žiadny. Môžeš ich robiť kedykoľvek počas dňa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border/20 rounded-xl px-6 py-1 backdrop-blur-sm hover:border-border/40 transition-all">
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
      <section ref={addToRefs} className="py-12 md:py-16 px-4 md:px-8 opacity-0">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="rounded-3xl shadow-xl p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Pamätaj, že na tebe záleží.
            </h2>
            <p className="text-xl mb-10 text-muted-foreground">
              Začni ešte dnes.
            </p>
            <Button size="lg" className="neuro-button text-base px-8 py-6 bg-primary text-primary-foreground">
              🔥 STIAHNUŤ APLIKÁCIU A ZÍSKAŤ POKOJ
            </Button>
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