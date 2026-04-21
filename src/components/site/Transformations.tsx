import martina from "@/assets/testimonial-martina.jpg";
import lucia from "@/assets/testimonial-lucia.jpg";

const ITEMS = [
  {
    q: "Nikdy som neverila, že 15 minút denne môže niečo zmeniť. Po 8 týždňoch som zistila, že môže zmeniť všetko.",
    name: "Martina, 34",
    city: "Bratislava",
    tag: "–8 kg · Viac energie",
    img: martina,
  },
  {
    q: "Po pôrode som sa cítila stratená v cudzom tele. NeoMe mi vrátilo mňa — pohodu, sebaúctu a radosť z pohybu.",
    name: "Lucia, 29",
    city: "Košice",
    tag: "Lepší spánok · Viac sily",
    img: lucia,
  },
];

export const Transformations = () => (
  <section className="section section--transforms" id="transformacie">
    <div className="container-ed">
      <p className="eyebrow center">Skutočné výsledky</p>
      <h2 className="section-title center">
        Skutočné ženy. <em>Skutočné zmeny.</em>
      </h2>
      <div className="transforms">
        {ITEMS.map((t) => (
          <article className="transform" key={t.name}>
            <div className="transform-img" style={{ backgroundImage: `url(${t.img})` }}>
              <div className="transform-tag">{t.tag}</div>
            </div>
            <div className="transform-body">
              <p className="transform-q">&ldquo;{t.q}&rdquo;</p>
              <div className="transform-by">
                <div className="transform-name">{t.name}</div>
                <div className="transform-city">{t.city}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
