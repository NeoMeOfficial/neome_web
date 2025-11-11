import { useState, useEffect } from "react";
import { X, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem("promo-banner-dismissed");
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const now = Date.now();
    
    // Show banner if not dismissed or if 24 hours have passed (86400000 ms)
    if (!dismissed || now - dismissedTime > 86400000) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("promo-banner-dismissed", Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-warning via-warning/90 to-warning/80 text-white shadow-lg animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          
          {/* Left: Icon + Tag */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Sparkle size={20} className="text-white animate-pulse hidden sm:block" />
            <span className="font-medium text-sm sm:text-base uppercase tracking-wide">
              🎉 Jarná Akcia
            </span>
          </div>

          {/* Center: Message */}
          <div className="flex-grow text-center">
            <p className="text-sm sm:text-base font-light">
              Získaj <strong className="font-semibold">30% zľavu</strong> na ročný plán – 
              <span className="hidden sm:inline"> Platí len do 31. marca!</span>
              <span className="sm:hidden"> Do 31.3.!</span>
            </p>
          </div>

          {/* Right: CTA + Dismiss */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button 
              size="sm"
              className="bg-white text-warning hover:bg-white/90 font-medium hidden sm:inline-flex"
            >
              VYUŽIŤ ZĽAVU
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="text-white hover:bg-white/20 flex-shrink-0 h-8 w-8"
              aria-label="Dismiss banner"
            >
              <X size={18} />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};