import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ServiceDetail.css'

function MobileDev() {
  const highlights = [
    { number: '24/7', label: 'Support available' },
    { number: '4 Weeks', label: 'Average Launch' },
    { number: 'iOS & Android', label: 'Cross-Platform' },
    { number: 'Maximum', label: 'Application Optimization' }
  ]

  const features = [
    { icon: '📱', title: 'Native iOS & Android', desc: 'Swift and Kotlin apps that feel right at home on every device.' },
    { icon: '⚡', title: 'Cross-Platform Solutions', desc: 'React Native and Flutter apps that save time without sacrificing quality.' },
    { icon: '🎨', title: 'Pixel-Perfect UI', desc: 'Custom animations, gestures, and transitions that delight users.' },
    { icon: '🔒', title: 'Secure & Scalable', desc: 'Enterprise-grade security with backend APIs that scale to millions.' }
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
    { icon: '🍎', name: 'iOS', desc: 'Swift, SwiftUI, Core Data' },
    { icon: '🤖', name: 'Android', desc: 'Kotlin, Jetpack Compose' },
    { icon: '⚛️', name: 'React Native', desc: 'JavaScript, TypeScript' },
    { icon: '🦋', name: 'Flutter', desc: 'Dart, Material Design' }
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