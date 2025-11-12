import { CheckCircle, X, Dumbbell, User, Smartphone, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const ComparisonSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const comparisons = [{
    icon: Dumbbell,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    number: "1",
    title: "Gym členstvo",
    advantages: ["Šetrenie času - žiadne cestovanie, cvič kedykoľvek", "Z pohodlia domova - bez hanby či stresu z verejného priestoru", "Flexibilita - pauza kedykoľvek potrebuješ (deti, práca)", "Cenovo efektívne - žiadne mesačné vysoké poplatky", "Priateľské k mamičkám - cvič s deťmi doma"],
    disadvantages: ["Časovo náročné (cestovanie, čakanie na stroje)", "Fixné otváracie hodiny", "Sociálny tlak a porovnávanie sa", "Vysoké mesačné poplatky"]
  }, {
    icon: User,
    iconBg: "bg-accent/30",
    iconColor: "text-accent",
    number: "2",
    title: "Osobný tréner",
    advantages: ["Expert-designed programy od profesionálky s 15-ročnou praxou", "Zlomok ceny osobného trénera", "K dispozócii 24/7 - nie podľa kalendára trénera", "Vždy po ruke - v mobile, bez dohadovania termínov", "Prispôsobené špecificky ženám a mamičkám"],
    disadvantages: ["Extrémne drahé (50-100€+ za hodinu)", "Limitované časové sloty", "Nutnosť plánovať dopredu", "Nie vždy špecializovaný na ženy/mamičky"]
  }, {
    icon: Smartphone,
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
    number: "3",
    title: "Iné fitness aplikácie",
    advantages: ["Špecificky pre mamičky a ženy - nie generické fitness", "Holistický prístup - telo + myseľ + komunita", "V slovenskom jazyku - rozumieš každému slovu", "Aktívna komunita - podpora skutočných žien", "Hormonálna rovnováha - nie len chudnutie", "Recepty pre celú rodinu - nie extrémy", "Meditácie a mindfulness - nie len cviky"],
    disadvantages: ["Generické, pre všetkých", "Len fitness, bez holistického prístupu", "Často v angličtine", "Malá alebo žiadna komunita", "Zamerané len na kalórie a výzor"]
  }];

  const activeComparison = comparisons[activeIndex];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-section-beige">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Prečo ženy{" "}
            <span className="gradient-text font-normal">volia NeoMe</span>
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Side - Numbered Rectangles */}
          <div className="flex lg:flex-col gap-4 justify-center lg:justify-start">
            {comparisons.map((comparison, index) => {
              const Icon = comparison.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 
                    transition-all duration-300 min-w-[80px] lg:min-w-[120px]
                    ${activeIndex === index 
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105' 
                      : 'bg-white border-border hover:border-primary/50 hover:shadow-md'
                    }
                  `}
                >
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full font-bold text-xl
                    ${activeIndex === index 
                      ? 'bg-white text-primary' 
                      : 'bg-primary/10 text-primary'
                    }
                  `}>
                    {comparison.number}
                  </div>
                  <Icon 
                    size={20} 
                    className={`hidden sm:block ${activeIndex === index ? 'text-primary-foreground' : comparison.iconColor}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side - Comparison Card */}
          <Card className="p-6 md:p-8 bg-white border-2 border-border shadow-xl">
            <div key={activeIndex} className="space-y-6 animate-fade-in">
              {/* NeoMe Section */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-primary mb-4 flex items-center gap-2">
                  <Sparkles size={24} />
                  NeoMe
                </h3>
                <ul className="space-y-3">
                  {activeComparison.advantages.map((advantage, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competitor Section */}
              <div className="bg-muted/40 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-muted-foreground mb-4">
                  {activeComparison.title}
                </h3>
                <ul className="space-y-3">
                  {activeComparison.disadvantages.map((disadvantage, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                      <X size={20} className="text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span>{disadvantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};