import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Globe2, RotateCw, Cpu } from "lucide-react";

const SERVICES = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform apps built with modern frameworks, from first MVP to production.",
    color: "var(--color-blue)",
    link: "/services/mobile",
  },
  {
    id: "web",
    icon: Globe2,
    title: "Web Development",
    description:
      "Responsive sites and web apps, from landing pages to real-time dashboards.",
    color: "var(--color-teal)",
    link: "/services/web",
  },
  {
    id: "redesign",
    icon: RotateCw,
    title: "Web Redesign",
    description:
      "Outdated sites rebuilt into fast, modern experiences that convert better.",
    color: "#8B5CF6",
    link: "/services/redesign",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Solutions",
    description:
      "Custom ML models, NLP chatbots, and computer vision for real business problems.",
    color: "#E255A1",
    link: "/services/ai",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-dots top-left" />
      <div className="services-dots bottom-right" />

      <div className="services-container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Services</h2>
          <p>
            Four ways we help Zimbabwean businesses grow with the right
            technology.
          </p>
        </motion.div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link
                to={service.link}
                className="service-card"
                style={{ "--icon-color": service.color }}
              >
                <span className="service-icon">
                  <service.icon size={34} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-desc">{service.description}</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
