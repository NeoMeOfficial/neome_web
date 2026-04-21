// ══════════════════════════════════════════════════════════════════════════════
// HomeNew.tsx — NeoMe Premium Homepage  v2
// Fonts:   Playfair Display (display/editorial) + DM Sans (body)
// Palette: cream · sage · sandy · dusty-blue · deep-brown · terracotta
// Glass:   hero-stats · lifestyle-break · proof-badge · feat-cards ·
//          comparison · founder-badge · final-cta
// ══════════════════════════════════════════════════════════════════════════════

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check, ArrowRight, Clock, RotateCcw, Heart,
  Dumbbell, Users, BookOpen, Moon, Brain, Leaf,
  Quote, Baby, Crown, Zap, CheckCircle, Shield,
} from "lucide-react";
import { Sparkle, Star } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// ── Assets ───────────────────────────────────────────────────────────────────
import heroImage          from "@/assets/hero-yoga-edited.jpg";
import lifestyleYogaMat   from "@/assets/lifestyle-yoga-mat.webp";
import lifestyleYogaPose  from "@/assets/lifestyle-yoga-pose.jpg";
import lifestyleCore      from "@/assets/lifestyle-core-workout.jpg";
import founderImage       from "@/assets/founder-gabi.png";
import gabiStairs         from "@/assets/gabi-stairs.png";
import appMockup1         from "@/assets/app-mockup-1.png";
import appMockup2         from "@/assets/app-mockup-2.png";
import appMockupMind      from "@/assets/app-mockup-mind.png";
import testimonialMartina from "@/assets/testimonial-martina.jpg";
import testimonialLucia   from "@/assets/testimonial-lucia.jpg";
import testimonialZuzana  from "@/assets/testimonial-zuzana.jpg";
import testimonialWorkout from "@/assets/testimonial-workout.jpg";
import testimonialPeriod  from "@/assets/testimonial-period.jpg";
import testimonialExtras  from "@/assets/testimonial-extras.jpg";
import videoSrc       from "@/assets/0411_final.mp4";
import appBgTelo      from "@/assets/Telo_app.webp";
import appBgStrava    from "@/assets/Strava_app.webp";
import appBgMysel     from "@/assets/Mysel_app.webp";
import appBgKomunity  from "@/assets/Komunity_app.webp";
import appBgPeriod    from "@/assets/Period_app.webp";
import testimonialRecipe  from "@/assets/testimonial-recipe.jpg";
import testimonialMedit   from "@/assets/testimonial-meditation.jpg";
import testimonialComm    from "@/assets/testimonial-community.png";
import testimonialJournal from "@/assets/testimonial-journal.jpg";
import postpartumImg      from "@/assets/postpartum-program.jpg";
import bodyformingImg     from "@/assets/bodyforming-program.jpg";
import elasticbandsImg    from "@/assets/elasticbands-program.jpg";
import strongsexyImg      from "@/assets/strongsexy-program.jpg";
import csoltiImg          from "@/assets/recommendation-csolti.png";

// ── Design tokens ─────────────────────────────────────────────────────────────
const SAGE  = "#8B9E88";
const DUST  = "#8BA5B5";
const SANDY = "#D4C4B0";
const CREAM = "#F8F5F0";
const DEEP  = "#3D2921";
const TERRA = "#C1856A";

// Shared glassmorphism style builder
const glass = (opacity = 0.10, blur = 20, border = 0.16): React.CSSProperties => ({
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  backgroundColor: `rgba(255,255,255,${opacity})`,
  border: `1px solid rgba(255,255,255,${border})`,
});

const glassDark = (opacity = 0.55, blur = 20): React.CSSProperties => ({
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  backgroundColor: `rgba(61,41,33,${opacity})`,
  border: `1px solid rgba(255,255,255,0.10)`,
});

// ── Animation presets ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 44, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};
const vp = { once: true, margin: "-80px" };

// ── Font helpers ───────────────────────────────────────────────────────────────
const PF  = "'Bodoni Moda', Georgia, serif";
const DMS = "'DM Sans', system-ui, sans-serif";

// ── Static data ───────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: "Lenka Nováčková",    text: "Prvý program, ktorý som reálne docvičila. Cvičenia nenáročné na čas, s postupne zvyšujúcou záťažou — presne to, čo som potrebovala." },
  { name: "Janka Bertokova",    text: "Naučila som sa mať pre seba čas, spevniť telo a získať dávku sebavedomia a čistú myseľ. Som vďačná, že som Gabi našla." },
  { name: "Monika Csomosova",   text: "Stačí 15 minút denne. Je to mojich 15 minút pre seba. Aj keď sa mi fakt nechce, idem. Gabi ma ťahá. Je perfektná!" },
  { name: "Andrea Pomichalová", text: "Najlepšie cvičenia aké som doteraz cvičila. Týchto 15 minút je úplne super v tomto uponáhľanom svete. Za mna 10/10." },
  { name: "Lucka Balajova",     text: "Konečne vnímam svoje stratené svaly na bruchu a určite pokračujem aj s ďalším programom. Ďakujem 🥰" },
  { name: "Klaudia Kalmarova",  text: "Na začiatku som mala obavy, ale nakoniec som si vždy našla čas. Cvičenia boli najlepšou formou oddychu počas dňa." },
  { name: "Sidónia Mrozeková",  text: "Všimla som si zlepšenie pevnosti tela a spevnenie svalov panvového dna po 2 tehotenstvách. Odporúčam každej žene." },
];

const PROGRAMS = [
  { level:"Level 1", tag:"Postpartum",    weeks:"8 týždňov", img: postpartumImg,   accent:"#F1EDE4", text:"#5F3E31", desc:"Bezpečný návrat k pohybu po pôrode. Diastáza, panvové dno, obnova sily." },
  { level:"Level 2", tag:"BodyForming",   weeks:"6 týždňov", img: bodyformingImg,  accent: TERRA,    text:"#fff",    desc:"Formovanie tela s vlastnou váhou. Žiadne vybavenie, maximum výsledkov." },
  { level:"Level 3", tag:"ElasticBands",  weeks:"6 týždňov", img: elasticbandsImg, accent: DEEP,     text:"#fff",    desc:"Svalová definícia a sila s odporovými gumami. Viditeľný rozdiel." },
  { level:"Level 4", tag:"Strong & Sexy", weeks:"8 týždňov", img: strongsexyImg,   accent:"#1a0a05", text:"#fff",    desc:"Pokročilá práca s telom a mysľou. Pre ženy, ktoré chcú viac." },
];

const TICKER_WORDS = [
  "NeoMe","Wellbeing","Pre ženy","15 minút","Silná",
  "Zdravá","Sebavedomá","Pohyb","Myseľ","Komunita","Bez viny","Bez extrémov",
];

