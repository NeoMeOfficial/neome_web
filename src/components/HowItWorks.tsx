import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Stiahni aplikáciu",
      description: "Začni zadarmo s prístupom k základným cvičeniam, receptom a meditáciám. Žiadna platobná karta nie je potrebná.",
      features: ["Dostupné na iOS aj Android", "Bezplatná registrácia", "Žiadne záväzky"],
      color: "bg-primary/10 text-primary"
    },
    {
      number: "02",
      title: "Vyber si svoju cestu",
      description: "Rozhodni sa, čo ti vyhovuje – ostať v bezplatnej verzii alebo získať plný prístup k všetkým funkciám.",
      features: [
        "Free: Obmedzený prístup",
        "Mesačne: 1 program + neobmedzený obsah",
        "Kvartálne: 2 programy + všetko",
        "Ročne: Neobmedzené programy"
      ],
      color: "bg-accent/30 text-primary"
    },
    {
      number: "03",
      title: "Začni svoju transformáciu",
      description: "Venuj si každý deň 15 minút. Sleduj svoj pokrok, pripoj sa ku komunite a začni sa cítiť lepšie už po prvom týždni.",
      features: ["Denné pripomienky", "Sledovanie pokroku", "Komunitná podpora"],
      color: "bg-secondary text-primary"
    }
  ];

  return (
    <section id="ako-to-funguje" className="py-16 md:py-20 px-0 md:px-4 bg-section-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Jednoduché ako 1-2-3
          </Badge>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Ako <span className="gradient-text font-normal">NeoMe funguje</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tvoja cesta k lepšiemu wellbeingu začína v troch jednoduchých krokoch
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10" />

          {steps.map((step, index) => {
            return (
              <Card
                key={index}
                className="relative p-4 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-border/20"
              >
                {/* Step number badge - larger and more prominent */}
                <div className="mb-6">
                  <div className={`${step.color} rounded-full w-16 h-16 flex items-center justify-center font-semibold text-2xl shadow-md`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {step.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Access levels explanation */}
        <Card className="mt-12 p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Bezplatná verzia</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Obmedzený prístup k cvičeniam, receptom a meditáciám</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ideálne na vyskúšanie aplikácie</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Prémiový prístup</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Mesačne:</strong> 1 program + neobmedzený obsah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Kvartálne:</strong> 2 programy + všetko</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Ročne:</strong> Neobmedzené programy + doživotný prístup</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
