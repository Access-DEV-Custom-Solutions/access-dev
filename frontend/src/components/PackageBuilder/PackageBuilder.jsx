import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Boxes, Check, ArrowRight } from "lucide-react";

const PACKAGES = [
  {
    id: "off-shelf",
    icon: Package,
    file: "off-the-shelf.pkg",
    title: "Off the Shelf",
    subtitle: "Ready-Made Solutions",
    description:
      "Pre-built, battle-tested solutions you can deploy immediately — for businesses that need quick, reliable results.",
    features: [
      "Quick deployment within days",
      "Proven & tested solutions",
      "Cost-effective pricing",
      "Regular updates included",
      "Basic customization available",
      "Community support",
    ],
    color: "var(--adev-blue)",
    link: "/projects",
    btnText: "View Projects",
    badge: "Popular",
  },
  {
    id: "custom",
    icon: Boxes,
    file: "custom-build.pkg",
    title: "Custom Made",
    subtitle: "Tailored to Your Needs",
    description:
      "Bespoke solutions built from the ground up for your business specifically — full control, no shortcuts.",
    features: [
      "Fully customized development",
      "Dedicated development team",
      "Unlimited revisions",
      "Proprietary source code",
      "Scalable architecture",
      "Priority support 24/7",
    ],
    color: "var(--adev-violet)",
    link: "/signup",
    btnText: "Get Started",
    badge: "Premium",
  },
];

function PackageBuilder() {
  return (
    <section id="package-builder" className="pkg-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .pkg-section {
          --adev-ink: #080b14;
          --adev-blue: #2355E1;
          --adev-teal: #008F88;
          --adev-violet: #8B5CF6;
          --adev-pink: #E255A1;
          --adev-amber: #F59E0B;
          --adev-text: #F5F7FF;
          --adev-muted: #8891A8;
          --adev-border: rgba(255,255,255,0.09);

          position: relative;
          background: var(--adev-ink);
          color: var(--adev-text);
          font-family: 'Inter', sans-serif;
          padding: 6.5rem 6vw;
          overflow: hidden;
        }

        .pkg-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(55% 45% at 50% 0%, rgba(35,85,225,0.14), transparent 70%);
          pointer-events: none;
        }

        .pkg-container { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; }

        .pkg-header { text-align: center; max-width: 34rem; margin: 0 auto 3.5rem; }
        .pkg-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--adev-blue);
          margin: 0 0 0.75rem;
        }
        .pkg-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          letter-spacing: -0.02em;
          margin: 0 0 0.75rem;
        }
        .pkg-subtitle { color: var(--adev-muted); margin: 0; }

        .pkg-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        @media (max-width: 780px) { .pkg-grid { grid-template-columns: 1fr; } }

        .pkg-card {
          position: relative;
          border: 1px solid var(--adev-border);
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          border-radius: 18px;
          padding: 2rem;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .pkg-card:hover { border-color: var(--card-color); transform: translateY(-4px); }

        .pkg-card-head {
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem; color: var(--adev-muted);
          padding-bottom: 1rem; margin-bottom: 1.5rem;
          border-bottom: 1px dashed var(--adev-border);
        }
        .pkg-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 0.25rem 0.6rem; border-radius: 100px;
          background: color-mix(in srgb, var(--card-color) 18%, transparent);
          color: var(--card-color);
        }

        .pkg-icon-chip {
          width: 3rem; height: 3rem;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: color-mix(in srgb, var(--card-color) 16%, transparent);
          color: var(--card-color);
          margin-bottom: 1.25rem;
        }

        .pkg-card-subtitle { font-size: 0.82rem; font-weight: 600; color: var(--card-color); margin: 0 0 0.35rem; }
        .pkg-card-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; margin: 0 0 0.75rem; }
        .pkg-desc { font-size: 0.92rem; line-height: 1.65; color: var(--adev-muted); margin: 0 0 1.5rem; }

        .pkg-features { display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.75rem; }
        .pkg-feature { display: flex; align-items: center; gap: 0.6rem; font-size: 0.88rem; }
        .pkg-feature-check {
          width: 1.15rem; height: 1.15rem; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-color) 20%, transparent);
          color: var(--card-color);
        }

        .pkg-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          width: 100%;
          font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.5rem;
          border-radius: 10px;
          background: var(--card-color);
          color: #fff;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .pkg-btn:hover { transform: translateY(-2px); }
        .pkg-btn svg { transition: transform 0.18s ease; }
        .pkg-btn:hover svg { transform: translateX(3px); }
      `}</style>

      <div className="pkg-container">
        <motion.div
          className="pkg-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="pkg-eyebrow">Two ways to work with us</p>
          <h2 className="pkg-title">Package Solutions</h2>
          <p className="pkg-subtitle">Choose the right fit for your business</p>
        </motion.div>

        <div className="pkg-grid">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className="pkg-card"
              style={{ "--card-color": pkg.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="pkg-card-head">
                <span>{pkg.file}</span>
                <span className="pkg-badge">{pkg.badge}</span>
              </div>

              <div className="pkg-icon-chip">
                <pkg.icon size={24} />
              </div>

              <p className="pkg-card-subtitle">{pkg.subtitle}</p>
              <h3 className="pkg-card-title">{pkg.title}</h3>
              <p className="pkg-desc">{pkg.description}</p>

              <div className="pkg-features">
                {pkg.features.map((feature) => (
                  <div key={feature} className="pkg-feature">
                    <span className="pkg-feature-check">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={pkg.link} className="pkg-btn">
                <span>{pkg.btnText}</span>
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackageBuilder;
