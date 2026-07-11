import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function MobileDev() {
  const highlights = [
    { number: '24/7', label: 'Support available' },
    { number: '4 Weeks', label: 'Average Launch' },
    { number: 'iOS & Android', label: 'Cross-Platform' },
    { number: 'Maximum', label: 'Application Optimization' }
  ]

  const features = [
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ), 
      title: 'Native iOS & Android', 
      desc: 'Swift and Kotlin apps that feel right at home on every device.' 
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ), 
      title: 'Cross-Platform Solutions', 
      desc: 'React Native and Flutter apps that save time without sacrificing quality.' 
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
        </svg>
      ), 
      title: 'Pixel-Perfect UI', 
      desc: 'Custom animations, gestures, and transitions that delight users.' 
    },
    { 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0110 0v4"></path>
        </svg>
      ), 
      title: 'Secure & Scalable', 
      desc: 'Enterprise-grade security with backend APIs that scale to millions.' 
    }
  ]

  const process = [
    { step: '01', title: 'Product Strategy', desc: 'Define MVP scope, user personas, and success metrics' },
    { step: '02', title: 'UX & Wireframing', desc: 'Interactive prototypes tested with real users' },
    { step: '03', title: 'UI Design', desc: 'Custom design system with animations and micro-interactions' },
    { step: '04', title: 'Development', desc: 'Sprint-based builds with weekly demos and feedback loops' },
    { step: '05', title: 'Testing', desc: 'Automated CI/CD, beta testing, and performance profiling' },
    { step: '06', title: 'App Store Launch', desc: 'ASO optimization, review management, and launch strategy' }
  ]

  const platforms = [
    { 
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5c-1.5 0-2.7 1.2-2.7 2.7 0 .8.3 1.5.9 2 .6.5 1.2.8 1.8.8s1.2-.3 1.8-.8c.6-.5.9-1.2.9-2 0-1.5-1.2-2.7-2.7-2.7z"></path>
          <path d="M17 21H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2z"></path>
          <line x1="9" y1="17" x2="15" y2="17"></line>
        </svg>
      ), 
      name: 'iOS', 
      desc: 'Swift, SwiftUI, Core Data' 
    },
    { 
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="1"></circle>
          <circle cx="15" cy="9" r="1"></circle>
          <path d="M7 14h10"></path>
          <path d="M12 14v4"></path>
          <path d="M8 18h8"></path>
          <path d="M5 11c0-4 3-7 7-7s7 3 7 7"></path>
          <path d="M7 3L5 1"></path>
          <path d="M17 3l2-2"></path>
        </svg>
      ), 
      name: 'Android', 
      desc: 'Kotlin, Jetpack Compose' 
    },
    { 
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.5"></circle>
          <path d="M12 2c-3.3 5.5-3.3 14.5 0 20"></path>
          <path d="M12 2c3.3 5.5 3.3 14.5 0 20"></path>
          <path d="M2 12c5.5-3.3 14.5-3.3 20 0"></path>
          <path d="M2 12c5.5 3.3 14.5 3.3 20 0"></path>
        </svg>
      ), 
      name: 'React Native', 
      desc: 'JavaScript, TypeScript' 
    },
    { 
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="19 2 5 16 19 16"></polyline>
          <polyline points="5 8 12 15 19 8"></polyline>
          <polyline points="19 22 12 15 5 22"></polyline>
        </svg>
      ), 
      name: 'Flutter', 
      desc: 'Dart, Material Design' 
    }
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
              initial={{ opacity: 0, scale: 0, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <span className="badge-dot"></span>Mobile Development
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Apps people <span className="gradient-text">love</span> to use
            </motion.h1>
            <motion.p className="service-hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              From startup MVPs to enterprise apps with millions of users. We build mobile experiences that are fast, beautiful, and built to scale.
            </motion.p>
            <motion.div className="service-hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Link to="/contact" className="hero-cta-btn">Get a Free Quote →</Link>
            </motion.div>
          </div>
          <motion.div className="service-hero-image"
            initial={{ opacity: 0, scale: 0.85, rotateY: 15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            <div className="hero-mockup phone-mockup">
              <div className="phone-screen">
                <div className="phone-notch"></div>
                <div className="phone-content">
                  <div className="phone-header"></div>
                  <div className="phone-card"></div>
                  <div className="phone-card small"></div>
                  <div className="phone-row"><span></span><span></span></div>
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

        <motion.div className="image-section"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="image-section-wrap">
            <img src="/images/services/appdev1.webp" alt="Mobile Apps" className="image-section-img" />
            <div className="image-section-overlay">
              <motion.div className="image-section-content"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="image-section-badge">Our Apps</span>
                <h2>Beautiful on <span className="gradient-text">Every Screen</span></h2>
                <p>Custom UI components, smooth animations, and intuitive gestures that make your app stand out in the store.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="service-section">
          <h2 className="service-section-title" style={{ textAlign: 'center' }}>Platforms We <span className="gradient-text">Master</span></h2>
          <div className="platforms-grid">
            {platforms.map((p, i) => (
              <motion.div key={i} className="platform-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8, borderColor: 'var(--color-blue)' }}
              >
                <span className="platform-icon">{p.icon}</span>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="service-section">
          <div className="split-layout">
            <motion.div className="split-image"
              initial={{ opacity: 0, x: -50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <img src="/images/services/appdev.png" alt="App Process" className="split-img" />
            </motion.div>
            <motion.div className="split-content"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <h2 className="service-section-title left-align">From Idea to <span className="gradient-text">Mobile App</span></h2>
              <p className="service-section-subtitle left-align">A proven process that takes your vision from concept to launch.</p>
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
          <h2>Ready to build your app?</h2>
          <p>Let's create something that users will love.</p>
          <Link to="/contact" className="cta-primary-btn">Get a Free Quote →</Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MobileDev