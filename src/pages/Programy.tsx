import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";

const programs = [
  {
    level: "1",
    name: "Postpartum",
    shortDesc: "Program pre maminy, ktoré potrebujú spevniť brušný korzet, vyriešiť diastázu či inkontinenciu",
    hero: "15 minútové online cvičenia na posilnenie vnútorných brušných svalov, ktoré ostali oslabené po pôrode. Vyrieš diastázu, inkontinenciu a zbav sa popôrodného bruška - z pohodlia domu aj roky po pôrode",
    tagline: "Cesta za tvojou novou ja, ktorá je silná, zdravá a sebavedomá. Aj roky po pôrode",
    suitable: "Vhodný pre maminy, ktoré potrebujú spevniť brušný korzet, vyriešiť diastázu či inkontinenciu, mesiace aj roky po pôrode.",
    duration: "8 týždňov",
    price: "97",
    exercises: "24 bezpečných posilňovacích cvičení",
    stretching: "16 strečingových cvičení",
    meditations: "16 meditácií",
    image: "/src/assets/postpartum-program.jpg",
    focus: [
      {
        title: "Najprv budujeme pevné základy tvojho 'core'",
        desc: "Sústredíme sa na bránicové dýchanie, ktoré je základom našich cvičení. Učíme sa zapájať svaly panvového dna a hlboké brušné svaly.",
        points: ["Základy bránicového dýchania", "Aktivácia panvového dna", "Hlboké brušné svaly (TVA)"]
      },
      {
        title: "Neskôr pridávame na intenzite",
        desc: "Postupne zapájame aj okolité svalové partie, aby sme vytvorili pevný brušný korzet a posilnili aj svaly panvového dna.",
        points: ["Cvičenia na odstránenie bolestí chrbta", "Posilňovacie cvičenia s gumou", "Komplexnejšie cviky v rôznych polohách", "Rotácie a protitlak s gumou"]
      },
      {
        title: "Strečing a meditácia pomôžu mať telo v rovnováhe",
        desc: "Pravidelné strečingy pomáhajú tvojmu telu prinavrátiť pružnosť a flexibilitu a meditácie ti pomôžu uvoľniť napätie z tela po náročných dňoch.",
        points: ["Spolu 16 strečingových cvičení a meditácií", "Cvičenia vychádzajú z tanca a jogy", "Meditácie zamerané na prinavrátenie sebalásky"]
      }
    ],
    reasons: [
      "Chcem posilniť ochabnuté brucho",
      "Často ma bolieva chrbát",
      "Nemám čas ani prostriedky na fyzio",
      "Nebaví ma rozmýšlať, čo cvičiť",
      "Potrebujem mať aspoň chvľku času na seba"
    ]
  },
  {
    level: "2",
    name: "BodyForming",
    shortDesc: "Ideálny program, keď chceš začať formovať a posilňovať celé telo a netrpíš diastázou",
    hero: "Chceš začať s cvičením a spevniť celé telo, ale nemáš čas? Skús 15 minútové online cvičenia na formovanie postavy pre moderné ženy.",
    tagline: "Efektívne cvičenia z pohodlia domova sú skvelým riešením, ak máš centimetre navyše, nevieš čo cvičiť alebo nemáš čas.",
    suitable: "Vhodný pre ženy, ktoré začínajú so spevňovaním celého tela a netrpia diastázou.",
    duration: "6 týždňov",
    price: "67",
    exercises: "18 bezpečných posilňovacích cvičení",
    stretching: "12 strečingových cvičení",
    meditations: "12 meditácií",
    image: "/src/assets/bodyforming-program.jpg",
    equipment: "Stačí ti 15 minút denne, stolička a elastická guma",
    focus: [
      {
        title: "3x do týždňa sa zameriame na posilnenie celého tela",
        desc: "Cvičenia, ktoré sú kombináciou pilatesu, rezistenčných cvičení, jogy a tanca ti posilnia a vyformujú celé telo. Po každom cvičení sa budeš cítiť ako víťazka.",
        points: ["Komplexné cvičenia pre celé telo", "Prispôsobiteľná intenzita", "Kombinácia viacerých tréningových štýlov"]
      },
      {
        title: "2x do týždňa sa zameriame na uvoľnenie stuhnutých svalov",
        desc: "V programoch dávam dôraz nie len na posilnenie svalov, ale aj ich uvoľnenie. Dynamické strečingy sú súčasťou našej tréningovej rutiny.",
        points: ["Dynamické strečingy", "Celkové zdravie tela", "Prispôsobené každej žene"]
      }
    ],
    reasons: [
      "Potrebujem efektívny spôsob, ako sa dostať opäť do formy",
      "Musím už niečo so sebou robiť, ale nemám veľa času",
      "Nemám čas ani prostriedky na osobného trénera",
      "Nebaví ma rozmýšlať, čo cvičiť",
      "Chcem získať naspäť svoju sebadôveru"
    ],
    benefits: [
      "Krátke a efektívne cvičenia",
      "Návykovosť cvičení",
      "Jednoducho vysvetlené cviky",
      "Zdravé recepty na každý deň",
      "Pocit víťazstva po každom cvičení"
    ]
  },
  {
    level: "3",
    name: "ElasticBands",
    shortDesc: "Ideálny program, keď chceš zvýšiť intenzitu a pridať dynamický odpor s elastickými gumami",
    hero: "Chceš zvýšiť intenzitu a komplexitu svojich cvičení z pohodlia domu? Vyskúšaj moje 15 minútové online cvičenia.",
    tagline: "Posilni, vyformuj a uvoľni svoje telo vďaka dynamickému odporu elastických gúm.",
    suitable: "Vhodný pre ženy, ktoré chcú vyformovať postavu a zvýšiť intenzitu cvičenia s použitím dynamického odporu elastických gúm.",
    duration: "6 týždňov",
    price: "67",
    exercises: "18 posilňovacích cvičení",
    stretching: "12 strečingových cvičení",
    meditations: "12 meditácií",
    image: "/src/assets/elasticbands-program.jpg",
    equipment: "Stačí ti 15 minút denne a elastická guma",
    prerequisite: "Pre mierne pokročilé, ktoré už absolvovali BodyForming alebo podobný program na základné posilnenie tela.",
    focus: [
      {
        title: "3x do týždňa posilňujeme celé telo s progresívnym odporom",
        desc: "15-minút nabitých komplexnými cvičeniami zostavených z prvkov pilates, rezistenčného tréningu a jogy.",
        points: ["Komplexné cvičenia s gumami", "Progresívny odpor", "Precízna technika a dýchanie"]
      },
      {
        title: "2x do týždňa venujeme dynamickému strečingu",
        desc: "Dynamické strečingy a meditácie pre celkové zdravie tela a mysle.",
        points: ["Uvoľnenie napätia", "Vnútorný balans", "Flexibilita celého tela"]
      }
    ],
    reasons: [
      "Nemáš čas a peniaze na fitko",
      "Chcela by si formovať a spevňovať postavu",
      "Nebavia ťa tradičné 'skákačky' v iných programoch",
      "Absolvovala si program BodyForming a chceš niečo náročnejšie"
    ],
    benefits: [
      "Krátke, efektívne a dostupné cvičenia",
      "Program si zapneš kedykoľvek",
      "Osobný tréner doma",
      "Komplexný prístup pre telo aj myseľ",
      "Nový návyk pravidelného cvičenia"
    ]
  },
  {
    level: "4",
    name: "Strong&Sexy",
    shortDesc: "Ideálny program, keď chceš posunúť svoje hranice a formovať postavu s jednoručkami",
    hero: "Chceš získať krásne, zdravé a pevné telo, ale nemáš čas? Vyskúšaj moje 15 minútové online cvičenia s jednoručkami.",
    tagline: "Vybuduješ si silu, vyformuješ postavu a zrýchliš metabolizmus.",
    suitable: "Vhodný pre ženy, ktoré chcú posunúť svoje hranice, získať silnejšie a vyformovanejšie telo a začať cvičiť s jednoručkami.",
    duration: "6 týždňov",
    price: "67",
    exercises: "18 bezpečných posilňovacích cvičení",
    stretching: "12 strečingových cvičení",
    meditations: "12 meditácií",
    image: "/src/assets/strongsexy-program.jpg",
    equipment: "Stačí ti 15 minút denne, jednoručky a elastická guma",
    prerequisite: "Pre pokročilé, ktoré už absolvovali ElasticBands alebo podobný program a majú dobrý level kondície.",
    focus: [
      {
        title: "3x do týždňa posilňujeme s jednoručkami celé telo",
        desc: "Komplexné cvičenia zložené z prvkov pilates, rezistenčného tréningu a jogy obohatené o jednoručky. Aj cvičenia s činkami môžu byť ženské a elegantné.",
        points: ["Cvičenia s jednoručkami", "Elegantné a ženské pohyby", "Budovanie sily a formovanie postavy"]
      },
      {
        title: "2x do týždňa sa venujeme dynamickému strečingu",
        desc: "Dynamický strečing celého tela a meditácie pre vnútorný balans.",
        points: ["Flexibilita a pružnosť", "Meditácie pre sebadôveru", "Celkové zdravie tela"]
      }
    ],
    reasons: [
      "Absolvovala si program ElasticBands a chceš niečo náročnejšie",
      "Máš za sebou iný program pre pokročilé",
      "Chcela by získať silnejšie a vyformovanejšie telo",
      "Nemáš čas na fitko",
      "Nebavia ťa tradičné 'skákačky'"
    ],
    highlight: "Cvičenie s jednoručkami ťa nespraví objemnou. Ale krásnou, silnou a zdravou ženou."
  }
];

