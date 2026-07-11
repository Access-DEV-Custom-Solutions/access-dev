import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function WebRedesign() {
  const highlights = [
    { number: '3x', label: 'Avg. Conversion Increase' },
    { number: '2 Weeks', label: 'Typical Turnaround' },
    { number: '40%', label: 'Faster Load Times' },
    { number: '100%', label: 'Mobile Responsive' }
  ]

  const features = [
    { icon: '🎨', title: 'Modern UI/UX Overhaul', desc: 'Fresh designs that reflect current trends while staying true to your brand identity.' },
    { icon: '⚡', title: 'Performance Boost', desc: 'We optimize every asset, implement caching, and migrate to faster infrastructure.' },
    { icon: '📱', title: 'Full Mobile Optimization', desc: 'Your site will look and work flawlessly on phones, tablets, and desktops.' },
    { icon: '🔍', title: 'SEO & Accessibility', desc: 'Built-in SEO best practices and WCAG compliance for wider reach.' }
  ]

  const process = [
    { step: '01', title: 'Audit', desc: 'Deep analysis of your current site performance, UX, and SEO' },
    { step: '02', title: 'Strategy', desc: 'Redesign roadmap with prioritized improvements and quick wins' },
    { step: '03', title: 'Redesign', desc: 'New designs in Figma with your brand at the center' },
    { step: '04', title: 'Rebuild', desc: 'Clean code on modern stack — React, Next.js, or Laravel' },
    { step: '05', title: 'Migrate', desc: 'Seamless content migration with zero downtime' },
    { step: '06', title: 'Optimize', desc: 'Post-launch monitoring and continuous improvements' }
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
              <span className="badge-dot"></span>Web Redesign
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Give your website the <span className="gradient-text">makeover</span> it deserves
            </motion.h1>
            <motion.p className="service-hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Transform your outdated website into a modern, high-performance digital experience that converts visitors into customers.
            </motion.p>
            <motion.div className="service-hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Link to="/contact" className="hero-cta-btn">Get a Free Quote →</Link>
            </motion.div>
          </div>
          <motion.div className="service-hero-image"
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            <div className="redesign-comparison">
              <div className="comparison-card old">
                <span className="comparison-label">Before</span>
                <div className="comparison-content">
                  <div className="comp-line w-100"></div>
                  <div className="comp-line w-60"></div>
                  <div className="comp-box"></div>
                  <div className="comp-line w-80"></div>
                </div>
              </div>
              <div className="comparison-arrow">→</div>
              <div className="comparison-card new">
                <span className="comparison-label">After</span>
                <div className="comparison-content new-style">
                  <div className="comp-line w-100 gradient-bg"></div>
                  <div className="comp-line w-60"></div>
                  <div className="comp-box modern"></div>
                  <div className="comp-line w-80"></div>
                </div>
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
            <img src="/images/services/redesign.png" alt="Website Redesign" className="image-section-img" />
            <div className="image-section-overlay">
              <motion.div className="image-section-content"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="image-section-badge">Transformation</span>
                <h2>From <span className="gradient-text">Outdated</span> to Outstanding</h2>
                <p>We've helped businesses across Africa modernize their digital presence and see real results.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="service-section">
          <div className="split-layout">
            <motion.div className="split-image"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <img src="/images/services/webdev.avif" alt="Redesign Process" className="split-img" />
            </motion.div>
            <motion.div className="split-content"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <h2 className="service-section-title left-align">Our <span className="gradient-text">Redesign Process</span></h2>
              <p className="service-section-subtitle left-align">A systematic approach to transforming your digital presence.</p>
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
          <h2>Ready to transform your website?</h2>
          <p>Let's build a site that your business deserves.</p>
          <Link to="/contact" className="cta-primary-btn">Get a Free Quote →</Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WebRedesign