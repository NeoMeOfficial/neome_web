import { useEffect, useRef, useState } from "react";
import teloImg from "@/assets/Telo_app.webp";
import stravaImg from "@/assets/Strava_app.webp";
import myselImg from "@/assets/Mysel_app.webp";
import komunityImg from "@/assets/Komunity_app.webp";

const PILLARS = [
  {
    n: "1",
    name: "Telo",
    tag: "15 minút denne",
    body: "Krátke tréningy pre každú fázu. Po pôrode, silnejšie telo, flexibilita. Bez vybavenia.",
    contains: "Cvičenie · Programy",
    img: teloImg,
  },
  {
    n: "2",
    name: "Výživa",
    tag: "Jedlá, ktoré sú skutočné",
    body: "Rýchle recepty pre teba aj rodinu. Plán na týždeň, nákupný zoznam, bez stresu.",
    contains: "Recepty · Jedálniček",
    img: stravaImg,
  },
  {
    n: "3",
    name: "Myseľ",
    tag: "5 minút pre pokoj",
    body: "Dýchanie, meditácie, mindfulness. Pre tvoje ráno, obed, pred spaním.",
    contains: "Meditácia",
    img: myselImg,
  },
  {
    n: "4",
    name: "Komunita",
    tag: "Nie si v tom sama",
    body: "4 000+ žien, ktoré to žijú rovnako. Zdieľanie, motivácia, priateľstvá.",
    contains: "Komunita",
    img: komunityImg,
  },
];

export const Pillars = () => {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const idx = Math.min(
        PILLARS.length - 1,
        Math.max(0, Math.floor(progress * PILLARS.length))
      );
      setActive(idx);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const cur = PILLARS[active];

  return (
    <section className="section section--pillars" id="piliere">
      <div className="container-ed">
        <div className="section-head section-head--center">
          <div>
            <p className="eyebrow">Čo nájdeš v aplikácii</p>
            <h2 className="section-title">
              Telo. Výživa. Myseľ. <em>Komunita.</em>
            </h2>
          </div>
          <p className="section-lead">
            Všetko, čo potrebuješ, aby si sa cítila skvele — v jednej aplikácii.
          </p>
        </div>
      </div>

      <div className="pillars-scroll" ref={trackRef}>
        <div className="pillars-sticky">
          <div className="container-ed">
            <div className="pillars-grid">
              <div className="pillars-list">
                {PILLARS.map((p, i) => (
                  <button
                    key={p.n}
                    className={"pillar-row" + (i === active ? " pillar-row--active" : "")}
                    onClick={() => setActive(i)}
                  >
                    <div className="pillar-n">{p.n}</div>
                    <div className="pillar-mid">
                      <div className="pillar-name">{p.name}</div>
                      <div className="pillar-tag">{p.tag}</div>
                      {i === active && (
                        <div className="pillar-expand">
                          <p className="pillar-body">{p.body}</p>
                          <p className="pillar-contains">Obsahuje: {p.contains}</p>
                        </div>
                      )}
                    </div>
                    <div className="pillar-chev">{i === active ? "−" : "+"}</div>
                  </button>
                ))}
              </div>
              <div className="pillars-phone">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div
                    className="phone-screen"
                    style={{ backgroundImage: `url(${cur.img})` }}
                  >
                    <div className="phone-label">{cur.name}</div>
                  </div>
                </div>
                <p className="phone-caption">
                  Ukážka obrazovky <em>{cur.name}</em> v aplikácii
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-ed">
        <div className="pillars-bonus">
          <div className="bonus-label">A navyše, súčasťou NeoMe</div>
          <div className="bonus-items">
            <article className="bonus-item">
              <span className="bonus-mark">✦</span>
              <div className="bonus-h">Sledovanie cyklu</div>
              <div className="bonus-b">Poznaj svoje telo. Odporúčania pre každú fázu cyklu.</div>
            </article>
            <article className="bonus-item">
              <span className="bonus-mark">✦</span>
              <div className="bonus-h">Denník návykov</div>
              <div className="bonus-b">Buduj zdravé návyky krok po kroku. Sleduj, čo sa mení.</div>
            </article>
            <article className="bonus-item">
              <span className="bonus-mark">✦</span>
              <div className="bonus-h">Jedálniček</div>
              <div className="bonus-b">
                Stravovacie plány na celý týždeň. Pripravené nákupné zoznamy, jednoduché recepty.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
