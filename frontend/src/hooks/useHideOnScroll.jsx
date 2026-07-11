import { useState, useEffect, useRef } from "react";

/**
 * Hides the navbar when scrolling down, reveals it when scrolling up.
 * Always visible near the top of the page (within `topOffset`px).
 *
 * Usage in Navbar.jsx:
 *   const hidden = useHideOnScroll();
 *   <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
 */
export default function useHideOnScroll({
  threshold = 8,
  topOffset = 80,
} = {}) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const diff = y - lastY.current;

        if (y < topOffset) {
          setHidden(false);
        } else if (Math.abs(diff) > threshold) {
          setHidden(diff > 0); // scrolling down => hide, scrolling up => show
          lastY.current = y;
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topOffset]);

  return hidden;
}
