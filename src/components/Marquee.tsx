import { games } from "../data/games";
import { Reveal } from "./Reveal";

const marqueeItems = games.map((game) => ({
  title: game.title,
  category: game.category,
  status: game.status,
}));

export function SocialProof() {
  return (
    <section className="marquee-section" id="marquee" aria-labelledby="marquee-title">
      <div className="section-shell">
        <Reveal className="marquee-heading">
          <span className="live-indicator" aria-hidden="true" />
          <span className="eyebrow" id="marquee-title">
            On the shelf today
          </span>
          <p>
            {marqueeItems.length} games in the library. Two are playable right now, no download, no
            sign-up, no catch.
          </p>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeItems.map((item) => (
                <span className="marquee-item" key={`${copy}-${item.title}`}>
                  <strong>{item.title}</strong>
                  <em>{item.category}</em>
                  <i className={item.status === "live" ? "dot dot-live" : "dot"} />
                  {item.status === "live" ? "Playable" : "In the workshop"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
