import { motion } from "framer-motion";

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      role="img"
      aria-label="Access DEV Custom Solutions"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hv-stage" aria-hidden="true">
        <div className="hv-orbit" />

        <div className="hv-ring" />
        <span className="hv-wave" />
        <span className="hv-wave" />

        <img className="hv-logo" src="/dark_bg-removebg-preview.png" alt="" />
      </div>
    </motion.div>
  );
}

export default HeroVisual;