// ── App pillars for phone scroll (§7) ────────────────────────────────────────
const APP_FEATURES = [
  { label:"Cvičenie",           sub:"15-minútové tréningy navrhnuté pre ženy vo všetkých životných fázach. Bez vybavenia, kedykoľvek, kdekoľvek.",        img: appBgTelo,          color: TERRA },
  { label:"Recepty",            sub:"Zdravé, rýchle recepty pre celú rodinu. Od raňajok po večeru — výživa bez stresu a bez kompromisov.",              img: appBgStrava,        color: SAGE  },
  { label:"Meditácia",          sub:"Pokoj mysle za 5 minút. Dýchanie, mindfulness a mentálny wellbeing pre každý deň tvojho rušného života.",          img: appBgMysel,         color: DUST  },
  { label:"Komunita",           sub:"Tisíce žien, ktoré ťa chápu. Zdieľaj, motivuj a nechaj sa motivovať ženami, ktoré to žijú rovnako.",              img: appBgKomunity,      color: SANDY },
  { label:"Sledovanie cyklu",   sub:"Poznaj svoje telo hlbšie. Personalizované tipy a pohybové odporúčania pre každú fázu tvojho cyklu.",               img: appBgPeriod,        color: TERRA },
  { label:"Sledovanie návykov", sub:"Buduj zdravé návyky krok po kroku. Sleduj denný progres a oslavuj každý malý úspech každý deň.",            img: testimonialJournal, color: SAGE  },
  { label:"Jedálniček",         sub:"Plánuj jedlá s radosťou a bez stresu. Vyvážený jedálniček pre celý týždeň — rýchlo, jednoducho, zdravo.",         img: appBgStrava,        color: DUST  },
];

const COMPARISONS = [
  { title:"NeoMe vs. členstvo v gyme",       points:["Šetrí čas — bez cestovania a čakania","Cvič doma, bez hanby a porovnávania","Flexibilita prispôsobená rodinnému rozvrhu","Zlomok mesačných nákladov na gym","Buď vzorom zdravia pre svoje deti"] },
  { title:"NeoMe vs. osobný tréner",          points:["Navrhnuté odborníčkou s 15+ rokmi praxe","Zlomok ceny osobného trénera","K dispozícii 24/7 — nie podľa kalendára trénera","Vždy po ruke v tvojom mobile","Špecificky navrhnuté pre ženy a mamičky"] },
  { title:"NeoMe vs. iné fitness aplikácie",  points:["Pre mamičky a ženy — nie generické fitness","Holistický prístup: telo + myseľ + komunita","V slovenčine — rozumieš každému slovu","Aktívna komunita skutočných žien","Hormonálna rovnováha, nie len chudnutie"] },
];

