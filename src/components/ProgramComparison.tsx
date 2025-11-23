import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const comparisonData = {
  features: [
    {
      category: "Základné informácie",
      items: [
        { name: "Trvanie programu", level1: "8 týždňov", level2: "6 týždňov", level3: "6 týždňov", level4: "6 týždňov" },
        { name: "Dĺžka cvičení", level1: "15 min", level2: "15 min", level3: "15 min", level4: "15 min" },
        { name: "Frekvencia", level1: "Denne", level2: "3-5x týždenne", level3: "3-5x týždenne", level4: "3-5x týždenne" },
        { name: "Cena", level1: "€97", level2: "€67", level3: "€67", level4: "€67" }
      ]
    },
    {
      category: "Obsah programu",
      items: [
        { name: "Posilňovacie cvičenia", level1: "24", level2: "18", level3: "18", level4: "18" },
        { name: "Strečingové cvičenia", level1: "16", level2: "12", level3: "12", level4: "12" },
        { name: "Meditácie", level1: "16", level2: "12", level3: "12", level4: "12" },
        { name: "eBook s receptami", level1: true, level2: true, level3: true, level4: true }
      ]
    },
    {
      category: "Cvičebné pomôcky",
      items: [
        { name: "Bez pomôcok", level1: true, level2: true, level3: false, level4: false },
        { name: "Pilates ball", level1: true, level2: true, level3: false, level4: false },
        { name: "Elastická guma", level1: true, level2: true, level3: true, level4: true },
        { name: "Jednoručky (činky)", level1: false, level2: false, level3: false, level4: true }
      ]
    },
    {
      category: "Pre koho je vhodný",
      items: [
        { name: "Maminy po pôrode", level1: true, level2: false, level3: false, level4: false },
        { name: "Diastáza/Inkontinencia", level1: true, level2: false, level3: false, level4: false },
        { name: "Začiatočníčky", level1: true, level2: true, level3: false, level4: false },
        { name: "Mierne pokročilé", level1: false, level2: true, level3: true, level4: false },
        { name: "Pokročilé", level1: false, level2: false, level3: true, level4: true }
      ]
    },
    {
      category: "Zameranie",
      items: [
        { name: "Brušný korzet & panvové dno", level1: true, level2: false, level3: false, level4: false },
        { name: "Celkové spevnenie", level1: false, level2: true, level3: true, level4: true },
        { name: "Formovanie postavy", level1: false, level2: true, level3: true, level4: true },
        { name: "Budovanie sily", level1: false, level2: false, level3: true, level4: true },
        { name: "Vysoká intenzita", level1: false, level2: false, level3: false, level4: true }
      ]
    }
  ]
};

export const ProgramComparison = () => {
  const navigate = useNavigate();

  const renderValue = (value: string | boolean | number) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-primary mx-auto" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="w-full overflow-x-auto">
      {/* Mobile: Stacked Cards */}
      <div className="block lg:hidden space-y-8">
        {[
          { level: "1", name: "Postpartum", price: "€97", color: "hsl(var(--level-1))" },
          { level: "2", name: "BodyForming", price: "€67", color: "hsl(var(--level-2))" },
          { level: "3", name: "ElasticBands", price: "€67", color: "hsl(var(--level-3))" },
          { level: "4", name: "Strong&Sexy", price: "€67", color: "hsl(var(--level-4))" }
        ].map((program, programIdx) => (
          <Card key={program.level} className="glass-card p-6">
            <div className="text-center mb-6">
              <Badge className="mb-3" style={{ backgroundColor: program.color }}>
                Level {program.level}
              </Badge>
              <h3 className="text-2xl font-light mb-2">{program.name}</h3>
              <div className="text-3xl font-medium gradient-text">{program.price}</div>
            </div>

            {comparisonData.features.map((category, catIdx) => (
              <div key={catIdx} className="mb-6 last:mb-0">
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => {
                    const levelKey = `level${program.level}` as keyof typeof item;
                    const value = item[levelKey];
                    return (
                      <div key={itemIdx} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                        <div>{renderValue(value)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <Button 
              className="w-full mt-6 bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate('/checkout')}
            >
              Vybrať program
            </Button>
          </Card>
        ))}
      </div>

      {/* Desktop: Comparison Table */}
      <div className="hidden lg:block">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 w-1/5"></th>
              <th className="p-4 w-1/5">
                <div className="text-center">
                  <Badge className="mb-2" style={{ backgroundColor: "hsl(var(--level-1))" }}>
                    Level 1
                  </Badge>
                  <div className="text-xl font-light mb-1">Postpartum</div>
                  <div className="text-2xl font-medium gradient-text">€97</div>
                </div>
              </th>
              <th className="p-4 w-1/5">
                <div className="text-center">
                  <Badge className="mb-2" style={{ backgroundColor: "hsl(var(--level-2))" }}>
                    Level 2
                  </Badge>
                  <div className="text-xl font-light mb-1">BodyForming</div>
                  <div className="text-2xl font-medium gradient-text">€67</div>
                </div>
              </th>
              <th className="p-4 w-1/5">
                <div className="text-center">
                  <Badge className="mb-2" style={{ backgroundColor: "hsl(var(--level-3))" }}>
                    Level 3
                  </Badge>
                  <div className="text-xl font-light mb-1">ElasticBands</div>
                  <div className="text-2xl font-medium gradient-text">€67</div>
                </div>
              </th>
              <th className="p-4 w-1/5">
                <div className="text-center">
                  <Badge className="mb-2" style={{ backgroundColor: "hsl(var(--level-4))" }}>
                    Level 4
                  </Badge>
                  <div className="text-xl font-light mb-1">Strong&Sexy</div>
                  <div className="text-2xl font-medium gradient-text">€67</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.features.map((category, catIdx) => (
              <>
                <tr key={`category-${catIdx}`} className="bg-muted/30">
                  <td colSpan={5} className="p-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {category.category}
                  </td>
                </tr>
                {category.items.map((item, itemIdx) => (
                  <tr key={`${catIdx}-${itemIdx}`} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-sm text-muted-foreground">{item.name}</td>
                    <td className="p-4 text-center">{renderValue(item.level1)}</td>
                    <td className="p-4 text-center">{renderValue(item.level2)}</td>
                    <td className="p-4 text-center">{renderValue(item.level3)}</td>
                    <td className="p-4 text-center">{renderValue(item.level4)}</td>
                  </tr>
                ))}
              </>
            ))}
            <tr>
              <td></td>
              <td className="p-4">
                <Button 
                  className="w-full bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate('/checkout')}
                >
                  Vybrať
                </Button>
              </td>
              <td className="p-4">
                <Button 
                  className="w-full bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate('/checkout')}
                >
                  Vybrať
                </Button>
              </td>
              <td className="p-4">
                <Button 
                  className="w-full bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate('/checkout')}
                >
                  Vybrať
                </Button>
              </td>
              <td className="p-4">
                <Button 
                  className="w-full bg-cta-teal text-cta-teal-foreground hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate('/checkout')}
                >
                  Vybrať
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
