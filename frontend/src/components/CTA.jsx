import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="eyebrow">Let's Build</span>
        <h2 className="cta-title">
          Ready to ship your <span className="accent">next product?</span>
        </h2>
        <p className="cta-subtitle">
          Tell us what you're building. We'll figure out the fastest, most
          reliable way to get it live.
        </p>

        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary">
            Get Started
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            <Mail size={17} />
            Talk to Us
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
