import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Sparkles, Shield, Award, Heart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Program {
  id: string;
  level: number;
  title: string;
  description: string;
  duration: string;
}

const programs: Program[] = [
  {
    id: "postpartum",
    level: 1,
    title: "Postpartum",
    description: "Program pre mamičky, ktoré potrebujú obnoviť silu brušného korzetu, riešiť diastázu a vrátiť sa k pohybu bezpečne a postupne.",
    duration: "8 týždňov"
  },
  {
    id: "bodyforming",
    level: 2,
    title: "BodyForming",
    description: "Ideálne pre formovanie tela a posilnenie svalov bez špeciálneho vybavenia. Zameraj sa na svaly, ktoré chceš definovať.",
    duration: "6 týždňov"
  },
  {
    id: "elasticbands",
    level: 3,
    title: "ElasticBands",
    description: "Tréning s odporovými gumami pre svalovú definíciu a silu. Zvýš intenzitu a dosiahni vytvarované svaly.",
    duration: "6 týždňov"
  },
  {
    id: "strongsexy",
    level: 4,
    title: "Strong & Sexy",
    description: "Pokročilý program pre kompletnú transformáciu tela a sebavedomia. Pre ženy pripravené posunúť sa na novú úroveň.",
    duration: "8 týždňov"
  }
];

