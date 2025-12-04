import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be changed
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allConsent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(minimalConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const customConsent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(customConsent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {!showCustomize ? (
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Vážime si súkromie
              </h3>
              
              <div className="space-y-4 text-sm text-muted-foreground mb-6">
                <p>
                  Podľa zákona potrebujeme váš súhlas na: Personalizovaná reklama a obsah, 
                  meranie reklamy a obsahu, prieskum cieľových skupín a vývoj služieb a 
                  uchovávanie alebo prístup k informáciám na zariadení.
                </p>
                <p>
                  Osobné údaje ako súbory cookie, jedinečné identifikátory a ďalšie údaje 
                  zariadenia budú spracúvané v prípade, ak sú nevyhnutné pre fungovanie 
                  našej stránky, alebo ak ste nám na ich spracúvanie udelili súhlas.
                </p>
                <p>
                  Kliknutím na PRIJAŤ akceptujete spracúvanie údajov na vyššie uvedené 
                  účely a vyjadrujete súhlas s používaním údajov, ktoré možno spracúvať 
                  len s vaším súhlasom (kedykoľvek odvolateľným).
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 sm:flex-none"
                >
                  Prispôsobiť
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none"
                >
                  Odmietnuť
                </Button>
                <Button
                  variant="cta"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none"
                >
                  Prijať
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Prispôsobiť nastavenia cookies
              </h3>
              
              <div className="space-y-4 mb-6">
                <label className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Nevyhnutné cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Potrebné pre základné fungovanie stránky
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-5 h-5 accent-primary"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-foreground">Analytické cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Pomáhajú nám pochopiť, ako používate stránku
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="w-5 h-5 accent-primary cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-foreground">Marketingové cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Používané na zobrazovanie relevantných reklám
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="w-5 h-5 accent-primary cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-foreground">Personalizačné cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Umožňujú prispôsobiť obsah vašim preferenciám
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.personalization}
                    onChange={(e) =>
                      setPreferences({ ...preferences, personalization: e.target.checked })
                    }
                    className="w-5 h-5 accent-primary cursor-pointer"
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowCustomize(false)}
                  className="flex-1 sm:flex-none"
                >
                  Späť
                </Button>
                <Button
                  variant="cta"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none"
                >
                  Uložiť nastavenia
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
