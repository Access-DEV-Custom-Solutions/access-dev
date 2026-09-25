import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Boxes, Check, ArrowRight } from "lucide-react";

const PACKAGES = [
  {
    id: "off-shelf",
    icon: Package,
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
    color: "var(--color-blue)",
    link: "/projects",
    btnText: "View Projects",
    badge: "Popular",
  },
  {
    id: "custom",
    icon: Boxes,
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
    color: "var(--color-teal)",
    link: "/signup",
    btnText: "Get Started",
    badge: "Premium",
  },
];

function PackageBuilder() {
  return (
    <section id="package-builder" className="packages-section">
      <div className="packages-container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Two Ways To Work With Us</span>
          <h2>Package Solutions</h2>
          <p>Choose the right fit for your business.</p>
        </motion.div>

        <div className="packages-grid">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className="card card-hover package-card"
              style={{ "--pkg-color": pkg.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="package-card-head">
                <div className="package-icon-box">
                  <pkg.icon size={24} />
                </div>
                <span className="package-badge">{pkg.badge}</span>
              </div>

              <p className="package-subtitle">{pkg.subtitle}</p>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-desc">{pkg.description}</p>

              <div className="package-features">
                {pkg.features.map((feature) => (
                  <div key={feature} className="package-feature">
                    <span className="package-feature-check">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={pkg.link} className="btn btn-primary btn-block">
                {pkg.btnText}
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
