import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Dumbbell, Brain, UtensilsCrossed, Users, Sparkles } from "lucide-react";
export const HowItWorks = () => {
  const holisticBenefits = [{
    icon: Dumbbell,
    title: "Cvičenie pre každú ženu",
    description: "Profesionálne programy navrhnuté pre ženy v každom období života",
    features: ["Tehotenstvo a poôrodné cvičenia", "Bodyforming a posilňovanie", "Cvičenia s gumou", "Joga a strečing"],
    color: "from-primary/10 to-primary/5"
  }, {
    icon: UtensilsCrossed,
    title: "Výživa pre tvoje ciele",
    description: "Chutné recepty a jedálničky prispôsobené tvojmu životnému štýlu",
    features: ["Zdravé a jednoduché recepty", "Plány stravovania", "Nutričné tipy", "Prispôsobené potrebám žien"],
    color: "from-accent/20 to-accent/10"
  }, {
    icon: Brain,
    title: "Starostlivosť o myseľ",
    description: "Meditácie a techniky pre vnútorný pokoj a mentálnu pohodu",
    features: ["Denné meditácie", "Relaxačné techniky", "Manažment stresu", "Spánkové rituály"],
    color: "from-secondary/30 to-secondary/10"
  }, {
    icon: Users,
    title: "Komunita žien",
    description: "Nebud' v tom sama – pripoj sa k ženám, ktoré to chápu",
    features: ["Vzájomná podpora", "Zdieľanie skúseností", "Motivácia a inšpirácia", "Spoločné výzvy"],
    color: "from-primary/15 to-accent/10"
  }];
  return <section id="ako-to-funguje" className="py-16 md:py-20 px-0 md:px-4 bg-section-white">
      <div className="container mx-auto max-w-6xl pb-0">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-base">
            <Sparkles className="inline-block w-4 h-4 mr-2" />
            Všetko na jednom mieste
          </Badge>
          <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Jeden program.<br />
            <span className="gradient-text font-normal text-4xl md:text-6xl">Celá tvoja transformácia.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pb-0">
            NeoMe je kompletný holistický program pre ženy. Cvičenie, výživa, mentálna pohoda a podpora komunity – všetko v jednej aplikácii. Žiadne skákanie medzi aplikáciami, žiadne hľadanie. Len ty a tvoja cesta k lepšiemu životu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {holisticBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className={`p-8 rounded-2xl border-border/20 hover:border-primary/30 transition-all relative overflow-hidden bg-gradient-to-br ${benefit.color}`}>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Clear Value Proposition */}
        
      </div>
    </section>;
};