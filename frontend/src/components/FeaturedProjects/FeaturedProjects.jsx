import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FEATURED_PROJECTS = [
  {
    id: "zimdirect",
    title: "ZimDirect Harvest",
    category: "Web Development",
    image: "/images/projects/farming.jpeg",
    description:
      "Agricultural marketplace connecting Zimbabwean farmers directly with buyers.",
    tags: ["PHP", "Laravel", "Blade"],
    color: "var(--color-teal)",
  },
  {
    id: "sms-chatbot",
    title: "SMS Chatbot",
    category: "AI Solutions",
    image: "/images/projects/chatbot.webp",
    description:
      "AI-powered chatbot for automated conversations and support over SMS.",
    tags: ["JavaScript", "TypeScript", "Kotlin"],
    color: "#8B5CF6",
  },
  {
    id: "ros-bot",
    title: "My ROS Bot",
    category: "Robotics",
    image: "/images/projects/ros.jpeg",
    description:
      "ROS2 Jazzy robot built from scratch, with full hardware and software integration.",
    tags: ["C++", "Python"],
    color: "#E255A1",
  },
];

function FeaturedProjects() {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Our Work</span>
          <h2>Featured Projects</h2>
          <p>A few things we've built for real people and real problems.</p>
        </motion.div>

        <div className="featured-grid">
          {FEATURED_PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              className="featured-card"
              style={{ "--project-color": project.color }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="featured-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="featured-body">
                <span className="featured-category">{project.category}</span>
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-desc">{project.description}</p>
                <div className="featured-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="featured-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="featured-footer">
          <Link to="/projects" className="btn btn-outline-dark">
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
