import { CheckCircle, X, Dumbbell, User, Smartphone, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const ComparisonSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const selectedComparison = comparisons[selectedIndex];
  const SelectedIcon = selectedComparison.icon;

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-section-beige">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Prečo ženy{" "}
            <span className="gradient-text font-normal">volia NeoMe</span>
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Clickable Options */}
          <div className="space-y-3">
            {comparisons.map((comparison, index) => {
              const Icon = comparison.icon;
              const isSelected = selectedIndex === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
                      : 'bg-white/50 hover:bg-white/80 border-border/20 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      isSelected ? 'bg-primary-foreground text-primary' : 'bg-primary/10 text-primary'
                    }`}>
                      {comparison.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium text-sm mb-1 ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {comparison.title}
                      </h3>
                      <p className={`text-xs line-clamp-2 ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {comparison.summary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side - Floating Card with Details */}
          <Card className="overflow-hidden border border-border/20 bg-white/90 backdrop-blur-sm shadow-2xl sticky top-24">
            <div className="p-6 md:p-8">
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${selectedComparison.iconBg}`}>
                  <SelectedIcon size={28} className={selectedComparison.iconColor} />
                </div>
                <h3 className="text-2xl font-semibold">{selectedComparison.title}</h3>
              </div>

              {/* NeoMe Advantages */}
              <div className="bg-primary/5 rounded-xl p-5 mb-6">
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Sparkles size={20} />
                  NeoMe
                </h4>
                <ul className="space-y-3">
                  {selectedComparison.advantages.map((advantage, i) => (
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
                  {selectedComparison.competitor}
                </h4>
                <ul className="space-y-3">
                  {selectedComparison.disadvantages.map((disadvantage, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <X size={18} className="text-muted-foreground/50 flex-shrink-0 mt-0.5" />
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