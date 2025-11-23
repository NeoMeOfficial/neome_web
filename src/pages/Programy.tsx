import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ProgramQuiz } from "@/components/ProgramQuiz";
import { ProgramComparison } from "@/components/ProgramComparison";

const programs = [
  {
    level: "1",
    name: "Postpartum",
    shortDesc: "Program pre maminy, ktoré potrebujú spevniť brušný korzet, vyriešiť diastázu či inkontinenciu",
    suitable: "Vhodný pre maminy, ktoré potrebujú spevniť brušný korzet, vyriešiť diastázu či inkontinenciu, mesiace aj roky po pôrode.",
    duration: "8 týždňov",
    price: "97",
    image: "/src/assets/postpartum-program.jpg",
    color: "hsl(var(--level-1))",
    benefits: [
      "Bezpečné cvičenia aj po pôrode",
      "Posilnenie brušného korzetu",
      "Riešenie diastázy",
      "Pomoc pri inkontinencii",
      "Odstránenie bolestí chrbta"
    ]
  },
  {
    level: "2", 
    name: "BodyForming",
    shortDesc: "Ideálny program, keď chceš začať formovať a posilňovať celé telo a netrpíš diastázou",
    suitable: "Vhodný pre ženy, ktoré začínajú so spevňovaním celého tela a netrpia diastázou.",
    duration: "6 týždňov",
    price: "67",
    image: "/src/assets/bodyforming-program.jpg",
    color: "hsl(var(--level-2))",
    benefits: [
      "Komplexné spevnenie tela",
      "Formovanie postavy",
      "Zvýšenie energie",
      "Zlepšenie kondície",
      "Jednod uché začiatky"
    ]
  },
  {
    level: "3",
    name: "ElasticBands",
    shortDesc: "Ideálny program, keď chceš zvýšiť intenzitu a pridať dynamický odpor s elastickými gumami",
    suitable: "Vhodný pre ženy, ktoré chcú vyformovať postavu a zvýšiť intenzitu cvičenia s použitím dynamického odporu elastických gúm.",
    duration: "6 týždňov",
    price: "67",
    image: "/src/assets/elasticbands-program.jpg",
    color: "hsl(var(--level-3))",
    benefits: [
      "Zvýšenie intenzity",
      "Dynamický odpor",
      "Formovanie svalov",
      "Progresívny tréning",
      "Komplexné cviky"
    ]
  },
  {
    level: "4",
    name: "Strong&Sexy",
    shortDesc: "Ideálny program, keď chceš posunúť svoje hranice a formovať postavu s jednoručkami",
    suitable: "Vhodný pre ženy, ktoré chcú posunúť svoje hranice, získať silnejšie a vyformovanejšie telo a začať cvičiť s jednoručkami.",
    duration: "6 týždňov",
    price: "67",
    image: "/src/assets/strongsexy-program.jpg",
    color: "hsl(var(--level-4))",
    benefits: [
      "Budovanie sily",
      "Cvičenie s jednoručkami",
      "Maximálne výsledky",
      "Vysoká intenzita",
      "Pevné a silné telo"
    ]
  }
];

const Programy = () => {
  const [selectedLevel, setSelectedLevel] = useState("1");
  const [showQuiz, setShowQuiz] = useState(false);
  const navigate = useNavigate();
  const currentProgram = programs.find(p => p.level === selectedLevel);

  const scrollToLevel = (level: string) => {
    setSelectedLevel(level);
    const element = document.getElementById('program-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {showQuiz && (
        <ProgramQuiz 
          onResult={(level) => scrollToLevel(level)}
          onClose={() => setShowQuiz(false)}
        />
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Badge className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Štyri úrovne progresívneho tréningu
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tvoja cesta k <span className="gradient-text font-medium">lepšej ja</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Nemusíš rozmýšlať, čo ďalej. Naše programy ťa prevedú postupne od základov až po pokročilé cvičenia. 
            <br className="hidden md:block" />
            <strong className="font-medium">Stačí vedieť, kde si teraz</strong> - my sa postaráme o zvyšok.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              size="lg"
              onClick={() => setShowQuiz(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Nájdi svoj ideálny program
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Level Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card 
                  className={`glass-card p-6 cursor-pointer transition-all hover:scale-105 ${
                    selectedLevel === program.level ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => scrollToLevel(program.level)}
                >
                  <Badge 
                    className="mb-3"
                    style={{ backgroundColor: program.color }}
                  >
                    Level {program.level}
                  </Badge>
                  <h3 className="text-xl font-light mb-2">{program.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {program.shortDesc}
                  </p>
                  <div className="text-2xl font-medium gradient-text mb-4">
                    €{program.price}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToLevel(program.level);
                    }}
                  >
                    Zistiť viac
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Visualization */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Progresívna cesta <span className="gradient-text font-medium">krok za krokom</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Každý program ťa prirodzene pripravuje na ďalší level. Nemusíš premýšľať, jednoducho postupuj.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-8">
            {programs.map((program, idx) => (
              <div key={program.level} className="flex items-center">
                <button
                  onClick={() => scrollToLevel(program.level)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${
                    selectedLevel === program.level ? 'bg-primary/10 scale-110' : 'hover:bg-muted'
                  }`}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium"
                    style={{ backgroundColor: program.color }}
                  >
                    {program.level}
                  </div>
                  <span className="text-sm font-light">{program.name}</span>
                </button>
                {idx < programs.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="flex md:hidden flex-col gap-4 mb-8">
            {programs.map((program) => (
              <button
                key={program.level}
                onClick={() => scrollToLevel(program.level)}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  selectedLevel === program.level ? 'bg-primary/10 scale-105' : 'hover:bg-muted'
                }`}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium shrink-0"
                  style={{ backgroundColor: program.color }}
                >
                  {program.level}
                </div>
                <div className="text-left flex-1">
                  <div className="font-medium">{program.name}</div>
                  <div className="text-sm text-muted-foreground">€{program.price} • {program.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detail */}
      <AnimatePresence mode="wait">
        {currentProgram && (
          <motion.section
            id="program-detail"
            key={currentProgram.level}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Badge 
                    className="mb-4"
                    style={{ backgroundColor: currentProgram.color }}
                  >
                    Level {currentProgram.level}
                  </Badge>
                  <h2 className="text-4xl font-light mb-4">{currentProgram.name}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {currentProgram.suitable}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {currentProgram.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Cena</div>
                      <div className="text-3xl font-medium gradient-text">€{currentProgram.price}</div>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                      <div className="text-sm text-muted-foreground">Trvanie</div>
                      <div className="text-xl font-light">{currentProgram.duration}</div>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                    onClick={() => navigate('/checkout')}
                  >
                    Objednať program
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img 
                      src={currentProgram.image}
                      alt={currentProgram.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Reviews */}
              <div className="text-center glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-2xl font-light mb-2">Cez 170 overených 5* Google Reviews</p>
                <p className="text-muted-foreground">Stovky spokojných klientiek už dosiahli svoje ciele</p>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Porovnanie <span className="gradient-text font-medium">všetkých programov</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailný prehľad, ktorý ti pomôže vybrať ten správny program pre tvoje potreby
            </p>
          </div>

          <ProgramComparison />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card p-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Ešte nerozhodnutá?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nechaj nás ti pomôcť nájsť ideálny program pre tvoje potreby
            </p>
            <Button 
              size="lg"
              onClick={() => setShowQuiz(true)}
              className="bg-primary text-primary-foreground"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Spustiť kvíz
            </Button>
          </Card>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Programy;
