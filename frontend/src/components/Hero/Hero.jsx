import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Starfield from "./Starfield";
import HeroVisual from "./HeroVisual";

const ROTATING_WORDS = ["mobile app", "website", "AI solution", "platform"];
const WORD_INTERVAL = 2600; // ms each word stays on screen

function RotatingWord() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), WORD_INTERVAL);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className="hero-rotator" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROTATING_WORDS[index]}
          className="hero-rotator-word"
          initial={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <Starfield />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="hero-eyebrow">
            <span className="hero-badge-dot" />
            Software studio · Harare, Zimbabwe
          </span>

          <h1 className="hero-title">
            <span className="sr-only">We build the software your business deserves.</span>
            <span aria-hidden="true" className="hero-title-line">We build</span>
            <span aria-hidden="true" className="hero-title-row">
              <span className="hero-title-line hero-title-the">the</span>
              <RotatingWord />
            </span>
            <span aria-hidden="true" className="hero-title-line hero-title-muted">
              your business deserves.
            </span>
          </h1>

          <div className="hero-cta-row">
            <Link to="/contact" className="btn hero-btn-primary">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <a href="#work" className="btn hero-btn-secondary">
              View Our Work
            </a>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
