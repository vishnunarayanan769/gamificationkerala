import { ArrowUpRight } from "lucide-react";
import { games } from "../data/games";
import { Brand } from "./Brand";

export function Footer() {
  const playable = games.filter((game) => game.status === "live");

  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-top">
          <div className="footer-about">
            <a href="#top" aria-label="gamiFICATION, back to top">
              <Brand compact />
            </a>
            <p>A little library of handmade browser games for the big kid in all of us.</p>
          </div>
          <div className="footer-links-group">
            <div className="footer-links">
              <span>Explore</span>
              <a href="#library">The library</a>
              <a href="#featured">Featured games</a>
              <a href="#why-play">Why play</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQs</a>
            </div>
            <div className="footer-links">
              <span>Play</span>
              {playable.map((game) => (
                <a key={game.id} href={game.href} target="_blank" rel="noopener noreferrer">
                  {game.title} <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} gamiFICATION. Made for the fun of it.</span>
          <a href="#top">
            Back to top <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
