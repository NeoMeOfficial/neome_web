import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, X, Dumbbell, User, Smartphone, Sparkles } from "lucide-react";
export const ComparisonSection = () => {
  const comparisons = [{
    icon: Dumbbell,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "NeoMe vs. Gym členstvo",
    competitor: "Gym členstvo",
    advantages: ["Šetrenie času - žiadne cestovanie, cvič kedykoľvek", "Z pohodlia domova - bez hanby či stresu z verejného priestoru", "Flexibilita - pauza kedykoľvek potrebuješ (deti, práca)", "Cenovo efektívne - žiadne mesačné vysoké poplatky", "Priateľské k mamičkám - cvič s deťmi doma"],
    disadvantages: ["Časovo náročné (cestovanie, čakanie na stroje)", "Fixné otváracie hodiny", "Sociálny tlak a porovnávanie sa", "Vysoké mesačné poplatky"]
  }, {
    icon: User,
    iconBg: "bg-accent/30",
    iconColor: "text-accent",
    title: "NeoMe vs. Osobný tréner",
    competitor: "Osobný tréner",
    advantages: ["Expert-designed programy od profesionálky s 15-ročnou praxou", "Zlomok ceny osobného trénera", "K dispozícii 24/7 - nie podľa kalendára trénera", "Vždy po ruke - v mobile, bez dohadovania termínov", "Prispôsobené špecificky ženám a mamičkám"],
    disadvantages: ["Extrémne drahé (50-100€+ za hodinu)", "Limitované časové sloty", "Nutnosť plánovať dopredu", "Nie vždy špecializovaný na ženy/mamičky"]
  }, {
    icon: Smartphone,
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
    title: "NeoMe vs. Iné fitness aplikácie",
    competitor: "Iné fitness aplikácie",
    advantages: ["Špecificky pre mamičky a ženy - nie generické fitness", "Holistický prístup - telo + myseľ + komunita", "V slovenskom jazyku - rozumieš každému slovu", "Aktívna komunita - podpora skutočných žien", "Hormonálna rovnováha - nie len chudnutie", "Recepty pre celú rodinu - nie extrémy", "Meditácie a mindfulness - nie len cviky"],
    disadvantages: ["Generické, pre všetkých", "Len fitness, bez holistického prístupu", "Často v angličtine", "Malá alebo žiadna komunita", "Zamerané len na kalórie a výzor"]
  }];
  return <section className="py-16 md:py-20 px-0 md:px-4 bg-section-beige">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Prečo ženy <span className="gradient-text font-normal">volia NeoMe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Porovnanie s tradičnými riešeniami - jednoduchšie, efektívnejšie, dostupnejšie
          </p>
        </div>

        {/* Accordion for all screen sizes */}
        <div className="px-4 md:px-0">
          <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {comparisons.map((comparison, index) => {
            const Icon = comparison.icon;
            return <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-4 md:px-6 bg-card hover:shadow-xl transition-all duration-300" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <AccordionTrigger className="hover:no-underline py-4 md:py-6">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex p-2.5 md:p-3 rounded-full ${comparison.iconBg}`}>
                        <Icon size={20} className={`md:w-6 md:h-6 ${comparison.iconColor}`} />
                      </div>
                      <span className="text-lg md:text-xl font-light text-left">{comparison.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 md:pb-6">
                    <div className="space-y-6 pt-2">
                      {/* NeoMe Advantages */}
                      <div>
                        <h4 className="font-medium text-primary mb-4 flex items-center gap-2">
                          <Sparkles size={20} />
                          NeoMe
                        </h4>
                        <ul className="space-y-3">
                          {comparison.advantages.map((advantage, i) => <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                              <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                              <span>{advantage}</span>
                            </li>)}
                        </ul>
                      </div>

                      {/* Competitor Disadvantages */}
                      <div className="pt-6 border-t border-border/20">
                        <h4 className="font-medium text-muted-foreground mb-4">
                          {comparison.competitor}
                        </h4>
                        <ul className="space-y-3">
                          {comparison.disadvantages.map((disadvantage, i) => <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/70">
                              <X size={18} className="text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                              <span>{disadvantage}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>;
          })}
          </Accordion>
        </div>
      </div>
    </section>;
};