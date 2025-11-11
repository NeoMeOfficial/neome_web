import { useState } from "react";
import { MessageCircle } from "lucide-react";

export const LiveChatWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp business number - replace with actual number
  const whatsappNumber = "421910000000"; // Format: country code + number without +
  const whatsappMessage = encodeURIComponent("Ahoj! Mám otázku o NeoMe aplikácii...");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Napíš nám na WhatsApp"
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm font-light rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          Napíš nám na WhatsApp
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
        </div>

        {/* WhatsApp Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse">
          <MessageCircle size={28} className="md:w-8 md:h-8" />
          
          {/* Notification Dot */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-destructive rounded-full border-2 border-white animate-pulse" />
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500" />
      </a>
    </div>
  );
};