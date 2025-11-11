import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import appMockupCommunity from "@/assets/app-mockup-community.png";

const Komunita = () => {
  return (
    <div className="min-h-screen bg-white text-foreground pt-20">
      {/* Back Navigation */}
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <Button variant="ghost" asChild className="gap-2">
          <a href="/">
            <ArrowLeft size={20} />
            Späť na hlavnú stránku
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Komunita
              </h1>
              <p className="text-2xl text-muted-foreground font-light mb-8">
                Pripoj sa k tisíckam žien na podobnej transformačnej ceste
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Pripoj sa k tisíckam žien, ktoré sú na podobnej ceste ako ty. Zdieľaj svoje úspechy, nájdi inšpiráciu v príbehoch ostatných a cíť podporu komunity, ktorá ťa povzbudí aj v náročnejších dňoch. Spolu to ide lepšie.
              </p>
              <Button size="lg" className="text-base px-8 py-6">
                🔥 Pripojiť sa ku komunite
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={appMockupCommunity} 
                alt="NeoMe App - Komunita" 
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            Prečo je komunita dôležitá
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Vzájomná podpora</h3>
              <p className="text-muted-foreground">
                Ženy, ktoré ti rozumejú a povzbudia ťa aj v náročnejších dňoch.
              </p>
            </Card>
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Inšpirácia</h3>
              <p className="text-muted-foreground">
                Príbehy úspechov a transformácií, ktoré ťa motivujú pokračovať.
              </p>
            </Card>
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Spolu to ide lepšie</h3>
              <p className="text-muted-foreground">
                Keď vieš, že nie si sama, je ľahšie držať sa svojich cieľov.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-3xl shadow-xl p-10 md:p-16 text-center bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Pripravená začať?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stiahni si aplikáciu a začni svoju transformáciu ešte dnes.
            </p>
            <Button size="lg" className="text-base px-8 py-6">
              🔥 STIAHNUŤ APLIKÁCIU ZDARMA
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Komunita;
