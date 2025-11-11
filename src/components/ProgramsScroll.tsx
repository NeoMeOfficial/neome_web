import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";
import postpartumImg from "@/assets/postpartum-program.jpg";
import bodyformingImg from "@/assets/bodyforming-program.jpg";
import elasticbandsImg from "@/assets/elasticbands-program.jpg";
import strongsexyImg from "@/assets/strongsexy-program.jpg";

const individualPrograms = [
  {
    level: "Level 1",
    tag: "Obnova Po Pôrode",
    title: "Postpartum",
    description: "Program pre mamičky, ktoré potrebujú obnoviť silu brušného korzetu, riešiť diastázu a vrátiť sa k pohybu bezpečne a postupne.",
    features: [
      "Špeciálne cvičenia pre posilnenie brušného korzetu",
      "Bezpečný návrat k pohybu po pôrode",
      "Riešenie diastázy pod vedením expertov"
    ],
    duration: "8 týždňov",
    image: postpartumImg,
    accentColor: "bg-[hsl(35,45%,65%)]" // Warm gold accent
  },
  {
    level: "Level 2",
    tag: "Formovanie Tela",
    title: "BodyForming",
    description: "Ideálne pre formovanie tela a posilnenie svalov bez špeciálneho vybavenia. Zameraj sa na svaly, ktoré chceš definovať.",
    features: [
      "Efektívny tréning s vlastnou váhou",
      "Cielené formovanie problémových partií",
      "Žiadne špeciálne vybavenie potrebné"
    ],
    duration: "6 týždňov",
    image: bodyformingImg,
    accentColor: "bg-[hsl(15,35%,68%)]"
  },
  {
    level: "Level 3",
    tag: "Odporové Pásy",
    title: "ElasticBands",
    description: "Tréning s odporovými gumami pre svalovú definíciu a silu. Zvýš intenzitu a dosiahni vytvarované svaly.",
    features: [
      "Profesionálny tréning s odporovými pásmi",
      "Maximálna svalová aktivácia",
      "Viditeľná definícia a sila"
    ],
    duration: "6 týždňov",
    image: elasticbandsImg,
    accentColor: "bg-[hsl(35,45%,65%)]"
  },
  {
    level: "Level 4",
    tag: "Pokročilá Transformácia",
    title: "Strong & Sexy",
    description: "Pokročilý program pre kompletnú transformáciu tela a sebavedomia. Pre ženy pripravené posunúť sa na novú úroveň.",
    features: [
      "Intenzívny pokročilý tréning",
      "Kompletná transformácia tela",
      "Maximálna sila a sebavedomie"
    ],
    duration: "8 týždňov",
    image: strongsexyImg,
    accentColor: "bg-[hsl(35,45%,65%)]"
  }
];

export const ProgramsScroll = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);
  const program = individualPrograms[selectedProgram];

  return (
    <section id="programy" className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl space-y-8 md:space-y-12">
        
        {/* Introduction Card */}
        <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Chceš Cielenú Transformáciu?
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Vyber si Štrukturovaný Program.
            </p>
            <p className="text-muted-foreground">
              Tieto 6-8 týždňové programy sú voliteľné doplnky k tvojmu predplatnému. 
              Sú navrhnuté pre hlbšiu, garantovanú zmenu, ak si pripravená ísť na cieľ.
            </p>
          </div>
        </Card>

        {/* Interactive Program Selection */}
        <Card className="rounded-3xl shadow-lg overflow-hidden bg-white border-border/5">
          <div className="flex flex-col lg:grid lg:grid-cols-[320px,1fr]">
            
            {/* Accordion Navigation - Stacked on mobile, sidebar on desktop */}
            <div className="border-b lg:border-b-0 lg:border-r border-border/10 p-6 lg:p-8 bg-muted/10">
              <h3 className="text-lg font-semibold mb-6 text-foreground">Vyber Program</h3>
              <Accordion 
                type="single" 
                collapsible 
                value={`item-${selectedProgram}`}
                onValueChange={(value) => {
                  const index = parseInt(value.split('-')[1]);
                  if (!isNaN(index)) setSelectedProgram(index);
                }}
                className="space-y-2"
              >
                {individualPrograms.map((prog, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 px-3 rounded-lg hover:bg-muted/30 data-[state=open]:bg-muted/40 transition-colors">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">{prog.level}</span>
                        <span className="text-sm font-medium text-foreground">{prog.tag}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-2">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {prog.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Selected Program Display with transition */}
            <div className="p-8 lg:p-12 xl:p-16">
              <div className="max-w-4xl mx-auto">
                <div 
                  key={selectedProgram}
                  className="grid md:grid-cols-[1fr,280px] lg:grid-cols-[1fr,320px] gap-8 lg:gap-12 animate-fade-in"
                >
                  
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Duration & Title */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-muted-foreground text-xs mb-3">
                        {program.duration}
                      </div>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-2">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${program.accentColor} flex items-center justify-center mt-0.5`}>
                            <Check size={12} className="text-white" />
                          </div>
                          <span className="text-sm text-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button 
                        size="lg"
                        className={`${program.accentColor} hover:opacity-90 text-white px-6 transition-all hover:scale-105`}
                      >
                        Zisti Viac
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative flex items-start justify-center md:justify-end">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-[280px] lg:max-w-[320px]">
                      <div className="aspect-[3/4] relative">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};
