import monogram from "@/assets/brand/neome-monogram-on-cream.png";

export const NavHeader = () => (
  <header className="nav-pill">
    <a href="#" className="nav-logo" aria-label="NeoMe — domov">
      <img src={monogram} alt="" className="nav-mark" />
      <span className="nav-wordmark">Neo<em>Me</em></span>
    </a>
    <nav className="nav-links">
      <a href="#" className="active">Domov</a>
      <a href="#piliere">Aplikácia</a>
      <a href="#programy">Programy</a>
      <a href="#hodnotenia">Hodnotenia</a>
      <a href="#cena">Cenník</a>
      <a href="#pribeh">O Gabi</a>
    </nav>
    <a href="#cena" className="btn btn-primary nav-cta">Vyskúšaj NeoMe</a>
  </header>
);