const Programy = () => {
  const [selectedLevel, setSelectedLevel] = useState("1");
  const navigate = useNavigate();
  const currentProgram = programs.find(p => p.level === selectedLevel);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tvoja cesta k <span className="gradient-text font-medium">lepšej ja</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Nemusíš rozmýšlať, čo ďalej. Naše programy ťa prevedú postupne od základov až po pokročilé cvičenia. 
            Stačí vedieť, kde si teraz - my sa postaráme o zvyšok.
          </motion.p>

          {/* Level Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-background/50 backdrop-blur-sm p-2">
                {programs.map((program) => (
                  <TabsTrigger 
                    key={program.level}
                    value={program.level}
                    className="flex flex-col items-center py-4 px-2 data-[state=active]:bg-primary/10 data-[state=active]:border-primary border-2 border-transparent"
                  >
                    <span className="text-xs md:text-sm text-muted-foreground mb-1">Level {program.level}</span>
                    <span className="text-sm md:text-base font-medium">{program.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Program Content */}
      <AnimatePresence mode="wait">
        {currentProgram && (
          <motion.div
            key={currentProgram.level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Content */}
            <section className="py-12 px-4 bg-muted/30">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4">Level {currentProgram.level}</Badge>
                    <h2 className="text-3xl md:text-4xl font-light mb-4">{currentProgram.name}</h2>
                    <p className="text-muted-foreground mb-4">{currentProgram.shortDesc}</p>
                    <p className="text-lg mb-6">{currentProgram.hero}</p>
                    <p className="italic text-primary">{currentProgram.tagline}</p>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={currentProgram.image} 
                      alt={currentProgram.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Suitable For */}
            <section className="py-12 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-light mb-6">Pre koho je tento program?</h3>
                <p className="text-lg mb-6">{currentProgram.suitable}</p>
                {currentProgram.equipment && (
                  <p className="text-primary font-medium mb-4">{currentProgram.equipment}</p>
                )}
                {currentProgram.prerequisite && (
                  <p className="text-sm text-muted-foreground italic">{currentProgram.prerequisite}</p>
                )}
              </div>
            </section>

            {/* Why Choose This Program */}
            <section className="py-12 px-4 bg-muted/30">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-light text-center mb-12">
                  Prečo si zvoliť {currentProgram.name}?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {currentProgram.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3 glass-card p-4">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <p>{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* What's Included */}
            <section className="py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-light text-center mb-12">
                  Na čo sa v programe zameriavame
                </h3>
                <div className="space-y-8">
                  {currentProgram.focus.map((section, idx) => (
                    <div key={idx} className="glass-card p-6 md:p-8">
                      <h4 className="text-xl font-medium mb-3">{section.title}</h4>
                      <p className="text-muted-foreground mb-4">{section.desc}</p>
                      <ul className="space-y-2">
                        {section.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Benefits if available */}
            {currentProgram.benefits && (
              <section className="py-12 px-4 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-light text-center mb-12">
                    Čo budeš na {currentProgram.name} programe milovať
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {currentProgram.benefits.map((benefit, idx) => (
                      <div key={idx} className="glass-card p-6 text-center">
                        <p className="font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Highlight if available */}
            {currentProgram.highlight && (
              <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    {currentProgram.highlight}
                  </p>
                </div>
              </section>
            )}

            {/* Pricing */}
            <section className="py-16 px-4 bg-primary/5">
              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-8 md:p-12 text-center">
                  <Badge className="mb-4">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {currentProgram.duration}
                  </Badge>
                  <h3 className="text-3xl font-light mb-2">{currentProgram.name}</h3>
                  <div className="text-5xl font-medium gradient-text mb-6">
                    €{currentProgram.price}
                  </div>
                  <p className="text-muted-foreground mb-8">Menej ako 2,50€ za cvičenie</p>
                  
                  <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Prístup do programu na 2 mesiace</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{currentProgram.exercises}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{currentProgram.stretching}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{currentProgram.meditations}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>eBook s 30 zdravými receptami</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Bonusy v hodnote skoro 200 EUR</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full md:w-auto bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                    onClick={() => navigate('/checkout')}
                  >
                    Pridať do košíka
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">*7-dňová garancia vrátenia peňazí</p>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="py-12 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-lg font-medium">5.0</span>
                </div>
                <p className="text-muted-foreground mb-8">Cez 170 overených 5* Google Reviews</p>
              </div>
            </section>

            {/* Journey Navigation */}
            <section className="py-16 px-4 bg-muted/30">
              <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-light mb-8">Tvoja cesta s NeoMe</h3>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Nemusíš rozmýšlať, čo ďalej. Po dokončení {currentProgram.name} programu ťa automaticky posunieme na ďalší level, 
                  ktorý ti pomôže dosiahnuť ešte lepšie výsledky.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  {programs.map((program) => (
                    <button
                      key={program.level}
                      onClick={() => setSelectedLevel(program.level)}
                      className={`glass-card p-6 text-center transition-all hover:scale-105 ${
                        program.level === selectedLevel ? 'border-2 border-primary' : ''
                      }`}
                    >
                      <div className="text-sm text-muted-foreground mb-2">Level {program.level}</div>
                      <div className="font-medium mb-2">{program.name}</div>
                      <div className="text-xs text-muted-foreground">{program.duration}</div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingCTA />
    </div>
  );
};

export default Programy;
