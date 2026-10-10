import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section className="benefits-section section-pad" aria-labelledby="benefits-title">
      <div className="section-shell benefits-inner">
        <Reveal className="benefits-heading">
          <span className="eyebrow">The good kind of detour</span>
          <h2 id="benefits-title">Take a break that actually feels like one.</h2>
        </Reveal>
        <Reveal className="benefits-copy" delay={0.15}>
          <p>
            Whether you have five minutes or a whole afternoon, there's no perfect way to play.
            Follow the fun and let the rest of the internet wait.
          </p>
          <div className="benefits-signoff">
            <span>Come as you are.</span>
            <span>Stay as long as you like.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
