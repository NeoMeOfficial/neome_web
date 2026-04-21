import "@/styles/site.css";
import { NavHeader } from "@/components/site/NavHeader";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { PainSection } from "@/components/site/PainSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { LifestyleQuote } from "@/components/site/LifestyleQuote";
import { Transformations } from "@/components/site/Transformations";
import { ScrollVideoSection } from "@/components/site/ScrollVideoSection";
import { Pillars } from "@/components/site/Pillars";

/**
 * Phase 4A: NavHeader + Hero + Ticker.
 * Phase 4B (this): + PainSection + HowItWorks + LifestyleQuote + Transformations.
 * Phase 4C (next): scroll-video (zoom-only) + static Pillars block — after Transformations.
 * Then 4D Founder/Reviews/Experts → 4E Programs/Comparison → 4F Pricing/FAQ/FinalCTA/Footer.
 *
 * The scroll-video + app-pillar logic lives in HomeNew.legacy.tsx until Phase 4C.
 */
const HomeNew = () => (
  <div className="site-root">
    <div className="grain-overlay" />
    <NavHeader />
    <Hero />
    <Ticker />
    <PainSection />
    <HowItWorks />
    <LifestyleQuote />
    <Transformations />
    <ScrollVideoSection />
    <Pillars />
  </div>
);

export default HomeNew;
