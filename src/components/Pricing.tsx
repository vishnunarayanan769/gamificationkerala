import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section className="pricing-section section-pad" id="pricing" aria-labelledby="pricing-title">
      <div className="section-shell pricing-inner">
        <Reveal className="pricing-copy">
          <span className="eyebrow">The price of a good time</span>
          <h2 id="pricing-title">
            A library of fun.
            <br />
            Zero checkout.
          </h2>
          <p>Every playable game in the library is free in your browser, right now.</p>
          <a className="text-link" href="#library">
            Find your game <ArrowRight size={19} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="pricing-art" delay={0.15}>
          <span className="pricing-art-top">Library card</span>
          <strong>
            FREE<span>.</span>
          </strong>
          <span className="pricing-art-bottom">No strings. Just play.</span>
        </Reveal>
      </div>
    </section>
  );
}
