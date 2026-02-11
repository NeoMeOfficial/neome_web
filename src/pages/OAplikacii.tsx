import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppOverview } from "@/components/AppOverview";
import { ArrowRight, Star, Play, Heart, Check } from "lucide-react";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
import lifestyleYogaMat from "@/assets/lifestyle-yoga-mat.webp";
import lifestyleCoreWorkout from "@/assets/lifestyle-core-workout.jpg";
import lifestylePregnancy from "@/assets/lifestyle-pregnancy.jpg";
import lifestyleCollage from "@/assets/lifestyle-collage.png";
import { useState } from "react";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { motion } from "framer-motion";
const OAplikacii = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const openVideoModal = (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setVideoModalOpen(true);
  };
  return <div className="min-h-screen">
      <VideoPlayerModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} videoId={currentVideoId} videoTitle={currentVideoTitle} />

      {/* Hero Split Section */}
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
            {/* Left Content */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                O aplikácii NeoMe
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1]">
                Pomôžeme ti začať tam, kde si. <span className="gradient-text font-normal block mt-2">Aj 15 minút sa počíta.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">Začni budovať svoju Novú Ja už dnes.
SILNÚ -  ZDRAVÚ -  SEBAVEDOMÚ.
            </p>
              


            </motion.div>

            {/* Right Image */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img src={lifestyleYogaMat} alt="Žena pripravujúca podložku na cvičenie" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's in the App - Full Overview Section */}
      <AppOverview />

      {/* Empathy Quote Section */}
      


      {/* Real Women Section - Magazine Style */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-section-white/50 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Pre <span className="gradient-text font-normal">skutočné ženy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nie inštagram fotky. Ale reálny život medzi varením, e-mailami, únavou a túžbou byť chvíľu sama.
            </p>
          </div>

          {/* Quote Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Aj keď si to dnes nedala naplno – dala si zo seba všetko, čo si mala. <span className="font-medium text-foreground">A to je dosť.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Začni tam, kde si. <span className="font-medium text-foreground">Aj 15 minút sa počíta.</span> Nehľadaj ideálny deň. Začni v ten, ktorý máš."
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Tvoje tempo je správne tempo. <span className="font-medium text-foreground">Nikto iný nemá tvoj život.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Dnes nemáš energiu? Tak si daj len strečing. <span className="font-medium text-foreground">Aj to sa počíta.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Neporovnávaj sa s nikým. <span className="font-medium text-foreground">Ty si svoj vlastný štandard.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Nie si lenivá. Si unavená. <span className="font-medium text-foreground">A aj tak si tu.</span> To je odvaha."
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Starostlivosť o seba nie je sebeckosť. <span className="font-medium text-foreground">Je to nutnosť.</span>"
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              <Card className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/20 transition-all h-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  "Každý deň je nový začiatok. <span className="font-medium text-foreground">Včerajšok nemusíš naprávať.</span> Stačí začať dnes."
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Featured Section with Pregnancy Image */}
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={lifestylePregnancy} alt="Žena v tehotenstve" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="lg:col-span-3">
              <Card className="p-8 md:p-12 rounded-2xl border-border/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <Heart size={40} className="text-primary mb-6" />
                <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                  Nie si len mama, partnerka, zamestnankyňa
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Si žena. A to je viac než dosť. Tvoja hodnota nerastie s počtom odcvičených tréningov. Ale s každým momentom, keď sa rozhodneš nezabudnúť na seba.
                </p>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>


      {/* Testimonials Section with Background Layers */}
      <section id="testimonials" className="relative py-12 md:py-16 px-4 md:px-8 overflow-hidden">
        {/* Decorative Background Images */}
        <div className="absolute left-0 bottom-0 w-1/5 h-1/3 opacity-[0.05] z-0 hidden xl:block">
          <img src={lifestyleYogaMat} alt="" className="w-full h-full object-cover rounded-tr-3xl" />
        </div>
        <div className="absolute right-0 top-0 w-1/5 h-1/3 opacity-[0.05] z-0 hidden xl:block">
          <img src={lifestyleCoreWorkout} alt="" className="w-full h-full object-cover rounded-bl-3xl" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-white border-border/10">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-4">
              Príbehy, ktoré inšpirujú
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-16">
              Skutočné ženy, skutočné výsledky.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonialMartina} alt="Martina" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-medium text-lg">Martina, 34</h3>
                    <p className="text-sm text-muted-foreground">Mamička dvoch detí</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />)}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Po narodení druhého dieťaťa som sa cítila úplne stratená. NeoMe mi pomohlo vrátiť sa k sebe bez tlaku a výčitiek. Prvýkrát sa cítim silná v tele aj v mysli."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">-8 kg</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepší spánok</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac energie</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonialLucia} alt="Lucia" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-medium text-lg">Lucia, 29</h3>
                    <p className="text-sm text-muted-foreground">Kariérna žena</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />)}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Nemusím sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel. Konečne som našla niečo, čo sa hodí do môjho rýchleho života."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Menej stresu</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pevnejšie telo</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac sebavedomia</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-8 rounded-2xl border-2 border-border/20 hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonialZuzana} alt="Zuzana" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-medium text-lg">Zuzana, 41</h3>
                    <p className="text-sm text-muted-foreground">Podnikateľka</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />)}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Meditácie a dychové cvičenia zmenili môj prístup k životu. Už sa nenechám tak ľahko rozhodiť a mám viac energie na rodinu aj biznis. Je to o celej mne, nie len o cvičení."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pokojnejšia myseľ</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepšia koncentrácia</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac radosti</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                    Prečítať celý príbeh
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Pridaj sa k <span className="gradient-text font-medium">4000+ ženám</span>, ktoré už zmenili svoj život.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform">
                PRIDAJ SA K TISÍCKAM ŽIEN
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section id="video-testimonials" className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-accent/10 border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
              Pozri ich transformácie
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              Nech ich príbehy ťa inšpirujú k vlastnej zmene.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video Card 1 */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow" onClick={() => openVideoModal("dQw4w9WgXcQ", "Martinina cesta - Ako som stratila 8 kg")}>
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <img src={testimonialMartina} alt="Martina transformation video" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-primary ml-1" fill="hsl(var(--primary))" />
                    </div>
                    <p className="text-white font-medium mt-4 text-lg">Martinina cesta</p>
                    <p className="text-white/80 text-sm">3:45</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">
                    Ako som stratila 8 kg a získala energiu
                  </p>
                </div>
              </div>

              {/* Video Card 2 */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow" onClick={() => openVideoModal("dQw4w9WgXcQ", "Luciin príbeh - 15 minút denne")}>
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <img src={testimonialLucia} alt="Lucia transformation video" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-primary ml-1" fill="hsl(var(--primary))" />
                    </div>
                    <p className="text-white font-medium mt-4 text-lg">Luciin príbeh</p>
                    <p className="text-white/80 text-sm">2:30</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">
                    15 minút denne, ktoré zmenili môj život
                  </p>
                </div>
              </div>

              {/* Video Card 3 */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow" onClick={() => openVideoModal("dQw4w9WgXcQ", "Zuzanina premena - Od vyhorenia k pokoju")}>
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <img src={testimonialZuzana} alt="Zuzana transformation video" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-primary ml-1" fill="hsl(var(--primary))" />
                    </div>
                    <p className="text-white font-medium mt-4 text-lg">Zuzanina premena</p>
                    <p className="text-white/80 text-sm">4:15</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-muted-foreground">
                    Od vyhorenia k vnútornému pokoju
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                POZRIEŤ VŠETKY PRÍBEHY
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="rounded-3xl shadow-xl p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
            
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Aj ty si dôležitá. Aj ty máš právo byť prioritou.
            </h2>
            <p className="text-xl mb-10 text-muted-foreground leading-relaxed">
              Každá transformácia začína jediným rozhodnutím.<br />
              Tým rozhodnutím môžeš byť ty. Teraz.
            </p>
            <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
              STIAHNI APLIKÁCIU A ZAČNI
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Vyskúšaj zadarmo 7 dní. Zruš kedykoľvek.
            </p>
          </Card>
        </div>
      </section>
    </div>;
};
export default OAplikacii;