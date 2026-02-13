import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
export const ComparisonSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const comparisons = [{
    number: "1",
    title: "NeoMe alebo členstvo v gyme?",
    summary: "Šetrenie času a nákladov - cvič z pohodlia domova, kedykoľvek potrebuješ, bez mesačných poplatkov.",
    advantages: ["Šetri čas - nestrácaj čas cestovaním", "Cvič z domu - bez hanby, stresu, porovnávania", "Časová flexibilita - tvoja 15-min rutina, ktorá ti zapadne do rodinného rozvrhu", "Cenovo efektívne - žiadne mesačné vysoké poplatky", "Priateľské k mamičkám - cvič s deťmi doma"]
  }, {
    number: "2",
    title: "NeoMe alebo osobný tréner?",
    summary: "Expert-designed programy za zlomok ceny osobného trénera, k dispozícii 24/7 priamo v tvojom mobile.",
    advantages: ["Expert-designed programy od profesionálky s 15-ročnou praxou", "Zlomok ceny osobného trénera", "K dispozícii 24/7 - nie podľa kalendára trénera", "Vždy po ruke - v mobile, bez dohadovania termínov", "Prispôsobené špecificky ženám a mamičkám"]
  }, {
    number: "3",
    title: "NeoMe alebo iné fitness aplikácie?",
    summary: "Holistický prístup v slovenskom jazyku - špecificky pre mamičky a ženy, s aktívnou komunitou.",
    advantages: ["Špecificky pre mamičky a ženy - nie generické fitness", "Holistický prístup - telo + myseľ + komunita", "V slovenskom jazyku - rozumieš každému slovu", "Aktívna komunita - podpora skutočných žien", "Hormonálna rovnováha - nie len chudnutie", "Recepty pre celú rodinu - nie extrémy", "Meditácie a mindfulness - nie len cviky"]
  }];
  const selectedComparison = comparisons[selectedIndex];
  return <section className="py-16 md:py-20 px-4 md:px-8 bg-section-beige">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Prečo ženy{" "}
            <span className="gradient-text font-normal">volia NeoMe</span>
          </h2>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-[500px_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Side - Clickable Options */}
          <motion.div className="space-y-3" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {comparisons.map((comparison, index) => {
            const isSelected = selectedIndex === index;
            return <button key={index} onClick={() => setSelectedIndex(index)} className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${isSelected ? 'bg-primary text-primary-foreground border-primary shadow-lg' : 'bg-white/50 hover:bg-white/80 border-border/20 hover:shadow-md'}`}>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium text-sm mb-1 ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {comparison.title}
                    </h3>
                    
                  </div>
                </button>;
          })}
          </motion.div>

          {/* Right Side - Floating Card with Details */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <Card className="overflow-hidden border border-border/20 bg-white/90 backdrop-blur-sm shadow-2xl sticky top-24">
            <div className="p-6 md:p-8">
              {/* NeoMe Advantages */}
              <div className="bg-primary/5 rounded-xl p-5">
                <ul className="space-y-3">
                  {selectedComparison.advantages.map((advantage, i) => <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{advantage}</span>
                    </li>)}
                </ul>
              </div>

            </div>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};