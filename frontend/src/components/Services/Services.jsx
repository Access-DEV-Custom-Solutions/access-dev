import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Globe2, RotateCw, Cpu, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Native & Cross-Platform",
    description:
      "iOS and Android apps built with modern frameworks — from first MVP to production.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    color: "var(--adev-blue)",
    link: "/services/mobile",
  },
  {
    id: "web",
    icon: Globe2,
    title: "Web Development",
    subtitle: "Full-Stack Solutions",
    description:
      "Responsive sites and web apps — from landing pages to real-time dashboards.",
    tags: ["React", "Node.js", "Next.js", "TypeScript"],
    color: "var(--adev-teal)",
    link: "/services/web",
  },
  {
    id: "redesign",
    icon: RotateCw,
    title: "Web Redesign",
    subtitle: "Modernize Your Presence",
    description:
      "Outdated sites rebuilt into fast, modern experiences that convert better.",
    tags: ["UI/UX", "SEO", "Performance", "Migration"],
    color: "var(--adev-pink)",
    link: "/services/redesign",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Solutions",
    subtitle: "Intelligent Automation",
    description:
      "Custom ML models, NLP chatbots, and computer vision for real business problems.",
    tags: ["ML", "NLP", "Vision", "LLMs"],
    color: "var(--adev-violet)",
    link: "/services/ai",
  },
];

function Services() {
  return (
    <section id="services" className="svc-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .svc-section {
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
          padding: 5rem 6vw 4rem;
        }

        .svc-container { max-width: 1080px; margin: 0 auto; }

        .svc-header { text-align: center; max-width: 34rem; margin: 0 auto 3.25rem; }
        .svc-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--adev-teal);
          margin: 0 0 0.6rem;
        }
        .svc-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 3vw, 2.5rem);
          letter-spacing: -0.02em;
          margin: 0 0 0.65rem;
          color: var(--adev-ink)
        }
        .svc-lede { color: var(--adev-muted); font-size: 0.98rem; line-height: 1.55; margin: 0; }

        /* ---- tree ---- */
        .tree {
          position: relative;
        }

        .tree::before {
          content: "";
          position: absolute;
          top: 0.5rem;
          bottom: 0.5rem;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            var(--adev-blue) 0%,
            var(--adev-blue) 22%,
            var(--adev-teal) 22%,
            var(--adev-teal) 47%,
            var(--adev-pink) 47%,
            var(--adev-pink) 72%,
            var(--adev-violet) 72%,
            var(--adev-violet) 100%
          );
          opacity: 0.35;
        }

        .tree-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 3.1rem minmax(0, 1fr);
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.3rem;
        }
        .tree-row:last-child { margin-bottom: 0; }

        .tree-node {
          grid-column: 2;
          position: relative;
          z-index: 2;
          width: 3.1rem;
          height: 3.1rem;
          border-radius: 50%;
          background: #fff;
          border: 2px solid var(--card-color);
          color: var(--card-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px -8px rgba(16, 22, 42, 0.25);
          align-self: center;
        }
        .tree-node .tree-index {
          position: absolute;
          top: -0.35rem; right: -0.35rem;
          width: 1.2rem; height: 1.2rem;
          border-radius: 50%;
          background: var(--card-color);
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tree-card-shell {
          width: 100%;
          display: flex;
          align-self: center;
        }

        .tree-row.side-left .tree-card-shell {
          grid-column: 1;
          justify-self: end;
          justify-content: flex-end;
        }

        .tree-row.side-right .tree-card-shell {
          grid-column: 3;
          justify-self: start;
          justify-content: flex-start;
        }

        .tree-card {
          position: relative;
          width: min(24rem, 100%);
          max-width: 24rem;
          background: #fff;
          border: 1px solid var(--adev-border);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          box-shadow: 0 1px 2px rgba(16, 22, 42, 0.04);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          align-self: center;
        }
        .tree-card:hover {
          border-color: var(--card-color);
          box-shadow: 0 16px 30px -18px rgba(16, 22, 42, 0.25);
          transform: translateY(-2px);
        }

        .tree-row.side-left .tree-card { grid-column: 1; justify-self: end; }
        .tree-row.side-right .tree-card { grid-column: 5; justify-self: start; }

        /* connector: an actual grid cell between the card and the node,
           not a positioned pseudo-element — it always fills the space
           between them exactly, regardless of surrounding page styles */
        .tree-tail {
          height: 2px;
          background: var(--card-color);
          opacity: 0.5;
        }
        .tree-row.side-left .tree-tail { grid-column: 2; }
        .tree-row.side-right .tree-tail { grid-column: 4; }

        .tree-subtitle { font-size: 0.76rem; font-weight: 600; color: var(--card-color); margin: 0 0 0.25rem; }
        .tree-card-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.12rem; font-weight: 600; color: var(--adev-text); margin: 0 0 0.4rem; }
        .tree-desc { font-size: 0.86rem; line-height: 1.5; color: var(--adev-muted); margin: 0 0 0.85rem; }

        .tree-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.9rem; }
        .tree-tag {
          font-size: 0.68rem; font-weight: 500;
          padding: 0.26rem 0.6rem;
          border-radius: 100px;
          background: color-mix(in srgb, var(--card-color) 10%, transparent);
          color: var(--card-color);
        }

        .tree-link {
          display: inline-flex; align-items: center; gap: 0.35rem;
          font-size: 0.84rem; font-weight: 600;
          color: var(--card-color);
          text-decoration: none;
        }
        .tree-link svg { transition: transform 0.18s ease; }
        .tree-link:hover svg { transform: translate(2px, -2px); }

        /* ---- mobile: single column, spine on the left ---- */
        @media (max-width: 760px) {
          .tree::before {
            left: 1.55rem;
          }

          .tree-row {
            grid-template-columns: 3.1rem minmax(0, 1fr);
            gap: 0.75rem;
          }

          .tree-node {
            grid-column: 1;
          }

          .tree-row.side-left .tree-card-shell,
          .tree-row.side-right .tree-card-shell {
            grid-column: 2;
            justify-self: start;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="svc-container">
        <motion.div
          className="svc-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="svc-eyebrow">What We Build</p>
          <h2 className="svc-title">Our Services</h2>
          <p className="svc-lede">
            Four ways we help Zimbabwean businesses grow with the right
            technology.
          </p>
        </motion.div>

        <div className="tree">
          {SERVICES.map((service, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={service.id}
                className={`tree-row ${isLeft ? "side-left" : "side-right"}`}
                style={{ "--card-color": service.color }}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="tree-node">
                  <service.icon size={21} />
                  <span className="tree-index">{i + 1}</span>
                </div>

                <div className="tree-card-shell">
                  <div className="tree-card">
                    <p className="tree-subtitle">{service.subtitle}</p>
                    <h3 className="tree-card-title">{service.title}</h3>
                    <p className="tree-desc">{service.description}</p>
                    <div className="tree-tags">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tree-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={service.link} className="tree-link">
                      <span>Learn more</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
