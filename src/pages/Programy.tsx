import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight, Sparkles, Target, Dumbbell, Heart, TrendingUp } from "lucide-react";
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
  const { scrollYProgress } = useScroll();

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
              <Card className="glass-card p-6 relative overflow-hidden">
                {/* Progress Line */}
                <div className="absolute left-[52px] top-[100px] bottom-[100px] w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
                
                <div className="mb-6">
                  <h3 className="text-lg font-light mb-2">Tvoja cesta</h3>
                  <p className="text-sm text-muted-foreground">
                    Postupuj krok za krokom
                  </p>
                </div>

                <nav className="space-y-3 relative">
                  {programs.map((program, idx) => (
                    <div key={program.level} className="relative">
                      <motion.button
                        onClick={() => scrollToLevel(program.level)}
                        className={`w-full text-left p-4 rounded-lg transition-all relative ${
                          activeLevel === program.level
                            ? 'bg-primary/10 ring-2 ring-primary/20 shadow-lg'
                            : 'hover:bg-muted/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          {/* Program Image Thumbnail */}
                          <div className="relative">
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0 shadow-md"
                              style={{ backgroundColor: program.color }}
                            >
                              {program.level}
                            </div>
                            {activeLevel === program.level && (
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: program.color }}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{program.name}</div>
                            <div className="text-xs text-muted-foreground">{program.duration}</div>
                          </div>
                        </div>
                      </motion.button>
                      
                      {idx < programs.length - 1 && (
                        <div className="flex justify-center py-2 relative z-10">
                          <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                            <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                          </div>
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
            <div className="space-y-32">
              {programs.map((program, idx) => {
                const isEven = idx % 2 === 1;
                
                return (
                  <motion.div
                    key={program.level}
                    id={`level-${program.level}`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="scroll-mt-24"
                  >
                    {/* Alternating Layouts */}
                    {isEven ? (
                      // Even: Split Layout (Image + Content Side by Side)
                      <Card className="glass-card overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image Side */}
                          <motion.div 
                            className="relative h-[400px] md:h-full overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div 
                              className="absolute inset-0 bg-gradient-to-br opacity-20"
                              style={{ 
                                background: `linear-gradient(135deg, ${program.color} 0%, transparent 100%)`
                              }}
                            />
                            <img
                              src={program.image}
                              alt={program.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-6">
                              <Badge className="text-white" style={{ backgroundColor: program.color }}>
                                Level {program.level}
                              </Badge>
                            </div>
                          </motion.div>

                          {/* Content Side */}
                          <div className="p-8 md:p-12 flex flex-col justify-center">
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                            >
                              <h2 className="text-3xl md:text-4xl font-light mb-4">{program.name}</h2>
                              <p className="text-muted-foreground mb-6">{program.shortDesc}</p>

                              {/* Who Is This For */}
                              <div className="mb-6 p-4 rounded-lg bg-muted/30">
                                <div className="flex items-start gap-3">
                                  <Target className="h-5 w-5 text-primary shrink-0 mt-1" style={{ color: program.color }} />
                                  <div>
                                    <h3 className="text-sm font-medium mb-1">Pre koho?</h3>
                                    <p className="text-sm text-muted-foreground">{program.suitable}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Benefits */}
                              <div className="space-y-2">
                                {program.benefits.slice(0, 3).map((benefit, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                  >
                                    <CheckCircle className="h-4 w-4 shrink-0" style={{ color: program.color }} />
                                    <span className="text-sm">{benefit}</span>
                                  </motion.div>
                                ))}
                              </div>

                              <div className="mt-6 pt-6 border-t border-border/50">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Dumbbell className="h-4 w-4" />
                                  <span>{program.duration} program</span>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </Card>
                    ) : (
                      // Odd: Hero Image on Top with Content Below
                      <Card className="glass-card overflow-hidden">
                        {/* Hero Image with Overlay */}
                        <motion.div 
                          className="relative h-[500px] overflow-hidden"
                          initial={{ scale: 1.1 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                          <img
                            src={program.image}
                            alt={program.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient Overlay */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
                          />
                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <Badge className="mb-4 text-white" style={{ backgroundColor: program.color }}>
                              Level {program.level}
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 drop-shadow-lg">
                              {program.name}
                            </h2>
                            <p className="text-lg text-white/90 max-w-2xl drop-shadow-md">
                              {program.shortDesc}
                            </p>
                          </div>
                        </motion.div>

                        {/* Content Below Image */}
                        <div className="p-8 md:p-12">
                          {/* Who Is This For */}
                          <motion.div 
                            className="mb-8 p-6 rounded-xl bg-muted/30"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="flex items-start gap-4">
                              <div 
                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                style={{ backgroundColor: `${program.color}20` }}
                              >
                                <Target className="h-6 w-6" style={{ color: program.color }} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-medium mb-2">Pre koho je tento program?</h3>
                                <p className="text-muted-foreground">{program.suitable}</p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Benefits Grid */}
                          <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: `${program.color}20` }}
                              >
                                <Dumbbell className="h-5 w-5" style={{ color: program.color }} />
                              </div>
                              <h3 className="text-xl font-medium">Čo získaš</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {program.benefits.map((benefit, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                  whileHover={{ scale: 1.03, y: -4 }}
                                  className="flex items-start gap-3 p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                                >
                                  <CheckCircle className="h-6 w-6 shrink-0 mt-0.5" style={{ color: program.color }} />
                                  <span className="text-sm font-medium">{benefit}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Duration Info */}
                          <motion.div 
                            className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/30"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          >
                            <TrendingUp className="h-5 w-5" style={{ color: program.color }} />
                            <span className="text-sm font-medium">{program.duration} transformačný program</span>
                          </motion.div>
                        </div>
                      </Card>
                    )}

                    {/* Journey Connector */}
                    {idx < programs.length - 1 && (
                      <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <div className="relative inline-block">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-px h-24 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/40" />
                          </div>
                          <motion.div
                            className="relative bg-background px-6 py-3 rounded-full border border-primary/20"
                            whileHover={{ scale: 1.05 }}
                          >
                            <button
                              onClick={() => scrollToLevel(programs[idx + 1].level)}
                              className="flex items-center gap-2 text-sm font-medium"
                            >
                              <span className="text-muted-foreground">Ďalší krok:</span>
                              <span className="gradient-text">{programs[idx + 1].name}</span>
                              <ArrowRight className="h-4 w-4 text-primary" />
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-12 text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10">
                      <Heart className="h-20 w-20" />
                    </div>
                    <div className="absolute bottom-10 right-10">
                      <Sparkles className="h-20 w-20" />
                    </div>
                  </div>

                  <div className="max-w-2xl mx-auto relative">
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Programy;
