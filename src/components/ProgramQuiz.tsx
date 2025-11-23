import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: { [key: string]: number };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Ako by si opísala svoju aktuálnu situáciu?",
    options: [
      { text: "Som mamina po pôrode (týždne až roky)", points: { level1: 3, level2: 0, level3: 0, level4: 0 } },
      { text: "Začínam s pravidelným cvičením", points: { level1: 0, level2: 3, level3: 0, level4: 0 } },
      { text: "Cvičím už nejaký čas, chcem zvýšiť intenzitu", points: { level1: 0, level2: 0, level3: 3, level4: 1 } },
      { text: "Som pokročilá, chcem výzvy", points: { level1: 0, level2: 0, level3: 1, level4: 3 } }
    ]
  },
  {
    id: 2,
    question: "Máš nejaké z týchto ťažkostí?",
    options: [
      { text: "Diastáza alebo inkontinencia", points: { level1: 3, level2: 0, level3: 0, level4: 0 } },
      { text: "Bolesti chrbta alebo kĺbov", points: { level1: 2, level2: 2, level3: 0, level4: 0 } },
      { text: "Nízka kondícia", points: { level1: 0, level2: 3, level3: 1, level4: 0 } },
      { text: "Žiadne, cítim sa fit", points: { level1: 0, level2: 0, level3: 2, level4: 3 } }
    ]
  },
  {
    id: 3,
    question: "Koľko času môžeš venovať cvičeniu denne?",
    options: [
      { text: "Len pár minút (5-10 min)", points: { level1: 2, level2: 2, level3: 1, level4: 0 } },
      { text: "Okolo 15 minút", points: { level1: 3, level2: 3, level3: 3, level4: 3 } },
      { text: "20-30 minút", points: { level1: 1, level2: 2, level3: 3, level4: 3 } },
      { text: "Viac ako 30 minút", points: { level1: 0, level2: 1, level3: 2, level4: 3 } }
    ]
  },
  {
    id: 4,
    question: "Aký je tvoj hlavný cieľ?",
    options: [
      { text: "Posilniť brušný korzet a panvové dno", points: { level1: 3, level2: 0, level3: 0, level4: 0 } },
      { text: "Začať cvičiť a spevniť telo", points: { level1: 0, level2: 3, level3: 1, level4: 0 } },
      { text: "Vyformovať postavu a zvýšiť intenzitu", points: { level1: 0, level2: 1, level3: 3, level4: 1 } },
      { text: "Budovať silu a získať pevné telo", points: { level1: 0, level2: 0, level3: 1, level4: 3 } }
    ]
  },
  {
    id: 5,
    question: "Máš doma nejaké cvičebné pomôcky?",
    options: [
      { text: "Žiadne, len stoličku", points: { level1: 3, level2: 3, level3: 0, level4: 0 } },
      { text: "Pilates ball alebo elastickú gumu", points: { level1: 2, level2: 2, level3: 3, level4: 1 } },
      { text: "Elastické gumy rôznych odporov", points: { level1: 0, level2: 1, level3: 3, level4: 2 } },
      { text: "Jednoručky (činky)", points: { level1: 0, level2: 0, level3: 1, level4: 3 } }
    ]
  }
];

const levelResults = {
  level1: {
    level: "1",
    name: "Postpartum",
    description: "Program pre maminy, ktoré potrebujú spevniť brušný korzet, vyriešiť diastázu či inkontinenciu",
    color: "hsl(var(--level-1))",
    borderColor: "border-[hsl(var(--level-1-foreground))]"
  },
  level2: {
    level: "2",
    name: "BodyForming",
    description: "Ideálny program, keď chceš začať formovať a posilňovať celé telo a netrpíš diastázou",
    color: "hsl(var(--level-2))",
    borderColor: "border-[hsl(var(--level-2))]"
  },
  level3: {
    level: "3",
    name: "ElasticBands",
    description: "Ideálny program, keď chceš zvýšiť intenzitu a pridať dynamický odpor s elastickými gumami",
    color: "hsl(var(--level-3))",
    borderColor: "border-[hsl(var(--level-3))]"
  },
  level4: {
    level: "4",
    name: "Strong&Sexy",
    description: "Ideálny program, keď chceš posunúť svoje hranice a formovať postavu s jednoručkami",
    color: "hsl(var(--level-4))",
    borderColor: "border-[hsl(var(--level-4))]"
  }
};

interface ProgramQuizProps {
  onResult: (level: string) => void;
  onClose: () => void;
}

export const ProgramQuiz = ({ onResult, onClose }: ProgramQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ level1: 0, level2: 0, level3: 0, level4: 0 });
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (points: { [key: string]: number }) => {
    const newScores = {
      level1: scores.level1 + points.level1,
      level2: scores.level2 + points.level2,
      level3: scores.level3 + points.level3,
      level4: scores.level4 + points.level4
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 300);
    }
  };

  const getRecommendedLevel = () => {
    const maxScore = Math.max(scores.level1, scores.level2, scores.level3, scores.level4);
    if (scores.level1 === maxScore) return levelResults.level1;
    if (scores.level2 === maxScore) return levelResults.level2;
    if (scores.level3 === maxScore) return levelResults.level3;
    return levelResults.level4;
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScores({ level1: 0, level2: 0, level3: 0, level4: 0 });
    setShowResult(false);
    setSelectedOption(null);
  };

  const recommendedLevel = getRecommendedLevel();
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl glass-card p-8">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Otázka {currentQuestion + 1} z {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div>
                <h3 className="text-2xl font-light mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setSelectedOption(idx);
                        handleAnswer(option.points);
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedOption === idx
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedOption === idx ? "border-primary bg-primary" : "border-border"
                        }`}>
                          {selectedOption === idx && (
                            <CheckCircle className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                        <span className="font-light">{option.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={currentQuestion === 0 ? onClose : goBack}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {currentQuestion === 0 ? "Zavrieť" : "Späť"}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>

              <div>
                <h3 className="text-3xl font-light mb-2">
                  Tvoj ideálny program je
                </h3>
                <Badge 
                  className="text-lg px-4 py-2 mb-4"
                  style={{ backgroundColor: recommendedLevel.color }}
                >
                  Level {recommendedLevel.level}
                </Badge>
                <h4 className="text-4xl font-medium gradient-text mb-4">
                  {recommendedLevel.name}
                </h4>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                  {recommendedLevel.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => {
                    onResult(recommendedLevel.level);
                    onClose();
                  }}
                  className="bg-primary text-primary-foreground"
                >
                  Pozrieť program
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={restart}
                >
                  Zopakovať kvíz
                </Button>
              </div>

              <button
                onClick={onClose}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Zavrieť
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};
