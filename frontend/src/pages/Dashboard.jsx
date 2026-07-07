import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Pipeline stages, in order
const STAGES = [
  "Requested",
  "In Review",
  "In Development",
  "Testing",
  "Delivered",
];

// ---- MOCK DATA (visuals only — swap for API data later) ----
const MOCK_PROJECTS = [
  {
    id: "a3f9c2d1",
    service: "Web Development",
    details: "Marketing site with booking flow for a Harare events venue.",
    submitted: "2026-06-14",
    stage: 4,
  },
  {
    id: "7be2f014",
    service: "Mobile Development",
    details: "Expo app for tracking delivery riders in real time.",
    submitted: "2026-06-28",
    stage: 2,
  },
  {
    id: "c9012aef",
    service: "Artificial Intelligence",
    details: "WhatsApp bot for automated invoice reminders.",
    submitted: "2026-07-01",
    stage: 1,
  },
  {
    id: "f10dcb44",
    service: "Robotics",
    details: "Sensor dashboard for a crop-monitoring prototype.",
    submitted: "2026-07-05",
    stage: 0,
  },
];
// ---------------------------------------------------------------

const stageAccent = (index) => {
  switch (index) {
    case 0:
      return "var(--stage-requested)";
    case 1:
      return "var(--stage-review)";
    case 2:
      return "var(--stage-dev)";
    case 3:
      return "var(--stage-testing)";
    case 4:
      return "var(--stage-delivered)";
    default:
      return "var(--stage-requested)";
  }
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="req-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 * index }}
    >
      <div className="req-pipeline">
        {STAGES.map((label, i) => {
          const isDone = i < project.stage;
          const isActive = i === project.stage;
          const isLast = i === STAGES.length - 1;
          return (
            <div className="req-stage" key={label}>
              <div className="req-stage-marker">
                <span
                  className={`req-dot ${isDone ? "req-dot-done" : ""} ${isActive ? "req-dot-active" : ""}`}
                  style={{
                    "--dot-color": stageAccent(i),
                  }}
                />
                {!isLast && (
                  <span
                    className={`req-line ${isDone ? "req-line-done" : ""}`}
                  />
                )}
              </div>
              <span
                className={`req-stage-label ${isActive ? "req-stage-label-active" : ""}`}
              >
                {label}
                {isActive && <span className="req-cursor">_</span>}
              </span>
            </div>
          );
        })}
      </div>

      <div className="req-body">
        <div className="req-top-row">
          <span className="req-service">{project.service}</span>
          <span className="req-id">#{project.id}</span>
        </div>
        <p className="req-details">{project.details}</p>
        <div className="req-bottom-row">
          <span className="req-date">Submitted {project.submitted}</span>
          <span
            className="req-status-pill"
            style={{ "--pill-color": stageAccent(project.stage) }}
          >
            {STAGES[project.stage]}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [projects] = useState(MOCK_PROJECTS);

  useEffect(() => {
    const storedEmail = localStorage.getItem("user_email");
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  const total = projects.length;
  const delivered = projects.filter(
    (p) => p.stage === STAGES.length - 1,
  ).length;
  const active = total - delivered;

  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");
    navigate("/signin");
  };

  return (
    <section className="dashboard-page">
      <div className="dash-bg">
        <div className="dash-glow dash-glow-1"></div>
        <div className="dash-glow dash-glow-2"></div>
        <div className="dash-grid-pattern"></div>
      </div>

      <div className="dashboard-container">
        {/* Topbar */}
        <motion.div
          className="dash-topbar"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="dash-brand">
            <span className="title-bracket">&lt;</span>
            Dashboard
            <span className="title-bracket">/&gt;</span>
          </div>
          <div className="dash-user">
            <span className="dash-user-email">{userEmail || "there"}</span>
            <button className="dash-signout" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </motion.div>

        <motion.p
          className="dash-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Welcome back{userEmail ? `, ${userEmail.split("@")[0]}` : ""}. Here's
          where your projects stand.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          className="dash-stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="stat-card">
            <span className="stat-comment">// total requests</span>
            <span className="stat-number">{total}</span>
          </div>
          <div className="stat-card">
            <span className="stat-comment">// in progress</span>
            <span className="stat-number stat-number-active">{active}</span>
          </div>
          <div className="stat-card">
            <span className="stat-comment">// delivered</span>
            <span className="stat-number stat-number-done">{delivered}</span>
          </div>
        </motion.div>

        {/* Requests list */}
        <div className="dash-section-header">
          <span className="stat-comment">// your requests</span>
          <Link to="/contact" className="dash-new-btn">
            New Request
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="dash-empty">
            <p>No requests yet.</p>
            <Link to="/contact" className="dash-new-btn">
              Submit your first project
            </Link>
          </div>
        ) : (
          <div className="req-list">
            {projects.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
