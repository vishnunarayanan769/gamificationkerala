import { Benefits } from "./components/Benefits";
import { Faq } from "./components/Faq";
import { FeaturedGames } from "./components/FeaturedGames";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Library } from "./components/Library";
import { Features } from "./components/Features";
import { PlayerNotes } from "./components/PlayerNotes";
import { Pricing } from "./components/Pricing";
import { SocialProof } from "./components/Marquee";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <FeaturedGames />
        <Library />
        <Features />
        <Benefits />
        <PlayerNotes />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
