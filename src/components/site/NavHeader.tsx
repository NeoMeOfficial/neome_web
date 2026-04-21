import wordmark from "@/assets/brand/neome-wordmark-on-cream.png";

export const NavHeader = () => (
  <header className="nav-pill">
    <a href="#" className="nav-logo" aria-label="NeoMe — domov">
      <img src={wordmark} alt="NeoMe" className="nav-wordmark-img" />
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
