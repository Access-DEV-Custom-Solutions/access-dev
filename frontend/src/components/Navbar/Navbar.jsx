import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard, LogOut, ArrowRight } from "lucide-react";
import useHideOnScroll from "../../hooks/useHideOnScroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("access_token")),
  );
  const hidden = useHideOnScroll({ topOffset: 120 });
  // Only the homepage has a dark hero behind the bar; every other page is light,
  // so there the bar switches to a solid white style with dark text.
  const { pathname } = useLocation();
  const isLight = pathname !== "/";
  const isSolid = isScrolled || isLight;

  const navRef = useRef(null);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the homepage, track when the hero has fully scrolled up behind the bar
  useEffect(() => {
    if (isLight) return undefined;
    const check = () => {
      const hero = document.getElementById("home");
      // offsetHeight ignores the slide-away transform, so this holds while the bar is hidden
      const barBottom = navRef.current?.offsetHeight ?? 0;
      setIsPastHero(Boolean(hero) && hero.getBoundingClientRect().bottom <= barBottom);
    };
    const frame = requestAnimationFrame(check);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [isLight]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleMenuToggle = () => setIsMenuOpen((v) => !v);

  const signOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");
    setIsLoggedIn(false);
    closeMenu();
    window.location.assign("/");
  };

  return (
    <nav
      className={[
        "adnav",
        isScrolled ? "adnav-scrolled" : "",
        isSolid ? "adnav-solid" : "",
        isLight ? "adnav-light" : "",
        // The homepage hero shows the big logo, so the bar's logo waits until the hero is gone
        !isLight && !isPastHero && !isMenuOpen ? "adnav-logo-off" : "",
        hidden && isScrolled ? "adnav-hidden" : "",
        isMenuOpen ? "adnav-menu-open" : "",
      ]
        .join(" ")
        .trim()}
      aria-label="Main navigation"
      ref={navRef}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .adnav {
          --adev-blue: #2355E1;
          --adev-teal: #008F88;
          --adev-violet: #8B5CF6;
          --adev-pink: #E255A1;
          --adev-text: #F5F7FF;
          --adev-muted: #A6ADC0;
          --adev-border: rgba(255,255,255,0.10);
          --adev-border-strong: rgba(255,255,255,0.28);
          --adev-hover: rgba(255,255,255,0.06);
          --adev-active: rgba(255,255,255,0.09);
          --adev-bar-bg: rgba(8,11,20,0.9);
          --adev-panel-bg: rgba(8,11,20,0.95);

          --adnav-h: 116px;

          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: 'Inter', sans-serif;
          padding: 0 6vw;
          border-bottom: 1px solid transparent;
          background: transparent;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
        }
        .adnav-hidden { transform: translateY(-115%); }

        .adnav-scrolled { --adnav-h: 100px; }

        .adnav-solid {
          background: var(--adev-bar-bg);
          border-bottom-color: var(--adev-border);
          backdrop-filter: blur(14px);
          box-shadow: 0 12px 32px -12px rgba(0,0,0,0.5);
        }

        /* Light pages: white bar with dark text */
        .adnav-light {
          --adev-text: #0B1220;
          --adev-muted: #4B5568;
          --adev-border: rgba(15,23,42,0.10);
          --adev-border-strong: rgba(15,23,42,0.25);
          --adev-hover: rgba(15,23,42,0.05);
          --adev-active: rgba(35,85,225,0.08);
          --adev-bar-bg: rgba(255,255,255,0.92);
          --adev-panel-bg: rgba(255,255,255,0.97);
        }
        .adnav-light.adnav-solid { box-shadow: 0 10px 30px -18px rgba(15,23,42,0.25); }
        .adnav-light .adnav-links a.active { color: var(--adev-blue); }

        .adnav-inner {
          max-width: 1280px;
          height: var(--adnav-h);
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: height 0.3s ease;
        }

        .adnav-logo { display: flex; align-items: center; transition: opacity 0.3s ease, visibility 0.3s ease; }
        .adnav-logo-off .adnav-logo { opacity: 0; visibility: hidden; }
        .adnav-logo-img {
          height: calc(var(--adnav-h) - 24px);
          width: auto; display: block;
          transition: height 0.3s ease;
        }

        .adnav-links {
          display: flex; align-items: center; gap: 0.4rem;
          list-style: none; margin: 0 0 0 auto; padding: 0;
        }
        .adnav-links a {
          position: relative;
          color: var(--adev-muted);
          text-decoration: none;
          font-size: 0.9rem; font-weight: 500;
          padding: 0.5rem 0.9rem;
          border-radius: 100px;
          transition: color 0.18s ease, background 0.18s ease;
        }
        .adnav-links a:hover { color: var(--adev-text); background: var(--adev-hover); }
        .adnav-links a.active { color: var(--adev-text); background: var(--adev-active); }

        .adnav-dashboard-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.88rem; font-weight: 600;
          color: var(--adev-teal);
          text-decoration: none;
          padding: 0.5rem 0.95rem;
          border-radius: 100px;
          border: 1px solid rgba(0,143,136,0.35);
          background: rgba(0,143,136,0.1);
          transition: background 0.18s ease, border-color 0.18s ease;
          white-space: nowrap;
        }
        .adnav-dashboard-link:hover { background: rgba(0,143,136,0.18); }

        .adnav-btn-signin {
          font-size: 0.88rem; font-weight: 600;
          color: var(--adev-text);
          background: none;
          border: 1px solid var(--adev-border);
          padding: 0.5rem 1.05rem;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .adnav-btn-signin:hover { background: var(--adev-hover); border-color: var(--adev-border-strong); }

        .adnav-btn-cta {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.55rem;
          font-size: 1rem; font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, var(--adev-blue), #3d63e8);
          border: none;
          padding: 0.85rem 1.6rem;
          border-radius: 0;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 6px 18px -8px rgba(35,85,225,0.6);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .adnav-btn-cta:hover { transform: translateY(-1px); box-shadow: 0 10px 22px -8px rgba(35,85,225,0.75); }

        .adnav-actions { display: flex; align-items: center; gap: 0.6rem; }

        .adnav-hamburger {
          display: none;
          width: 2.2rem; height: 2.2rem;
          align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--adev-border);
          background: var(--adev-hover);
          color: var(--adev-text);
          cursor: pointer;
        }

        .desktop-row { display: flex; align-items: center; gap: 0.6rem; }
        .mobile-only-flex { display: none; }

        .adnav-mobile-panel {
          display: none;
        }

        @media (max-width: 880px) {
          .adnav { --adnav-h: 76px; }
          .adnav-scrolled { --adnav-h: 68px; }
          .adnav-menu-open { background: var(--adev-panel-bg); }
          .adnav-links > a, .adnav-dashboard-link.desktop-only-link, .desktop-row { display: none; }
          .adnav-hamburger { display: flex; }
          .adnav-actions { margin-left: auto; }

          .adnav-mobile-panel {
            display: block;
            position: fixed;
            top: var(--adnav-h); left: 0; right: 0;
            max-height: 0;
            overflow: hidden;
            border-bottom: 1px solid var(--adev-border);
            background: var(--adev-panel-bg);
            backdrop-filter: blur(16px);
            transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
            opacity: 0;
            padding: 0 6vw;
          }
          .adnav-menu-open .adnav-mobile-panel {
            max-height: 26rem;
            opacity: 1;
            padding: 1.25rem 6vw;
          }
          .adnav-mobile-links { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 1rem; }
          .adnav-mobile-links a {
            color: var(--adev-text); text-decoration: none;
            font-size: 1rem; font-weight: 600;
            padding: 0.7rem 0.4rem;
            border-bottom: 1px solid var(--adev-border);
          }
          .adnav-mobile-actions { display: flex; flex-direction: column; gap: 0.6rem; }
          .adnav-mobile-actions a, .adnav-mobile-actions button {
            width: 100%; text-align: center;
            box-sizing: border-box;
          }
        }
      `}</style>

      <div className="adnav-inner">
        <Link to="/" className="adnav-logo" onClick={closeMenu}>
          <img
            src={isLight ? "/access_logo-removebg-preview.png" : "/dark_bg-removebg-preview.png"}
            alt="ACCESS DEV"
            className="adnav-logo-img"
          />
        </Link>

        <div className="adnav-links desktop-row">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>

        <div className="adnav-actions">
          <div className="desktop-row">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="adnav-dashboard-link desktop-only-link"
                >
                  <LayoutDashboard size={15} />
                  Dashboard
                </Link>
                <button className="adnav-btn-signin" onClick={signOut}>
                  Sign Out
                </button>
              </>
            ) : null}
            <Link to="/contact" className="adnav-btn-cta">
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>

          <button
            className="adnav-hamburger"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className="adnav-mobile-panel">
        <div className="adnav-mobile-links">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          {isLoggedIn && (
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          )}
        </div>
        <div className="adnav-mobile-actions">
          <Link to="/contact" className="adnav-btn-cta" onClick={closeMenu}>
            Start a Project
            <ArrowRight size={18} />
          </Link>
          {isLoggedIn && (
            <button className="adnav-btn-signin" onClick={signOut}>
              <LogOut
                size={14}
                style={{ marginRight: "0.4rem", verticalAlign: "-2px" }}
              />
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
