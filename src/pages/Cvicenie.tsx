import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import appMockup1 from "@/assets/app-mockup-1.png";

const Cvicenie = () => {
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
                Cvičenie
              </h1>
              <p className="text-2xl text-muted-foreground font-light mb-8">
                5-15 minútové tréningy prispôsobené tvojmu rytmu a cieľom
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Tréningy na požiadanie, ktoré sa prispôsobia tvojmu denníku. Cvičenia zamerané na ženské telo: spevnenie brušného korzetu, zlepšenie metabolizmu a mobility. Vďaka krátkym tréningom už nemáš výhovorky – nájdeš si čas aj vtedy, keď si myslíš, že ho nemáš.
              </p>
              <Button size="lg" className="text-base px-8 py-6">
                🔥 Začať cvičiť
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={appMockup1} 
                alt="NeoMe App - Cvičenie" 
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
            Prečo naše tréningy fungujú
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Krátke a efektívne</h3>
              <p className="text-muted-foreground">
                5-15 minút denne stačí na to, aby si pocítila rozdiel. Žiadne hodiny v posilňovni.
              </p>
            </Card>
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Pre ženské telo</h3>
              <p className="text-muted-foreground">
                Cvičenia špeciálne navrhnuté pre ženy - brušný korzet, metabolizmus, mobilita.
              </p>
            </Card>
            <Card className="p-8 bg-white border-border/10">
              <CheckCircle size={48} weight="fill" className="text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Kedykoľvek, kdekoľvek</h3>
              <p className="text-muted-foreground">
                Nepotrebuješ špeciálne vybavenie ani posilňovňu. Cvič doma, v práci alebo na dovolenke.
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

export default Cvicenie;