export default function Checkout() {
  const [subscriptionPeriod, setSubscriptionPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('quarterly');
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const subscriptionPlans = {
    monthly: {
      price: "14.99€",
      billingText: "Účtované mesačne",
      total: "14.99€",
      totalAmount: 14.99,
      programs: 1,
      savings: null
    },
    quarterly: {
      price: "11.99€",
      billingText: "Účtované kvartálne (35.97€)",
      total: "35.97€",
      totalAmount: 35.97,
      programs: 2,
      savings: "20%"
    },
    yearly: {
      price: "9.99€",
      billingText: "Účtované ročne (119.88€)",
      total: "119.88€",
      totalAmount: 119.88,
      programs: "neobmedzene",
      savings: "33%"
    }
  };

  const selectedPlan = subscriptionPlans[subscriptionPeriod];
  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  const handleContinueToForm = () => {
    if (selectedProgram) {
      setShowForm(true);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.city) {
      toast({
        title: "Vyplň všetky údaje",
        description: "Prosím vyplň meno, email a mesto.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Extract first name
      const firstName = formData.name.split(" ")[0];

      // Record the purchase
      const { error } = await supabase.from("purchases").insert({
        first_name: firstName,
        city: formData.city,
        product_name: "NeoMe Premium",
        amount: selectedPlan.totalAmount
      });

      if (error) throw error;

      toast({
        title: "Ďakujeme za objednávku!",
        description: "Čoskoro ťa budeme kontaktovať s ďalšími inštrukciami."
      });

      // Reset form
      setFormData({ name: "", email: "", password: "", city: "" });
      setShowForm(false);
      setSelectedProgram("");
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        title: "Nastala chyba",
        description: "Prosím skús to znova.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-section-beige/30 to-background">
      {/* Header */}
      <div className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light">
              <span className="gradient-text font-normal">NeoMe</span> Checkout
            </h1>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Shield size={14} />
              Zabezpečená platba
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Step 1 & 2: Choose Subscription and Program */}
            {!showForm && (
              <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <CardTitle>Vyber si predplatné</CardTitle>
                    <CardDescription>Všetky plány zahŕňajú 30-dňovú záruku vrátenia peňazí</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center bg-muted/50 backdrop-blur-sm rounded-full p-1 gap-1">
                    <button
                      onClick={() => setSubscriptionPeriod('monthly')}
                      className={cn(
                        "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                        subscriptionPeriod === 'monthly'
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Mesačne
                    </button>
                    <button
                      onClick={() => setSubscriptionPeriod('quarterly')}
                      className={cn(
                        "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 relative",
                        subscriptionPeriod === 'quarterly'
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Kvartálne
                      <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0 bg-info text-info-foreground">
                        -20%
                      </Badge>
                    </button>
                    <button
                      onClick={() => setSubscriptionPeriod('yearly')}
                      className={cn(
                        "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 relative",
                        subscriptionPeriod === 'yearly'
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Ročne
                      <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0 bg-info text-info-foreground">
                        -33%
                      </Badge>
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg p-6 border-2 border-primary/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-light mb-1">Predplatné NeoMe+</h3>
                      <p className="text-sm text-muted-foreground">{selectedPlan.billingText}</p>
                    </div>
                    {subscriptionPeriod !== 'monthly' && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Sparkles size={12} className="mr-1" />
                        Odporúčané
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-medium gradient-text">{selectedPlan.price}</span>
                    <span className="text-muted-foreground">/mesiac</span>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>
                        <strong>{typeof selectedPlan.programs === 'number' ? `${selectedPlan.programs} ${selectedPlan.programs === 1 ? 'program' : 'programy'}` : selectedPlan.programs}</strong> ku štartu
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      Všetky cvičenia, recepty a meditácie
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      Prístup ku komunite a prioritná podpora
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      Periodka, denník návykov a reflexie
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Choose Starting Program */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <CardTitle>Vyber si úvodný program</CardTitle>
                    <CardDescription>S ktorým programom chceš začať svoju cestu?</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                  <SelectTrigger className="w-full h-auto py-4">
                    <SelectValue placeholder="Vyber program, ktorý ťa zaujíma" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {programs.map((program) => (
                      <SelectItem 
                        key={program.id} 
                        value={program.id}
                        className="py-4 cursor-pointer hover:bg-muted/50 focus:bg-muted/50"
                      >
                        <div className="flex items-start gap-3">
                          <Badge 
                            variant="secondary" 
                            className={cn(
                              "mt-0.5",
                              program.level === 1 && "bg-level-1 text-level-1-foreground",
                              program.level === 2 && "bg-level-2 text-level-2-foreground",
                              program.level === 3 && "bg-level-3 text-level-3-foreground"
                            )}
                          >
                            Level {program.level}
                          </Badge>
                          <div className="flex-1">
                            <div className="font-medium mb-1 text-foreground">{program.title}</div>
                            <div className="text-sm text-muted-foreground">{program.description}</div>
                            <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <Clock size={12} />
                              {program.duration}
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedProgram && (
                  <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Skvelá voľba!</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Tento program je ideálny pre tvoje ciele a začneš s ním hneď po aktivácii predplatného.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

              </div>
            )}

            {/* Step 3: User Information Form */}
            {showForm && (
              <div className="space-y-6 animate-fade-in">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <CardTitle>Tvoje údaje</CardTitle>
                        <CardDescription>Vyplň kontaktné informácie pre vytvorenie účtu</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meno a priezvisko</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Zadaj svoje meno"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="tvoj@email.sk"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Mesto</label>
                      <input 
                        type="text" 
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Napr. Bratislava"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Heslo</label>
                      <input 
                        type="password" 
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Minimálne 8 znakov"
                      />
                    </div>
                    <div className="pt-2">
                      <button 
                        onClick={() => setShowForm(false)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        ← Späť na výber programu
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Trust Elements */}
            {!showForm && (
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="text-center p-4">
                <Shield className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-medium mb-1">Bezpečná platba</h4>
                <p className="text-xs text-muted-foreground">Šifrované pripojenie</p>
              </Card>
              <Card className="text-center p-4">
                <Award className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-medium mb-1">30-dňová záruka</h4>
                <p className="text-xs text-muted-foreground">Vrátenie peňazí</p>
              </Card>
              <Card className="text-center p-4">
                <Heart className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-medium mb-1">10,000+ žien</h4>
                <p className="text-xs text-muted-foreground">Dôveruje nám</p>
              </Card>
            </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Zhrnutie objednávky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Predplatné ({subscriptionPeriod === 'monthly' ? 'mesačne' : subscriptionPeriod === 'quarterly' ? 'kvartálne' : 'ročne'})</span>
                    <span className="font-medium">{selectedPlan.price}/mes.</span>
                  </div>
                  {selectedProgramData && (
                    <div className="flex justify-between text-sm">
                      <span>Úvodný program</span>
                      <span className="font-medium">{selectedProgramData.title}</span>
                    </div>
                  )}
                  {selectedPlan.savings && (
                    <div className="flex justify-between text-sm text-success">
                      <span>Úspora</span>
                      <span className="font-medium">-{selectedPlan.savings}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-lg font-medium">Celkom</span>
                    <span className="text-2xl font-medium gradient-text">{selectedPlan.total}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-right">
                    {subscriptionPeriod === 'monthly' && 'Účtované mesačne'}
                    {subscriptionPeriod === 'quarterly' && 'Účtované každé 3 mesiace'}
                    {subscriptionPeriod === 'yearly' && 'Účtované ročne'}
                  </p>
                </div>

                <Button 
                  className="w-full h-12 text-base" 
                  size="lg"
                  disabled={!selectedProgram || isProcessing}
                  onClick={showForm ? handleSubmit : handleContinueToForm}
                >
                  {isProcessing ? 'Spracúvam...' : showForm ? 'Dokončiť objednávku' : 'Pokračovať'}
                </Button>

                {!selectedProgram && (
                  <p className="text-xs text-center text-muted-foreground">
                    Prosím vyber si úvodný program pre pokračovanie
                  </p>
                )}

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check size={14} className="text-primary" />
                    <span>Zrušiť kedykoľvek</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check size={14} className="text-primary" />
                    <span>30-dňová záruka vrátenia peňazí</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check size={14} className="text-primary" />
                    <span>Žiadne skryté poplatky</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="font-medium mb-1">4.9/5 hodnotenie</div>
                    <p className="text-sm text-muted-foreground mb-3">
                      "Najlepšia investícia do seba. Program je navrhnutý tak, aby sa dal zvládnuť aj s malým bábätkom."
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">— Lucia, mama dvoch detí</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Money Back Guarantee */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-2">💯</div>
                <h4 className="font-medium mb-2">100% záruka spokojnosti</h4>
                <p className="text-sm text-muted-foreground">
                  Nie si spokojná? Vrátime ti peniaze do 30 dní bez otázok.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
