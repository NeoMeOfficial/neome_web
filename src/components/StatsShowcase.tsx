import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { Users, Star, Award, TrendingUp } from "lucide-react";

export const StatsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { count: membersCount, setIsVisible: setMembersVisible } = useCounterAnimation(4000, 2000);
  const { count: reviewsCount, setIsVisible: setReviewsVisible } = useCounterAnimation(230, 2000);
  const { count: programsCount, setIsVisible: setProgramsVisible } = useCounterAnimation(5, 1500);
  const { count: satisfactionCount, setIsVisible: setSatisfactionVisible } = useCounterAnimation(98, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMembersVisible(true);
            setReviewsVisible(true);
            setProgramsVisible(true);
            setSatisfactionVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setMembersVisible, setReviewsVisible, setProgramsVisible, setSatisfactionVisible]);

  const stats = [
    {
      icon: Users,
      value: membersCount,
      suffix: "+",
      label: "Aktívnych členiek",
      color: "text-primary"
    },
    {
      icon: Star,
      value: reviewsCount,
      suffix: "",
      label: "5★ Google Recenzií",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      value: programsCount,
      suffix: "",
      label: "Holistických Programov",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: satisfactionCount,
      suffix: "%",
      label: "Spokojnosť",
      color: "text-primary"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Dôvera <span className="gradient-text font-normal">tisícok žien</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pridaj sa ku komunite žien, ktoré sa rozhodli pre seba a svoj wellbeing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-border/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon size={28} className={stat.color} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-light mb-2 gradient-text">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-light">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
