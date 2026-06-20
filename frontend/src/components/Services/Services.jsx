import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Services.css'

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const services = [
    {
      id: 'mobile',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'ACCESS MOBILE DEV',
      subtitle: 'Native & Cross-Platform',
      description: 'Build powerful mobile applications for iOS and Android with cutting-edge frameworks. Seamless user experiences that drive engagement.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'PWA'],
      color: '#2355E1'
    },
    {
      id: 'web',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
        </svg>
      ),
      title: 'ACCESS WEB DEV',
      subtitle: 'Full-Stack Solutions',
      description: 'From responsive landing pages to complex web applications. Modern architectures with performance and scalability at core.',
      tags: ['React', 'Node.js', 'Next.js', 'TypeScript', 'APIs'],
      color: '#008F88'
    },
    {
      id: 'redesign',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>
        </svg>
      ),
      title: 'ACCESS WEB REDESIGN',
      subtitle: 'Modernize Your Digital Presence',
      description: 'Transform outdated websites into modern, high-performance digital experiences with cutting-edge redesign and optimization.',
      tags: ['UI/UX', 'Performance', 'SEO', 'Migration', 'Rebranding'],
      color: '#E255A1'
    },
    {
      id: 'ai',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <path d="M9 1v3"></path>
          <path d="M15 1v3"></path>
          <path d="M9 20v3"></path>
          <path d="M15 20v3"></path>
          <path d="M20 9h3"></path>
          <path d="M20 14h3"></path>
          <path d="M1 9h3"></path>
          <path d="M1 14h3"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: 'ACCESS ARTIFICIAL INTELLIGENCE',
      subtitle: 'Intelligence at Scale',
      description: 'Harness the power of machine learning and AI. From predictive models to natural language processing and computer vision.',
      tags: ['ML', 'NLP', 'Vision', 'LLMs', 'Analytics'],
      color: '#8B5CF6'
    }
  ]

  // Auto-slideshow for mobile only
  useEffect(() => {
    if (!isPaused && services.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length)
      }, 3500)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPaused])

  return (
    <section id="services" className="services-section">
      {/* Live Animated Background */}
      <div className="services-live-bg">
        <div className="services-orb services-orb-1"></div>
        <div className="services-orb services-orb-2"></div>
        <div className="services-orb services-orb-3"></div>
        <div className="services-orb services-orb-4"></div>
        <div className="services-animated-grid"></div>
        <div className="services-particles-container">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="services-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                '--particle-color': ['#2355E1', '#008F88', '#E255A1', '#8B5CF6'][Math.floor(Math.random() * 4)],
              }}
            ></div>
          ))}
        </div>
        <div className="services-code-rain">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="code-column"
              style={{
                left: `${i * 10 + Math.random() * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 3}s`,
              }}
            >
              {[...Array(8)].map((_, j) => (
                <span key={j} className="code-char" style={{ animationDelay: `${j * 0.3}s` }}>
                  {String.fromCharCode(60 + Math.random() * 10)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="services-container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Our Services</h2>
        </motion.div>

        {/* DESKTOP: Static Cards Grid */}
        <div className="services-grid desktop-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              style={{ '--card-color': service.color }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12,
                ease: "easeOut"
              }}
            >
              <div className="card-glow"></div>
              <div className="card-accent"></div>
              <div className="card-content">
                <div className="card-icon-wrap">
                  <span className="card-icon">{service.icon}</span>
                  <div className="card-icon-ring"></div>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-subtitle">{service.subtitle}</p>
                <p className="card-description">{service.description}</p>
                <div className="card-tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="card-btn">
                  Learn More
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE: Single Card Slideshow */}
        <div className="services-slideshow mobile-slideshow"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              className="mobile-slide-card"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="service-card" style={{ '--card-color': services[currentSlide]?.color }}>
                <div className="card-glow"></div>
                <div className="card-accent"></div>
                <div className="card-content">
                  <div className="card-icon-wrap">
                    <span className="card-icon">{services[currentSlide]?.icon}</span>
                    <div className="card-icon-ring"></div>
                  </div>
                  <h3 className="card-title">{services[currentSlide]?.title}</h3>
                  <p className="card-subtitle">{services[currentSlide]?.subtitle}</p>
                  <p className="card-description">{services[currentSlide]?.description}</p>
                  <div className="card-tags">
                    {services[currentSlide]?.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button className="card-btn">
                    Learn More
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Slide Indicators */}
          <div className="slideshow-indicators">
            {services.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services