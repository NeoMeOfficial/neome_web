import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Sparkle } from "@phosphor-icons/react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              O <span className="gradient-text font-medium">NeoMe</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sme tu pre skutočné ženy. Pre tie, ktoré chcú byť silné, ale aj pokojné. 
              Pre tie, ktoré hľadajú rovnováhu medzi všetkými rolami, ktoré každý deň zohráva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="glass-card p-10">
              <h2 className="text-3xl font-light mb-6">Naša Misia</h2>
              <p className="text-lg leading-relaxed mb-4">
                Veríme, že wellbeing nie je o dokonalosti. Je o každodennom rozhodnutí venovať čas sebe samej, 
                aj keď je to len 10 minút.
              </p>
              <p className="text-lg leading-relaxed">
                NeoMe vzniklo z potreby skutočných žien – mamičiek, profesionálok, dcér, partneriek – 
                ktoré chceli niečo reálne. Niečo, čo sa im prispôsobí, nie naopak.
              </p>
            </Card>

            <Card className="glass-card p-10">
              <h2 className="text-3xl font-light mb-6">Naša Vízia</h2>
              <p className="text-lg leading-relaxed mb-4">
                Chceme vytvoriť komunitu, kde sa ženy cítia podporované, nie súdené. 
                Kde každý malý krok vpred je oslavou.
              </p>
              <p className="text-lg leading-relaxed">
                Naša aplikácia kombinuje pohyb, výživu, mentálnu pohodu a sledovanie tak, 
                aby si mohla vidieť svoju transformáciu – nielen na váhe, ale vo svojom pocite.
              </p>
            </Card>
          </div>

          <h2 className="text-4xl font-light text-center mb-12">Čo Nás Definuje</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Heart,
                title: "Empatia",
                desc: "Rozumieme, že tvoj čas je vzácny. Preto sú naše tréningy krátke, ale efektívne. Každý moment počíta."
              },
              {
                icon: Users,
                title: "Komunita",
                desc: "Nie si v tom sama. Pridaj sa k tisíckam žien, ktoré si navzájom pomáhajú a inšpirujú sa."
              },
              {
                icon: Target,
                title: "Cieľavedomosť",
                desc: "Či už chceš obnoviť silu po pôrode alebo formovať telo, máme program presne pre teba."
              }
            ].map((value, i) => (
              <Card key={i} className="glass-card p-8 text-center hover:scale-105 transition-transform">
                <value.icon size={48} weight="light" className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="glass-card p-12 text-center bg-gradient-to-br from-primary/10 to-accent/20">
            <Sparkle size={48} weight="fill" className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-light mb-6">
              Začni Svoju Cestu s NeoMe Dnes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Každá transformácia začína jediným rozhodnutím. Tým rozhodnutím môžeš byť ty. Teraz.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-3 neuro-button bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform"
            >
              Stiahnuť Aplikáciu
            </a>
          </Card>
        </div>
      </main>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light">
              Neo<span className="gradient-text font-medium">Me</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Ochrana údajov</a>
              <a href="#" className="hover:text-foreground transition-colors">Obchodné podmienky</a>
              <a href="/kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
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