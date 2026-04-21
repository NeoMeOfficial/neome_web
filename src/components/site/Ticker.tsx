const WORDS = [
  "NeoMe", "15 minút denne", "Telo", "Myseľ", "Výživa", "Komunita",
  "Silná", "Pokojná", "Sebavedomá", "Pre teba dnes", "Bez viny", "Bez extrémov", "Skutočná",
];

export const Ticker = () => {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((w, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span className="t-word">{w}</span>
            <span className="t-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
