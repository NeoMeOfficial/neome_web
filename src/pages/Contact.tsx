import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EnvelopeSimple, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Správa odoslaná.",
      description: "Ďakujeme za správu. Odpovieme ti čo najskôr.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Kontaktuj <span className="gradient-text font-medium">nás</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Máš otázku? Potrebuješ pomoc? Sme tu pre teba.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-light mb-6">Napíš nám</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-light mb-2 block">
                    Meno
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="Tvoje meno" 
                    required
                    className="glass-card"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-light mb-2 block">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tvoj@email.sk" 
                    required
                    className="glass-card"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-light mb-2 block">
                    Predmet
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="O čom chceš písať?" 
                    required
                    className="glass-card"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-light mb-2 block">
                    Správa
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tvoja správa..." 
                    rows={6}
                    required
                    className="glass-card resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full neuro-button bg-primary text-primary-foreground"
                >
                  Odoslať správu
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card p-8">
                <div className="flex items-start gap-4">
                  <EnvelopeSimple size={32} weight="light" className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">
                      Odpovieme ti do 24 hodín.
                    </p>
                    <a 
                      href="mailto:info@neome.com" 
                      className="text-primary hover:underline"
                    >
                      info@neome.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h3 className="text-xl font-medium mb-4">Sledujte Nás</h3>
                <p className="text-muted-foreground mb-6">
                  Pridajte sa k našej komunite na sociálnych sieťach pre dennú inšpiráciu.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramLogo size={24} weight="light" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookLogo size={24} weight="light" />
                  </a>
                </div>
              </Card>

              <Card className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/20">
                <h3 className="text-xl font-medium mb-4">Často Kladené Otázky</h3>
                <p className="text-muted-foreground mb-4">
                  Skôr než nám napíšete, pozrite sa na naše FAQ. Možno tam nájdete odpoveď.
                </p>
                <Button variant="outline" asChild>
                  <a href="/#faq">Pozrieť FAQ</a>
                </Button>
              </Card>
            </div>
          </div>
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

export default Contact;