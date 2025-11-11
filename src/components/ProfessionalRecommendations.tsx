import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Play } from "lucide-react";
import { useState } from "react";

export const ProfessionalRecommendations = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const recommendations = [
    {
      name: "MUDr. Eva Nováková",
      title: "Gynekologička",
      credentials: "15+ rokov praxe",
      quote: "NeoMe programy sú vynikajúco navrhnuté pre popôrodné obdobie. Cvičenia rešpektujú ženské telo a podporujú zdravé zotavenie po pôrode.",
      type: "text",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      name: "Mgr. Petra Horváthová",
      title: "Fyzioterapeutka",
      credentials: "Špecializácia: Dno panvy",
      quote: "Oceňujem holistický prístup NeoMe. Kombinácia pohybu, výživy a mentálneho zdravia je presne to, čo ženy potrebujú.",
      type: "video",
      videoId: "demo-video-1",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
    },
    {
      name: "PhDr. Lucia Kováčová",
      title: "Psychologička",
      credentials: "Špecializácia: Materstvo",
      quote: "Mentálne cvičenia v NeoMe pomáhajú ženám zvládať stres a nájsť vnútorný pokoj. Je to dôležitá súčasť celkového wellbeingu.",
      type: "text",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Dôvera odborníkov
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Odporúčania <span className="gradient-text font-normal">lekárov a fyzioterapeutov</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionáli v oblasti zdravia dôverujú našim programom a odporúčajú ich svojim klientkam
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border/20 bg-white overflow-hidden group"
            >
              {rec.type === "video" ? (
                <div className="relative mb-4 rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={rec.thumbnail}
                    alt={rec.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-primary fill-primary" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Video
                  </Badge>
                </div>
              ) : (
                <div className="mb-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-primary/10"
                  />
                </div>
              )}

              <div className="text-center">
                <h3 className="font-medium text-lg mb-1">{rec.name}</h3>
                <p className="text-sm text-primary mb-1">{rec.title}</p>
                <p className="text-xs text-muted-foreground mb-4">{rec.credentials}</p>

                <div className="relative">
                  <Quote size={24} className="text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-sm text-foreground/80 italic leading-relaxed px-4">
                    "{rec.quote}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge Row */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              ✓
            </div>
            <span>Medicínsky schválené</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              ✓
            </div>
            <span>Fyziologicky bezpečné</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              ✓
            </div>
            <span>Psychologicky podporné</span>
          </div>
        </div>
      </div>
    </section>
  );
};
