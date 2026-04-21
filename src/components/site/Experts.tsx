const EXPERTS = [
  {
    name: "PhDr. Magdaléna Csolti",
    role: "Fyzioterapeutka, Auramedica",
    q: "Postpartum program je presne to, čo mamy po pôrode potrebujú — bezpečne, postupne, s rešpektom k ich telu.",
    initials: "MC",
  },
  {
    name: "Mgr. Petra Horváthová",
    role: "Fyzioterapeutka, špecialistka na panvové dno",
    q: "Pohyb, výživa a myseľ — spolu. Presne taký prístup hľadajú moje pacientky.",
    initials: "PH",
  },
  {
    name: "PhDr. Lucia Kováčová",
    role: "Psychologička, špecialistka na materstvo",
    q: "Krátke mentálne cvičenia majú väčší dopad, než si ženy myslia. NeoMe im dáva nástroje, ktoré reálne používajú.",
    initials: "LK",
  },
];

export const Experts = () => (
  <section className="section section--experts" id="odbornicky">
    <div className="container-ed">
      <div className="section-head section-head--center">
        <div>
          <p className="eyebrow">Odporúčané odborníčkami</p>
          <h2 className="section-title">
            <em>Odporúčané.</em>
          </h2>
          <p className="section-lead">
            Názory odborníkov, ktorí ženskému zdraviu rozumejú najviac.
          </p>
        </div>
      </div>
      <div className="experts-grid">
        {EXPERTS.map((e) => (
          <article className="expert-card" key={e.initials}>
            <div className="expert-mono">{e.initials}</div>
            <p className="expert-q">&bdquo;{e.q}&ldquo;</p>
            <div className="expert-by">
              <div className="expert-name">{e.name}</div>
              <div className="expert-role">{e.role}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
