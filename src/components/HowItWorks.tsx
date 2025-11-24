import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Dumbbell, Brain, UtensilsCrossed, Users, Sparkles } from "lucide-react";
import lifestyleCoreExercise from "@/assets/lifestyle-core-exercise.jpg";
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
  return <section id="ako-to-funguje" className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      {/* Core Exercise Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lifestyleCoreExercise} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-base backdrop-blur-sm bg-background/80">
            <Sparkles className="inline-block w-4 h-4 mr-2" />
            Všetko na jednom mieste
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Jeden program.<br />
            <span className="gradient-text font-normal text-4xl md:text-7xl">Celá tvoja transformácia.</span>
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
                className="p-8 rounded-2xl border-border/30 hover:border-primary/50 transition-all relative overflow-hidden backdrop-blur-md bg-background/70 hover:bg-background/80 shadow-xl hover:shadow-2xl group"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Subtle gradient overlay on card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-30 -z-10`} />
              </Card>
            );
          })}
        </div>

        {/* Clear Value Proposition */}
        
      </div>
    </section>;
};