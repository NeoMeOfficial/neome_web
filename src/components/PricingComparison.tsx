import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
interface PricingTier {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  description: string;
  features: {
    name: string;
    included: boolean | string;
  }[];
  cta: string;
  savings?: string;
}
export const PricingComparison = () => {
  const [subscriptionPeriod, setSubscriptionPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('quarterly');
  const freeTier: PricingTier = {
    name: "Free",
    price: "0€",
    period: "navždy",
    description: "Vyskúšaj základy",
    features: [{
      name: "Cvičenia",
      included: true
    }, {
      name: "Strečingy",
      included: false
    }, {
      name: "Recepty",
      included: true
    }, {
      name: "Meditácie",
      included: true
    }, {
      name: "Periodka",
      included: false
    }, {
      name: "Denník návykov",
      included: false
    }, {
      name: "Reflexie",
      included: false
    }, {
      name: "Články",
      included: false
    }, {
      name: "Prístup ku komunite",
      included: false
    }, {
      name: "Programy",
      included: "0"
    }, {
      name: "Prioritná podpora",
      included: false
    }],
    cta: "Začať zadarmo"
  };
  const subscriptionTiers = {
    monthly: {
      name: "Predplatné",
      price: "14.99€",
      period: "mesačne",
      description: "Skvelý začiatok",
      features: [{
        name: "Cvičenia",
        included: true
      }, {
        name: "Strečingy",
        included: true
      }, {
        name: "Recepty",
        included: true
      }, {
        name: "Meditácie",
        included: true
      }, {
        name: "Periodka",
        included: true
      }, {
        name: "Denník návykov",
        included: true
      }, {
        name: "Reflexie",
        included: true
      }, {
        name: "Články",
        included: true
      }, {
        name: "Prístup ku komunite",
        included: true
      }, {
        name: "Programy",
        included: "1 program"
      }, {
        name: "Prioritná podpora",
        included: false
      }],
      cta: "Vybrať predplatné"
    },
    quarterly: {
      name: "Predplatné",
      price: "11.99€",
      period: "mesačne",
      popular: true,
      description: "Najlepšia hodnota",
      savings: "Ušetríš 20%",
      features: [{
        name: "Cvičenia",
        included: true
      }, {
        name: "Strečingy",
        included: true
      }, {
        name: "Recepty",
        included: true
      }, {
        name: "Meditácie",
        included: true
      }, {
        name: "Periodka",
        included: true
      }, {
        name: "Denník návykov",
        included: true
      }, {
        name: "Reflexie",
        included: true
      }, {
        name: "Články",
        included: true
      }, {
        name: "Prístup ku komunite",
        included: true
      }, {
        name: "Programy",
        included: "2 programy"
      }, {
        name: "Prioritná podpora",
        included: true
      }],
      cta: "Vybrať predplatné"
    },
    yearly: {
      name: "Predplatné",
      price: "9.99€",
      period: "mesačne",
      description: "Najväčšia úspora",
      savings: "Ušetríš 33%",
      features: [{
        name: "Cvičenia",
        included: true
      }, {
        name: "Strečingy",
        included: true
      }, {
        name: "Recepty",
        included: true
      }, {
        name: "Meditácie",
        included: true
      }, {
        name: "Periodka",
        included: true
      }, {
        name: "Denník návykov",
        included: true
      }, {
        name: "Reflexie",
        included: true
      }, {
        name: "Články",
        included: true
      }, {
        name: "Prístup ku komunite",
        included: true
      }, {
        name: "Programy",
        included: "Neobmedzené"
      }, {
        name: "Prioritná podpora",
        included: true
      }],
      cta: "Vybrať predplatné"
    }
  };
  const programsTier: PricingTier = {
    name: "Programy",
    price: "49.99€",
    period: "jednorazovo",
    description: "Kúp individuálne programy",
    features: [{
      name: "Cvičenia",
      included: true
    }, {
      name: "Strečingy",
      included: true
    }, {
      name: "Recepty",
      included: true
    }, {
      name: "Meditácie",
      included: false
    }, {
      name: "Periodka",
      included: false
    }, {
      name: "Denník návykov",
      included: false
    }, {
      name: "Reflexie",
      included: false
    }, {
      name: "Články",
      included: false
    }, {
      name: "Prístup ku komunite",
      included: false
    }, {
      name: "Programy",
      included: "1 program natrvalo"
    }, {
      name: "Prioritná podpora",
      included: false
    }],
    cta: "Kúpiť program"
  };
  const subscriptionTier = subscriptionTiers[subscriptionPeriod];
  const tiers: PricingTier[] = [freeTier, subscriptionTier];
  return <section id="cennik" className="py-16 md:py-20 px-0 md:px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Transparentné ceny
          </Badge>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Vyber si <span className="gradient-text font-normal">čo ti vyhovuje</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Všetky plány zahŕňajú 30-dňovú záruku vrátenia peňazí
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="align-top">
                <th className="text-left p-4 font-light text-lg"></th>
                {tiers.map((tier, index) => <th key={index} className="p-4 align-top">
                    <div className="flex flex-col items-center">
                      {/* Subscription Period Toggle - only for subscription tier */}
                      {index === 1 && <div className="flex justify-center">
                          <div className="inline-flex items-center bg-muted/50 backdrop-blur-sm rounded-full p-1 gap-1">
                            <button onClick={() => setSubscriptionPeriod('monthly')} className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200", subscriptionPeriod === 'monthly' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                              Mesačne
                            </button>
                            <button onClick={() => setSubscriptionPeriod('quarterly')} className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative", subscriptionPeriod === 'quarterly' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                              Kvartálne
                              <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0 bg-info text-info-foreground">
                                -20%
                              </Badge>
                            </button>
                            <button onClick={() => setSubscriptionPeriod('yearly')} className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative", subscriptionPeriod === 'yearly' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                              Ročne
                              <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0 bg-info text-info-foreground">
                                -33%
                              </Badge>
                            </button>
                          </div>
                        </div>}
                      {/* Empty space for alignment when no toggle */}
                      {index !== 1 && <div className="h-[34px]"></div>}
                      {/* Badge container with fixed height */}
                      <div className="h-7 mb-2 flex items-center justify-center">
                        {tier.popular && <Badge className="bg-primary text-primary-foreground animate-fade-in">
                            <Sparkles size={12} className="mr-1" />
                            Odporúčané
                          </Badge>}
                        {tier.savings && !tier.popular}
                      </div>
                      <Card className={cn("p-4 md:p-6 text-center w-full", tier.popular && "border-2 border-primary shadow-lg")}>
                        <div className="text-2xl font-light mb-1">{tier.name}</div>
                        <div className="text-3xl font-medium gradient-text mb-1">
                          {tier.price}
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          {tier.period}
                        </div>
                        <div className="text-xs text-muted-foreground mb-4">
                          {tier.description}
                        </div>
                        <Button className={cn("w-full", tier.popular && "bg-primary text-primary-foreground hover:bg-primary/90")} variant={tier.popular ? "default" : "outline"}>
                          {tier.cta}
                        </Button>
                      </Card>
                    </div>
                  </th>)}
              </tr>
            </thead>
            <tbody>
              {tiers[0].features.map((_, featureIndex) => <tr key={featureIndex} className="border-t border-border/20">
                  <td className="p-4 font-light">
                    {tiers[0].features[featureIndex].name}
                  </td>
                  {tiers.map((tier, tierIndex) => <td key={tierIndex} className="p-4 text-center">
                      {typeof tier.features[featureIndex].included === 'boolean' ? tier.features[featureIndex].included ? <Check size={20} className="text-primary mx-auto" /> : <X size={20} className="text-muted-foreground/30 mx-auto" /> : <span className="text-sm font-medium text-primary">
                          {tier.features[featureIndex].included}
                        </span>}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* Cards Grid - Mobile */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {tiers.map((tier, index) => <div key={index} className="flex flex-col">
              {/* Subscription Period Toggle - only for subscription tier */}
              {index === 1 && <div className="flex justify-center">
                  <div className="inline-flex items-center bg-muted/50 backdrop-blur-sm rounded-full p-1 gap-1">
                    <button onClick={() => setSubscriptionPeriod('monthly')} className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200", subscriptionPeriod === 'monthly' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                      Mesačne
                    </button>
                    <button onClick={() => setSubscriptionPeriod('quarterly')} className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative", subscriptionPeriod === 'quarterly' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                      Kvartálne
                      <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0 bg-info text-info-foreground">
                        -20%
                      </Badge>
                    </button>
                    <button onClick={() => setSubscriptionPeriod('yearly')} className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative", subscriptionPeriod === 'yearly' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                      Ročne
                      <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0 bg-info text-info-foreground">
                        -33%
                      </Badge>
                    </button>
                  </div>
                </div>}
              {/* Empty space for alignment when no toggle */}
              {index !== 1 && <div className="h-[34px]"></div>}
              {/* Badge container with fixed height */}
              <div className="h-8 mb-2 flex items-start justify-center">
                {tier.popular && <Badge className="bg-primary text-primary-foreground animate-fade-in">
                    <Sparkles size={12} className="mr-1" />
                    Odporúčané
                  </Badge>}
                {tier.savings && !tier.popular && <Badge variant="secondary" className="animate-fade-in">
                    {tier.savings}
                  </Badge>}
              </div>
              <Card className={cn("p-4 md:p-6 flex-1", tier.popular && "border-2 border-primary shadow-lg")}>
                <h3 className="text-2xl font-light mb-2">{tier.name}</h3>
              <div className="text-3xl font-medium gradient-text mb-1">
                {tier.price}
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                {tier.period}
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {tier.description}
              </p>

              <Button className={cn("w-full mb-6", tier.popular && "bg-primary text-primary-foreground hover:bg-primary/90")} variant={tier.popular ? "default" : "outline"}>
                {tier.cta}
              </Button>

              <ul className="space-y-3">
                {tier.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-2 text-sm">
                    {typeof feature.included === 'boolean' ? feature.included ? <Check size={16} className="text-primary mt-0.5 flex-shrink-0" /> : <X size={16} className="text-muted-foreground/30 mt-0.5 flex-shrink-0" /> : <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />}
                    <span className={cn(typeof feature.included === 'boolean' && !feature.included && "text-muted-foreground/50")}>
                      {feature.name}
                      {typeof feature.included === 'string' && <span className="text-primary font-medium ml-1">
                          ({feature.included})
                        </span>}
                    </span>
                  </li>)}
              </ul>
            </Card>
          </div>)}
        </div>

        {/* Money-back guarantee */}
        <Card className="mt-12 p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 text-center">
          <h3 className="text-2xl font-light mb-3">
            💯 30-dňová záruka vrátenia peňazí
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nie si spokojná? Vrátime ti peniaze bez otázok. Tvoje zdravie a spokojnosť sú pre nás prioritou.
          </p>
        </Card>
      </div>
    </section>;
};