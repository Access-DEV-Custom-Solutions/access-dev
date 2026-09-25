import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    id: "discovery",
    icon: Search,
    title: "Discovery",
    description:
      "We learn about your business, goals and users, then agree on scope, timeline and budget.",
  },
  {
    id: "design",
    icon: PenTool,
    title: "Design",
    description:
      "Wireframes and visual designs you can review and adjust before any code is written.",
  },
  {
    id: "build",
    icon: Code2,
    title: "Build",
    description:
      "We develop in short cycles and share progress regularly so there are no surprises.",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy, train your team and stay on hand for fixes, updates and new features.",
  },
];

function HowWeWork() {
  return (
    <section className="process-section">
      <div className="process-container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Our Process</span>
          <h2>How We Work</h2>
          <p>From first conversation to launch, here's what to expect.</p>
        </motion.div>

        <ol className="process-steps">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.id}
              className="process-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="process-step-head">
                <span className="process-step-icon">
                  <step.icon size={24} strokeWidth={1.75} />
                </span>
                <span className="process-step-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowWeWork;
