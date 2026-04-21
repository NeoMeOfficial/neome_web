const REVIEWS = [
  { name: "Lenka", txt: "Gabi je úžasná a jej prístup ma motivuje každý deň. Programy sú premyslené, cvičenia krátke a účinné." },
  { name: "Janka", txt: "Konečne som našla aplikáciu, ktorá mi sadne. Recepty sú jednoduché, cvičenia krátke a komunita naozaj podporná." },
  { name: "Monika", txt: "Po pôrode som sa bála cvičiť. Postpartum program mi dal istotu, že to robím správne a bezpečne." },
  { name: "Andrea", txt: "Páči sa mi, že všetko je v slovenčine a prispôsobené nám ženám. 15 minút denne naozaj dokáže veľa." },
  { name: "Lucka", txt: "Meditácie mi pomohli zvládnuť stres v práci. Krátke, ale účinné. Vraciam sa k nim každý deň." },
  { name: "Klaudia", txt: "Recepty sú výborné, moja rodina si pochvaľuje. Jedálniček mi šetrí hodiny premýšľania." },
  { name: "Sidónia", txt: "Cyklus tracking je niečo, čo mi chýbalo. Konečne rozumiem svojmu telu a plánujem podľa toho." },
];

export const GoogleReviews = () => (
  <section className="section section--reviews" id="hodnotenia">
    <div className="container-ed">
      <div className="reviews-head">
        <p className="eyebrow">Google hodnotenia</p>
        <h2 className="section-title">
          4 000+ žien. <em>★ 4,9 zo 230+ recenzií.</em>
        </h2>
        <div className="reviews-google">
          <span className="gstar">★ ★ ★ ★ ★</span>
          <span className="gtext">Google · overené hodnotenia</span>
        </div>
      </div>
    </div>
    <div className="reviews-marquee">
      <div className="reviews-track">
        {[...REVIEWS, ...REVIEWS].map((r, i) => (
          <article className="review-card" key={i}>
            <div className="review-stars">★ ★ ★ ★ ★</div>
            <p className="review-txt">&ldquo;{r.txt}&rdquo;</p>
            <div className="review-name">— {r.name}</div>
          </article>
        ))}
      </div>
    </div>
    <div className="container-ed">
      <div className="reviews-foot">
        <a href="#" className="link-arrow">Čítaj všetky na Google →</a>
      </div>
    </div>
  </section>
);
