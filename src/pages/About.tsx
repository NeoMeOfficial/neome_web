import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Sparkle, CheckCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      period: "2005-2015",
      title: "Začiatky",
      subtitle: "Tanec ako životná láska",
      description: "Tanec bol pre mňa vždy viac než len pohyb. Bola to moja radosť, moja forma sebavyjadrenia a moja profesionálna kariéra. Ako tanečníčka a trénerka som pomáhala ženám objaviť silu svojho tela a získať sebavedomie cez pohyb.",
      image: "placeholder-young-gabi.jpg"
    },
    {
      period: "2016-2018",
      title: "Zlom",
      subtitle: "Materstvo a hľadanie seba",
      description: "Keď som sa stala mamičkou, zmenilo sa všetko. Môj vzťah k telu, k pohybu, k času... Zrazu som pochopila, že tradičné fitnes rutiny nie sú navrhnuté pre reálne ženy s reálnymi životmi. Bolo to obdobie hľadania – hľadania rovnováhy, sily a znovu aj seba samej.",
      image: "placeholder-gabi-with-baby.jpg"
    },
    {
      period: "2019-2021",
      title: "Transformácia",
      subtitle: "Vytvorenie metódy",
      description: "Začala som vytvárať vlastný prístup – holistický wellbeing, ktorý spája pohyb, výživu a myseľ. Nie dokonalosť, ale starostlivosť. Nie extrém, ale konzistencia. Testovala som svoju metódu s malými skupinami mamičiek a videla skutočné transformácie – nielen fyzické, ale celostné.",
      image: "placeholder-gabi-teaching.jpg"
    },
    {
      period: "2022-Teraz",
      title: "NeoMe",
      subtitle: "Komunita tisícok žien",
      description: "NeoMe sa zrodilo z túžby priniesť tento holistický prístup čo najväčšiemu počtu žien. Dnes je tu komunita viac než 4000 žien, ktoré sa navzájom podporujú, inšpirujú a rastú spolu. Každý deň vidím, ako sa ženy transformujú – nielen ako vyzerajú, ale ako sa cítia.",
      image: "placeholder-gabi-community.jpg"
    }
  ];

  const philosophy = [
    "Cvičenie nie je trest za to, čo si zjedla.",
    "Každá mamička si zaslúži cítiť sa silná a pokojná.",
    "Transformácia začína v hlave, nie na váhe.",
    "Komunita ťa podržĺ, keď vlastná motivácia nestačí."
  ];

  const credentials = [
    "15+ rokov skúseností v tanci a tréningu",
    "Certifikovaná trénerka pre postpartum program",
    "Certifikovaná výživová poradkyňa",
    "Mindfulness inštruktorka",
    "Zakladateľka NeoMe komunity 4000+ žien"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <main className="pt-32 pb-20 px-4">
        
        {/* Hero Section */}
        <div className="container mx-auto max-w-4xl mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Ahoj, Som <span className="gradient-text font-medium">Gabi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A toto je môj príbeh o tom, ako som našla rovnováhu medzi tancom, 
              materstvom a vytvorením NeoMe – priestoru pre všetky ženy, ktoré chcú byť silné aj pokojné.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <p className="text-foreground/60 text-center px-8 text-lg">
                [Hlavná hero fotka Gabi - profesionálny portrét]
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="container mx-auto max-w-6xl mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Moja <span className="gradient-text font-medium">Cesta</span>
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-primary/20 transform -translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <Card 
                  key={index} 
                  className={`glass-card p-8 md:p-12 relative animate-fade-in ${
                    index % 2 === 0 ? 'md:mr-auto md:w-[48%]' : 'md:ml-auto md:w-[48%]'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-y-1/2" 
                       style={{ 
                         [index % 2 === 0 ? 'right' : 'left']: '-3.5rem'
                       }} 
                  />

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-3xl font-light mb-2">{item.title}</h3>
                    <p className="text-lg text-primary font-medium mb-4">{item.subtitle}</p>
                  </div>

                  <p className="text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Timeline image placeholder */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/2] bg-gradient-to-br from-muted to-muted/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm text-center px-4">
                        [{item.image}]
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="container mx-auto max-w-5xl mb-20">
          <Card className="glass-card p-12 md:p-16 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="text-center mb-12">
              <Sparkle size={48} weight="fill" className="text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-light mb-4">
                V čo <span className="gradient-text font-medium">verím</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {philosophy.map((belief, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 hover:bg-white transition-colors"
                >
                  <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">"{belief}"</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Credentials Section */}
        <div className="container mx-auto max-w-5xl mb-20">
          <h2 className="text-4xl font-light text-center mb-12">
            Moje <span className="gradient-text font-medium">Kvalifikácie</span>
          </h2>

          <Card className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Target size={20} weight="fill" className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-base">{credential}</p>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-muted to-muted/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">
                    [Profesionálna fotka - certifikáty/workshop]
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Touch Section */}
        <div className="container mx-auto max-w-4xl mb-20">
          <Card className="glass-card p-10 md:p-12 text-center">
            <Heart size={48} weight="fill" className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-light mb-6">Keď nie som v aplikácii...</h3>
            <p className="text-lg leading-relaxed mb-4">
              Nájdeš ma v prírode s rodinou, pri experimentovaní s novými receptami, 
              alebo pri rannej káve s obľúbenou knihou. Verím, že wellbeing nie je len o cvičení – 
              je to o celom živote naplnenom radosťou, pokojom a spoločnosťou ľudí, ktorých milujeme.
            </p>
            <p className="text-base text-muted-foreground">
              Mám rada dlhé prechádzky, slovenské tradičné jedlá s moderným twistom, 
              a tiché rána, keď všetci ešte spia.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card p-12 text-center bg-gradient-to-br from-primary/10 to-accent/20">
            <Sparkle size={48} weight="fill" className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Začni Svoju Transformáciu s NeoMe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Pridaj sa k tisíckam žien, ktoré si vybrali seba. 
              Každá transformácia začína jediným rozhodnutím. Tým rozhodnutím môžeš byť ty. Teraz.
            </p>
            <Button 
              asChild
              size="lg" 
              className="px-8 py-6 text-base hover:scale-105 transition-transform"
            >
              <Link to="/">
                STIAHNUŤ APLIKÁCIU
              </Link>
            </Button>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light">
              Neo<span className="gradient-text font-medium">Me</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Ochrana údajov</a>
              <a href="#" className="hover:text-foreground transition-colors">Obchodné podmienky</a>
              <Link to="/kontakt" className="hover:text-foreground transition-colors">Kontakt</Link>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 NeoMe. Všetky práva vyhradené.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
