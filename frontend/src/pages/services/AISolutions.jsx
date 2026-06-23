import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ServiceDetail.css'

function AISolutions() {
  const highlights = [
    { number: 'Maximum', label: 'AI Model Optimization' },
    { number: '4 Weeks', label: 'Average MVP' },
    { number: '99.9%', label: 'Model Uptime' },
    { number: '24/7', label: 'ML Support' }
  ]

  const features = [
    { icon: '🧠', title: 'Custom AI/ML Models', desc: 'Tailored machine learning models trained on your data for maximum accuracy and business impact.' },
    { icon: '💬', title: 'Intelligent Chatbots', desc: 'NLP-powered conversational AI with context awareness, sentiment analysis, and multi-language support.' },
    { icon: '👁️', title: 'Computer Vision', desc: 'Image recognition, object detection, and visual analytics for automation and insights.' },
    { icon: '📊', title: 'Predictive Analytics', desc: 'Forecast trends, customer behavior, and business outcomes with data-driven predictions.' }
  ]

  const solutions = [
    { icon: '🏥', title: 'Healthcare AI', desc: 'Diagnostic assistance, patient monitoring, and medical imaging analysis' },
    { icon: '💰', title: 'Fintech AI', desc: 'Fraud detection, credit scoring, and algorithmic trading' },
    { icon: '🌾', title: 'AgriTech AI', desc: 'Crop disease detection, yield prediction, and smart irrigation' },
    { icon: '🛒', title: 'Retail AI', desc: 'Recommendation engines, demand forecasting, and customer segmentation' }
  ]

  const process = [
    { step: '01', title: 'Data Assessment', desc: 'Evaluate your data quality, volume, and readiness for AI' },
    { step: '02', title: 'Model Design', desc: 'Architect the right ML approach for your specific problem' },
    { step: '03', title: 'Training', desc: 'Train models using your data with continuous validation' },
    { step: '04', title: 'Integration', desc: 'Deploy models via API or embed directly into your systems' },
    { step: '05', title: 'Testing', desc: 'Rigorous A/B testing and performance benchmarking' },
    { step: '06', title: 'Optimization', desc: 'Continuous model monitoring, retraining, and improvement' }
  ]

  return (
    <section className="service-detail-page">
      <div className="service-bg">
        <div className="service-glow service-glow-1"></div>
        <div className="service-glow service-glow-2"></div>
        <div className="service-grid-pattern"></div>
        <div className="service-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="service-particle"
              style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`, animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 2}px`, height: `${Math.random() * 3 + 2}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="service-detail-container">
        <motion.div className="service-hero"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <div className="service-hero-content">
            <motion.span className="service-badge"
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="badge-dot"></span>AI & ML Solutions
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Intelligence that <span className="gradient-text">transforms</span> your business
            </motion.h1>
            <motion.p className="service-hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              From custom machine learning models to intelligent chatbots. We make AI accessible, practical, and profitable for your business.
            </motion.p>
            <motion.div className="service-hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Link to="/contact" className="hero-cta-btn">Get a Free Quote →</Link>
            </motion.div>
          </div>
          <motion.div className="service-hero-image"
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            <div className="ai-visual">
              <div className="ai-chip">
                <div className="chip-core">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path>
                    <path d="M20 9h3"></path><path d="M20 14h3"></path><path d="M1 9h3"></path><path d="M1 14h3"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="chip-ring"></div>
                <div className="chip-ring delay"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="highlights-bar"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          {highlights.map((item, i) => (
            <motion.div key={i} className="highlight-item"
              initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <span className="highlight-number">{item.number}</span>
              <span className="highlight-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="service-section">
          <h2 className="service-section-title" style={{ textAlign: 'center' }}>AI <span className="gradient-text">Capabilities</span></h2>
          <div className="features-list">
            {features.map((feature, i) => (
              <motion.div key={i} className="feature-list-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                whileHover={{ x: 8, borderColor: 'var(--color-blue)', y: -4 }}
              >
                <span className="feature-list-icon">{feature.icon}</span>
                <div><h4>{feature.title}</h4><p>{feature.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="image-section"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="image-section-wrap">
            <img src="/images/services/ai.webp" alt="AI Solutions" className="image-section-img" />
            <div className="image-section-overlay">
              <motion.div className="image-section-content"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="image-section-badge">Industries</span>
                <h2>AI Across <span className="gradient-text">Every Sector</span></h2>
                <p>We deploy AI solutions that solve real problems in healthcare, finance, agriculture, and retail.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="service-section">
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <motion.div key={i} className="solution-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8, borderColor: 'var(--color-blue)' }}
              >
                <span className="solution-icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="service-section">
          <div className="split-layout">
            <motion.div className="split-image"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <img src="/images/services/model.webp" alt="AI Process" className="split-img" />
            </motion.div>
            <motion.div className="split-content"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <h2 className="service-section-title left-align">Our <span className="gradient-text">AI Pipeline</span></h2>
              <p className="service-section-subtitle left-align">From raw data to deployed intelligence.</p>
              <div className="process-list">
                {process.map((item, i) => (
                  <motion.div key={i} className="process-list-item"
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ x: 6, borderColor: 'var(--color-blue)' }}
                  >
                    <span className="process-list-number">{item.step}</span>
                    <div><h4>{item.title}</h4><p>{item.desc}</p></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div className="detail-cta"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <h2>Ready to leverage AI?</h2>
          <p>Let's build intelligent solutions that give you a competitive edge.</p>
          <Link to="/contact" className="cta-primary-btn">Get a Free Quote →</Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AISolutions