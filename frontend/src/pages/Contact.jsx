import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [projectData, setProjectData] = useState({
    fullname: "",
    email: "",
    service: "",
    details: "",
  });

  const [modal, setModal] = useState({
    show: false,
    status: "", // "success" | "error"
    message: "",
  });

  const closeModal = () => setModal({ show: false, status: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://access-dev.onrender.com/requests", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setModal({
          show: true,
          status: "success",
          message:
            "Thanks! Your message has been sent. We'll get back to you soon.",
        });
        setProjectData({
          fullname: "",
          email: "",
          service: "",
          details: "",
        });
      })
      .catch((error) => {
        setModal({
          show: true,
          status: "error",
          message:
            "Something went wrong sending your message. Please try again.",
        });
        console.error("Contact form submit error:", error);
      });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">
            <span className="title-bracket">&lt;</span>
            Get in Touch
            <span className="title-bracket">/&gt;</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's build it together.
          </p>
        </div>

        <div className="contact-layout">
          {/* LEFT: Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    onChange={(e) =>
                      setProjectData({
                        ...projectData,
                        fullname: e.target.value,
                      })
                    }
                    type="text"
                    id="name"
                    value={projectData.fullname}
                    placeholder="Tawanda Madanhire"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    onChange={(e) =>
                      setProjectData({ ...projectData, email: e.target.value })
                    }
                    value={projectData.email}
                    type="email"
                    id="email"
                    placeholder="tawanda@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  required
                  value={projectData.service}
                  onChange={(e) =>
                    setProjectData({ ...projectData, service: e.target.value })
                  }
                >
                  <option value="">Select a service...</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="web">Web Development</option>
                  <option value="robotics">Robotics</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="other">Other / Multiple</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  onChange={(e) =>
                    setProjectData({ ...projectData, details: e.target.value })
                  }
                  value={projectData.details}
                  id="message"
                  rows="6"
                  placeholder="Tell us about your project, goals, timeline..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="contact-info-wrapper">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">Reach out to us directly</p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div>
                    <p className="info-label">Email</p>
                    <a
                      href="mailto:madanhiretawanda@gmail.com"
                      className="info-value"
                    >
                      madanhiretawanda@gmail.com
                    </a>
                    <a
                      href="mailto:malvinhaparimwi@gmail.com"
                      className="info-value"
                    >
                      malvinhaparimwi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <p className="info-label">Phone</p>
                    <a href="tel:+263 77 664 2351" className="info-value">
                      +263 77 664 2351
                    </a>
                    <a href="tel:+263 71 488 2607" className="info-value">
                      +263 71 488 2607
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <p className="info-label">Location</p>
                    <p className="info-value">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">Follow Us</h3>
              <div className="social-links">
                <a
                  href="https://github.com/Malvinhaparimwi"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="social-icon"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/company/tm-access-dev"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="social-icon"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Modal */}
      {modal.show && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-box modal-${modal.status}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-icon">
              {modal.status === "success" ? "✅" : "⚠️"}
            </div>
            <h3 className="modal-title">
              {modal.status === "success"
                ? "Message Sent"
                : "Something Went Wrong"}
            </h3>
            <p className="modal-message">{modal.message}</p>
            <button className="btn-submit modal-ok" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
