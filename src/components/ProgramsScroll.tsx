import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, Baby, Dumbbell, Zap, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import postpartumImg from "@/assets/postpartum-program.jpg";
import bodyformingImg from "@/assets/bodyforming-program.jpg";
import elasticbandsImg from "@/assets/elasticbands-program.jpg";
import strongsexyImg from "@/assets/strongsexy-program.jpg";
const individualPrograms = [{
  level: "Level 1",
  tag: "Postpartum",
  title: "Postpartum",
  description: "Program pre mamičky, ktoré potrebujú obnoviť silu brušného korzetu, riešiť diastázu a vrátiť sa k pohybu bezpečne a postupne.",
  features: ["Špeciálne cvičenia pre posilnenie brušného korzetu", "Bezpečný návrat k pohybu po pôrode", "Riešenie diastázy pod vedením expertov"],
  duration: "8 týždňov",
  image: postpartumImg,
  icon: Baby,
  accentColor: "bg-level-1",
  badgeColor: "bg-level-1 text-level-1-foreground",
  borderColor: "border-level-1",
  glowColor: "shadow-level-1/40"
}, {
  level: "Level 2",
  tag: "BodyForming",
  title: "BodyForming",
  description: "Ideálne pre formovanie tela a posilnenie svalov bez špeciálneho vybavenia. Zameraj sa na svaly, ktoré chceš definovať.",
  features: ["Efektívny tréning s vlastnou váhou", "Cielené formovanie problémových partií", "Žiadne špeciálne vybavenie potrebné"],
  duration: "6 týždňov",
  image: bodyformingImg,
  icon: Dumbbell,
  accentColor: "bg-level-2",
  badgeColor: "bg-level-2 text-level-2-foreground",
  borderColor: "border-level-2",
  glowColor: "shadow-level-2/40"
}, {
  level: "Level 3",
  tag: "ElasticBands",
  title: "ElasticBands",
  description: "Tréning s odporovými gumami pre svalovú definíciu a silu. Zvýš intenzitu a dosiahni vytvarované svaly.",
  features: ["Profesionálny tréning s odporovými pásmi", "Maximálna svalová aktivácia", "Viditeľná definícia a sila"],
  duration: "6 týždňov",
  image: elasticbandsImg,
  icon: Zap,
  accentColor: "bg-level-3",
  badgeColor: "bg-level-3 text-level-3-foreground",
  borderColor: "border-level-3",
  glowColor: "shadow-level-3/40"
}, {
  level: "Level 4",
  tag: "Strong&Sexy",
  title: "Strong&Sexy",
  description: "Pokročilý program pre kompletnú transformáciu tela a sebavedomia. Pre ženy pripravené posunúť sa na novú úroveň.",
  features: ["Intenzívny pokročilý tréning", "Kompletná transformácia tela", "Maximálna sila a sebavedomie"],
  duration: "8 týždňov",
  image: strongsexyImg,
  icon: Crown,
  accentColor: "bg-level-4",
  badgeColor: "bg-level-4 text-level-4-foreground",
  borderColor: "border-level-4",
  glowColor: "shadow-level-4/40"
}];
export const ProgramsScroll = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const program = individualPrograms[selectedProgram];
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && selectedProgram < individualPrograms.length - 1) {
      setSelectedProgram(selectedProgram + 1);
    }
    if (isRightSwipe && selectedProgram > 0) {
      setSelectedProgram(selectedProgram - 1);
    }
  };
  return <section id="programy" className="py-12 md:py-16 px-0 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl shadow-sm rounded-none">
        
        {/* Merged Program Card */}
        <Card className="rounded-3xl shadow-xl overflow-hidden bg-white border-border/10">
          {/* Introduction Section */}
          <div className="text-center max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Chceš Cielenú Transformáciu?
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Vyber si Štrukturovaný Program.
            </p>
            <p className="text-muted-foreground">
              Tieto 6-8 týždňové programy sú voliteľné doplnky k tvojmu predplatnému. Každý program zahŕňa <strong className="text-foreground">plný prístup k celej aplikácii NeoMe</strong> plus štrukturovaný tréningový plán navrhnutý pre hlbšiu, garantovanú zmenu.
            </p>
          </div>

          {/* Interactive Program Selection */}
          <div className="flex flex-col lg:grid lg:grid-cols-[320px,1fr]">
            
            {/* Accordion Navigation - Stacked on mobile, sidebar on desktop */}
            <div className="border-b lg:border-b-0 lg:border-r border-border/10 p-2 lg:p-8 bg-muted/10">
              
              <Accordion type="single" collapsible value={`item-${selectedProgram}`} onValueChange={value => {
              const index = parseInt(value.split('-')[1]);
              if (!isNaN(index)) setSelectedProgram(index);
            }} className="space-y-2">
                {individualPrograms.map((prog, index) => <AccordionItem key={index} value={`item-${index}`} data-program={index} onMouseEnter={() => setSelectedProgram(index)} className={`border-none border-l-4 ${selectedProgram === index ? prog.borderColor : 'border-transparent'} transition-all`}>
                    <AccordionTrigger className={`text-left hover:no-underline py-4 px-3 rounded-lg transition-all duration-300 ${selectedProgram === index ? 'bg-[#5F3E31] text-white scale-[1.02] shadow-lg' : 'bg-muted/20 shadow-md hover:bg-muted/30 hover:scale-[1.02] hover:shadow-lg'}`}>
                      <div className="flex items-center gap-3">
                        
                        <div className="flex flex-col gap-1">
                          <span className="text-sm">{prog.level}</span>
                          <span className="accordion-tag text-2xl font-normal">{prog.tag}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-2">
                      {/* Desktop: Short description only */}
                      
                      
                      {/* Mobile: Full program details */}
                      <div className="lg:hidden space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {prog.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-2">
                          {prog.features.map((feature, i) => <div key={i} className="flex items-start gap-2">
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full ${prog.accentColor} flex items-center justify-center mt-0.5`}>
                                <Check size={12} className={index === 0 ? "text-level-1-foreground" : "text-white"} />
                              </div>
                              <span className="text-sm text-foreground leading-relaxed">
                                {feature}
                              </span>
                            </div>)}
                        </div>
                        
                        {/* CTA Button */}
                        <Button size="lg" className={`w-full ${prog.accentColor} hover:opacity-90 ${index === 0 ? "text-level-1-foreground" : "text-white"} transition-all`}>
                          ZISTI VIAC O PROGRAME
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>

            {/* Selected Program Display with transition - Hidden on mobile */}
            <div className="hidden lg:block p-3 lg:p-12 xl:p-16 touch-pan-y" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
              <div className="max-w-4xl mx-auto">
                {/* Swipe Indicators - Mobile Only */}
                <div className="flex lg:hidden justify-center gap-2 mb-6">
                  {individualPrograms.map((_, index) => <button key={index} onClick={() => setSelectedProgram(index)} className={`h-2 rounded-full transition-all duration-300 ${selectedProgram === index ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/40'}`} aria-label={`Go to program ${index + 1}`} />)}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={selectedProgram} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -20
                }} transition={{
                  duration: 0.3
                }} className="grid md:grid-cols-[1fr,280px] lg:grid-cols-[1fr,320px] gap-8 lg:gap-12">
                  
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Icon Circle */}
                    

                    {/* Duration & Title */}
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${program.badgeColor} text-xs mb-3 font-medium`}>
                        {program.duration}
                      </div>
                      <h3 className="text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-2">
                      {program.features.map((feature, i) => <motion.div key={i} initial={{
                        opacity: 0,
                        x: -20
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: i * 0.1,
                        duration: 0.3
                      }} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${program.accentColor} flex items-center justify-center mt-0.5`}>
                            <Check size={12} className={selectedProgram === 0 ? "text-level-1-foreground" : "text-white"} />
                          </div>
                          <span className="text-sm text-foreground leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>)}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button size="lg" className={`${program.accentColor} hover:opacity-90 ${selectedProgram === 0 ? "text-level-1-foreground" : "text-white"} px-6 transition-all hover:scale-105 shadow-lg ${program.glowColor}`}>
                        ZISTI VIAC O PROGRAME
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>

                   {/* Image */}
                   <div className="relative flex items-start justify-center md:justify-end">
                    <div className={`relative rounded-2xl overflow-hidden shadow-xl w-full max-w-[280px] lg:max-w-[320px] border-t-4 ${program.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${program.glowColor}`}>
                      <div className="aspect-[3/4] relative group">
                        <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110" />
                        <div className={`absolute inset-0 bg-gradient-to-t from-${program.accentColor.split('-')[1]}-500/40 to-transparent`} />
                      </div>
                    </div>
                  </div>

                </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>;
};