import { Card } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
interface Review {
  author_name: string;
  rating: number;
  text: string;
}
const googleReviews: Review[] = [{
  author_name: "Lenka Nováčková",
  rating: 5,
  text: "Celé super! :) prvý program (mala som program Postpartum), ktorý som reálne docvičila! cvičenia nenáročné na čas, s postupne zvyšujúcou sa záťažou"
}, {
  author_name: "Janka Bertokova",
  rating: 5,
  text: "Som 12 rokov po pôrode, žiaden čas na seba prinieslo povolené panvové dno, výrazné bolesti chrbta. Nájdením Gabi a jej NeoMe prišla veľká výzva to celé zmeniť. Nielen čas na cvičenia ale celkovo naučiť sa mať pre seba čas, spevniť telo a verte týmito cvičeniami aj získate dávku sebavedomia a čistú myseľ. Som vďačná,že som ťa našla Gabi, odhodlala som sa podstúpiť 8 týždňov času pre seba a získať svoju NeoMe a stalo to zato. Ďakujem ♥️🙏"
}, {
  author_name: "Gabriela Hubinová",
  rating: 5,
  text: "Cvičenie som si užila. Pre mňa čo som skoro 3 roky po pôrode a takmer som necvičila, to bolo akurát pozvoľné a postupne ma to dostávalo do formy. Má to naozaj význam a hlavne je účinný. Malú dcérku to bavilo spolu so mnou. Super zábavný spoločný čas. Troška mi trvalo odhodlať sa na to ale neľutujem. Ďakujem."
}, {
  author_name: "Sidónia Mrozeková Kopaničáková",
  rating: 5,
  text: "Vnímam veľmi pozitívne koncept cvičenia, nakolko mám po 2 sekciách v kratšom časovom úseku, všimla som si zlepšenie v pevnosti tela v okolí jazvy a rovnako aj spevnenie svalov panvového dna, čo po 2 tehotenstvách tesne za sebou dostalo zabrať. Ďakujem a odporúčam. Mne táto forma vyhovuje, rýchle a nenáročné a pritom účinné. Ľahko sa vytvorí návyk na cvičenie aj u tých, ktorí necvičili predtým. A tým, ktorí cvičili to pomôže rozhýbať sa k náročnejším cvikom."
}, {
  author_name: "Andrea Pomichalová",
  rating: 5,
  text: "Mam za sebou programy level 2,3 a určite idem aj do dalsieho. Vrelo odporúčam, za mna najlepšie cvičenia ake som doteraz cvicila a to som skusala rozne. Týchto 15min je uplne super, v tomto uponáhľanom svete. Za mna 10/10 TOP 🙌"
}, {
  author_name: "Lucka Balajova",
  rating: 5,
  text: "Odporúčam maminkám aspoň na pár minút byť sama so sebou a postupnými krokmi sa znovu \"nacítiť\". Konečne vnímam svoje stratené svaly na bruchu a určite pokračujem aj s ďaľším programom. Ďakujem 🥰"
}, {
  author_name: "Monika Csomosova",
  rating: 5,
  text: "Milé, odporúčam tieto cvičenia všetkými desiatimi! 🙂 Stačí 15 min. denne. Je to mojich 15 min. pre seba. Aj keď sa mi fakt nechce, idem. GABI ma ťahá. Je perfektná! Pozdravujem a prajem veľa chuti do cvičenia. 😘🙂"
}, {
  author_name: "Klaudia kalmarova",
  rating: 5,
  text: "Program postpartum odporúčam každej žene po pôrode. Na začiatku som mala obavy, či budem stíhať cvičiť každý deň, ale nakoniec som si vždy našla čas, nech som akokoľvek nestíhala popri 2 deťoch. Cvičenia ma bavili vrátane strečingových, zároveň boli najlepšou formou oddychu počas dňa a zlepšila sa mi diastáza. Super cesta ako sa nakopnúť po pôrode s cvičením a spraviť pre seba niečo."
}];
export const GoogleReviews = () => {
  const plugin = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: false
  }));
  return <section className="py-16 md:py-20 px-4 md:px-8 bg-section-beige">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Dôvera <span className="gradient-text font-normal">viac ako 4000 žien</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pridaj sa ku komunite žien, ktoré sa rozhodli pre seba a svoj wellbeing
          </p>
        </div>

        <Carousel plugins={[plugin.current]} className="w-full" opts={{
        align: "start",
        loop: true
      }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {googleReviews.map((review, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="glass-card p-6 h-full">
                  <div className="flex flex-col h-full">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" className="text-yellow-500" />)}
                    </div>
                    
                    {/* Review text */}
                    <p className="text-sm mb-4 flex-grow italic text-muted-foreground leading-relaxed">
                      "{review.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="mt-auto">
                      <p className="font-medium text-sm">— {review.author_name}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
      </div>
    </section>;
};