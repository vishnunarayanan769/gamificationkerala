import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta-glow" aria-hidden="true" />
      <div className="section-shell final-cta-inner">
        <Reveal>
          <span className="eyebrow">Your next break starts here</span>
          <h2 id="final-cta-title">
            Less scrolling.
            <br />
            <em>More playing.</em>
          </h2>
          <p>The shelf is open. Which world will you try first?</p>
          <a className="button button-primary" href="#library">
            Browse the library <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
