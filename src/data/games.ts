/*
 * THE LIBRARY
 * -----------
 * This is the single place to manage the games on the site.
 * To list a new game, copy one entry below and edit the fields:
 *   status: "live"  -> shows a Play button and links to your game URL
 *   status: "soon"  -> shows as "In the workshop" with no link
 *   cover           -> optional image path in /public/images
 *   poster          -> gradient shown when there is no cover image yet
 * New categories appear in the filter bar automatically via `categories`.
 */

export type GameStatus = "live" | "soon";

export type Game = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  status: GameStatus;
  href?: string;
  cover?: string;
  coverAlt?: string;
  poster: string;
};

export const categories = ["All games", "Racing", "Story", "Simulation", "Puzzle"] as const;

export const games: Game[] = [
  {
    id: "road-rash-kerala",
    title: "Road Rash Kerala",
    tagline: "Twist the throttle through God's Own Country.",
    description:
      "A playful arcade racer set on the roads of Kerala. Lean into the chaos, chase the clock, and see how long you keep the rubber side down.",
    category: "Racing",
    tags: ["Arcade", "Fast", "Retro"],
    status: "live",
    href: "https://rodrashkerala.netlify.app",
    cover: "/images/road-rash-kerala.jpg",
    coverAlt: "A motorcycle leaning into a curve through green Kerala hills",
    poster: "linear-gradient(135deg, #123b34, #0d2226 55%, #5b2a17)",
  },
  {
    id: "veedu",
    title: "Veedu",
    tagline: "Lend a hand in a Kerala home, one story at a time.",
    description:
      "A story simulation inside a traditional Kerala nalukettu. Do the housework, answer the quizzes, and let the family story unfold in Malayalam.",
    category: "Story",
    tags: ["Narrative", "Malayalam", "Cozy"],
    status: "live",
    href: "https://veedu-simulator.netlify.app",
    cover: "/images/veedu-house.jpg",
    coverAlt: "Sunlight falling on the carved pillars of a Kerala courtyard",
    poster: "linear-gradient(135deg, #4a3316, #241a0c 55%, #0f2418)",
  },
  {
    id: "monsoon-run",
    title: "Monsoon Run",
    tagline: "Outrun the rain. Or dance in it.",
    description:
      "A one-button endless runner through flooded lanes, tea shops and waving coconut palms. Being made right now in the workshop.",
    category: "Simulation",
    tags: ["Endless", "One-button", "Rainy"],
    status: "soon",
    poster: "linear-gradient(135deg, #14314a, #0b1a2b 55%, #2c4a3c)",
  },
  {
    id: "katha-kitchen",
    title: "Katha Kitchen",
    tagline: "Serve the story, one plate at a time.",
    description:
      "A cozy cooking game about a small eatery where every customer brings a story. Recipes, timing and a little gossip.",
    category: "Simulation",
    tags: ["Cozy", "Cooking", "Time management"],
    status: "soon",
    poster: "linear-gradient(135deg, #4a2418, #24140c 55%, #14413a)",
  },
  {
    id: "nalukettu-puzzle",
    title: "Nalukettu Puzzle",
    tagline: "Tiles, teak and tricky little corners.",
    description:
      "A calm tile puzzle about laying out the perfect Kerala courtyard. No timers, no pressure, just good geometry.",
    category: "Puzzle",
    tags: ["Puzzle", "Calm", "No timers"],
    status: "soon",
    poster: "linear-gradient(135deg, #1d2f4a, #0f1a2b 55%, #3d2a4a)",
  },
  {
    id: "kadal-kaattu",
    title: "Kadal Kaattu",
    tagline: "Sail the coast, chase the wind.",
    description:
      "A breezy little sailing racer along the Kerala coast. Read the wind, catch the gusts, beat your own best line.",
    category: "Racing",
    tags: ["Sailing", "Wind", "Chill"],
    status: "soon",
    poster: "linear-gradient(135deg, #0f3d4a, #08202b 55%, #4a3a14)",
  },
];

export const liveGames = games.filter((game) => game.status === "live");

export const stats = [
  { value: "2", label: "Games live now" },
  { value: "4", label: "In the workshop" },
  { value: "0", label: "Downloads needed" },
  { value: "Free", label: "Today, tomorrow" },
];
