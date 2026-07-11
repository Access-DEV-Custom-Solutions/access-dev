import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

function CTA() {
  return (
    <section className="cta-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .cta-section {
          --adev-paper: #F5F7FB;
          --adev-blue: #2355E1;
          --adev-teal: #008F88;
          --adev-violet: #8B5CF6;
          --adev-pink: #E255A1;
          --adev-text: #10162A;
          --adev-muted: #5B6478;
          --adev-ink: #080b14;
          --adev-border: rgba(16,22,42,0.10);

          position: relative;
          background: var(--adev-paper);
          color: var(--adev-text);
          font-family: 'Inter', sans-serif;
          padding: 6.5rem 6vw 7rem;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(16,22,42,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,22,42,0.035) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 90%);
          pointer-events: none;
        }

        .cta-container {
          position: relative; z-index: 1;
          max-width: 640px; margin: 0 auto;
          text-align: center;
        }

        .cta-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--adev-blue);
          margin: 0 0 1rem;
        }

        .cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 3.4vw, 2.75rem);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 1reml;
          color: var(--adev-ink)
        }
        .cta-title .grad {
          background: linear-gradient(90deg, var(--adev-blue) 10%, var(--adev-violet) 55%, var(--adev-pink) 95%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cta-subtitle {
          font-size: 1rem; line-height: 1.7;
          color: var(--adev-muted);
          margin: 0 0 2.25rem;
        }

        .cta-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.9rem; margin-bottom: 2.75rem; }
        .cta-btn-primary, .cta-btn-secondary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.6rem;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        }
        .cta-btn-primary {
          color: #fff;
          background: linear-gradient(90deg, var(--adev-blue), #3d63e8);
          box-shadow: 0 8px 24px -10px rgba(35,85,225,0.5);
        }
        .cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px -10px rgba(35,85,225,0.65); }
        .cta-btn-primary svg { transition: transform 0.18s ease; }
        .cta-btn-primary:hover svg { transform: translateX(3px); }

        .cta-btn-secondary {
          color: var(--adev-text);
          border: 1px solid var(--adev-border);
          background: #fff;
        }
        .cta-btn-secondary:hover { border-color: rgba(16,22,42,0.25); background: #fafbff; }

        /* terminal install-command pill: echoes the code window in Hero */
        .cta-terminal {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          padding: 0.7rem 1.1rem;
          border-radius: 100px;
          border: 1px solid var(--adev-border);
          background: #fff;
          box-shadow: 0 1px 2px rgba(16,22,42,0.04);
        }
        .cta-terminal-prompt { color: var(--adev-teal); font-weight: 600; }
        .cta-terminal-cmd { color: var(--adev-text); }
        .cta-terminal-cursor {
          display: inline-block; width: 6px; height: 1em;
          background: var(--adev-blue);
          vertical-align: -0.15em;
          animation: cta-blink 1s step-end infinite;
        }
        @keyframes cta-blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .cta-terminal-cursor { animation: none; }
        }
      `}</style>

      <div className="cta-container">
        <p className="cta-eyebrow">Let's build</p>
        <h2 className="cta-title">
          Ready to ship your <span className="grad">next product?</span>
        </h2>
        <p className="cta-subtitle">
          Tell us what you're building. We'll figure out the fastest, most
          reliable way to get it live.
        </p>

        <div className="cta-buttons">
          <Link to="/signup" className="cta-btn-primary">
            <span>Get Started</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="cta-btn-secondary">
            <Mail size={17} />
            <span>Talk to Us</span>
          </Link>
        </div>

        <div className="cta-terminal">
          <span className="cta-terminal-prompt">$</span>
          <span className="cta-terminal-cmd">npx access-dev@latest init</span>
          <span className="cta-terminal-cursor" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
