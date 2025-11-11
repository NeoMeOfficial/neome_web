import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <div className="relative group">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Dismiss"
        >
          <X size={16} weight="bold" className="text-muted-foreground" />
        </button>

        {/* Main CTA Button */}
        <Button
          size="lg"
          className={cn(
            "shadow-xl hover:shadow-2xl transition-all duration-300",
            "bg-primary text-primary-foreground hover:bg-primary/90",
            "pl-6 pr-8 py-6 rounded-full",
            "flex items-center gap-3",
            "hover:scale-105 active:scale-95"
          )}
          onClick={() => {
            // Scroll to top or trigger download
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-base font-medium">Stiahni App</span>
          <ArrowRight size={20} weight="bold" className="animate-pulse" />
        </Button>
      </div>
    </div>
  );
};
