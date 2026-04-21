import { useEffect, useRef } from "react";
import videoSrc from "@/assets/0411_final.mp4";

export const ScrollVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = () => {
      const sec = sectionRef.current;
      const vid = videoRef.current;
      if (!sec || !vid) return;
      const rect = sec.getBoundingClientRect();
      const scrollable = sec.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const scrubEnd = 0.6;
      const scrub = Math.min(1, progress / scrubEnd);
      if (vid.duration && isFinite(vid.duration)) {
        vid.currentTime = scrub * vid.duration;
      }
      const fade = progress < scrubEnd ? 1 : Math.max(0, 1 - (progress - scrubEnd) / (1 - scrubEnd));
      sec.style.setProperty("--video-opacity", String(fade));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section ref={sectionRef} className="scroll-video">
      <div className="scroll-video-track">
        <div className="scroll-video-sticky">
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onLoadedData={() => {
              if (videoRef.current) videoRef.current.currentTime = 0.001;
            }}
          />
          <div className="scroll-video-label">
            <p className="eyebrow eyebrow--sandy">Čo nájdeš v aplikácii</p>
            <p className="scroll-video-hint">Prejdi dolu — spoznaj každý pilier NeoMe</p>
          </div>
        </div>
      </div>
    </section>
  );
};
