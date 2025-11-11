import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
  videoTitle?: string;
}

export const VideoPlayerModal = ({ 
  isOpen, 
  onClose, 
  videoId,
  videoTitle = "Video" 
}: VideoPlayerModalProps) => {
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoId) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl aspect-video animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 z-10"
          aria-label="Close video"
        >
          <X size={28} />
        </Button>

        {/* Video Title */}
        {videoTitle && (
          <div className="absolute -top-12 left-0 text-white text-sm font-light">
            {videoTitle}
          </div>
        )}

        {/* YouTube Embed */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};