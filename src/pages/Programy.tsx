import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight, Sparkles, Target, Dumbbell } from "lucide-react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ProgramQuiz } from "@/components/ProgramQuiz";

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
      "Jednoduché začiatky"
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
  const [activeLevel, setActiveLevel] = useState("1");
  const [showQuiz, setShowQuiz] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = programs.map(p => ({
        level: p.level,
        element: document.getElementById(`level-${p.level}`)
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLevel(section.level);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLevel = (level: string) => {
    const element = document.getElementById(`level-${level}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Badge className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Progresívna cesta k lepšej ja
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tvoja cesta začína <span className="gradient-text font-medium">tu</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Štyri úrovne, jeden cieľ. Nemusíš rozmýšlať, čo ďalej - každý program ťa pripraví na ďalší krok.
            <br className="hidden md:block" />
            <strong className="font-medium">Stačí vedieť, kde si teraz.</strong> Zvyšok je na nás.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              onClick={() => setShowQuiz(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Nájdi svoj program
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToLevel("1")}
            >
              Preskúmaj programy
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Journey Layout */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8">
            
            {/* Left Sidebar - Sticky Navigation */}
            <aside className="lg:sticky lg:top-24 lg:self-start hidden lg:block">
              <Card className="glass-card p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-light mb-2">Tvoja cesta</h3>
                  <p className="text-sm text-muted-foreground">
                    Postupuj krok za krokom
                  </p>
                </div>

                <nav className="space-y-3">
                  {programs.map((program, idx) => (
                    <div key={program.level}>
                      <button
                        onClick={() => scrollToLevel(program.level)}
                        className={`w-full text-left p-4 rounded-lg transition-all ${
                          activeLevel === program.level
                            ? 'bg-primary/10 ring-2 ring-primary/20'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
                            style={{ backgroundColor: program.color }}
                          >
                            {program.level}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{program.name}</div>
                            <div className="text-xs text-muted-foreground">{program.duration}</div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground pl-13">
                          €{program.price}
                        </div>
                      </button>
                      
                      {idx < programs.length - 1 && (
                        <div className="flex justify-center py-2">
                          <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button 
                    className="w-full"
                    onClick={() => setShowQuiz(true)}
                    variant="outline"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Urob kvíz
                  </Button>
                </div>
              </Card>
            </aside>

            {/* Right Content - Scrollable Program Details */}
            <div className="space-y-24">
              {programs.map((program, idx) => (
                <motion.div
                  key={program.level}
                  id={`level-${program.level}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <Card className="glass-card p-8 md:p-12">
                    {/* Program Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-medium"
                          style={{ backgroundColor: program.color }}
                        >
                          {program.level}
                        </div>
                        <div>
                          <Badge className="mb-2" style={{ backgroundColor: program.color }}>
                            Level {program.level}
                          </Badge>
                          <h2 className="text-3xl md:text-4xl font-light">{program.name}</h2>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {program.shortDesc}
                      </p>
                    </div>

                    {/* Program Image */}
                    <div className="mb-8 rounded-xl overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                      />
                    </div>

                    {/* Who Is This For */}
                    <div className="mb-8 p-6 rounded-lg bg-muted/30">
                      <div className="flex items-start gap-3 mb-3">
                        <Target className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-medium mb-2">Pre koho je tento program?</h3>
                          <p className="text-muted-foreground">{program.suitable}</p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Dumbbell className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-medium">Čo získaš</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {program.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                          >
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10">
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-4xl font-medium gradient-text">€{program.price}</span>
                          <span className="text-muted-foreground">/ {program.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Menej ako €2.50 za cvičenie</p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                        onClick={() => navigate('/checkout')}
                      >
                        Začať teraz
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>

                    {/* Progress Indicator */}
                    {idx < programs.length - 1 && (
                      <div className="mt-12 pt-8 border-t border-border/50">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-4">
                            Ďalší krok na tvojej ceste
                          </p>
                          <button
                            onClick={() => scrollToLevel(programs[idx + 1].level)}
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                          >
                            <span className="font-medium">{programs[idx + 1].name}</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}

              {/* Final CTA */}
              <Card className="glass-card p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-3">
                    Cez 170 overených 5* recenzií
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Stovky spokojných klientiek už začali svoju cestu. Pridaj sa k nim.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={() => setShowQuiz(true)}
                      className="bg-primary text-primary-foreground"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Nájdi svoj program
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Späť na začiatok
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Programy;
