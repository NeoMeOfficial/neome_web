import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Purchase {
  id: string;
  first_name: string;
  city: string;
  product_name: string;
  created_at: string;
}

const getTimeAgo = (dateString: string): string => {
  const now = new Date();
  const purchaseDate = new Date(dateString);
  const diffInMinutes = Math.floor((now.getTime() - purchaseDate.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return "práve teraz";
  if (diffInMinutes < 60) return `pred ${diffInMinutes} minútami`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `pred ${diffInHours} hodinami`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `pred ${diffInDays} dňami`;
};

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  // Fetch recent purchases
  useEffect(() => {
    const fetchPurchases = async () => {
      const { data, error } = await supabase
        .from("purchases")
        .select("id, first_name, city, product_name, created_at")
        .order("created_at", { ascending: false })
        .limit(20);

      if (!error && data && data.length > 0) {
        setPurchases(data);
      }
    };

    fetchPurchases();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("purchases-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "purchases" },
        (payload) => {
          const newPurchase = payload.new as Purchase;
          setPurchases((prev) => [newPurchase, ...prev.slice(0, 19)]);
          // Show new purchase immediately
          setCurrentPurchase(newPurchase);
          setIsVisible(true);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Initial delay before first notification
  useEffect(() => {
    if (purchases.length === 0) return;
    
    const dismissed = sessionStorage.getItem("social-proof-dismissed");
    if (dismissed) return;

    const initialDelay = setTimeout(() => {
      showNotification();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [purchases]);

  // Auto-hide after 5 seconds
  useEffect(() => {
    if (!isVisible) return;

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, currentPurchase]);

  // Show next notification after delay
  useEffect(() => {
    if (isVisible || purchases.length === 0) return;

    const dismissed = sessionStorage.getItem("social-proof-dismissed");
    if (dismissed) return;

    const nextTimer = setTimeout(() => {
      showNotification();
    }, 25000 + Math.random() * 15000);

    return () => clearTimeout(nextTimer);
  }, [isVisible, purchaseIndex, purchases]);

  const showNotification = () => {
    if (purchases.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * purchases.length);
    setCurrentPurchase(purchases[randomIndex]);
    setPurchaseIndex((prev) => prev + 1);
    setIsVisible(true);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("social-proof-dismissed", "true");
  };

  // Don't render if no purchases
  if (purchases.length === 0) return null;

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
                  {currentPurchase.first_name} z {currentPurchase.city}
                </p>
                <p className="text-sm text-muted-foreground">
                  práve zakúpila <span className="font-medium text-primary">{currentPurchase.product_name}</span>
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {getTimeAgo(currentPurchase.created_at)}
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
