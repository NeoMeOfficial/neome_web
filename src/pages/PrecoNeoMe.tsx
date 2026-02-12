import { ComparisonSection } from "@/components/ComparisonSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ProfessionalRecommendations } from "@/components/ProfessionalRecommendations";
import { StatsShowcase } from "@/components/StatsShowcase";

const PrecoNeoMe = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Comparison Section */}
      <ComparisonSection />

      {/* Stats / Trust Section */}
      <StatsShowcase />

      {/* Google Reviews */}
      <GoogleReviews className="bg-white" />

      {/* Professional Recommendations */}
      <ProfessionalRecommendations />
    </div>
  );
};

export default PrecoNeoMe;
