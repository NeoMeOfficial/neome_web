import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Play } from "lucide-react";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
import lifestyleYogaMat from "@/assets/lifestyle-yoga-mat.webp";
import lifestyleCoreWorkout from "@/assets/lifestyle-core-workout.jpg";
import { useState } from "react";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { motion } from "framer-motion";

const Transformacie = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  const openVideoModal = (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoId={currentVideoId}
        videoTitle={currentVideoTitle}
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Transformácie
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1]">
              Skutočné ženy, <span className="gradient-text font-normal">skutočné výsledky</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Príbehy žien, ktoré sa rozhodli investovať do seba.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 md:py-16 px-4 md:px-8 overflow-hidden">
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
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Po narodení druhého dieťaťa som sa cítila úplne stratená. NeoMe mi pomohlo vrátiť sa k sebe bez tlaku a výčitiek. Prvýkrát sa cítim silná v tele aj v mysli."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">-8 kg</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepší spánok</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac energie</span>
                </div>
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
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Nemusím sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel. Konečne som našla niečo, čo sa hodí do môjho rýchleho života."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Menej stresu</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pevnejšie telo</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac sebavedomia</span>
                </div>
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
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Meditácie a dychové cvičenia zmenili môj prístup k životu. Už sa nenechám tak ľahko rozhodiť a mám viac energie na rodinu aj biznis. Je to o celej mne, nie len o cvičení."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Pokojnejšia myseľ</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Lepšia koncentrácia</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Viac radosti</span>
                </div>
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
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Card className="rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-accent/10 border-border/10">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
              Pozri ich transformácie
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              Nech ich príbehy ťa inšpirujú k vlastnej zmene.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openVideoModal("dQw4w9WgXcQ", "Martinina cesta - Ako som stratila 8 kg")}
              >
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
                  <p className="text-sm text-muted-foreground">Ako som stratila 8 kg a získala energiu</p>
                </div>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openVideoModal("dQw4w9WgXcQ", "Luciin príbeh - 15 minút denne")}
              >
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
                  <p className="text-sm text-muted-foreground">15 minút denne, ktoré zmenili môj život</p>
                </div>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => openVideoModal("dQw4w9WgXcQ", "Zuzanina premena - Od vyhorenia k pokoju")}
              >
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
                  <p className="text-sm text-muted-foreground">Od vyhorenia k vnútornému pokoju</p>
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
    </div>
  );
};

export default Transformacie;
