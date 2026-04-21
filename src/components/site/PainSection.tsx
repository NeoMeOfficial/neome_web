const ROWS = [
  {
    title: "Chcem cvičiť, ale čas jednoducho nie je.",
    body: "Medzi deťmi, prácou a domácnosťou si na seba zabudla. Každý deň.",
  },
  {
    title: "Začínam každý pondelok odznova.",
    body: "Nič nevydrží, lebo nič nebolo navrhnuté pre tvoj skutočný, zaneprázdnený život.",
  },
  {
    title: "O všetkých sa starám. Seba nechávam na posled.",
    body: "Si posledná na vlastnom zozname. A to sa dá zmeniť.",
  },
];

export const PainSection = () => (
  <section className="section section--pain">
    <div className="container-ed">
      <p className="eyebrow">Poznáš ten pocit?</p>
      <div className="pain-wrap">
        <p className="pain-pull">
          <em>Poznáš to.</em><br />Povedala si si to už aj dnes.
        </p>
        <div className="pain-list">
          {ROWS.map((r) => (
            <div className="pain-row" key={r.title}>
              <h3 className="pain-title">{r.title}</h3>
              <p className="pain-body">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="pain-closer">
          NeoMe vzniklo presne pre teba. Nie pre dokonalú verziu teba — pre teba dnes.
        </p>
      </div>
    </div>
  </section>
);
