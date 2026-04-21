import bg from "@/assets/lifestyle-yoga-pose.jpg";

export const LifestyleQuote = () => (
  <section className="section section--quote">
    <div className="quote-bg" style={{ backgroundImage: `url(${bg})` }} />
    <div className="quote-scrim" />
    <div className="container-ed quote-wrap">
      <div className="quote-card">
        <div className="quote-mark">&ldquo;</div>
        <p className="quote-text">
          <em>Pohyb nie je trest za to, čo si zjedla. Je to dar, ktorý dávaš svojmu telu.</em>
        </p>
        <div className="quote-attr">
          <span className="quote-name">Gabi Drobová</span>
          <span className="quote-role">zakladateľka NeoMe</span>
        </div>
      </div>
    </div>
  </section>
);
