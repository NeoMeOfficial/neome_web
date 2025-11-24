import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight, Sparkles, Target, Dumbbell, Heart, TrendingUp, Clock, Play } from "lucide-react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ProgramQuiz } from "@/components/ProgramQuiz";

const programs = [
  {
    level: "1",
    name: "Postpartum",
    shortDesc: "Program pre maminy, ktoré potrebujú spevniť brušný korzet, vyriešiť diastázu či inkontinenciu",
    forWhom: "Pre maminy 6+ týždňov po pôrode, ktoré chcú bezpečne začať cvičiť a posilniť brušný korzet",
    whenToChoose: "Ak si nedávno porodila, trpíš diastázou, inkontinenciou alebo bolesťami chrbta a potrebuješ špeciálne prispôsobený program",
    duration: "8 týždňov",
    image: "/src/assets/postpartum-program.jpg",
    videoUrl: "https://www.youtube.com/embed/example1",
    color: "hsl(var(--level-1))",
    benefits: [
      "Bezpečné cvičenia špeciálne po pôrode",
      "Postupné posilnenie brušného korzetu",
      "Účinné riešenie diastázy",
      "Pomoc pri inkontinencii",
      "Odstránenie bolestí chrbta a panvy"
    ]
  },
  {
    level: "2", 
    name: "BodyForming",
    shortDesc: "Ideálny program, keď chceš začať formovať a posilňovať celé telo a netrpíš diastázou",
    forWhom: "Pre ženy, ktoré chcú začať so spevňovaním celého tela a netrpia diastázou",
    whenToChoose: "Ak hľadáš komplexný program na formovanie postavy, chceš začať cvičiť pravidelne a budovať základnú silu",
    duration: "6 týždňov",
    image: "/src/assets/bodyforming-program.jpg",
    videoUrl: "https://www.youtube.com/embed/example2",
    color: "hsl(var(--level-2))",
    benefits: [
      "Komplexné spevnenie celého tela",
      "Viditeľné formovanie postavy",
      "Výrazné zvýšenie energie",
      "Zlepšenie celkovej kondície",
      "Jednoduché cviky pre začiatočníčky"
    ]
  },
  {
    level: "3",
    name: "ElasticBands",
    shortDesc: "Ideálny program, keď chceš zvýšiť intenzitu a pridať dynamický odpor s elastickými gumami",
    forWhom: "Pre ženy, ktoré už majú základnú kondíciu a chcú zvýšiť intenzitu tréningu",
    whenToChoose: "Ak Ti už základné cviky nestačia a chceš pridať odpor, formovať svaly a posunúť sa na vyššiu úroveň",
    duration: "6 týždňov",
    image: "/src/assets/elasticbands-program.jpg",
    videoUrl: "https://www.youtube.com/embed/example3",
    color: "hsl(var(--level-3))",
    benefits: [
      "Výrazné zvýšenie intenzity tréningu",
      "Efektívny dynamický odpor",
      "Detailné formovanie svalov",
      "Progresívny nárast záťaže",
      "Komplexné a náročnejšie cviky"
    ]
  },
  {
    level: "4",
    name: "Strong&Sexy",
    shortDesc: "Ideálny program, keď chceš posunúť svoje hranice a formovať postavu s jednoručkami",
    forWhom: "Pre ženy, ktoré chcú maximálne výsledky a neboja sa výziev",
    whenToChoose: "Ak chceš budovať silu, pracovať s jednoručkami a dosiahnuť maximálnu transformáciu svojho tela",
    duration: "6 týždňov",
    image: "/src/assets/strongsexy-program.jpg",
    videoUrl: "https://www.youtube.com/embed/example4",
    color: "hsl(var(--level-4))",
    benefits: [
      "Maximálne budovanie sily",
      "Práca s jednoručkami a závažiami",
      "Viditeľné svalové definície",
      "Vysoká intenzita pre pokročilé",
      "Pevné, silné a vyformované telo"
    ]
  }
];

const Programy = () => {
  const [activeLevel, setActiveLevel] = useState("1");
  const [showQuiz, setShowQuiz] = useState(false);

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
    <div className="min-h-screen bg-background relative">
      {/* Grainy Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
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

                <nav className="space-y-4">
                  {programs.map((program) => (
                    <motion.button
                      key={program.level}
                      onClick={() => scrollToLevel(program.level)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeLevel === program.level
                          ? 'bg-primary/10 ring-2 ring-primary/20 shadow-lg'
                          : 'hover:bg-muted/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-[#8B4513] text-sm font-medium shrink-0 shadow-md"
                          style={{ backgroundColor: program.color }}
                        >
                          {program.level}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{program.name}</div>
                          <div className="text-xs text-muted-foreground">{program.duration}</div>
                        </div>
                      </div>
                    </motion.button>
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
              {programs.map((program) => (
                <motion.div
                  key={program.level}
                  id={`level-${program.level}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <Card className="glass-card overflow-hidden">
                    {/* Hero Image */}
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      
                      {/* Header Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <Badge className="mb-4 text-white" style={{ backgroundColor: program.color }}>
                          Level {program.level}
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-light text-white mb-3 drop-shadow-lg">
                          {program.name}
                        </h2>
                        <p className="text-lg text-white/90 max-w-2xl drop-shadow-md">
                          {program.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="p-8 md:p-12 space-y-10">
                      {/* 1. Pre koho je tento program? */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl bg-muted/30"
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${program.color}20` }}
                          >
                            <Target className="h-6 w-6" style={{ color: program.color }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-3">Pre koho je tento program?</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">{program.forWhom}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* 2. Kedy si tento program vybrať? */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-xl bg-muted/30"
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${program.color}20` }}
                          >
                            <Clock className="h-6 w-6" style={{ color: program.color }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-3">Kedy si tento program vybrať?</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">{program.whenToChoose}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3. Čo získaš */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${program.color}20` }}
                          >
                            <Dumbbell className="h-6 w-6" style={{ color: program.color }} />
                          </div>
                          <h3 className="text-xl font-semibold">Čo získaš</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {program.benefits.map((benefit, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.05 }}
                              className="flex items-start gap-3 p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/20 transition-all"
                            >
                              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: program.color }} />
                              <span className="text-sm leading-relaxed">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* 4. Video Examples Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-xl bg-muted/30"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${program.color}20` }}
                          >
                            <Play className="h-6 w-6" style={{ color: program.color }} />
                          </div>
                          <h3 className="text-xl font-semibold">Ukážka cvičení</h3>
                        </div>
                        
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                          <iframe
                            width="100%"
                            height="100%"
                            src={program.videoUrl}
                            title={`${program.name} video example`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        
                        <p className="text-sm text-muted-foreground mt-4 text-center">
                          Pozri si, ako vyzerajú cvičenia v praxi
                        </p>
                      </motion.div>

                      {/* Duration Badge */}
                      <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/30">
                        <TrendingUp className="h-5 w-5" style={{ color: program.color }} />
                        <span className="text-sm font-medium">{program.duration} transformačný program</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

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