// ══════════════════════════════════════════════════════════════════════════════
const HomeNew = () => {
  const autoplay  = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
  const [period, setPeriod]         = useState<"monthly"|"quarterly"|"yearly">("quarterly");
  const [comparison, setComparison] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [phase, setPhase] = useState<"video" | "pillars">("video");

  /* ── Unified scroll handler: video scrub → pillar cycle ─────────────── */
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  const VIDEO_VH  = 2;                    // 200vh for video scrub phase
  const PILLAR_VH = APP_FEATURES.length;  // 700vh for pillar phase
  const TOTAL_VH  = VIDEO_VH + PILLAR_VH; // 900vh total

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const scrolledPast  = Math.max(0, -rect.top);
      const totalProgress = Math.min(1, scrolledPast / totalScrollable);
      const videoEnd      = VIDEO_VH / TOTAL_VH; // ~0.222

      if (totalProgress <= videoEnd) {
        const videoProgress = totalProgress / videoEnd;
        const vid = videoRef.current;
        if (vid && vid.duration && isFinite(vid.duration)) {
          vid.currentTime = videoProgress * vid.duration;
        }
        setPhase("video");
      } else {
        const pillarsProgress = (totalProgress - videoEnd) / (1 - videoEnd);
        const idx = Math.min(
          Math.floor(pillarsProgress * APP_FEATURES.length),
          APP_FEATURES.length - 1
        );
        setActiveFeature(Math.max(0, idx));
        setPhase("pillars");
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Inject Playfair Display + DM Sans ────────────────────────────────── */
  useEffect(() => {
    const pc1 = Object.assign(document.createElement("link"), { rel:"preconnect", href:"https://fonts.googleapis.com" });
    const pc2 = Object.assign(document.createElement("link"), { rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin:"anonymous" });
    const fnt = Object.assign(document.createElement("link"), {
      rel:"stylesheet",
      href:"https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400;1,6..96,500;1,6..96,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap",
    });
    document.head.append(pc1, pc2, fnt);
    return () => { pc1.remove(); pc2.remove(); fnt.remove(); };
  }, []);

  const pricing = {
    monthly:   { price:"14.99€", label:"Mesačne",   save: null   },
    quarterly: { price:"11.99€", label:"Kvartálne", save:"-20%"  },
    yearly:    { price:"9.99€",  label:"Ročne",     save:"-33%"  },
  };

  /* ── Shared label style ───────────────────────────────────────────────── */
  const Label = ({ children, light = false }: { children: string; light?: boolean }) => (
    <p style={{ fontFamily: DMS, fontSize:"12px", fontWeight:500, letterSpacing:"0.24em", textTransform:"uppercase", color: light ? SANDY : "rgba(61, 41, 33, 0.55)", marginBottom:"20px" }}>
      {children}
    </p>
  );

  const H2 = ({ children, light = false, style = {} }: { children: React.ReactNode; light?: boolean; style?: React.CSSProperties }) => (
    <h2 style={{ fontFamily: PF, fontWeight: 500, fontSize:"clamp(38px,5.5vw,70px)", lineHeight:1.08, color: light ? "white" : DEEP, ...style }}>
      {children}
    </h2>
  );

  return (
    <>
      {/* ── Global page styles ─────────────────────────────────────────────── */}
      <style>{`
        .hn2 { font-family: ${DMS}; font-weight: 300; color: ${DEEP}; background: white; }

        /* Grain overlay */
        @keyframes hn2-grain {
          0%,100%{transform:translate(0,0)}10%{transform:translate(-1%,-2%)}
          20%{transform:translate(2%,1%)}30%{transform:translate(-1%,3%)}
          40%{transform:translate(2%,-1%)}50%{transform:translate(-2%,2%)}
          60%{transform:translate(1%,-1%)}70%{transform:translate(-1%,1%)}
          80%{transform:translate(2%,-2%)}90%{transform:translate(-1%,1%)}
        }
        .hn2-grain {
          position:fixed;top:-150%;left:-150%;
          width:400%;height:400%;
          pointer-events:none;z-index:998;opacity:0.028;
          animation:hn2-grain 8s steps(10) infinite;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Hero word reveal */
        @keyframes hn2-word {
          from{opacity:0;transform:translateY(72px);filter:blur(10px)}
          to  {opacity:1;transform:translateY(0);   filter:blur(0)}
        }
        .hn2-word { display:inline-block; animation:hn2-word 1.15s cubic-bezier(0.16,1,0.3,1) both; }

        /* Ticker */
        @keyframes hn2-tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .hn2-ticker{display:flex;width:max-content;animation:hn2-tick 38s linear infinite;}
        .hn2-ticker:hover{animation-play-state:paused;}

        /* Program card */
        .hn2-prog img{transition:transform 0.85s cubic-bezier(0.16,1,0.3,1);}
        .hn2-prog:hover img{transform:scale(1.06);}
        .hn2-prog-over{opacity:0;transition:opacity 0.4s;}
        .hn2-prog:hover .hn2-prog-over{opacity:1;}

        /* Feature card */
        .hn2-feat img{transition:transform 0.75s cubic-bezier(0.16,1,0.3,1);}
        .hn2-feat:hover img{transform:scale(1.05);}

        /* Scroll-triggered section fade */
        .hn2-section { overflow: hidden; }

        /* Phone mockup frame — thin iPhone-style */
        .hn2-phone {
          width: 264px;
          height: 536px;
          border-radius: 54px;
          padding: 5px;
          background: linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 50%, #2c2c2e 100%);
          position: relative;
          box-shadow:
            inset 0 0 0 0.5px rgba(255,255,255,0.16),
            0 0 0 0.5px rgba(0,0,0,0.6),
            0 50px 100px rgba(0,0,0,0.28),
            0 15px 35px rgba(0,0,0,0.15);
        }
        /* Left side buttons */
        .hn2-phone::before {
          content: '';
          position: absolute;
          left: -3.5px; top: 108px;
          width: 3px; height: 28px;
          background: #3a3a3c;
          border-radius: 1.5px 0 0 1.5px;
        }
        .hn2-phone-screen {
          width: 100%; height: 100%;
          border-radius: 50px;
          overflow: hidden;
          position: relative;
          background: #000;
        }
        .hn2-phone-island {
          position: absolute; top: 14px; left: 50%;
          transform: translateX(-50%);
          width: 88px; height: 26px;
          background: #000;
          border-radius: 13px;
          z-index: 10;
        }
      `}</style>

      {/* Animated grain */}
      <div className="hn2-grain" aria-hidden />

      <div className="hn2" style={{ overflowX:"clip" }}>

        {/* ══════════════════════════════════════════════════════════════
            §1  HERO
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden"
          style={{ backgroundImage:`url(${heroImage})`, backgroundSize:"cover", backgroundPosition:"center top" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* Main copy */}
          <div className="relative z-10 flex-1 flex items-end pb-28 px-6 md:px-16">
            <div className="container mx-auto max-w-7xl">
              <div className="max-w-3xl">

                {/* Label */}
                <div className="flex items-center gap-3 mb-10 hn2-word" style={{ animationDelay:"0s" }}>
                  <div className="h-px w-12" style={{ backgroundColor: SAGE }} />
                  <span style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.28em", textTransform:"uppercase", color: SAGE }}>
                    Wellbeing pre ženy
                  </span>
                </div>

                {/* Headline — word by word */}
                <h1
                  className="text-white mb-5 leading-[0.9]"
                  style={{ fontFamily: PF, fontWeight: 500, fontSize:"clamp(58px,10.5vw,132px)" }}
                >
                  {"Máš 15 minút?".split(" ").map((w, i) => (
                    <span key={i} className="hn2-word" style={{ animationDelay:`${0.18 + i * 0.19}s` }}>
                      {w}{" "}
                    </span>
                  ))}
                </h1>

                {/* Italic sub */}
                <p
                  className="hn2-word text-white/70 mb-10 leading-tight"
                  style={{ fontFamily: PF, fontStyle:"italic", fontWeight:400, fontSize:"clamp(28px,5vw,64px)", animationDelay:"0.75s" }}
                >
                  Stačí ti to.
                </p>

                <p
                  className="hn2-word text-white/72 mb-10 max-w-lg leading-relaxed"
                  style={{ fontFamily: DMS, fontSize:"17px", fontWeight:300, animationDelay:"0.92s" }}
                >
                  Holistická pohoda pre skutočné ženy — cvičenie, recepty, meditácie
                  a komunita navrhnuté pre tvoj skutočný život. Bez viny, bez extrémov.
                </p>

                {/* CTAs */}
                <div className="hn2-word flex flex-col sm:flex-row gap-4 items-start mb-4" style={{ animationDelay:"1.08s" }}>
                  <Button asChild size="lg"
                    className="rounded-full px-10 py-6 text-[15px] font-normal border-0 hover:opacity-88 transition-opacity shadow-lg"
                    style={{ backgroundColor: SAGE, color:"#fff", fontFamily: DMS }}>
                    <Link to="/checkout">Vyskúšaj 7 dní zadarmo <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost"
                    className="rounded-full px-9 py-6 text-[15px] text-white hover:text-white hover:bg-white/10"
                    style={{ border:"1px solid rgba(255,255,255,0.28)", fontFamily: DMS, fontWeight:300 }}>
                    <Link to="/programy">Pozri si programy</Link>
                  </Button>
                </div>

                {/* Trust micro-copy */}
                <div className="hn2-word flex items-center gap-2" style={{ animationDelay:"1.2s" }}>
                  <Shield size={13} className="text-white/35" />
                  <p style={{ fontFamily: DMS, fontSize:"13px", color:"rgba(255,255,255,0.38)" }}>
                    Žiadna platobná karta. Zruš kedykoľvek.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── GLASS §1: Stats bar ──────────────────────────────────── */}
          <div className="hn2-word relative z-10 px-6 md:px-16 pb-10" style={{ animationDelay:"1.35s" }}>
            <div
              className="container mx-auto max-w-7xl rounded-2xl px-6 md:px-10 py-5 flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between sm:items-center"
              style={glass(0.09, 22, 0.16)}
            >
              {[
                { value:"4 000+", label:"žien začalo" },
                { value:"★ 4.9",  label:"priemerné hodnotenie" },
                { value:"230+",   label:"overených recenzií" },
                { value:"7 dní",  label:"zadarmo na vyskúšanie" },
              ].map((s, i) => (
                <div key={i} className="text-center sm:flex-1 sm:border-r last:border-0" style={{ borderColor:"rgba(255,255,255,0.12)" }}>
                  <div style={{ fontFamily: PF, fontWeight:500, fontSize:"22px", color:"white" }}>{s.value}</div>
                  <div style={{ fontFamily: DMS, fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.42)", marginTop:"2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §2  TICKER
        ══════════════════════════════════════════════════════════════ */}
        <div className="py-[14px] overflow-hidden" style={{ backgroundColor: SAGE }}>
          <div className="hn2-ticker">
            {[0,1].map(rep => (
              <div key={rep} className="flex items-center">
                {TICKER_WORDS.map((w, j) => (
                  <span key={j} className="flex items-center">
                    <span style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.26em", textTransform:"uppercase", color:"rgba(255,255,255,0.88)", padding:"0 24px", whiteSpace:"nowrap" }}>{w}</span>
                    <span style={{ color:"rgba(255,255,255,0.32)", fontSize:"10px" }}>·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            §3  PAIN POINTS
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>

              {/* Centred headline */}
              <motion.div variants={fadeUp} className="text-center mb-16">
                <Label>Poznáš ten pocit?</Label>
                <H2>
                  Si unavená z toho,{" "}
                  <em style={{ color: TERRA, fontStyle:"italic" }}>že na seba zabudáš.</em>
                </H2>
              </motion.div>

              {/* 3-column pain cards */}
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { Icon: Clock,     accent: SAGE,  title:"Chcem cvičiť, ale čas jednoducho nie je.",       body:"Medzi deťmi, prácou a domácnosťou si na seba jednoducho zabudla. Každý deň." },
                  { Icon: RotateCcw, accent: DUST,  title:"Začínam každý pondelok odznova.",                body:"Nič nevydrží, lebo nič nebolo navrhnuté pre tvoj skutočný, zaneprázdnený život." },
                  { Icon: Heart,     accent: TERRA, title:"Všetkých sa starám. Seba nechávam na posled.",  body:"Si posledná na tvojom vlastnom zozname — a to nie je správne." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <div
                      className="p-8 rounded-2xl h-full"
                      style={{ backgroundColor: CREAM, borderLeft:`3px solid ${item.accent}`, boxShadow:"0 2px 20px rgba(0,0,0,0.04)" }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor:`${item.accent}1A` }}>
                        <item.Icon size={18} style={{ color: item.accent }} />
                      </div>
                      <h3 className="font-normal text-base leading-snug mb-3" style={{ fontFamily: DMS, color: DEEP }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: DMS, color:`${DEEP}80` }}>{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p variants={fadeUp} className="text-center mt-10 text-sm" style={{ fontFamily: DMS, color:`${DEEP}70` }}>
                NeoMe vzniklo presne pre teba. Nie pre dokonalú verziu teba —&nbsp;
                <strong style={{ fontWeight:500, color: DEEP }}>pre teba dnes.</strong>
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §4  HOW IT WORKS
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto max-w-6xl">
            <motion.div className="text-center mb-20" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label>Ako to funguje</Label></motion.div>
              <motion.div variants={fadeUp}><H2>Tri kroky k tvojej <em style={{ color: TERRA }}>Novej Ja</em></H2></motion.div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {[
                { num:"01", Icon: Leaf,    title:"Zisti, kde začať",         body:"Odpovez na niekoľko otázok a dostaneš program šitý presne na tvoju situáciu a životnú fázu." },
                { num:"02", Icon: Clock,   title:"15 minút denne pre seba",  body:"Cvič, medituj, var — všetko na jednom mieste, kedykoľvek. Dokonca aj počas detského spánku." },
                { num:"03", Icon: Sparkle, title:"Cíť zmenu zvnútra",        body:"Viac energie, lepší spánok, silnejšie telo. Nie za tri mesiace — pocítiš to už po prvom týždni." },
              ].map((step, i) => (
                <motion.div
                  key={i} className="relative"
                  initial={{ opacity:0, y:60, filter:"blur(5px)" }}
                  whileInView={{ opacity:1, y:0, filter:"blur(0px)" }}
                  viewport={vp}
                  transition={{ duration:0.9, delay: i*0.14, ease:[0.16,1,0.3,1] }}
                >
                  <div className="absolute -top-6 -left-3 select-none pointer-events-none leading-none"
                    style={{ fontFamily: PF, fontWeight:700, fontSize:"140px", color:`${SANDY}65`, letterSpacing:"-0.04em" }}>
                    {step.num}
                  </div>
                  <div className="relative pt-20">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: SAGE }}>
                      {step.num==="03" ? <Sparkle size={20} weight="fill" color="white" /> : <step.Icon size={20} color="white" />}
                    </div>
                    <h3 className="text-lg font-normal mb-3" style={{ fontFamily: DMS, color: DEEP }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: DMS, color:`${DEEP}80` }}>{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §5  LIFESTYLE BREAK — full-bleed + GLASS §2 quote card
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative py-36 md:py-48 px-6 md:px-16 overflow-hidden"
          style={{ backgroundImage:`url(${lifestyleYogaPose})`, backgroundSize:"cover", backgroundPosition:"center 30%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />

          <motion.div
            className="relative z-10 container mx-auto max-w-3xl"
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={vp}
            transition={{ duration:1, ease:[0.16,1,0.3,1] }}
          >
            {/* ── GLASS §2 ──────────────────────────────────────────── */}
            <div className="rounded-3xl p-12 md:p-16 text-center" style={glass(0.08, 24, 0.14)}>
              <div style={{ width:"32px", height:"1px", backgroundColor: SANDY, margin:"0 auto 24px" }} />
              <blockquote
                style={{ fontFamily: PF, fontStyle:"italic", fontWeight:400, fontSize:"clamp(24px,4vw,40px)", color:"white", lineHeight:1.35, marginBottom:"28px" }}
              >
                "Pohyb nie je trest za to, čo si zjedla.<br />
                Je to dar, ktorý dávaš svojmu telu."
              </blockquote>
              <p style={{ fontFamily: DMS, fontSize:"13px", letterSpacing:"0.2em", textTransform:"uppercase", color: SANDY }}>
                — Gabi, zakladateľka NeoMe
              </p>
              <div style={{ width:"32px", height:"1px", backgroundColor: SANDY, margin:"24px auto 0" }} />
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §6  TESTIMONIALS — dark
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16" style={{ backgroundColor: DEEP }}>
          <div className="container mx-auto max-w-6xl">
            <motion.div className="mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label light>Skutočné výsledky</Label></motion.div>
              <motion.div variants={fadeUp}><H2 light>Skutočné ženy.<br /><em style={{ color: SANDY }}>Skutočné zmeny.</em></H2></motion.div>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              {[
                { img: testimonialMartina, name:"Martina, 34", result:"–8 kg · Viac energie",      quote:"Nikdy som neverila, že 15 minút denne môže niečo zmeniť. Po 8 týždňoch som zistila, že môže zmeniť všetko." },
                { img: testimonialLucia,   name:"Lucia, 29",   result:"Lepší spánok · Viac sily",  quote:"Po pôrode som sa cítila stratená v cudzom tele. NeoMe mi vrátilo mňa — pohodu, sebaúctu a radosť z pohybu." },
                { img: testimonialZuzana,  name:"Zuzana, 41",  result:"Konečne niečo, čo vydržím", quote:"Vyskúšala som všetko. Toto je prvý program, ktorý som nevzdala. Lebo konečne funguje pre môj reálny život." },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  {/* ── GLASS §3: testimonial cards ─────────────────── */}
                  <div className="rounded-3xl overflow-hidden h-full flex flex-col" style={{ ...glass(0.06, 12, 0.08), border:"1px solid rgba(255,255,255,0.07)" }}>
                    <div className="relative h-72 overflow-hidden flex-shrink-0">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <div style={{ fontFamily: DMS, fontSize:"10px", letterSpacing:"0.24em", textTransform:"uppercase", color: SANDY }}>{t.result}</div>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <Quote size={18} className="mb-3 opacity-22 flex-shrink-0" style={{ color: SANDY }} />
                      <p className="flex-1 mb-5 italic" style={{ fontFamily: PF, fontStyle:"italic", fontSize:"17px", lineHeight:1.6, color:"rgba(255,255,255,0.76)" }}>
                        "{t.quote}"
                      </p>
                      <p style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.38)" }}>
                        — {t.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center mt-12" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={vp} transition={{ delay:0.5 }}>
              <Link to="/transformacie" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
                style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.28em", textTransform:"uppercase", color: SANDY }}>
                Čítaj viac príbehov <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §7  VIDEO SCRUB → PHONE PILLARS (unified sticky section)
            Phase 1: 200vh — video plays frame-by-frame on scroll
            Phase 2: 700vh — sticky phone cycles through 7 pillars
        ══════════════════════════════════════════════════════════════ */}
        <section ref={sectionRef} style={{ position:"relative", backgroundColor:"black" }}>
          <div style={{ height:`${TOTAL_VH * 100}vh` }}>
            <div style={{ position:"sticky", top:0, height:"100vh", overflow:"hidden" }}>

              {/* ── Phase 1: Full-screen scroll-scrubbed video ────────── */}
              <div style={{
                position:"absolute", inset:0,
                opacity: phase === "video" ? 1 : 0,
                transition:"opacity 0.8s ease",
                pointerEvents: phase === "video" ? "auto" : "none",
              }}>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  muted
                  playsInline
                  preload="auto"
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                  onLoadedData={() => { if (videoRef.current) videoRef.current.currentTime = 0.001; }}
                />
                {/* Section label overlay */}
                <div style={{ position:"absolute", top:"48px", left:0, right:0, textAlign:"center", zIndex:2 }}>
                  <p style={{ fontFamily:DMS, fontSize:"11px", letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:"10px" }}>
                    Čo nájdeš v aplikácii
                  </p>
                  <p style={{ fontFamily:DMS, fontSize:"13px", color:"rgba(255,255,255,0.30)" }}>
                    Prejdi dolu — spoznaj každý pilier NeoMe
                  </p>
                </div>
              </div>

              {/* ── Phase 2: Phone + pillar UI ────────────────────────── */}
              <div style={{
                position:"absolute", inset:0, backgroundColor:"white",
                opacity: phase === "pillars" ? 1 : 0,
                transition:"opacity 0.8s ease",
                pointerEvents: phase === "pillars" ? "auto" : "none",
                display:"flex", flexDirection:"column", justifyContent:"center", overflow:"hidden",
              }}>
                <div className="container mx-auto px-6 md:px-16" style={{ maxWidth:"1100px" }}>
                  <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Feature info */}
                    <div>
                      <AnimatePresence mode="wait">
                        <motion.div key={activeFeature}
                          initial={{ opacity:0, y:28, filter:"blur(5px)" }}
                          animate={{ opacity:1, y:0,  filter:"blur(0px)" }}
                          exit={{    opacity:0, y:-28, filter:"blur(5px)" }}
                          transition={{ duration:0.52, ease:[0.16,1,0.3,1] as [number,number,number,number] }}
                        >
                          <div style={{ fontFamily:DMS, fontSize:"11px", letterSpacing:"0.24em", textTransform:"uppercase", color: APP_FEATURES[activeFeature].color, marginBottom:"20px" }}>
                            {String(activeFeature + 1).padStart(2,"0")} / {String(APP_FEATURES.length).padStart(2,"0")}
                          </div>
                          <h2 style={{ fontFamily:PF, fontWeight:500, fontSize:"clamp(42px,6vw,84px)", lineHeight:1.05, color:DEEP, marginBottom:"24px" }}>
                            {APP_FEATURES[activeFeature].label}
                          </h2>
                          <p style={{ fontFamily:DMS, fontSize:"17px", color:`${DEEP}72`, lineHeight:1.72, maxWidth:"440px" }}>
                            {APP_FEATURES[activeFeature].sub}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      {/* Progress pills */}
                      <div style={{ display:"flex", gap:"8px", marginTop:"48px", alignItems:"center" }}>
                        {APP_FEATURES.map((f, i) => (
                          <div key={i} style={{
                            height:"4px",
                            width: i === activeFeature ? "32px" : "8px",
                            borderRadius:"2px",
                            backgroundColor: i === activeFeature ? f.color : `${DEEP}18`,
                            transition:"all 0.45s cubic-bezier(0.16,1,0.3,1)",
                          }} />
                        ))}
                      </div>
                    </div>

                    {/* Right: Phone mockup */}
                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative" }}>
                      <div style={{
                        position:"absolute",
                        width:"320px", height:"320px", borderRadius:"50%",
                        backgroundColor: APP_FEATURES[activeFeature].color,
                        filter:"blur(90px)", opacity:0.13,
                        transition:"background-color 0.6s ease",
                      }} />

                      <div className="hn2-phone" style={{ zIndex:1 }}>
                        <div className="hn2-phone-screen">
                          <div className="hn2-phone-island" />
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={activeFeature}
                              src={APP_FEATURES[activeFeature].img}
                              alt={APP_FEATURES[activeFeature].label}
                              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}
                              initial={{ opacity:0, scale:1.05 }}
                              animate={{ opacity:1, scale:1 }}
                              exit={{    opacity:0, scale:0.96 }}
                              transition={{ duration:0.48, ease:[0.16,1,0.3,1] as [number,number,number,number] }}
                            />
                          </AnimatePresence>
                          <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"20px 18px 26px", background:"linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 100%)", zIndex:2 }}>
                            <div style={{ fontFamily:DMS, fontSize:"10px", letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.50)" }}>NeoMe App</div>
                            <div style={{ fontFamily:PF, fontWeight:500, fontSize:"18px", color:"white" }}>{APP_FEATURES[activeFeature].label}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════════════
            §8  FEATURE SHOWCASE — 4 image cards with GLASS §5 overlays
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto max-w-6xl">
            <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label>4 piliere NeoMe</Label></motion.div>
              <motion.div variants={fadeUp}><H2>Telo. Myseľ. Výživa. <em style={{ color: TERRA }}>Komunita.</em></H2></motion.div>
            </motion.div>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              {[
                { img: testimonialWorkout, label:"Cvičenie",  sub:"15-min programy pre všetky fázy", color: TERRA },
                { img: testimonialRecipe,  label:"Recepty",   sub:"Zdravé jedlá pre celú rodinu",    color: SAGE  },
                { img: testimonialMedit,   label:"Myseľ",     sub:"Meditácie a mindfulness",          color: DUST  },
                { img: testimonialComm,    label:"Komunita",  sub:"Tisíce žien pre seba navzájom",   color: SANDY },
              ].map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="hn2-feat group">
                  <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio:"3/4" }}>
                    <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
                    {/* §8 card overlay — dark gradient ensures readability on any image */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-5"
                      style={{ background:"linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)", borderRadius:"0 0 16px 16px" }}
                    >
                      <div style={{ width:"24px", height:"2px", backgroundColor: f.color, marginBottom:"8px" }} />
                      <div style={{ fontFamily: PF, fontWeight:500, fontSize:"20px", color:"white" }}>{f.label}</div>
                      <div style={{ fontFamily: DMS, fontSize:"12px", color:"rgba(255,255,255,0.78)", lineHeight:1.4 }}>{f.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §9  FOUNDER STORY
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-20 items-center">

              {/* Left: text */}
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="order-2 lg:order-1">
                <motion.div variants={fadeUp}><Label>Príbeh zakladateľky</Label></motion.div>

                <motion.blockquote variants={fadeUp} className="mb-7"
                  style={{ fontFamily: PF, fontStyle:"italic", fontWeight:400, fontSize:"clamp(30px,4vw,52px)", lineHeight:1.18, color: DEEP }}>
                  "Verím, že pohyb<br />je <span style={{ color: TERRA }}>liek</span>, ktorý máme<br />všetci nadosah."
                </motion.blockquote>

                <motion.p variants={fadeUp} className="font-normal mb-8 text-sm" style={{ fontFamily: DMS, color: SAGE }}>
                  — Gabi, zakladateľka NeoMe
                </motion.p>

                <motion.div variants={fadeUp} className="space-y-4 mb-10">
                  <p className="text-sm leading-relaxed" style={{ fontFamily: DMS, color:`${DEEP}78` }}>
                    <strong style={{ fontWeight:500, color: DEEP }}>15+ rokov skúseností</strong> v tanci, joge a fyzickom tréningu. Vystupovala pre Tommy Hilfiger, Avicii a Adidas. Potom sa stala mamou — a všetko sa zmenilo.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: DMS, color:`${DEEP}78` }}>
                    Zo zlomeného tela po pôrode znovu postavila seba — a NeoMe vytvorila pre všetky ženy, ktoré rozumejú tomuto pocitu. Pre ženy, ktoré si zaslúžia láskavý, holistický prístup k tvojej pohode.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Button asChild variant="outline" className="rounded-full px-8 font-light hover:bg-transparent"
                    style={{ borderColor: DEEP, color: DEEP, fontFamily: DMS }}>
                    <Link to="/o-nas">Prečítaj si môj príbeh <ArrowRight size={15} className="ml-2" /></Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: photo */}
              <motion.div
                className="order-1 lg:order-2 relative flex justify-center"
                initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }}
                viewport={vp} transition={{ duration:1, ease:[0.16,1,0.3,1] }}
              >
                {/* Decorative offset frames */}
                <div className="absolute inset-0 rounded-[32px]"
                  style={{ border:`1.5px solid ${SANDY}`, transform:"rotate(-3.5deg) scale(1.04)", zIndex:0 }} />
                <div className="absolute inset-0 rounded-[32px]"
                  style={{ border:`1.5px solid ${SAGE}55`, transform:"rotate(2.5deg) scale(1.015)", zIndex:0 }} />

                <img src={founderImage} alt="Gabi, zakladateľka NeoMe"
                  className="relative rounded-[32px] shadow-2xl object-cover object-top w-full"
                  style={{ aspectRatio:"3/4", maxWidth:"400px", zIndex:1 }} />

                {/* ── GLASS §6: credential badge ───────────────────── */}
                <div
                  className="absolute rounded-2xl px-5 py-4"
                  style={{ ...glassDark(0.88, 20), zIndex:2, bottom:"-16px", right:"-8px", md:{ right:"-24px" } }}
                >
                  <div style={{ fontFamily: DMS, fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:`${SANDY}80`, marginBottom:"4px" }}>Zakladateľka</div>
                  <div style={{ fontFamily: PF, fontWeight:500, fontSize:"18px", color:"white" }}>Gabi</div>
                  <div style={{ fontFamily: DMS, fontSize:"11px", color:`${SANDY}70` }}>15+ rokov skúseností</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §10  GOOGLE REVIEWS carousel
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto max-w-6xl">
            <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label>Hodnotenia</Label></motion.div>
              <motion.div variants={fadeUp}><H2>Dôvera viac ako <em style={{ color: TERRA }}>4 000 žien</em></H2></motion.div>
            </motion.div>

            <Carousel plugins={[autoplay.current]} opts={{ align:"start", loop:true }}>
              <CarouselContent className="-ml-4">
                {REVIEWS.map((r, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-7 h-full rounded-2xl flex flex-col"
                      style={{ backgroundColor:"white", boxShadow:"0 2px 24px rgba(0,0,0,0.05)" }}>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_,j) => <Star key={j} size={13} weight="fill" color="#D4A373" />)}
                      </div>
                      <p className="text-sm leading-relaxed italic flex-1 mb-5"
                        style={{ fontFamily: PF, fontStyle:"italic", fontSize:"16px", color:`${DEEP}80`, lineHeight:1.65 }}>
                        "{r.text}"
                      </p>
                      <p className="text-xs font-normal" style={{ fontFamily: DMS, color: DEEP }}>— {r.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §11  EXPERT RECOMMENDATIONS
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label>Odborná podpora</Label></motion.div>
              <motion.div variants={fadeUp}><H2>Odporúčajú nás <em style={{ color: TERRA }}>odborníci</em></H2></motion.div>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              {[
                { name:"PhDr. Magdaléna Csolti", title:"Fyzioterapeutka",  org:"Auramedica",                  img: csoltiImg, quote:"Postpartum program od NeoMe je navrhnutý presne pre potreby mám po pôrode — bezpečným, postupným spôsobom. Fantastická podpora pre každú mamu." },
                { name:"Mgr. Petra Horváthová",  title:"Fyzioterapeutka",  org:"Špecialistka na panvové dno", img: null,      quote:"Oceňujem holistický prístup NeoMe. Kombinácia pohybu, výživy a mentálneho zdravia je presne to, čo ženy potrebujú." },
                { name:"PhDr. Lucia Kováčová",   title:"Psychologička",    org:"Špecialistka na materstvo",   img: null,      quote:"Mentálne cvičenia v NeoMe pomáhajú ženám zvládať stres a nájsť vnútorný pokoj — dôležitá súčasť celkového wellbeingu." },
              ].map((e, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="p-7 h-full rounded-2xl flex flex-col" style={{ backgroundColor: CREAM, boxShadow:"0 2px 20px rgba(0,0,0,0.04)" }}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-white text-lg"
                        style={{ backgroundColor: e.img ? "transparent" : SAGE }}>
                        {e.img ? <img src={e.img} alt={e.name} className="w-full h-full object-cover" /> : e.name.split(" ").pop()![0]}
                      </div>
                      <div>
                        <div className="font-normal text-sm" style={{ fontFamily: DMS, color: DEEP }}>{e.name}</div>
                        <div className="text-xs" style={{ fontFamily: DMS, color: SAGE }}>{e.title}</div>
                        <div className="text-xs" style={{ fontFamily: DMS, color:`${DEEP}55` }}>{e.org}</div>
                      </div>
                    </div>
                    <Quote size={18} className="mb-3 opacity-20 flex-shrink-0" style={{ color: DEEP }} />
                    <p className="text-sm leading-relaxed italic flex-1" style={{ fontFamily: PF, fontStyle:"italic", fontSize:"16px", color:`${DEEP}75` }}>
                      "{e.quote}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §12  PROGRAMS
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto max-w-6xl">
            <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <div>
                <motion.div variants={fadeUp}><Label>Programy</Label></motion.div>
                <motion.div variants={fadeUp}><H2>Tvoja cesta,<br /><em style={{ color: TERRA }}>tvoje tempo.</em></H2></motion.div>
              </div>
              <motion.div variants={fadeUp}>
                <Link to="/programy" className="inline-flex items-center gap-2 hover:opacity-55 transition-opacity"
                  style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.28em", textTransform:"uppercase", color: DEEP }}>
                  Všetky programy <ArrowRight size={13} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              {PROGRAMS.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="hn2-prog group">
                  <Link to="/programy" className="block">
                    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio:"3/4" }}>
                      <img src={p.img} alt={p.tag} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                      {/* Hover overlay */}
                      <div className="hn2-prog-over absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor:"rgba(0,0,0,0.30)" }}>
                        <div className="text-white text-sm border border-white/38 rounded-full px-5 py-2"
                          style={{ fontFamily: DMS }}>Zistiť viac</div>
                      </div>

                      {/* Level badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-normal"
                        style={{ backgroundColor: p.accent, color: p.text, fontFamily: DMS }}>
                        {p.level}
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div style={{ fontFamily: DMS, fontSize:"10px", letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.52)", marginBottom:"4px" }}>{p.weeks}</div>
                        <div style={{ fontFamily: PF, fontWeight:500, fontSize:"20px", color:"white", marginBottom:"4px" }}>{p.tag}</div>
                        <div style={{ fontFamily: DMS, fontSize:"11px", color:"rgba(255,255,255,0.52)", lineHeight:1.4 }}>{p.desc}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §13  COMPARISON — full-bleed dark + GLASS §7
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16" style={{ backgroundColor: DEEP }}>
          <div className="container mx-auto max-w-5xl">
            <motion.div className="text-center mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label light>Prečo NeoMe?</Label></motion.div>
              <motion.div variants={fadeUp}><H2 light>Prečo ženy <em style={{ color: SANDY }}>volia NeoMe</em></H2></motion.div>
            </motion.div>

            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ duration:0.8 }}>
              {/* Tabs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {COMPARISONS.map((c, i) => (
                  <button key={i} onClick={() => setComparison(i)}
                    className="flex-1 px-5 py-3 rounded-xl text-sm font-light text-left transition-all duration-300"
                    style={{ fontFamily: DMS, backgroundColor: comparison===i ? SANDY : "rgba(255,255,255,0.07)", color: comparison===i ? DEEP : "rgba(255,255,255,0.62)", border:`1px solid ${comparison===i ? SANDY : "rgba(255,255,255,0.10)"}` }}>
                    {c.title}
                  </button>
                ))}
              </div>

              {/* ── GLASS §7: comparison content ─────────────────── */}
              <div className="rounded-2xl p-8 md:p-10" style={glass(0.07, 18, 0.11)}>
                <ul className="space-y-4">
                  {COMPARISONS[comparison].points.map((pt, i) => (
                    <motion.li key={`${comparison}-${i}`}
                      className="flex items-start gap-4"
                      initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }}
                      transition={{ duration:0.4, delay: i*0.07 }}>
                      <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{ color: SAGE }} />
                      <span className="text-sm leading-relaxed" style={{ fontFamily: DMS, color:"rgba(255,255,255,0.78)" }}>{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §14  PRICING
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div className="text-center mb-12" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label>Cenník</Label></motion.div>
              <motion.div variants={fadeUp}><H2>Vyber si plán</H2></motion.div>
              <motion.p variants={fadeUp} className="mt-4 text-sm" style={{ fontFamily: DMS, color:`${DEEP}65` }}>
                Prvých 7 dní zadarmo. Žiadna platobná karta potrebná.
              </motion.p>
            </motion.div>

            {/* Period toggle */}
            <motion.div className="flex justify-center mb-10" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={vp} transition={{ delay:0.2 }}>
              <div className="inline-flex p-1 rounded-full" style={{ backgroundColor:`${SANDY}30` }}>
                {(["monthly","quarterly","yearly"] as const).map(p => (
                  <button key={p} onClick={() => setPeriod(p)}
                    className="relative px-5 py-2 rounded-full text-sm font-light transition-all duration-300"
                    style={{ fontFamily: DMS, backgroundColor: period===p ? DEEP : "transparent", color: period===p ? "white" : DEEP }}>
                    {pricing[p].label}
                    {pricing[p].save && (
                      <span className="absolute -top-2 -right-1 text-[9px] px-1.5 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: SAGE }}>
                        {pricing[p].save}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-6" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ delay:0.3, duration:0.8 }}>
              {/* Free */}
              <div className="p-8 rounded-3xl" style={{ backgroundColor: CREAM, border:`1px solid ${SANDY}55` }}>
                <div style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.24em", textTransform:"uppercase", color:`${DEEP}65`, marginBottom:"8px" }}>Zadarmo</div>
                <div style={{ fontFamily: PF, fontWeight:500, fontSize:"44px", color: DEEP, marginBottom:"4px" }}>0€</div>
                <div className="text-xs mb-7" style={{ fontFamily: DMS, color:`${DEEP}55` }}>navždy</div>
                <ul className="space-y-3 mb-8">
                  {["Základné cvičenia","Niektoré recepty","Základné meditácie"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ fontFamily: DMS, color:`${DEEP}70` }}>
                      <Check size={13} style={{ color: SAGE }} className="flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-full text-sm font-light transition-colors border hover:bg-white"
                  style={{ fontFamily: DMS, borderColor: DEEP, color: DEEP }}>
                  Začať zadarmo
                </button>
              </div>

              {/* Paid */}
              <div className="p-8 rounded-3xl relative overflow-hidden" style={{ backgroundColor: DEEP, boxShadow:`0 16px 56px ${DEEP}55` }}>
                <div className="absolute top-5 right-5 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ fontFamily: DMS, backgroundColor: SAGE, color:"white" }}>
                  Odporúčané
                </div>
                <div style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.24em", textTransform:"uppercase", color:`${SANDY}80`, marginBottom:"8px" }}>Predplatné</div>
                <div style={{ fontFamily: PF, fontWeight:500, fontSize:"44px", color:"white", marginBottom:"4px" }}>{pricing[period].price}</div>
                <div className="text-xs mb-7" style={{ fontFamily: DMS, color:`${SANDY}65` }}>{pricing[period].label.toLowerCase()} · 7 dní zadarmo</div>
                <ul className="space-y-3 mb-8">
                  {["Všetky cvičenia & programy","Všetky recepty","Všetky meditácie","Komunita žien","Denník návykov","Periodka","30-dňová záruka vrátenia peňazí"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ fontFamily: DMS, color:"rgba(255,255,255,0.75)" }}>
                      <Check size={13} style={{ color: SAGE }} className="flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full font-normal border-0 hover:opacity-88"
                  style={{ backgroundColor: SAGE, color:"white", fontFamily: DMS }}>
                  <Link to="/checkout">Vyskúšaj 7 dní zadarmo <ArrowRight size={15} className="ml-2" /></Link>
                </Button>
              </div>
            </motion.div>

            <motion.p className="text-center mt-6 text-xs" style={{ fontFamily: DMS, color:`${DEEP}50` }}
              initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={vp} transition={{ delay:0.5 }}>
              Bez záväzkov · Zruš kedykoľvek · 30-dňová záruka vrátenia peňazí
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §15  FAQ
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-16" style={{ backgroundColor: CREAM }}>
          <div className="container mx-auto max-w-3xl">
            <motion.div className="text-center mb-14" variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.div variants={fadeUp}><Label>Otázky a odpovede</Label></motion.div>
              <motion.div variants={fadeUp}><H2>Máš otázky?<br /><em style={{ color: TERRA }}>Máme odpovede.</em></H2></motion.div>
              <motion.p variants={fadeUp} className="mt-4 text-sm" style={{ fontFamily: DMS, color:`${DEEP}60` }}>
                Najčastejšie veci, ktoré nás ženy pýtajú pred začatím.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={vp} transition={{ delay:0.2, duration:0.8 }}>
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  { q:"Ako funguje 7-dňové bezplatné vyskúšanie?",            a:"Po registrácii máš plný prístup ku všetkému obsahu NeoMe na 7 dní zadarmo. Žiadna platobná karta nie je potrebná. Po uplynutí si vyberieš plán alebo jednoducho odídeš." },
                  { q:"Potrebujem nejaké vybavenie na cvičenie?",              a:"Väčšina tréningov nevyžaduje žiadne vybavenie. Niektoré pokročilejšie programy využívajú odporové gumy alebo ľahké činky, ale nie je to povinné." },
                  { q:"Je NeoMe vhodná aj pre ženy, ktoré nie sú po pôrode?", a:"Áno. NeoMe je pre všetky ženy. Naše programy sú prispôsobené rôznym životným situáciám — od postpartum obnovy cez tvarovanie tela až po pokročilé silové tréningy." },
                  { q:"Ako dlho trvajú tréningy?",                            a:"Naše tréningy trvajú 5–15 minút — ráno, počas pauzy, alebo keď spí dieťa. Aj krátky čas venovaný sebe je viac ako nič." },
                  { q:"Ako funguje 30-dňová záruka vrátenia peňazí?",         a:"Ak v priebehu prvých 30 dní zistíš, že NeoMe nie je pre teba, kontaktuj nás a vrátime ti celú sumu. Žiadne otázky." },
                  { q:"Môžem zrušiť predplatné kedykoľvek?",                 a:"Samozrejme. Predplatné môžeš zrušiť kedykoľvek v nastaveniach aplikácie. Prístup ti zostane do konca plateného obdobia." },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl px-6 border"
                    style={{ borderColor:`${SANDY}50`, backgroundColor:"white" }}>
                    <AccordionTrigger className="font-light text-sm hover:no-underline py-5 text-left"
                      style={{ fontFamily: DMS, color: DEEP }}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed pb-5"
                      style={{ fontFamily: DMS, color:`${DEEP}72` }}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            §16  FINAL CTA — full-bleed yoga mat + GLASS §8
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative py-40 md:py-52 px-6 md:px-16 overflow-hidden"
          style={{ backgroundImage:`url(${lifestyleYogaMat})`, backgroundSize:"cover", backgroundPosition:"center 40%" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor:`${DEEP}C8` }} />

          <div className="relative z-10 container mx-auto max-w-3xl text-center">
            <motion.div
              className="inline-block w-full rounded-3xl p-12 md:p-20"
              style={glass(0.07, 28, 0.12)}
              initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
              viewport={vp} transition={{ duration:1.05, ease:[0.16,1,0.3,1] }}
            >
              <div style={{ width:"32px", height:"1px", backgroundColor: SANDY, margin:"0 auto 28px" }} />
              <p style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.28em", textTransform:"uppercase", color: SANDY, marginBottom:"20px" }}>
                Začni dnes
              </p>
              <h2 style={{ fontFamily: PF, fontWeight:500, fontSize:"clamp(38px,6vw,76px)", lineHeight:1.1, color:"white", marginBottom:"20px" }}>
                Tvoje prvých 7 dní<br /><em style={{ color: SANDY }}>je zadarmo.</em>
              </h2>
              <p className="mb-12 text-sm leading-relaxed" style={{ fontFamily: DMS, color:"rgba(255,255,255,0.50)" }}>
                Žiadna platobná karta. Žiadne záväzky.<br />Len ty a 15 minút pre seba.
              </p>
              <Button asChild size="lg" className="rounded-full px-14 py-6 text-base font-normal border-0 hover:opacity-88"
                style={{ backgroundColor: SAGE, color:"white", fontFamily: DMS }}>
                <Link to="/checkout">Začni teraz <ArrowRight size={17} className="ml-2" /></Link>
              </Button>
              <p className="mt-8" style={{ fontFamily: DMS, fontSize:"11px", letterSpacing:"0.14em", color:"rgba(255,255,255,0.28)" }}>
                Pripoj sa k 4 000+ žien, ktoré sa už rozhodli.
              </p>
              <div style={{ width:"32px", height:"1px", backgroundColor: SANDY, margin:"28px auto 0" }} />
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════════ */}
        <footer className="py-12 px-6 md:px-16 bg-white border-t" style={{ borderColor:`${SANDY}38` }}>
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div style={{ fontFamily: PF, fontWeight:500, fontSize:"22px", color: DEEP }}>
              Neo<span style={{ color: SAGE }}>Me</span>
            </div>
            <div className="flex gap-8 text-xs" style={{ fontFamily: DMS, color:`${DEEP}60` }}>
              <a href="#" className="hover:opacity-100 opacity-65 transition-opacity">Ochrana údajov</a>
              <a href="#" className="hover:opacity-100 opacity-65 transition-opacity">Obchodné podmienky</a>
              <Link to="/kontakt" className="hover:opacity-100 opacity-65 transition-opacity">Kontakt</Link>
            </div>
            <div style={{ fontFamily: DMS, fontSize:"12px", color:`${DEEP}40` }}>
              © 2025 NeoMe. Všetky práva vyhradené.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default HomeNew;
