import { Card } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

// Static testimonials - update these with your real testimonials later
const testimonials: Review[] = [
  {
    author_name: "Martina K.",
    rating: 5,
    text: "NeoMe mi úplne zmenilo prístup k wellbeingu. Konečne mám čas na seba aj s dvoma deťmi. 15 minút denne a vidím výsledky!",
    relative_time_description: "pred 2 týždňami"
  },
  {
    author_name: "Lucia P.",
    rating: 5,
    text: "Najlepšia investícia do seba. Tréningy sú krátke, efektívne a recepty chutia celej rodine. Cítim sa silnejšia a pokojnejšia.",
    relative_time_description: "pred mesiacom"
  },
  {
    author_name: "Simona H.",
    rating: 5,
    text: "Konečne aplikácia, ktorá ma neťahá k dokonalosti. Mám viac energie, lepšie spím a hlavne - užívam si to!",
    relative_time_description: "pred 3 týždňami"
  }
];

export const GoogleReviews = () => {

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {testimonials.map((review, i) => (
        <Card key={i} className="glass-card p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col h-full">
            {/* Star rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  weight={index < review.rating ? "fill" : "regular"}
                  className={index < review.rating ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
            
            {/* Review text */}
            <p className="text-base mb-4 flex-grow italic">
              "{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}"
            </p>
            
            {/* Author and time */}
            <div className="mt-auto">
              <p className="font-medium text-sm mb-1">— {review.author_name}</p>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary inline-block">
                {review.relative_time_description}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
