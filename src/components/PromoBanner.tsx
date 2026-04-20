import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("promo-banner-dismissed");
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const now = Date.now();
    
    if (!dismissed || now - dismissedTime > 86400000) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsExpanded(false);
    localStorage.setItem("promo-banner-dismissed", Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Gift Icon */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
          style={{ backgroundColor: '#89B0BC' }}
          aria-label="Special offer"
        >
          <Gift size={24} className="text-white" />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-xs font-bold text-white">
            30%
          </div>
        </button>
      </div>

      {/* Expanded Offer Card */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-50 animate-scale-in">
          <Card className="p-6 shadow-2xl backdrop-blur-sm max-w-sm" style={{ background: 'linear-gradient(to bottom right, #89B0BC, rgba(137, 176, 188, 0.9))' }}>
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full p-1"
            >
              <X size={18} />
            </button>
            
            <div className="flex items-start gap-3 mb-4">
              <Gift size={32} className="flex-shrink-0 text-white" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-white">Jarná Akcia</h3>
                <p className="text-sm text-white/90">Ušetri, keď si dáš priestor</p>
              </div>
            </div>
            
            <p className="text-base mb-4 leading-relaxed text-white">
              Získaj <strong className="text-xl">30% zľavu</strong> na ročný plán. 
              Platí len do 31. marca.
            </p>
            
            <Button 
              size="lg"
              className="w-full bg-white hover:bg-white/90 font-semibold"
              style={{ color: '#89B0BC' }}
            >
              VYUŽIŤ ZĽAVU TERAZ
            </Button>
          </Card>
        </div>
      )}
    </>
  );
};