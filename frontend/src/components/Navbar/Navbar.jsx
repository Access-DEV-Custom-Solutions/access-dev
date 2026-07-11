import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, LayoutDashboard, LogOut } from "lucide-react";
import useHideOnScroll from "../../hooks/useHideOnScroll";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("access_token")),
  );
  const hidden = useHideOnScroll({ topOffset: 120 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        hidden && isScrolled ? "adnav-hidden" : "",
        isMenuOpen ? "adnav-menu-open" : "",
      ]
        .join(" ")
        .trim()}
      aria-label="Main navigation"
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

          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: 'Inter', sans-serif;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.3s ease;
          padding: 1.1rem 6vw;
        }
        .adnav-hidden { transform: translateY(-115%); }

        .adnav-scrolled { padding: 0.6rem 6vw; }

        .adnav-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 0.55rem 1.1rem;
          border-radius: 100px;
          border: 1px solid transparent;
          background: transparent;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
        }
        .adnav-scrolled .adnav-inner {
          background: rgba(8,11,20,0.72);
          border-color: var(--adev-border);
          backdrop-filter: blur(14px);
          box-shadow: 0 12px 32px -12px rgba(0,0,0,0.5);
        }

        .adnav-logo { display: flex; align-items: center; }
        .adnav-logo-img { height: 34px; width: auto; display: block; }

        .adnav-links {
          display: flex; align-items: center; gap: 0.4rem;
          list-style: none; margin: 0; padding: 0;
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
        .adnav-links a:hover { color: var(--adev-text); background: rgba(255,255,255,0.06); }
        .adnav-links a.active { color: var(--adev-text); background: rgba(255,255,255,0.09); }

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
        .adnav-btn-signin:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.28); }

        .adnav-btn-create {
          font-size: 0.88rem; font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, var(--adev-blue), #3d63e8);
          border: none;
          padding: 0.55rem 1.15rem;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 6px 18px -8px rgba(35,85,225,0.6);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .adnav-btn-create:hover { transform: translateY(-1px); box-shadow: 0 10px 22px -8px rgba(35,85,225,0.75); }

        .adnav-actions { display: flex; align-items: center; gap: 0.6rem; }

        .adnav-theme-toggle {
          width: 2.2rem; height: 2.2rem;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--adev-border);
          background: rgba(255,255,255,0.04);
          color: var(--adev-text);
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .adnav-theme-toggle:hover { background: rgba(255,255,255,0.09); }

        .adnav-hamburger {
          display: none;
          width: 2.2rem; height: 2.2rem;
          align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--adev-border);
          background: rgba(255,255,255,0.04);
          color: var(--adev-text);
          cursor: pointer;
        }

        .desktop-row { display: flex; align-items: center; gap: 0.6rem; }
        .mobile-only-flex { display: none; }

        .adnav-mobile-panel {
          display: none;
        }

        @media (max-width: 880px) {
          .adnav-links > a, .adnav-dashboard-link.desktop-only-link, .desktop-row { display: none; }
          .adnav-hamburger { display: flex; }

          .adnav-mobile-panel {
            display: block;
            position: fixed;
            top: 5rem; left: 5vw; right: 5vw;
            max-height: 0;
            overflow: hidden;
            border-radius: 20px;
            border: 1px solid var(--adev-border);
            background: rgba(8,11,20,0.92);
            backdrop-filter: blur(16px);
            transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
            opacity: 0;
            padding: 0 1.25rem;
          }
          .adnav-menu-open .adnav-mobile-panel {
            max-height: 26rem;
            opacity: 1;
            padding: 1.25rem;
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
            src="/without background.png"
            alt="ACCESS DEV"
            className="adnav-logo-img"
          />
        </Link>

        <div className="adnav-links desktop-row">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
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
            ) : (
              <>
                <Link to="/signin" className="adnav-btn-signin">
                  Sign In
                </Link>
                <Link to="/signup" className="adnav-btn-create">
                  Create Account
                </Link>
              </>
            )}
          </div>

          <button
            className="adnav-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

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
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
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
          {!isLoggedIn ? (
            <>
              <Link
                to="/signin"
                className="adnav-btn-signin"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="adnav-btn-create"
                onClick={closeMenu}
              >
                Create Account
              </Link>
            </>
          ) : (
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
