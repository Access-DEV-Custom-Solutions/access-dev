import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const fromSignup = location.state?.fromSignup;
  const userName = location.state?.userName;

  const [projectData, setProjectData] = useState({
    firstname: userName || "",
    email: "",
    service: "",
    details: "",
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("firstname", projectData.firstname);
    formData.append("email", projectData.email);
    formData.append("service", projectData.service);
    formData.append("details", projectData.details);
    if (uploadedFile) {
      formData.append("requirements_file", uploadedFile);
    }

    fetch("https://access-dev.onrender.com/requests", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setProjectData({ firstname: "", email: "", service: "", details: "" });
        setUploadedFile(null);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFile(file);
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };
  const removeFile = () => setUploadedFile(null);

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  return (
    <section className="contact-page">
      {/* Animated Background */}
      <div className="contact-bg">
        <div className="contact-glow contact-glow-1"></div>
        <div className="contact-glow contact-glow-2"></div>
        <div className="contact-glow contact-glow-3"></div>
        <div className="contact-grid-pattern"></div>
        <div className="contact-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="contact-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="contact-header-icon"
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </motion.div>
          <h1 className="contact-title">
            <span className="title-bracket">&lt;</span>
            Get in Touch
            <span className="title-bracket">/&gt;</span>
          </h1>
          <p className="contact-subtitle">Have a project in mind? Let's build it together.</p>
        </motion.div>

        {/* Welcome Banner for users from SignUp */}
        {fromSignup && (
          <motion.div className="welcome-banner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="welcome-banner-content">
              <motion.span className="welcome-icon"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >👋</motion.span>
              <div>
                <h3>Welcome{userName ? `, ${userName.split(' ')[0]}` : ''}!</h3>
                <p>Your account has been created. Now tell us about your custom project below.</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="contact-layout">
          {/* LEFT: Contact Form */}
          <motion.div className="contact-form-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ boxShadow: "0 8px 40px rgba(35, 85, 225, 0.08)" }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input onChange={(e) => setProjectData({ ...projectData, firstname: e.target.value })}
                    type="text" id="name" value={projectData.firstname}
                    placeholder="Tawanda Madanhire" required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input onChange={(e) => setProjectData({ ...projectData, email: e.target.value })}
                    value={projectData.email} type="email" id="email"
                    placeholder="tawanda@example.com" required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" required value={projectData.service}
                  onChange={(e) => setProjectData({ ...projectData, service: e.target.value })}
                >
                  <option value="">Select a service...</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="web">Web Development</option>
                  <option value="redesign">Web Redesigning</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="other">Other / Multiple</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea onChange={(e) => setProjectData({ ...projectData, details: e.target.value })}
                  value={projectData.details} id="message" rows="5"
                  placeholder="Tell us about your project, goals, timeline..." required
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="form-group">
                <label>Requirements Document (Optional)</label>
                <p className="upload-hint">Upload a document or image with your project requirements</p>
                {!uploadedFile ? (
                  <motion.div className={`upload-zone ${isDragging ? "dragging" : ""}`}
                    onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                    onClick={() => document.getElementById("fileInput").click()}
                    whileHover={{ scale: 1.01, borderColor: "var(--color-blue)" }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <motion.div className="upload-icon"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                    </motion.div>
                    <p className="upload-text"><span>Click to browse</span> or drag and drop</p>
                    <p className="upload-formats">PDF, DOC, DOCX, PNG, JPG (Max 10MB)</p>
                    <input id="fileInput" type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFileChange} style={{ display: "none" }} />
                  </motion.div>
                ) : (
                  <motion.div className="uploaded-file-card"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="file-info">
                      <motion.div className="file-icon-wrap" initial={{ rotate: -10 }} animate={{ rotate: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </motion.div>
                      <div className="file-details">
                        <p className="file-name">{uploadedFile.name}</p>
                        <p className="file-size">{formatFileSize(uploadedFile.size)}</p>
                      </div>
                    </div>
                    <motion.button type="button" className="file-remove-btn" onClick={removeFile}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,107,107,0.15)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </motion.button>
                  </motion.div>
                )}
              </div>

              <motion.button type="submit" className="btn-submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div className="spinner" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 11-6.219-8.56"></path>
                      </svg>
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: Contact Info */}
          <motion.div className="contact-info-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div className="info-card"
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(35, 85, 225, 0.08)" }}
            >
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">Reach out to us directly</p>
              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div>
                    <p className="info-label">Email</p>
                    <a href="mailto:madanhiretawanda@gmail.com" className="info-value">madanhiretawanda@gmail.com</a>
                    <a href="mailto:malvinhaparimwi@gmail.com" className="info-value">malvinhaparimwi@gmail.com</a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <p className="info-label">Phone</p>
                    <a href="tel:+263776642351" className="info-value">+263 77 664 2351</a>
                    <a href="tel:+263714882607" className="info-value">+263 71 488 2607</a>
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
            </motion.div>

            <motion.div className="info-card"
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(35, 85, 225, 0.08)" }}
            >
              <h3 className="info-title">Follow Us</h3>
              <div className="social-links">
                <motion.a href="https://github.com/Malvinhaparimwi" className="social-link"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 6, borderColor: "var(--color-blue)", color: "var(--color-blue)" }}
                >
                  <svg className="social-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                  GitHub
                </motion.a>
                <motion.a href="https://linkedin.com/company/tm-access-dev" className="social-link"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 6, borderColor: "var(--color-blue)", color: "var(--color-blue)" }}
                >
                  <svg className="social-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;