import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HowItWorks } from "@/components/HowItWorks";
import { ArrowRight, Star, Play, Heart, Sparkle, CheckCircle } from "lucide-react";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana from "@/assets/testimonial-zuzana.jpg";
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

  const trustPoints = [
    {
      icon: Heart,
      title: "Nie si v tom sama",
      description: "Pripoj sa k 4000+ ženám, ktoré už našli svoju cestu späť k sebe.",
      quote: "Si žena, ktorá každý deň niečo nesie. Nie vždy je to vidieť, ale ty vieš, aké je to ťažké. A predsa ideš ďalej."
    },
    {
      icon: Sparkle,
      title: "Realita, nie dokonalosť",
      description: "Cvičíme medzi realitou. S telefónom, čo pípa. S deťmi, ktoré skáču. A aj tak to funguje.",
      quote: "Nezáleží na tom, či to vyzerá dobre. Záleží na tom, že to robíš pre seba."
    },
    {
      icon: CheckCircle,
      title: "Systém, ktorý funguje",
      description: "Aj 15 minút denne má väčší zmysel ako dokonalé nič. NeoMe ti pomôže vytvoriť návyk, ktorý zostane.",
      quote: "Motivácia prichádza a odchádza. Ale rutina, ktorú si vytvoríš z láskavosti k sebe, ostáva."
    }
  ];

  return (
    <div className="min-h-screen">
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoId={currentVideoId}
        videoTitle={currentVideoTitle}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            O aplikácii NeoMe
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Nie si <span className="gradient-text font-normal">pokazená</span>, keď sa ti nechce
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Si len človek, ktorý už príliš dlho ignoruje vlastné potreby. NeoMe ti pomôže vrátiť sa k sebe – jemne, reálne a bez tlaku.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* What's in the App - Timeline Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-section-white to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Čo nájdeš v aplikácii
            </Badge>
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Tvoja kompletná cesta k <span className="gradient-text font-normal">lepšiemu ja</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Všetko, čo potrebuješ pre telo, myseľ a ducha – na jednom mieste
            </p>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24 relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />

            {/* Item 1 - Right */}
            <motion.div 
              className="relative grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="md:text-right md:pr-12">
                <div className="inline-block md:float-right">
                  <Badge className="mb-4">Cvičenie</Badge>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Programy šité <span className="gradient-text font-normal">na mieru</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Od post-partum po body-forming. Každý program je navrhnutý tak, aby rešpektoval tvoje telo a životnú fázu.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>15-30 minútové tréningy</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Pre všetky úrovne</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Žiadne vybavenie</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Heart size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Nemusíš sa trápiť s hodinovými tréningami. 15 minút denne mi stačí a vidím obrovský rozdiel."
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 2 - Left */}
            <motion.div 
              className="relative grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="md:col-start-2 md:pl-12">
                <Badge className="mb-4">Strava</Badge>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Zdravé recepty <span className="gradient-text font-normal">pre reálny život</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jednoduché, chutné recepty, ktoré pripravíš aj s deťmi okolo. Bez extrémov, s láskyplným prístupom k strave.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Rýchle a jednoduché</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Pre celú rodinu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>S nutričnými hodnotami</span>
                  </li>
                </ul>
              </div>
              <div className="relative md:row-start-1 md:col-start-1">
                <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Sparkle size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Konečne recepty, ktoré sú zdravé, ale jednoduché. A moje deti ich jedia!"
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 3 - Right */}
            <motion.div 
              className="relative grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="md:text-right md:pr-12">
                <div className="inline-block md:float-right">
                  <Badge className="mb-4">Myseľ</Badge>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Vnútorný pokoj <span className="gradient-text font-normal">každý deň</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Meditácie, dychové cvičenia a mindfulness techniky, ktoré ti pomôžu nájsť kľud aj v chaose každodenného života.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Vedené meditácie</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>Dychové cvičenia</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end">
                      <CheckCircle size={16} className="text-primary mt-0.5 md:order-2" />
                      <span>5-15 minút</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Heart size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Meditácie mi pomohli nájsť pokoj, ktorý som stratila. Už sa necítim tak preťažená."
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Item 4 - Left */}
            <motion.div 
              className="relative grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="md:col-start-2 md:pl-12">
                <Badge className="mb-4">Komunita</Badge>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Nie si v tom <span className="gradient-text font-normal">sama</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pripoj sa k tisíckam žien, ktoré sa navzájom podporujú, inšpirujú a vytvárajú priestor bez súdenia.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Súkromná FB skupina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Live Q&A s Gabi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5" />
                    <span>Vzájomná podpora</span>
                  </li>
                </ul>
              </div>
              <div className="relative md:row-start-1 md:col-start-1">
                <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background z-10" />
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Sparkle size={32} className="text-primary" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "Komunita je najlepšia časť. Konečne som našla ženy, ktoré ma chápú."
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center mb-12">
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
                Unavená si preto, že <span className="gradient-text font-normal">dáváš</span>.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dáváš rodine, práci, okoliu. Dovoľ teraz dať aj sebe. Niekedy nepotrebuješ nový plán. Potrebuješ len pocit, že niekomu na tebe záleží.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Why NeoMe Matters */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Prečo práve <span className="gradient-text font-normal">NeoMe</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lebo rozumieme tomu, čo prežívaš. A vieme, že zmena začína malými krokmi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="p-8 rounded-2xl border-border/20 hover:border-primary/30 transition-all hover:shadow-xl group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{point.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {point.description}
                  </p>
                  <blockquote className="text-sm italic text-muted-foreground/80 border-l-2 border-primary/30 pl-4 mt-6">
                    "{point.quote}"
                  </blockquote>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Women Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-section-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Pre <span className="gradient-text font-normal">skutočné ženy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nie inštagram fotky. Ale reálny život medzi varením, e-mailami, únavou a túžbou byť chvíľu sama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border-border/20">
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Aj keď si to dnes nedala naplno – dala si zo seba všetko, čo si mala. <span className="font-medium text-foreground">A to je dosť.</span>"
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border-border/20">
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Začni tam, kde si. <span className="font-medium text-foreground">Aj 15 minút sa počíta.</span> Nehľadaj ideálny deň. Začni v ten, ktorý máš."
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border-border/20">
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Tvoje tempo je správne tempo. <span className="font-medium text-foreground">Nikto iný nemá tvoj život.</span>"
              </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border-border/20">
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Dnes nemáš energiu? Tak si daj len strečing. <span className="font-medium text-foreground">Aj to sa počíta.</span>"
              </p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
            <Heart size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Nie si len mama, partnerka, zamestnankyňa
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Si žena. A to je viac než dosť. Tvoja hodnota nerastie s počtom odcvičených tréningov. Ale s každým momentom, keď sa rozhodneš nezabudnúť na seba.
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
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
            <Sparkle size={56} className="text-primary mx-auto mb-6" />
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
    </div>
  );
};

export default OAplikacii;
