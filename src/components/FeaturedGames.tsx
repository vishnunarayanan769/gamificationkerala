import { ArrowUpRight } from "lucide-react";
import { liveGames } from "../data/games";
import { Reveal } from "./Reveal";

export function FeaturedGames() {
  return (
    <section className="featured-section section-pad" id="featured" aria-labelledby="featured-title">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="eyebrow">Playable right now</span>
          <h2 id="featured-title">Start with these two.</h2>
          <p>
            Both are live in your browser. One is for the speed demons, the other is for the quiet
            hours.
          </p>
        </Reveal>

        <div className="featured-grid">
          {liveGames.map((game, index) => (
            <Reveal className="game" key={game.id} delay={index * 0.14}>
              <a
                className="game-art"
                href={game.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play ${game.title} (opens in a new tab)`}
              >
                {game.cover ? <img src={game.cover} alt={game.coverAlt ?? ""} loading="lazy" /> : null}
                <span className="game-art-action" aria-hidden="true">
                  <ArrowUpRight size={25} strokeWidth={1.8} />
                </span>
              </a>
              <div className="game-details">
                <div className="game-meta">
                  <span>0{index + 1} / {game.category}</span>
                  <span>Play in browser</span>
                </div>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <a className="text-link" href={game.href} target="_blank" rel="noopener noreferrer">
                  Play {game.title} <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
