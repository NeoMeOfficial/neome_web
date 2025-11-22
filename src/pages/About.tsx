import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import gabiYogaMat from "@/assets/gabi-yoga-mat.png";
import gabiStairs from "@/assets/gabi-stairs.png";
import gabiBalance from "@/assets/gabi-balance.png";
import gabiFamily from "@/assets/gabi-family.png";
const About = () => {
  return <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <main className="pt-32 pb-20 px-4">
        
        {/* Hero Section */}
        <div className="container mx-auto max-w-6xl mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Verím, že pohyb je liek, ktorý máme všetci <span className="gradient-text font-medium">nadosah</span>.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Je pre mňa poslaním, aby moje klientky boli pre seba prioritou a boli spokojné nie len s tým ako vyzerajú a hlavne ako sa cítia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Byť vyrovnanou ženou, ktorá je odhodlaná a pripravená zvládnuť každodenné nástrahy s nadhľadom je skvelý pocit, ktorý by som dopriala každej mame.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <img src={gabiYogaMat} alt="Gabi cvičenie" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Prečo NeoMe Section */}
        <div className="container mx-auto max-w-5xl mb-32">
          <Card className="glass-card p-12 md:p-16 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="text-center mb-12">
              
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Prečo <span className="gradient-text font-medium">NeoMe</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                V preklade NeoMe znamená <span className="font-medium text-primary">"Nová Ja"</span>, ktorá má nové návyky, nový pocit zo seba, novú energiu, nové sebavedomie.
              </p>
              <p>
                Tých 15 minút denne, ktoré budeš v našich programoch sebe venovať je veľmi návykových. Aj za tak krátko, ako je 15 minút vieš pre seba získať veľmi veľa. Pevné a funkčné telo, vnútorný pokoj, nadhľad, radosť zo seba, pocit sebauznania a sebadôvery.
              </p>
              <p>
                Po narodení prvej dcérky bolo pre mňa pravidelných 15 minút venovaných sebe víťazstvom. Skvelým pocitom, že som dokázala popri tom všetkom urobiť niečo aj pre seba a nezostať "iba mamou".
              </p>
              <p className="text-xl font-medium text-primary text-center pt-6">
                Tento pocit si zamiluješ aj ty.
              </p>
            </div>
          </Card>
        </div>

        {/* Quote Section */}
        <div className="container mx-auto max-w-4xl mb-32">
          <Card className="glass-card p-10 md:p-16 text-center bg-gradient-to-br from-accent/10 to-primary/5">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              "Pri kreovaní programov je pre mňa dôležité, aby každý program spĺňal vysoké nároky mamičiek na čas a efektivitu."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Gabi <span className="text-primary">(zakladateľka NeoMe)</span>
            </p>
          </Card>
        </div>

        {/* Ako vznikala NeoMe - Story Section */}
        <div className="container mx-auto max-w-6xl mb-32">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Ako vznikala <span className="gradient-text font-medium">NeoMe</span>
          </h2>

          <div className="space-y-20">
            {/* Introduction */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img src={gabiStairs} alt="Gabi" className="w-full rounded-3xl shadow-xl" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-light mb-6">Ahoj,</h3>
                <p className="text-lg leading-relaxed mb-4">
                  moje meno je Gabi a rada by som ti povedala niečo o sebe a o NeoMe. Pohyb je pre mňa odmena, spôsob ako si oddýchnuť a nájsť si čas pre seba.
                </p>
                <p className="text-lg leading-relaxed">
                  Od útleho detstva som tancom vyjadrovala, kto som a čo cítim. Neskôr som v tanci súťažila, učila ho a bola choreografkou. Venovala som sa – baletu, jazzu, folku, street-ovému tancu. Tanec som vyštudovala a získala tak holistický prístup k pohybu a k tomu, ako funguje ľudské telo a procesy v ňom.
                </p>
              </div>
            </div>

            {/* Professional Career */}
            <Card className="glass-card p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-4">
                Ako profesionálny tanečník som cestovala po Európe, tancovala v národnom divadle, známych TV shows, pracovala s profesionálmi ako Tommy Hilfiger, Avicii a značkami ako Adidas, Red Bull, či Coca-Cola.
              </p>
            </Card>

            {/* Transformation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={gabiBalance} alt="Gabi cvičenie" className="w-full rounded-3xl shadow-xl" />
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Keď som mala 25, cítila som sa vyhorená vo svete svetiel a pozlátok, v ktorom som pracovala denne. Začala som vnímať pohyb inak; cez jogu, pilates, rezistenčný tréning a fitness.
                </p>
                <p className="text-lg leading-relaxed">
                  Počas prvého tehotenstva som využila všetky znalosti o tom, ako telo funguje a pripravila sa na pôrod, ktorý bol pre mňa úžasným zážitkom. Veľa času som venovala samovzdelávaniu. Tehotenstvo, pôrod a popôrodné mesiace sú špecifickým obdobím pre každú ženu.
                </p>
              </div>
            </div>

            {/* Discovery */}
            <Card className="glass-card p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/10">
              <p className="text-lg leading-relaxed mb-4">
                Počas tohto obodbia, som si potvrdila, ako veľmi môže pohyb zmeniť život ženy a jej prežívanie významných životných udalostí.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ako nová mamička som sa pri zotavovaní z tehotenstva a pôrodu opäť spoľahla na pohyb. Vnímala som však možné prekážky, ktoré mi stáli v ceste na to, aby som sa opäť cítila silná, zdravá a sebavedomá.
              </p>
              <p className="text-xl font-medium text-primary text-center pt-4">
                Nedostatok času, energie a motivácie – skoro každá žena to zažíva.
              </p>
            </Card>

            {/* Creation of NeoMe */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img src={gabiFamily} alt="Gabi s rodinou" className="w-full rounded-3xl shadow-xl" />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg leading-relaxed mb-4">
                  Vytvorila som preto program, ktorý sa venuje práve tomuto obdobiu. Postupne som vytvorila ďalšie programy, ktoré sú odpoveďou na to, čo žena potrebuje a v akých životných fázach sa nachádza.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  V každom programe som prepojila moje vedomosti, 15-ročné skúsenosti a reálny život matky.
                </p>
                <p className="text-lg leading-relaxed font-medium">
                  NeoMe programy posilňujú telo a myseľ, vedú k zdravým návykom a pomôžu ti cítiť sa skvele vo svojom tele.
                </p>
              </div>
            </div>

            {/* Final Message */}
            <Card className="glass-card p-10 md:p-16 text-center bg-gradient-to-br from-primary/10 to-accent/20">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                Každá žena, matka si zaslúži cítiť sa opäť silno, zdravo a sebavedomo a NeoMe programy ti to umožnia.
              </p>
              <p className="text-2xl md:text-3xl font-light">
                Pridaj sa aj ty do NeoMe a začni svoju cestu za svojou <span className="gradient-text font-medium">"novou ja"</span>.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto max-w-5xl">
          <Card className="glass-card p-12 md:p-16 text-center bg-gradient-to-br from-accent/20 to-primary/10">
            <Heart size={48} weight="fill" className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Programy NeoMe sú pre každú maminu.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Odmeň sa pohybom vďaka jednoducho vedeným online cvičeniam, ktoré ti pomôžu cítiť sa silno, zdravo a sebavedomo v každom štádiu života.
            </p>
            <p className="text-xl font-medium text-primary mb-8">
              Z pohodlia tvojho domova.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-base hover:scale-105 transition-transform">
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
    </div>;
};
export default About;