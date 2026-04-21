const STEPS = [
  {
    n: "01",
    h: "Povedz nám, kde si",
    b: "Pár otázok o tvojej životnej fáze a cieli. Dostaneš program presne pre teba, nie všeobecný plán.",
  },
  {
    n: "02",
    h: "15 minút, kdekoľvek",
    b: "Cvičenie, recept, meditácia. Pred prácou, cez obed, keď spí dieťa. Bez vybavenia, bez prípravy.",
  },
  {
    n: "03",
    h: "Cíť rozdiel",
    b: "Prvý týždeň: pokoj v ramenách, lepší spánok. Štvrtý týždeň: silnejšie telo, jasnejšia hlava.",
  },
];

export const HowItWorks = () => (
  <section className="section section--how" id="ako">
    <div className="container-ed">
      <div className="section-head section-head--center">
        <div>
          <p className="eyebrow">Ako to funguje</p>
          <h2 className="section-title">
            Tri kroky späť <em>k sebe.</em>
          </h2>
        </div>
      </div>
      <div className="steps-grid">
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-rule" />
            <h3 className="step-h">{s.h}</h3>
            <p className="step-b">{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
