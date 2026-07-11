import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function WebDev() {
  const highlights = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '3 Weeks', label: 'Average Delivery' },
    { number: '24/7', label: 'Support Available' },
    { number: 'Maximum', label: 'Website Optimization' }
  ]

  const features = [
    {
      icon: '📋',
      title: 'Strategic Copy & Wireframes',
      desc: 'We craft compelling narratives and design scalable wireframe systems tailored to your brand voice and audience.'
    },
    {
      icon: '⚡',
      title: 'Performance-Optimized Builds',
      desc: 'Every pixel measured. Every interaction refined. Websites that load fast and convert visitors into customers.'
    },
    {
      icon: '📊',
      title: 'Analytics & Conversion Tracking',
      desc: 'Launch-ready with full analytics setup, heat mapping, and conversion funnels so you can measure what matters.'
    },
    {
      icon: '👨‍💻',
      title: 'Dedicated Project Manager',
      desc: 'A real human guiding your project from kickoff to launch. No ticket queues, just direct conversations.'
    }
  ]

  const carePlans = [
    { icon: '🔒', title: 'Security Updates', desc: 'Regular patches, SSL monitoring, and firewall protection' },
    { icon: '🚀', title: 'Speed Optimization', desc: 'Core Web Vitals tuning, caching strategies, and CDN setup' },
    { icon: '🎯', title: 'A/B Testing & CRO', desc: 'Data-driven experiments to boost your conversion rates' },
    { icon: '♿', title: 'Accessibility Compliance', desc: 'WCAG audits and remediation for inclusive experiences' }
  ]

  const process = [
    { step: '01', title: 'Discovery', desc: 'Deep dive into your business, competitors, and customer personas' },
    { step: '02', title: 'Strategy', desc: 'Collaborative workshop mapping user journeys and conversion paths' },
    { step: '03', title: 'Design', desc: 'High-fidelity mockups in Figma with unlimited revision rounds' },
    { step: '04', title: 'Build', desc: 'Clean code using React, Next.js, or Laravel — tailored to your needs' },
    { step: '05', title: 'Launch', desc: 'Rigorous QA, deployment, and post-launch monitoring' },
    { step: '06', title: 'Grow', desc: 'Monthly analytics reviews and continuous optimization' }
  ]

  return (
    <section className="service-detail-page">
      {/* Animated Background */}
      <div className="service-bg">
        <div className="service-glow service-glow-1"></div>
        <div className="service-glow service-glow-2"></div>
        <div className="service-grid-pattern"></div>
        <div className="service-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="service-particle"
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

      <div className="service-detail-container">

        {/* Hero Section */}
        <motion.div className="service-hero"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <div className="service-hero-content">
            <motion.span className="service-badge"
              initial={{ opacity: 0, scale: 0, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <span className="badge-dot"></span>
              Web Development
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            >
              Your business deserves a website that <span className="gradient-text">actually works</span>
            </motion.h1>
            
            <motion.p className="service-hero-desc"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
            >
              We design, build, and manage high-converting websites for businesses across Africa and beyond. 
              Custom-built, conversion-focused, and ready in as little as 3 weeks.
            </motion.p>

            <motion.div className="service-hero-buttons"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link to="/contact" className="hero-cta-btn">
                Get a Free Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div className="service-hero-image"
            initial={{ opacity: 0, scale: 0.85, rotateY: 15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            <div className="hero-mockup">
              <div className="mockup-screen">
                <div className="mockup-dots"><span></span><span></span><span></span></div>
                <div className="mockup-content">
                  <div className="mockup-line w-60"></div>
                  <div className="mockup-line w-80"></div>
                  <div className="mockup-line w-40"></div>
                  <div className="mockup-image-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                    </svg>
                  </div>
                  <div className="mockup-line w-70"></div>
                  <div className="mockup-line w-50"></div>
                  <div className="mockup-button"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div className="highlights-bar"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          {highlights.map((item, i) => (
            <motion.div key={i} className="highlight-item"
              initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <motion.span className="highlight-number"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                {item.number}
              </motion.span>
              <span className="highlight-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* IMAGE SECTION 1 */}
        <motion.div className="image-section"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="image-section-wrap">
            <img src="/images/services/webdev.avif" alt="Web Development Process" className="image-section-img" />
            <div className="image-section-overlay">
              <motion.div className="image-section-content"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="image-section-badge">Our Work</span>
                <h2>Websites Built for <span className="gradient-text">Conversion</span></h2>
                <p>Messaging, UX, and development stitched into one seamless build. We run collaborative workshops, lay out user journeys in Figma, then ship polished, high-performance components.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features List */}
        <div className="service-section">
          <div className="features-list">
            {features.map((feature, i) => (
              <motion.div key={i} className="feature-list-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.95 }} 
                whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 80 }}
                whileHover={{ x: 8, borderColor: 'var(--color-blue)', boxShadow: '0 8px 30px rgba(35,85,225,0.12)', y: -4 }}
              >
                <motion.span className="feature-list-icon"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {feature.icon}
                </motion.span>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGE SECTION 2 - Split */}
        <div className="service-section">
          <div className="split-layout">
            <motion.div className="split-image"
              initial={{ opacity: 0, x: -50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} 
              viewport={{ once: true }} transition={{ duration: 0.7, type: "spring" }}
            >
              <img src="/images/services/major.png" alt="Our Process" className="split-img" />
            </motion.div>
            
            <motion.div className="split-content"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <h2 className="service-section-title left-align">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="service-section-subtitle left-align">
                From first contact to launch day — here's how we deliver exceptional results.
              </p>
              
              <div className="process-list">
                {process.map((item, i) => (
                  <motion.div key={i} className="process-list-item"
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ x: 6, borderColor: 'var(--color-blue)', boxShadow: '0 4px 15px rgba(35,85,225,0.08)' }}
                  >
                    <motion.span className="process-list-number"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      {item.step}
                    </motion.span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* IMAGE SECTION 3 */}
        <motion.div className="image-section"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="image-section-wrap">
            <img src="/images/services/webdev3.png" alt="Website Maintenance" className="image-section-img" />
            <div className="image-section-overlay">
              <motion.div className="image-section-content"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="image-section-badge">Care Plans</span>
                <h2>Hassle-Free <span className="gradient-text">Maintenance</span></h2>
                <p>Care plans that keep things fast, secure, and evolving. Think of us as your embedded growth team — monitoring uptime, shipping experiments, and briefing you weekly with results.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Care Plans Grid */}
        <div className="service-section">
          <div className="care-grid">
            {carePlans.map((plan, i) => (
              <motion.div key={i} className="care-card"
                initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
                whileHover={{ y: -8, borderColor: 'var(--color-blue)', boxShadow: '0 12px 30px rgba(35,85,225,0.12)' }}
              >
                <motion.span className="care-icon"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {plan.icon}
                </motion.span>
                <h4>{plan.title}</h4>
                <p>{plan.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div className="detail-cta"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(35,85,225,0.1)' }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Ready to launch your website?
          </motion.h2>
          <p>Let's build something that drives real results for your business.</p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="cta-primary-btn">
              Get a Free Quote →
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default WebDev