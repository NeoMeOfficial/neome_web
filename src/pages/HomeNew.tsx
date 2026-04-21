import "@/styles/site.css";
import { NavHeader } from "@/components/site/NavHeader";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";

/**
 * Phase 4A shell — NavHeader + Hero + Ticker.
 * Upcoming phases will add: PainSection, HowItWorks, LifestyleQuote, Transformations,
 * scroll-video + static Pillars, FounderSection, GoogleReviews, Experts,
 * ProgramsSection, Comparison, Pricing, FAQ, FinalCTA, Footer.
 *
 * The scroll-driven video + pillar logic lives in HomeNew.legacy.tsx until Phase 4C.
 */
const HomeNew = () => (
  <div className="site-root">
    <div className="grain-overlay" />
    <NavHeader />
    <Hero />
    <Ticker />
  </div>
);

export default HomeNew;
