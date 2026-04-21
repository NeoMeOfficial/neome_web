import heroYoga from "@/assets/hero-yoga.jpg";

const Stat = ({ n, l }: { n: string; l: string }) => (
  <div className="stat">
    <div className="stat-n">{n}</div>
    <div className="stat-l">{l}</div>
  </div>
);

export const Hero = () => (
  <section className="hero">
    <div className="hero-media">
      <img src={heroYoga} alt="Žena pri rannej joge" />
      <div className="hero-scrim" />
    </div>
    <div className="hero-content">
      <p className="eyebrow eyebrow--sandy">Wellbeing pre ženy</p>
      <h1 className="hero-title">
        Máš 15 minút?<br />
        <em>Stačí na to, aby si začala meniť.</em>
      </h1>
      <p className="hero-sub">
        Cvičenie, výživa, myseľ a komunita — pre ženy, ktoré nemajú čas dokonalých rutín.
        Pre tvoj skutočný deň, nie ideálny.
      </p>
      <div className="hero-ctas">
        <a className="btn btn-primary" href="#cena">Vyskúšaj NeoMe →</a>
        <a className="btn btn-ghost-dark" href="#programy">Pozri si programy</a>
      </div>
      <div className="hero-stats">
        <Stat n="4 000+" l="žien v komunite" />
        <div className="stat-div" />
        <Stat n="★ 4.9" l="230+ recenzií" />
        <div className="stat-div" />
        <Stat n="30 dní" l="záruka vrátenia peňazí" />
      </div>
    </div>
  </section>
);
