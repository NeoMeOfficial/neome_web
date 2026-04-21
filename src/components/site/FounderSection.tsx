import founderImg from "@/assets/founder-gabi.png";

export const FounderSection = () => (
  <section className="section section--founder" id="pribeh">
    <div className="container-ed">
      <div className="founder-grid">
      <div className="founder-photo">
        <img src={founderImg} alt="Gabi, zakladateľka NeoMe" />
        <div className="founder-badge glass-light">
          <div className="badge-num">15+</div>
          <div className="badge-l">rokov v ženskom zdraví</div>
        </div>
      </div>
      <div className="founder-text">
        <p className="eyebrow">Príbeh zakladateľky</p>
        <h2 className="section-title">
          <em>„Pohyb je liek.</em>
          <br />
          Máme ho všetci nadosah.&rdquo;
        </h2>
        <p className="founder-lead">
          15 rokov tanca, jogy a tréningu. Pódiá Tommy Hilfiger, Avicii, Adidas. Potom prišlo
          materstvo — a všetko sa prepísalo.
        </p>
        <p className="founder-lead">
          Telo po pôrode, ktoré som nepoznala. Tri roky, kým som si ho postavila naspäť — po
          minútach, nie po hodinách. NeoMe je pre ženy, ktoré vedia, o čom hovorím.
        </p>
        <p className="founder-sig">— Gabi</p>
      </div>
      </div>
    </div>
  </section>
);
