import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="adev-hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .adev-hero {
          --adev-ink: #080b14;
          --adev-surface: #10162a;
          --adev-blue: #2355E1;
          --adev-teal: #008F88;
          --adev-violet: #8B5CF6;
          --adev-pink: #E255A1;
          --adev-amber: #F59E0B;
          --adev-text: #F5F7FF;
          --adev-muted: #8891A8;
          --adev-border: rgba(255,255,255,0.09);

          position: relative;
          min-height: 100vh;
          background: var(--adev-ink);
          color: var(--adev-text);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          padding: 0 6vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .adev-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(60% 50% at 82% 18%, rgba(139,92,246,0.16), transparent 70%),
            radial-gradient(50% 40% at 12% 85%, rgba(35,85,225,0.14), transparent 70%);
          pointer-events: none;
        }
        .adev-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%);
          pointer-events: none;
        }

        .adev-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 4vw;
          align-items: center;
          padding: 7rem 0 5rem;
        }

        /* ---------- left: content ---------- */
        .adev-badges { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.75rem; }
        .adev-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.02em;
          padding: 0.45rem 0.85rem;
          border: 1px solid var(--adev-border);
          border-radius: 100px;
          color: var(--adev-muted);
          background: rgba(255,255,255,0.03);
        }
        .adev-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--adev-blue); flex-shrink: 0; }
        .adev-badge-dot.amber { background: var(--adev-amber); }

        .adev-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.6rem, 4.6vw, 4.1rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 1.4rem;
        }
        .adev-title span { display: block; }
        .adev-title .grad {
          background: linear-gradient(90deg, var(--adev-blue) 10%, var(--adev-violet) 55%, var(--adev-pink) 95%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .adev-subtitle {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--adev-muted);
          max-width: 34rem;
          margin: 0 0 2.25rem;
        }
        .adev-subtitle b { color: var(--adev-text); font-weight: 600; }

        .adev-cta-row { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-bottom: 3rem; }
        .adev-btn-primary, .adev-btn-secondary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.5rem;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }
        .adev-btn-primary {
          color: #fff;
          background: linear-gradient(90deg, var(--adev-blue), #3d63e8);
          box-shadow: 0 8px 24px -8px rgba(35,85,225,0.55);
        }
        .adev-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px -8px rgba(35,85,225,0.7); }
        .adev-btn-primary svg { transition: transform 0.18s ease; }
        .adev-btn-primary:hover svg { transform: translateX(3px); }

        .adev-btn-secondary {
          color: var(--adev-text);
          border: 1px solid var(--adev-border);
          background: rgba(255,255,255,0.02);
        }
        .adev-btn-secondary:hover { border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.05); }

        .adev-stats { display: flex; align-items: center; gap: 1.75rem; }
        .adev-stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .adev-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem; font-weight: 700;
        }
        .adev-stat-label { font-size: 0.78rem; color: var(--adev-muted); }
        .adev-stat-divider { width: 1px; height: 2.2rem; background: var(--adev-border); }

        /* ---------- right: code window (signature element) ---------- */
        .adev-code-wrap { position: relative; }
        .adev-code-glow {
          position: absolute; inset: -10%;
          background: radial-gradient(50% 50% at 50% 45%, rgba(35,85,225,0.22), transparent 70%);
          filter: blur(20px);
          pointer-events: none;
          animation: adev-glow-pulse 5s ease-in-out infinite;
        }
        @keyframes adev-glow-pulse { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }

        .adev-code-card {
          position: relative;
          border: 1px solid var(--adev-border);
          background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015));
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(6px);
          box-shadow: 0 30px 60px -25px rgba(0,0,0,0.6);
        }

        .adev-code-head {
          display: flex; align-items: center; gap: 0.9rem;
          padding: 0.85rem 1.1rem;
          border-bottom: 1px solid var(--adev-border);
        }
        .adev-code-dots { display: flex; gap: 0.4rem; }
        .adev-code-dots span { width: 9px; height: 9px; border-radius: 50%; }
        .adev-code-dots span:nth-child(1) { background: var(--adev-pink); }
        .adev-code-dots span:nth-child(2) { background: var(--adev-amber); }
        .adev-code-dots span:nth-child(3) { background: var(--adev-teal); }
        .adev-code-file {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--adev-muted);
        }
        .adev-code-status {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          color: var(--adev-teal);
          white-space: nowrap;
        }

        .adev-code-body {
          margin: 0;
          padding: 1.25rem 1.4rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.84rem;
          line-height: 1.85;
          overflow-x: auto;
        }
        .tok-kw { color: var(--adev-blue); }
        .tok-tag { color: var(--adev-pink); }
        .tok-attr { color: var(--adev-teal); }
        .tok-str { color: var(--adev-amber); }
        .tok-fn { color: var(--adev-violet); }
        .tok-punc { color: var(--adev-muted); }
        .tok-plain { color: var(--adev-text); }
        .adev-cursor {
          display: inline-block; width: 7px; height: 1.05em;
          background: var(--adev-blue);
          vertical-align: -0.15em;
          animation: adev-blink 1s step-end infinite;
        }
        @keyframes adev-blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }

        .adev-code-preview {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.4rem;
          border-top: 1px dashed var(--adev-border);
          background: rgba(255,255,255,0.02);
        }
        .adev-code-preview-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--adev-muted);
        }
        .adev-code-preview-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.85rem; font-weight: 600;
          color: #fff;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          background: linear-gradient(90deg, var(--adev-blue), var(--adev-violet));
          pointer-events: none;
        }

        /* ---------- scroll cue ---------- */
        .adev-scroll {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 0.5rem;
          margin: 0 auto; padding-bottom: 2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem; color: var(--adev-muted);
        }
        .adev-scroll svg { animation: adev-bob 1.8s ease-in-out infinite; }
        @keyframes adev-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }

        @media (prefers-reduced-motion: reduce) {
          .adev-scroll svg, .adev-cursor, .adev-code-glow { animation: none; }
        }

        @media (max-width: 960px) {
          .adev-container { grid-template-columns: 1fr; padding-top: 6rem; }
          .adev-hero { padding: 0 5vw; }
          .adev-code-body { font-size: 0.78rem; }
        }
      `}</style>

      <div className="adev-container">
        {/* LEFT: content */}
        <div>
          <div className="adev-badges">
            <span className="adev-badge">
              <span className="adev-badge-dot" />
              Available for new projects
            </span>
            <span className="adev-badge">
              <span className="adev-badge-dot amber" />
              Trusted by clients across Zimbabwe
            </span>
          </div>

          <h1 className="adev-title">
            <span>Digital Solutions</span>
            <span className="grad">That Grow Your Business</span>
          </h1>

          <p className="adev-subtitle">
            Your gateway to <b>mobile</b>, <b>web</b>, <b>web redesign</b> and{" "}
            <b>AI</b> solutions — technology built to turn ideas into products
            people actually use.
          </p>

          <div className="adev-cta-row">
            <Link to="/signup" className="adev-btn-primary">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#services" className="adev-btn-secondary">
              <span>Explore Services</span>
              <ChevronDown size={18} />
            </a>
          </div>

          <div className="adev-stats">
            <div className="adev-stat">
              <span className="adev-stat-num">15+</span>
              <span className="adev-stat-label">Projects Shipped</span>
            </div>
            <div className="adev-stat-divider" />
            <div className="adev-stat">
              <span className="adev-stat-num">100%</span>
              <span className="adev-stat-label">Client Satisfaction</span>
            </div>
            <div className="adev-stat-divider" />
            <div className="adev-stat">
              <span className="adev-stat-num">4</span>
              <span className="adev-stat-label">Core Services</span>
            </div>
          </div>
        </div>

        {/* RIGHT: code window that compiles into a live preview */}
        <div className="adev-code-wrap">
          <div className="adev-code-glow" />
          <div className="adev-code-card">
            <div className="adev-code-head">
              <div className="adev-code-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="adev-code-file">Hero.jsx</span>
              <span className="adev-code-status">✓ build passing</span>
            </div>

            <pre className="adev-code-body">
              <code>
                <span className="tok-kw">export default function</span>{" "}
                <span className="tok-fn">Hero</span>
                <span className="tok-punc">() {"{"}</span>
                {"\n  "}
                <span className="tok-kw">return</span>{" "}
                <span className="tok-punc">(</span>
                {"\n    "}
                <span className="tok-punc">{"<"}</span>
                <span className="tok-tag">Button</span>
                {"\n      "}
                <span className="tok-attr">variant</span>
                <span className="tok-punc">=</span>
                <span className="tok-str">"gradient"</span>
                {"\n      "}
                <span className="tok-attr">onClick</span>
                <span className="tok-punc">{"={"}</span>
                <span className="tok-fn">launchProject</span>
                <span className="tok-punc">{"}"}</span>
                {"\n    "}
                <span className="tok-punc">{">"}</span>
                {"\n      "}
                <span className="tok-plain">Get Started</span>
                {"\n    "}
                <span className="tok-punc">{"</"}</span>
                <span className="tok-tag">Button</span>
                <span className="tok-punc">{">"}</span>
                {"\n  "}
                <span className="tok-punc">)</span>
                {"\n"}
                <span className="tok-punc">{"}"}</span>
                <span className="adev-cursor" />
              </code>
            </pre>

            <div className="adev-code-preview">
              <span className="adev-code-preview-label">Preview</span>
              <span className="adev-code-preview-btn">
                Get Started <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="adev-scroll">
        <span>Scroll to explore</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}

export default Hero;
