import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, X, Dumbbell, User, Smartphone, Sparkles, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ComparisonSection = () => {
  const comparisons = [{
    icon: Dumbbell,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    number: "1",
    title: "NeoMe vs. Gym členstvo",
    competitor: "Gym členstvo",
    summary: "Šetrenie času a nákladov - cvič z pohodlia domova, kedykoľvek potrebuješ, bez mesačných poplatkov.",
    advantages: ["Šetrenie času - žiadne cestovanie, cvič kedykoľvek", "Z pohodlia domova - bez hanby či stresu z verejného priestoru", "Flexibilita - pauza kedykoľvek potrebuješ (deti, práca)", "Cenovo efektívne - žiadne mesačné vysoké poplatky", "Priateľské k mamičkám - cvič s deťmi doma"],
    disadvantages: ["Časovo náročné (cestovanie, čakanie na stroje)", "Fixné otváracie hodiny", "Sociálny tlak a porovnávanie sa", "Vysoké mesačné poplatky"]
  }, {
    icon: User,
    iconBg: "bg-accent/30",
    iconColor: "text-accent",
    number: "2",
    title: "NeoMe vs. Osobný tréner",
    competitor: "Osobný tréner",
    summary: "Expert-designed programy za zlomok ceny osobného trénera, k dispozícii 24/7 priamo v tvojom mobile.",
    advantages: ["Expert-designed programy od profesionálky s 15-ročnou praxou", "Zlomok ceny osobného trénera", "K dispozícii 24/7 - nie podľa kalendára trénera", "Vždy po ruke - v mobile, bez dohadovania termínov", "Prispôsobené špecificky ženám a mamičkám"],
    disadvantages: ["Extrémne drahé (50-100€+ za hodinu)", "Limitované časové sloty", "Nutnosť plánovať dopredu", "Nie vždy špecializovaný na ženy/mamičky"]
  }, {
    icon: Smartphone,
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
    number: "3",
    title: "NeoMe vs. Iné fitness aplikácie",
    competitor: "Iné fitness aplikácie",
    summary: "Holistický prístup v slovenskom jazyku - špecificky pre mamičky a ženy, s aktívnou komunitou.",
    advantages: ["Špecificky pre mamičky a ženy - nie generické fitness", "Holistický prístup - telo + myseľ + komunita", "V slovenskom jazyku - rozumieš každému slovu", "Aktívna komunita - podpora skutočných žien", "Hormonálna rovnováha - nie len chudnutie", "Recepty pre celú rodinu - nie extrémy", "Meditácie a mindfulness - nie len cviky"],
    disadvantages: ["Generické, pre všetkých", "Len fitness, bez holistického prístupu", "Často v angličtine", "Malá alebo žiadna komunita", "Zamerané len na kalórie a výzor"]
  }];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-section-beige">
      <div className="max-w-7xl mx-auto">
        {/* Header - Centered at top */}
        <div className="text-center mb-8">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Prečo NeoMe?
          </span>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Headings */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Prečo ženy{" "}
              <span className="gradient-text font-normal">volia NeoMe</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Porovnanie s tradičnými riešeniami - jednoduchšie, efektívnejšie, dostupnejšie pre moderné ženy a mamičky.
            </p>
          </div>

          {/* Right Side - Layered Cards with Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {comparisons.map((comparison, index) => {
                const Icon = comparison.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-none"
                  >
                    <Card className="overflow-hidden border border-border/20 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <AccordionTrigger className="hover:no-underline px-6 py-5 [&[data-state=open]]:bg-primary/5">
                        <div className="flex items-center gap-4 w-full">
                          {/* Number Badge */}
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                            {comparison.number}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 text-left">
                            <h3 className="text-lg md:text-xl font-medium mb-1">
                              {comparison.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {comparison.summary}
                            </p>
                          </div>

                          {/* Icon */}
                          <div className={`flex-shrink-0 p-3 rounded-full ${comparison.iconBg} hidden sm:flex`}>
                            <Icon size={24} className={comparison.iconColor} />
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pb-6">
                        <div className="space-y-6 pt-4">
                          {/* NeoMe Advantages */}
                          <div className="bg-primary/5 rounded-xl p-5">
                            <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                              <Sparkles size={20} />
                              NeoMe
                            </h4>
                            <ul className="space-y-3">
                              {comparison.advantages.map((advantage, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                  <span>{advantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Competitor Disadvantages */}
                          <div className="bg-muted/30 rounded-xl p-5">
                            <h4 className="font-semibold text-muted-foreground mb-4">
                              {comparison.competitor}
                            </h4>
                            <ul className="space-y-3">
                              {comparison.disadvantages.map((disadvantage, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <X size={18} className="text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                                  <span>{disadvantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};