import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import appMockupExtras from "@/assets/app-mockup-extras.png";

const Extras = () => {
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
                Extras
              </h1>
              <p className="text-2xl text-muted-foreground font-light mb-8">
                Špeciálne programy, výzvy a exkluzívny obsah pre tvoj rast
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Prístup k špeciálnym programom, výzvám a exkluzívnemu obsahu. Nájdeš tu dodatočné nástroje pre tvoju osobnú transformáciu – od špeciálnych workoutov až po tematické výzvy, ktoré ťa posunú ďalej.
              </p>
              <Button size="lg" className="text-base px-8 py-6">
                🔥 Objaviť extras
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={appMockupExtras} 
                alt="NeoMe App - Extras" 
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
            Čo nájdeš v Extras
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Špeciálne programy</h3>
              <p className="text-muted-foreground">
                Cielené 6-8 týždňové programy pre tvoje špecifické ciele a potreby.
              </p>
            </Card>
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Výzvy</h3>
              <p className="text-muted-foreground">
                Tematické výzvy, ktoré ťa motivujú a posunú na vyššiu úroveň.
              </p>
            </Card>
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Exkluzívny obsah</h3>
              <p className="text-muted-foreground">
                Prístup k dodatočným nástrojom pre tvoju osobnú transformáciu.
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

export default Extras;
