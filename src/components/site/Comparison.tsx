import { useState } from "react";

const COMPARISONS = [
  {
    key: "gym",
    tab: "NeoMe vs. gym",
    rows: [
      "Šetri čas — nestrácaj čas cestovaním.",
      "Cvič z domu — bez hanby a porovnávania.",
      "Časová flexibilita pre rodinný rozvrh.",
      "Bez mesačných poplatkov.",
    ],
  },
  {
    key: "trainer",
    tab: "NeoMe vs. osobný tréner",
    rows: [
      "Programy od profesionálky s 15-ročnou praxou.",
      "Zlomok ceny osobného trénera.",
      "K dispozícii 24/7, nie podľa kalendára trénera.",
      "Prispôsobené špecificky ženám a mamičkám.",
    ],
  },
  {
    key: "apps",
    tab: "NeoMe vs. iné aplikácie",
    rows: [
      "Pre ženy a mamy — nie generický fitness.",
      "Telo + myseľ + výživa + komunita spolu.",
      "Celé v slovenčine.",
      "Tvoj cyklus je súčasť programu, nie extra.",
    ],
  },
];

export const Comparison = () => {
  const [active, setActive] = useState(2);
  const current = COMPARISONS[active];

  return (
    <section className="section section--comparison" id="porovnanie">
      <div className="container-ed">
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--sandy">Prečo NeoMe</p>
          <h2 className="section-title section-title--light">
            Prečo ženy volia <em>NeoMe.</em>
          </h2>
        </div>

        <div className="compare-tabs" role="tablist">
          {COMPARISONS.map((c, i) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === i}
              className={`compare-tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {c.tab}
            </button>
          ))}
        </div>

        <ol className="compare-rows">
          {current.rows.map((r, i) => (
            <li className="compare-row" key={i}>
              <span className="compare-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="compare-text">{r}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
