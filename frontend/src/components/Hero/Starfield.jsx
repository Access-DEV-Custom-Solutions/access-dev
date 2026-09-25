import { useEffect, useRef } from "react";

// Floating stardust: soft glowing specks rise slowly and sway over a faint,
// twinkling star background. Drawn on a canvas so it stays smooth.
const SPEED = 1.75; // overall pace; 1 = the base speed, lower = slower
const MOTE_COLORS = ["255, 255, 255", "140, 235, 215", "170, 200, 255"];
const STAR_COLORS = ["255, 255, 255", "255, 255, 255", "255, 255, 255", "170, 200, 255", "140, 235, 215"];

const random = (min, max) => min + Math.random() * (max - min);
const pick = (items) => items[Math.floor(Math.random() * items.length)];

// Counts scale with the hero's area so phones and wide screens look equally full
const countFor = (width, height, areaPerItem, max) =>
  Math.min(Math.round((width * height) / areaPerItem), max);

function createMote(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: random(0.6, 2.2),
    rise: random(3, 9), // px per second
    sway: random(4, 14), // px either side
    swaySpeed: random(0.15, 0.4), // radians per second
    swayPhase: Math.random() * Math.PI * 2,
    twinkleSpeed: random(0.4, 1),
    twinklePhase: Math.random() * Math.PI * 2,
    color: pick(MOTE_COLORS),
  };
}

function createStar(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: random(0.35, 1.3),
    alpha: random(0.25, 0.9),
    twinkleSpeed: random(0.4, 1.2),
    twinklePhase: Math.random() * Math.PI * 2,
    color: pick(STAR_COLORS),
  };
}

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let motes = [];
    let stars = [];
    let elapsed = 0; // seconds of animation time
    let frameId = null;
    let lastTime = null;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      motes = Array.from({ length: countFor(width, height, 6000, 220) }, () => createMote(width, height));
      stars = Array.from({ length: countFor(width, height, 9000, 420) }, () => createStar(width, height));
      draw(0);
    };

    const draw = (dt) => {
      elapsed += dt / 1000;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle = reduceMotion
          ? 1
          : 0.55 + 0.45 * Math.sin(elapsed * star.twinkleSpeed + star.twinklePhase);
        ctx.fillStyle = `rgba(${star.color}, ${star.alpha * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const mote of motes) {
        mote.y -= (mote.rise * dt) / 1000;
        if (mote.y < -10) {
          mote.y = height + 10;
          mote.x = Math.random() * width;
        }

        const x = mote.x + Math.sin(elapsed * mote.swaySpeed + mote.swayPhase) * mote.sway;
        const twinkle = reduceMotion
          ? 1
          : 0.5 + 0.5 * Math.sin(elapsed * mote.twinkleSpeed + mote.twinklePhase);
        const glowRadius = mote.radius * 4;

        const glow = ctx.createRadialGradient(x, mote.y, 0, x, mote.y, glowRadius);
        glow.addColorStop(0, `rgba(${mote.color}, ${0.85 * twinkle})`);
        glow.addColorStop(0.3, `rgba(${mote.color}, ${0.25 * twinkle})`);
        glow.addColorStop(1, `rgba(${mote.color}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, mote.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (time) => {
      const dt = lastTime === null ? 16 : Math.min(time - lastTime, 50);
      lastTime = time;
      draw(dt * SPEED);
      frameId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      lastTime = null;
      frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (frameId) cancelAnimationFrame(frameId);
    };

    // Only animate while the hero is on screen and the tab is visible
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) start();
      else stop();
    });
    const handleVisibilityChange = () => (document.hidden ? stop() : start());

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();
    visibility.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-stars" aria-hidden="true" />;
}

export default Starfield;
