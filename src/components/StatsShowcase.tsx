import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
export const StatsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    count: membersCount,
    setIsVisible: setMembersVisible
  } = useCounterAnimation(4000, 2000);
  const {
    count: reviewsCount,
    setIsVisible: setReviewsVisible
  } = useCounterAnimation(230, 2000);
  const {
    count: programsCount,
    setIsVisible: setProgramsVisible
  } = useCounterAnimation(5, 1500);
  const {
    count: satisfactionCount,
    setIsVisible: setSatisfactionVisible
  } = useCounterAnimation(98, 2000);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setMembersVisible(true);
          setReviewsVisible(true);
          setProgramsVisible(true);
          setSatisfactionVisible(true);
        }
      });
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [setMembersVisible, setReviewsVisible, setProgramsVisible, setSatisfactionVisible]);
  const stats = [{
    value: membersCount,
    suffix: "+",
    label: "Aktívnych členiek",
    decoration: "✦"
  }, {
    value: reviewsCount,
    suffix: "",
    label: "5★ Google Recenzií",
    decoration: "★"
  }, {
    value: programsCount,
    suffix: "",
    label: "Holistických Programov",
    decoration: "◆"
  }, {
    value: satisfactionCount,
    suffix: "%",
    label: "Spokojnosť",
    decoration: "✓"
  }];
  return <section ref={sectionRef} className="py-16 md:py-20 px-0 md:px-4 bg-section-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Dôvera <span className="gradient-text font-normal">tisícok žien</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pridaj sa ku komunite žien, ktoré sa rozhodli pre seba a svoj wellbeing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => <div key={index} className="relative text-center group">
              {/* Decorative element */}
              
              
              {/* Main content */}
              <div className="pt-6">
                <div className="text-4xl md:text-6xl font-light mb-3 gradient-text tracking-tight">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-light leading-relaxed px-2">
                  {stat.label}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-colors" />
            </div>)}
        </div>
      </div>
    </section>;
};