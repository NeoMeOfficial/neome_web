import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import appMockupMind from "@/assets/app-mockup-mind.png";
import appMockupExtras from "@/assets/app-mockup-extras.png";
import appMockupCommunity from "@/assets/app-mockup-community.png";

interface Feature {
  title: string;
  subheading: string;
  desc: string;
  image: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "Cvičenie",
    subheading: "5-15 minútové tréningy prispôsobené tvojmu rytmu a cieľom",
    desc: "Tréningy na požiadanie, ktoré sa prispôsobia tvojmu denníku. Cvičenia zamerané na ženské telo: spevnenie brušného korzetu, zlepšenie metabolizmu a mobility. Vďaka krátkym tréningom už nemáš výhovorky – nájdeš si čas aj vtedy, keď si myslíš, že ho nemáš.",
    image: appMockup1,
    link: "/cvicenie"
  },
  {
    title: "Strava",
    subheading: "Jednoduché recepty pre hormonálnu rovnováhu a trvalú energiu",
    desc: "Jednoduché a chutné recepty, ktoré zvládne celá rodina. Žiadne počítanie kalórií ani drastické obmedzenia. Zameraj sa na podporu hormonálnej rovnováhy, stabilnú energiu cez celý deň a jedlo, ktoré ťa naozaj zasýti a potešĺ.",
    image: appMockup2,
    link: "/strava"
  },
  {
    title: "Myseľ",
    subheading: "Denné meditácie a dychové cvičenia pre mentálny pokoj",
    desc: "Krátke meditácie a dychové cvičenia na okamžité upokojenie mysle – aj keď máš len 3 minúty. Každý deň ti pripomíname, že si dosť presne taká, aká si. Získaj nástroje, ktoré ti pomôžu zvládnuť stres a vrátiť sa do svojho centra.",
    image: appMockupMind,
    link: "/mysel"
  },
  {
    title: "Extras",
    subheading: "Špeciálne programy, výzvy a exkluzívny obsah pre tvoj rast",
    desc: "Prístup k špeciálnym programom, výzvám a exkluzívnemu obsahu. Nájdeš tu dodatočné nástroje pre tvoju osobnú transformáciu – od špeciálnych workoutov až po tematické výzvy, ktoré ťa posunú ďalej.",
    image: appMockupExtras,
    link: "/extras"
  },
  {
    title: "Komunita",
    subheading: "Pripoj sa k tisíckam žien na podobnej transformačnej ceste",
    desc: "Pripoj sa k tisíckam žien, ktoré sú na podobnej ceste ako ty. Zdieľaj svoje úspechy, nájdi inšpiráciu v príbehoch ostatných a cíť podporu komunity, ktorá ťa povzbudí aj v náročnejších dňoch. Spolu to ide lepšie.",
    image: appMockupCommunity,
    link: "/komunita"
  }
];

export const AppFeaturesTabs = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  return (
    <Card className="rounded-3xl shadow-xl p-8 md:p-12 bg-[#F1EDE4] border-border/10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Dynamic Image */}
        <div className="relative flex items-center justify-center order-2 lg:order-1 h-[500px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                activeFeatureIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={feature.image}
                alt={`NeoMe App - ${feature.title}`}
                className="w-72 h-auto rounded-3xl shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* Right: Tabs and Content */}
        <div className="space-y-8 order-1 lg:order-2 min-h-[500px] flex flex-col justify-center">
          {/* Notebook-style Tabs Container */}
          <div className="relative">
            {/* Tabs - Behind the card */}
            <div className="relative">
              <div className="overflow-x-auto scroll-smooth scrollbar-hide">
                <div className="flex gap-1 items-end relative z-0 w-max">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeatureIndex(index)}
                      className={`
                        relative px-3 md:px-5 py-4 text-xs md:text-sm font-medium 
                        transition-all duration-300 cursor-pointer
                        rounded-t-xl border-t border-x
                        backdrop-blur-sm
                        ${
                          activeFeatureIndex === index
                            ? 'bg-white/40 text-primary border-white/30 shadow-[0_-3px_10px_rgba(0,0,0,0.04)]'
                            : 'bg-white/20 text-muted-foreground border-white/20 hover:bg-white/30 hover:text-foreground'
                        }
                      `}
                    >
                      <span className="block whitespace-nowrap">{feature.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Card - Glass morphism on top */}
            <div className="relative z-10 -mt-px p-6 md:p-8 rounded-2xl border border-white/30 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-700 min-h-[320px] flex flex-col">
              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Animated content wrapper */}
              <div key={activeFeatureIndex} className="animate-fade-in relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
                  {features[activeFeatureIndex].title}
                </h3>
                <p className="text-sm md:text-base text-primary font-medium mb-4">
                  {features[activeFeatureIndex].subheading}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {features[activeFeatureIndex].desc}
                </p>
              </div>

              <Button
                asChild
                className="relative z-10 w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all backdrop-blur-sm"
              >
                <a href={features[activeFeatureIndex].link}>
                  Chcem vedieť viac
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
