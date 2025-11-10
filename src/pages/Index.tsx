import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/10">
      {/* HERO Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto max-w-5xl text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkle size={16} weight="fill" className="text-primary" />
            <span className="text-sm font-light">4000 žien už začalo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Sila v Každom<br />
            <span className="gradient-text font-normal">Krátkom Momente.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-light">
            Holistický wellbeing pre skutočné ženy.<br />
            Silnejšie telo, pokojnejšia myseľ.
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 font-light">
            Bez viny, bez extrémov.
          </p>

          <Button size="lg" className="neuro-button text-base px-8 py-6 bg-primary text-primary-foreground group">
            🔥 STIAHNUŤ APLIKÁCIU A ZAČAŤ ZDARMA
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Empathy Section */}
      <section id="empatia" ref={addToRefs} className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card p-10 md:p-16 text-center">
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
      <section id="dokaz" ref={addToRefs} className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Už <span className="gradient-text font-normal">4000 Žien</span> Pocítilo Ten Rozdiel.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                text: "Prvý program, ktorý som naozaj dokončila! Konečne niečo, čo zvládnem s deťmi okolo. Cítim sa silná a sebavedomá.",
                author: "Mamička, 32 rokov",
                tag: "Diastáza vyriešená"
              },
              {
                text: "Nemám čas na fitko, ale 10 minút strečingu mi zmenilo rána. NeoMe je môj kotviaci bod pokoja.",
                author: "Jana, 38 rokov",
                tag: "Väčší rešpekt k sebe"
              },
              {
                text: "Prestala som sa súdiť za to, že 'nestíham'. Zameriavam sa na pocit, nie na váhu. Ďakujem.",
                author: "Zuzana, 45 rokov",
                tag: "Konečne vnútorný pokoj"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <p className="text-base mb-4 flex-grow italic">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-medium text-sm mb-1">— {testimonial.author}</p>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary inline-block">
                      {testimonial.tag}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="glass-card p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-accent/10">
            <CheckCircle size={48} weight="fill" className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-light mb-4">Nulové Riziko. Pocit, že to funguje.</h3>
            <p className="text-lg max-w-2xl mx-auto">
              S našou <strong className="font-medium">zárukou vrátenia peňazí do 30 dní</strong> neriskuješ nič. 
              Dáme ti čas na to, aby si pocítila, ako sa meníš.
            </p>
          </Card>
        </div>
      </section>

      {/* Holistic Value Section */}
      <section id="o-aplikacii" ref={addToRefs} className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
            Telo, Myseľ a Energia:
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Všetko, čo potrebuješ, v jednej Appke.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧘‍♀️",
                title: "Pohyb",
                desc: "5-15 minútové tréningy na požiadanie. Cvičenia sú zamerané na ženské telo: spevnenie jadra, metabolizmus a mobilitu. Bez výhovoriek, bez tlaku."
              },
              {
                emoji: "🥗",
                title: "Výživa",
                desc: "Recepty a jedálničky pre celú rodinu. Žiadne obmedzenia. Zameranie na hormonálnu rovnováhu a energiu."
              },
              {
                emoji: "💭",
                title: "Myseľ",
                desc: "Krátke meditácie a dychové cvičenia pre okamžité upokojenie. Denná motivácia, ktorá ti pripomenie, že si dosť."
              },
              {
                emoji: "🩸",
                title: "Tracker",
                desc: "Cyklus a Návyková denník. Sleduj náladu, spánok a pohyb. Ukážeme ti, ako sa mení tvoj pocit, nie len tvoje miery."
              }
            ].map((pillar, i) => (
              <Card key={i} className="glass-card p-6 hover:scale-105 transition-transform group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{pillar.emoji}</div>
                <h3 className="text-xl font-medium mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programy" ref={addToRefs} className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
            Chceš Cielenú Transformáciu?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-4">
            Vyber si Štrukturovaný Program.
          </p>
          <p className="text-center max-w-3xl mx-auto mb-16 text-muted-foreground">
            Tieto 6-8 týždňové programy sú voliteľné doplnky k tvojmu predplatnému. 
            Sú navrhnuté pre hlbšiu, garantovanú zmenu, ak si pripravená ísť na cieľ.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Postpartum",
                desc: "Pre mamičky. Obnovenie sily jadra a riešenie diastázy.",
                duration: "8 týždňov"
              },
              {
                title: "BodyForming",
                desc: "Ideálne pre formovanie tela a posilnenie svalov bez špeciálneho vybavenia.",
                duration: "6 týždňov"
              },
              {
                title: "ElasticBands",
                desc: "Tréning s odporovými gumami pre svalovú definíciu a silu.",
                duration: "6 týždňov"
              },
              {
                title: "Strong & Sexy",
                desc: "Pokročilý program pre kompletnú transformáciu tela a sebavedomia.",
                duration: "8 týždňov"
              }
            ].map((program, i) => (
              <Card key={i} className="glass-card p-8 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium">{program.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    {program.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{program.desc}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  ZISTI VIAC
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ceny" ref={addToRefs} className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
            Začni Zadarmo.
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Pokračuj s Hodnotou, Ktorú Cítiš.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <Card className="glass-card p-8">
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
            <Card className="glass-card p-8 border-2 border-primary relative">
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
            <Card className="glass-card p-8">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={addToRefs} className="py-20 px-4 opacity-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Máš otázky? Máme odpovede.
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-card px-6 border-0">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Je aplikácia vhodná aj pre ženy, ktoré nie sú mamičky?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Áno! NeoMe je pre všetky ženy, ktoré chcú zlepšiť svoj wellbeing. Naše programy sú prispôsobené rôznym životným situáciám a cieľom.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-card px-6 border-0">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Ako funguje vaša záruka vrátenia peňazí?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ak v priebehu prvých 30 dní zistíš, že NeoMe nie je pre teba, kontaktuj nás a vrátime ti peniaze. Žiadne otázky.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-card px-6 border-0">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Môžem cvičiť s minimálnym vybavením?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Určite! Väčšina našich tréningov nevyžaduje žiadne špeciálne vybavenie. Niektoré programy využívajú len odporové gumy alebo činky, ale nie je to povinné.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-card px-6 border-0">
              <AccordionTrigger className="text-left font-light hover:no-underline">
                Ako dlho trvajú tréningy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Naše tréningy trvajú 5-15 minút. Veríme, že aj krátky čas venovaný sebe je lepší ako žiadny. Môžeš ich robiť kedykoľvek počas dňa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="glass-card p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/20">
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