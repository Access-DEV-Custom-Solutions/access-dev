import { Globe } from "lucide-react";

const TOP_ROW = [
  {
    image: "/images/industries/education.jpg",
    name: "Education",
    color: "var(--adev-blue)",
  },
  {
    image: "/images/industries/healthcare.webp",
    name: "Healthcare",
    color: "var(--adev-teal)",
  },
  {
    image: "/images/industries/agriculture.jpeg",
    name: "Agriculture",
    color: "var(--adev-violet)",
  },
  {
    image: "/images/industries/finance.jpg",
    name: "Finance",
    color: "var(--adev-pink)",
  },
];

const BOTTOM_ROW = [
  {
    image: "/images/industries/retail.jpg",
    name: "Retail",
    color: "var(--adev-pink)",
  },
  {
    image: "/images/industries/manufacturing.jpg",
    name: "Manufacturing",
    color: "var(--adev-blue)",
  },
  {
    image: "/images/industries/logistics.webp",
    name: "Logistics",
    color: "var(--adev-teal)",
  },
  {
    image: "/images/industries/realestate.webp",
    name: "Real Estate",
    color: "var(--adev-violet)",
  },
];

function IndustryCard({ industry }) {
  return (
    <div className="ind-card" style={{ "--card-color": industry.color }}>
      <div className="ind-card-image">
        <img src={industry.image} alt={industry.name} loading="lazy" />
      </div>
      <span className="ind-card-label">{industry.name}</span>
    </div>
  );
}

function Industries() {
  return (
    <section className="ind-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .ind-section {
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
          padding: 6.5rem 0;
          overflow: hidden;
        }

        .ind-header { max-width: 34rem; margin: 0 auto 3rem; padding: 0 6vw; text-align: center; }
        .ind-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--adev-violet);
          margin: 0 0 0.75rem;
        }
        .ind-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          letter-spacing: -0.02em;
          margin: 0 0 0.75rem;
          color: var(--adev-ink);
        }
        .ind-subtitle { color: var(--adev-muted); margin: 0; }

        .ind-marquee-row {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          margin-bottom: 1rem;
        }
        .ind-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: ind-scroll-left 38s linear infinite;
        }
        .ind-track.reverse { animation-name: ind-scroll-right; }
        .ind-marquee-row:hover .ind-track { animation-play-state: paused; }

        @keyframes ind-scroll-left { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes ind-scroll-right { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }

        .ind-card {
          position: relative;
          flex-shrink: 0;
          width: 220px; height: 150px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--adev-border);
          box-shadow: 0 1px 2px rgba(16,22,42,0.05);
        }
        .ind-card-image { position: absolute; inset: 0; }
        .ind-card-image img {
          width: 100%; height: 100%; object-fit: cover;
          filter: grayscale(0.4) brightness(0.92);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .ind-card:hover .ind-card-image img {
          filter: grayscale(0) brightness(1);
          transform: scale(1.05);
        }
        .ind-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(8,11,20,0.75) 100%);
        }
        .ind-card::after {
          content: '';
          position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          background: var(--card-color);
        }
        .ind-card-label {
          position: absolute; left: 0.9rem; bottom: 0.8rem; z-index: 1;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600; font-size: 0.95rem;
          color: #fff;
        }

        @media (prefers-reduced-motion: reduce) {
          .ind-track { animation: none; }
        }
      `}</style>

      <div className="ind-header">
        <p className="ind-eyebrow">
          <Globe
            size={13}
            style={{
              display: "inline",
              verticalAlign: "-2px",
              marginRight: "6px",
            }}
          />
          Where we work
        </p>
        <h2 className="ind-title">Industries We Serve</h2>
        <p className="ind-subtitle">
          Delivering solutions across diverse sectors
        </p>
      </div>

      <div className="ind-marquee-row">
        <div className="ind-track">
          {[...TOP_ROW, ...TOP_ROW, ...TOP_ROW].map((industry, i) => (
            <IndustryCard key={`top-${i}`} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
