import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

interface Purchase {
  name: string;
  location: string;
  product: string;
  timeAgo: string;
}

const purchases: Purchase[] = [
  { name: "Martina", location: "Bratislava", product: "NeoMe Premium", timeAgo: "pred 2 minútami" },
  { name: "Lucia", location: "Košice", product: "NeoMe Premium", timeAgo: "pred 5 minútami" },
  { name: "Zuzana", location: "Žilina", product: "NeoMe Premium", timeAgo: "pred 8 minútami" },
  { name: "Katarína", location: "Nitra", product: "NeoMe Premium", timeAgo: "pred 12 minútami" },
  { name: "Jana", location: "Prešov", product: "NeoMe Premium", timeAgo: "pred 15 minútami" },
  { name: "Michaela", location: "Trnava", product: "NeoMe Premium", timeAgo: "pred 18 minútami" },
  { name: "Simona", location: "Banská Bystrica", product: "NeoMe Premium", timeAgo: "pred 23 minútami" },
  { name: "Petra", location: "Martin", product: "NeoMe Premium", timeAgo: "pred 27 minútami" },
  { name: "Veronika", location: "Trenčín", product: "NeoMe Premium", timeAgo: "pred 32 minútami" },
  { name: "Dominika", location: "Poprad", product: "NeoMe Premium", timeAgo: "pred 38 minútami" },
];

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  useEffect(() => {
    // Check if user has dismissed notifications this session
    const dismissed = sessionStorage.getItem("social-proof-dismissed");
    if (dismissed) return;

    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, currentPurchase]);

  useEffect(() => {
    if (isVisible) return;

    const dismissed = sessionStorage.getItem("social-proof-dismissed");
    if (dismissed) return;

    // Show next notification after delay
    const nextTimer = setTimeout(() => {
      showNotification();
    }, 25000 + Math.random() * 15000); // 25-40 seconds

    return () => clearTimeout(nextTimer);
  }, [isVisible, purchaseIndex]);

  const showNotification = () => {
    const randomIndex = Math.floor(Math.random() * purchases.length);
    setCurrentPurchase(purchases[randomIndex]);
    setPurchaseIndex((prev) => prev + 1);
    setIsVisible(true);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("social-proof-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && currentPurchase && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 z-50 max-w-xs"
        >
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-start gap-3 p-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {currentPurchase.name} z {currentPurchase.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  práve zakúpila <span className="font-medium text-primary">{currentPurchase.product}</span>
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {currentPurchase.timeAgo}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 p-1 hover:bg-muted rounded-full transition-colors"
                aria-label="Zavrieť"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Verified badge */}
            <div className="px-4 pb-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Overené nákupy</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofNotification;
