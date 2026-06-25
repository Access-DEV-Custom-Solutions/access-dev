import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const services = [
    {
      id: 'mobile',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Mobile Development',
      subtitle: 'Native & Cross-Platform',
      description: 'Powerful iOS and Android applications built with cutting-edge frameworks. From MVPs to enterprise apps with millions of users.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter'],
      color: '#4F7DF3',
      image: '/images/services/appdev.png',
      link: '/services/mobile'
    },
    {
      id: 'web',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
        </svg>
      ),
      title: 'Web Development',
      subtitle: 'Full-Stack Solutions',
      description: 'Modern responsive websites and web applications. From landing pages to complex dashboards handling millions of data points.',
      tags: ['React', 'Node.js', 'Next.js', 'TypeScript'],
      color: '#00BFA6',
      image: '/images/services/webdev.avif',
      link: '/services/web'
    },
    {
      id: 'redesign',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>
        </svg>
      ),
      title: 'Web Redesign',
      subtitle: 'Modernize Your Presence',
      description: 'Transform outdated websites into stunning digital experiences. Boost conversions with modern UI/UX and performance optimization.',
      tags: ['UI/UX', 'SEO', 'Performance', 'Migration'],
      color: '#F774B8',
      image: '/images/services/webdev3.png',
      link: '/services/redesign'
    },
    {
      id: 'ai',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path>
          <path d="M20 9h3"></path><path d="M20 14h3"></path><path d="M1 9h3"></path><path d="M1 14h3"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: 'AI Solutions',
      subtitle: 'Intelligent Automation',
      description: 'Custom machine learning models, NLP chatbots, and computer vision systems that give your business a competitive edge.',
      tags: ['ML', 'NLP', 'Vision', 'LLMs'],
      color: '#A78BFA',
      image: '/images/services/ai.webp',
      link: '/services/ai'
    }
  ]

  // Auto-slideshow for mobile
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length)
      }, 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPaused])

  return (
    <section id="services" className="services-section">
      {/* Background */}
      <div className="services-bg">
        <div className="services-glow services-glow-1"></div>
        <div className="services-glow services-glow-2"></div>
        <div className="services-grid-bg"></div>
      </div>

      <div className="services-container">
        
        {/* Header */}
        <motion.div className="services-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="services-label">What we do</p>
          <h2 className="services-title">Our Services</h2>
        </motion.div>

        {/* DESKTOP: 2x2 Circle Layout */}
        <div className="services-desktop desktop-only">
          {/* Row 1 */}
          <div className="services-row">
            {services.slice(0, 2).map((service, index) => (
              <motion.div key={service.id} className="service-block"
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Circle Image */}
                <div className="service-circle-wrap">
                  <div className="service-circle" style={{ '--circle-color': service.color }}>
                    <img src={service.image} alt={service.title} className="service-circle-img" />
                    <div className="service-circle-ring" style={{ borderColor: service.color }}></div>
                    <div className="service-circle-ring ring-2" style={{ borderColor: service.color }}></div>
                  </div>
                  <div className="service-circle-dot" style={{ background: service.color }}></div>
                </div>

                {/* Content */}
                <div className="service-text">
                  <p className="service-subtitle-text" style={{ color: service.color }}>{service.subtitle}</p>
                  <h3 className="service-title-text">{service.title}</h3>
                  <p className="service-desc-text">{service.description}</p>
                  
                  <div className="service-tags">
                    {service.tags.map(tag => (
                      <span key={tag} className="service-tag" style={{ color: service.color, borderColor: service.color }}>{tag}</span>
                    ))}
                  </div>

                  <Link to={service.link} className="service-link" style={{ color: service.color }}>
                    <span>Explore</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="services-row">
            {services.slice(2, 4).map((service, index) => (
              <motion.div key={service.id} className="service-block"
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              >
                {/* Content (left side for row 2) */}
                <div className="service-text">
                  <p className="service-subtitle-text" style={{ color: service.color }}>{service.subtitle}</p>
                  <h3 className="service-title-text">{service.title}</h3>
                  <p className="service-desc-text">{service.description}</p>
                  
                  <div className="service-tags">
                    {service.tags.map(tag => (
                      <span key={tag} className="service-tag" style={{ color: service.color, borderColor: service.color }}>{tag}</span>
                    ))}
                  </div>

                  <Link to={service.link} className="service-link" style={{ color: service.color }}>
                    <span>Explore</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>

                {/* Circle Image */}
                <div className="service-circle-wrap">
                  <div className="service-circle" style={{ '--circle-color': service.color }}>
                    <img src={service.image} alt={service.title} className="service-circle-img" />
                    <div className="service-circle-ring" style={{ borderColor: service.color }}></div>
                    <div className="service-circle-ring ring-2" style={{ borderColor: service.color }}></div>
                  </div>
                  <div className="service-circle-dot" style={{ background: service.color }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE: Square Card Slideshow (unchanged) */}
        <div className="mobile-slideshow"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="mobile-slideshow-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="mobile-slide-card"
                style={{ '--card-color': services[currentSlide]?.color }}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="card-accent" style={{ background: services[currentSlide]?.color }}></div>
                
                <div className="card-icon-box" style={{ color: services[currentSlide]?.color }}>
                  {services[currentSlide]?.icon}
                </div>

                <h3 className="card-title">{services[currentSlide]?.title}</h3>
                <p className="card-subtitle" style={{ color: services[currentSlide]?.color }}>
                  {services[currentSlide]?.subtitle}
                </p>
                <p className="card-desc">{services[currentSlide]?.description}</p>

                <div className="card-tags">
                  {services[currentSlide]?.tags.map(tag => (
                    <span key={tag} className="card-tag" style={{ color: services[currentSlide]?.color, borderColor: services[currentSlide]?.color }}>{tag}</span>
                  ))}
                </div>

                <Link to={services[currentSlide]?.link} className="card-link">
                  <span>Learn more</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mobile-slide-dots">
            {services.map((_, index) => (
              <button key={index}
                className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
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