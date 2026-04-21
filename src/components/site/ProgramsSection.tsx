import postpartumImg from "@/assets/postpartum-program.jpg";
import bodyformingImg from "@/assets/bodyforming-program.jpg";
import elasticbandsImg from "@/assets/elasticbands-program.jpg";
import strongsexyImg from "@/assets/strongsexy-program.jpg";

const PROGRAMS = [
  {
    level: "Level 1",
    duration: "8 týždňov",
    title: "Postpartum",
    desc: "Návrat k pohybu po pôrode.",
    img: postpartumImg,
  },
  {
    level: "Level 2",
    duration: "6 týždňov",
    title: "BodyForming",
    desc: "Formovanie s vlastnou váhou.",
    img: bodyformingImg,
  },
  {
    level: "Level 1",
    duration: "4 týždne",
    title: "Elastické pásy",
    desc: "Šetrný silový tréning doma.",
    img: elasticbandsImg,
  },
  {
    level: "Level 3",
    duration: "8 týždňov",
    title: "Strong & Sexy",
    desc: "Pokročilá práca s telom a mysľou. Pre ženy, ktoré chcú viac.",
    img: strongsexyImg,
  },
];

export const ProgramsSection = () => (
  <section className="section section--programs" id="programy">
    <div className="container-ed">
      <div className="programs-head">
        <div>
          <p className="eyebrow">Programy</p>
          <h2 className="section-title">
            Tvoj rytmus, <em>tvoje tempo.</em>
          </h2>
        </div>
        <p className="programs-lead">
          Programy šité na tvoju životnú situáciu — či sa práve vraciaš po pôrode, alebo si pripravená na náročnejšie tréningy.
        </p>
      </div>
      <div className="programs-grid">
        {PROGRAMS.map((p) => (
          <a href="#" className="program-card" key={p.title}>
            <img src={p.img} alt={p.title} className="program-img" />
            <div className="program-scrim" aria-hidden />
            <div className="program-copy">
              <p className="program-level">{p.level} · {p.duration}</p>
              <h3 className="program-title">{p.title}</h3>
              <p className="program-desc">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
