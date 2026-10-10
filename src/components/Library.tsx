import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { categories, games, type Game } from "../data/games";
import { Reveal } from "./Reveal";

function GameCard({ game }: { game: Game }) {
  const isLive = game.status === "live";
  const label = `0${games.findIndex((entry) => entry.id === game.id) + 1}`;

  if (isLive) {
    return (
      <article className="game-card">
        <a
          className="game-card-art"
          href={game.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Play ${game.title} (opens in a new tab)`}
        >
          {game.cover ? <img src={game.cover} alt={game.coverAlt ?? ""} loading="lazy" /> : null}
          <span className="status-badge status-live">
            <span className="status-dot" aria-hidden="true" />
            Playable now
          </span>
        </a>
        <div className="game-card-body">
          <div className="game-card-top">
            <span className="game-card-index">{label} /</span>
            <span className="game-card-category">{game.category}</span>
          </div>
          <h3>{game.title}</h3>
          <p>{game.tagline}</p>
          <ul className="card-tags">
            {game.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a className="text-link" href={game.href} target="_blank" rel="noopener noreferrer">
            Play now <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="game-card game-card-soon">
      <div className="game-card-art game-card-poster" style={{ background: game.poster }}>
        <span className="poster-mark" aria-hidden="true">
          {label}
        </span>
        <span className="status-badge status-soon">In the workshop</span>
      </div>
      <div className="game-card-body">
        <div className="game-card-top">
          <span className="game-card-index">{label} /</span>
          <span className="game-card-category">{game.category}</span>
        </div>
        <h3>{game.title}</h3>
        <p>{game.tagline}</p>
        <ul className="card-tags">
          {game.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className="text-link text-link-muted">Not released yet</span>
      </div>
    </article>
  );
}

export function Library() {
  const [activeCategory, setActiveCategory] = useState<string>("All games");
  const [query, setQuery] = useState("");

  const visibleGames = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return games.filter((game) => {
      const matchesCategory = activeCategory === "All games" || game.category === activeCategory;
      const matchesQuery =
        needle.length === 0 ||
        game.title.toLowerCase().includes(needle) ||
        game.tagline.toLowerCase().includes(needle) ||
        game.description.toLowerCase().includes(needle) ||
        game.tags.some((tag) => tag.toLowerCase().includes(needle));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const playableCount = visibleGames.filter((game) => game.status === "live").length;

  return (
    <section className="library-section section-pad" id="library" aria-labelledby="library-title">
      <div className="section-shell">
        <Reveal className="section-heading library-heading">
          <span className="eyebrow">The library</span>
          <h2 id="library-title">Every game, one shelf.</h2>
          <p>Search the shelf, or filter by the kind of fun you're after.</p>
        </Reveal>

        <Reveal className="library-toolbar" delay={0.08}>
          <div className="search-field">
            <Search size={18} strokeWidth={2} aria-hidden="true" />
            <label className="sr-only" htmlFor="game-search">
              Search games by name, category or tag
            </label>
            <input
              id="game-search"
              type="search"
              placeholder="Search games, categories, tags..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query ? (
              <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
                <X size={16} strokeWidth={2.2} aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className="chips" role="group" aria-label="Filter games by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`chip ${activeCategory === category ? "chip-active" : ""}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="library-count" role="status" aria-live="polite">
          {visibleGames.length === 0
            ? "No games match that search yet."
            : `Showing ${visibleGames.length} game${visibleGames.length === 1 ? "" : "s"} · ${playableCount} playable now`}
        </p>

        {visibleGames.length === 0 ? (
          <div className="library-empty">
            <p>Nothing on that shelf yet. Try another word, or clear the filters.</p>
            <button
              type="button"
              className="text-link"
              onClick={() => {
                setQuery("");
                setActiveCategory("All games");
              }}
            >
              Reset the library
            </button>
          </div>
        ) : (
          <div className="library-grid">
            {visibleGames.map((game, index) => (
              <Reveal key={game.id} delay={index * 0.06}>
                <GameCard game={game} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
