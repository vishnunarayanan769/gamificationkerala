import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { stats } from "../data/games";
import { ease } from "./Reveal";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroTransition = { duration: reduceMotion ? 0 : 0.9, ease };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero-image"
        aria-hidden="true"
        initial={reduceMotion ? false : { scale: 1.07, opacity: 0.65 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.55, ease }}
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="section-shell hero-inner">
        <div className="hero-copy">
          <motion.h1
            id="hero-title"
            className="hero-brand"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: reduceMotion ? 0 : 0.12 }}
          >
            gami<span>FICATION</span>
            <i>.</i>
          </motion.h1>
          <motion.p
            className="hero-line"
            initial={reduceMotion ? false : { opacity: 0, y: 23 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: reduceMotion ? 0 : 0.24 }}
          >
            A library of small games. Big detours.
          </motion.p>
          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: reduceMotion ? 0 : 0.36 }}
          >
            Handmade browser games for fun-craving humans who'd rather play than scroll. Browse the
            shelf, pick a world, and press play.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: reduceMotion ? 0 : 0.48 }}
          >
            <a className="button button-primary" href="#library">
              Browse the library <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#featured">
              Featured games <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.dl
            className="hero-stats"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: reduceMotion ? 0 : 0.6 }}
          >
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.a
        className="hero-scroll"
        href="#marquee"
        aria-label="Scroll to explore the library"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 1 }}
      >
        <span>Scroll</span>
        <motion.span
          className="hero-scroll-icon"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={17} strokeWidth={2} />
        </motion.span>
      </motion.a>
    </section>
  );
}
