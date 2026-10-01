import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe2, RotateCw, Cpu, Wrench, Bot } from "lucide-react";

const SERVICES = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform apps built with modern frameworks, from first MVP to production. We design, build and publish to the App Store and Google Play.",
    link: "/services/mobile",
  },
  {
    id: "web",
    icon: Globe2,
    title: "Web Development",
    description:
      "Responsive sites and web apps, from landing pages to real-time dashboards. Fast, secure and built to grow with your business.",
    link: "/services/web",
  },
  {
    id: "redesign",
    icon: RotateCw,
    title: "Web Redesign",
    description:
      "Outdated sites rebuilt into fast, modern experiences that convert better. We keep what works and fix what doesn't.",
    link: "/services/redesign",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI Solutions",
    description:
      "Custom ML models, NLP chatbots and computer vision for real business problems, integrated into the tools your team already uses.",
    link: "/services/ai",
  },
  {
    id: "it-support",
    icon: Wrench,
    title: "IT Support & Repairs",
    description:
      "Computer repairs, upgrades and maintenance for businesses and schools. We also set up and prepare school computer labs for exams, so every machine is ready on the day.",
    link: "/contact",
    cta: "Talk to us",
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics",
    description:
      "Robotics and automation projects, from hands-on STEM robotics for schools to custom hardware that automates everyday tasks.",
    link: "/contact",
    cta: "Talk to us",
  },
];

const pad = (n) => String(n).padStart(2, "0");

function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="services" className="services-section">
      <motion.div
        className="services-board"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="services-intro">
          <h2 className="services-heading">Services</h2>
          <p className="services-lead">
            We help businesses grow with the right technology, tailored to
            your goals.
          </p>
        </div>

        <ol className="services-list">
          {SERVICES.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className={`services-item${i === active ? " is-active" : ""}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="services-item-num">{pad(i + 1)}</span>
                <span className="services-item-title">{item.title}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="services-panel" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={service.id}
              className="services-panel-body"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <service.icon className="services-panel-icon" size={64} strokeWidth={1.1} />
              <div>
                <h3 className="services-panel-title">{service.title}</h3>
                <p className="services-panel-desc">{service.description}</p>
                <Link to={service.link} className="services-panel-link">
                  {service.cta ?? "Explore service"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
