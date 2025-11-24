import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Dumbbell, Brain, UtensilsCrossed, Users, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const holisticBenefits = [
    {
      icon: Dumbbell,
      title: "Cvičenie pre každú ženu",
      description: "Profesionálne programy navrhnuté pre ženy v každom období života",
      features: ["Tehotenstvo a poôrodné cvičenia", "Bodyforming a posilňovanie", "Cvičenia s gumou", "Joga a strečing"],
      color: "from-primary/10 to-primary/5"
    },
    {
      icon: UtensilsCrossed,
      title: "Výživa pre tvoje ciele",
      description: "Chutné recepty a jedálničky prispôsobené tvojmu životnému štýlu",
      features: ["Zdravé a jednoduché recepty", "Plány stravovania", "Nutričné tipy", "Prispôsobené potrebám žien"],
      color: "from-accent/20 to-accent/10"
    },
    {
      icon: Brain,
      title: "Starostlivosť o myseľ",
      description: "Meditácie a techniky pre vnútorný pokoj a mentálnu pohodu",
      features: ["Denné meditácie", "Relaxačné techniky", "Manažment stresu", "Spánkové rituály"],
      color: "from-secondary/30 to-secondary/10"
    },
    {
      icon: Users,
      title: "Komunita žien",
      description: "Nebud' v tom sama – pripoj sa k ženám, ktoré to chápu",
      features: ["Vzájomná podpora", "Zdieľanie skúseností", "Motivácia a inšpirácia", "Spoločné výzvy"],
      color: "from-primary/15 to-accent/10"
    }
  ];

  return (
    <section id="ako-to-funguje" className="py-16 md:py-20 px-0 md:px-4 bg-section-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-base">
            <Sparkles className="inline-block w-4 h-4 mr-2" />
            Všetko na jednom mieste
          </Badge>
          <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Jeden program.<br />
            <span className="gradient-text font-normal text-4xl md:text-6xl">Celá tvoja transformácia.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NeoMe je kompletný holistický program pre ženy. Cvičenie, výživa, mentálna pohoda a podpora komunity – všetko v jednej aplikácii. Žiadne skákanie medzi aplikáciami, žiadne hľadanie. Len ty a tvoja cesta k lepšiemu životu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {holisticBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`relative p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${benefit.color} border-border/20 overflow-hidden group`}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {benefit.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {benefit.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={2} />
                        <span className="text-foreground/90 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Clear Value Proposition */}
        <Card className="mt-12 md:mt-16 p-6 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          <div className="relative text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-light mb-6">
              Prečo sa rozhodovať medzi aplikáciami, keď môžeš mať <span className="gradient-text font-medium">všetko naraz</span>?
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Iné ženy používajú 5-7 aplikácií na to, čo ty nájdeš v jednej. Menej chaosu. Viac výsledkov. Všetko synchronized pre tvoj holistický wellbeing.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">1</div>
                <div className="text-sm text-muted-foreground">Aplikácia namiesto 5-7</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">4</div>
                <div className="text-sm text-muted-foreground">Oblasti wellbeingu pokryté</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Holistický prístup k zdraviu</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
