import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

        {/* Program Cards */}
        {individualPrograms.map((program, index) => (
          <Card key={index} className="rounded-3xl shadow-xl overflow-hidden bg-white border-border/10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
              
              {/* Left Column - Content */}
              <div className="space-y-6 flex flex-col justify-center">
                {/* Tag */}
                <div className="inline-block">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider ${program.accentColor} text-white`}>
                    {program.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl font-light text-foreground">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 py-4">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${program.accentColor} flex items-center justify-center mt-0.5`}>
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    size="lg"
                    className={`${program.accentColor} hover:opacity-90 text-white px-8 transition-all hover:scale-105`}
                  >
                    Zisti Viac
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground text-sm">
                  {program.duration}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-md">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </div>

            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
