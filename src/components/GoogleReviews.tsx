import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

interface GoogleReviewsProps {
  placeId: string;
}

export const GoogleReviews = ({ placeId }: GoogleReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase.functions.invoke('fetch-google-reviews', {
          body: { placeId }
        });

        if (error) throw error;

        if (data?.success && data?.reviews) {
          setReviews(data.reviews);
        } else {
          throw new Error(data?.error || 'Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
        toast({
          title: "Chyba pri načítaní recenzií",
          description: "Nepodarilo sa načítať Google recenzie. Zobrazujú sa predvolené recenzie.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, toast]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="glass-card p-6 animate-pulse">
            <div className="h-24 bg-muted rounded mb-4"></div>
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </Card>
        ))}
      </div>
    );
  }

  if (reviews.length === 0) {
    return null; // Show nothing if no reviews
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {reviews.slice(0, 3).map((review, i) => (
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
