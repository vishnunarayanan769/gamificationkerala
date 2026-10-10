import { Reveal } from "./Reveal";

const features = [
  {
    number: "01",
    title: "Straight to the good part.",
    description:
      "A browser and a little curiosity are all you need. Open a game and get right to playing.",
  },
  {
    number: "02",
    title: "Pick your kind of escape.",
    description:
      "Chase the thrill of the road, or take your time in a world full of little stories.",
  },
  {
    number: "03",
    title: "Small, with a soul.",
    description:
      "Independent games with local flavor, playful details, and personality in every pixel.",
  },
];

export function Features() {
  return (
    <section className="features-section section-pad" id="why-play" aria-labelledby="features-title">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="eyebrow">Why play here</span>
          <h2 id="features-title">All play. No preamble.</h2>
          <p>A growing collection made to turn an ordinary moment into a good one.</p>
        </Reveal>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Reveal className="feature" key={feature.number} delay={index * 0.11}>
              <span className="feature-number">{feature.number} /</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
