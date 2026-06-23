import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {

  const services = [
    {
      id: 'mobile',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Mobile Development',
      subtitle: 'Native & Cross-Platform Apps',
      description: 'Powerful iOS and Android applications built with cutting-edge frameworks and seamless user experiences.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter'],
      color: '#4F7DF3',
      link: '/services/mobile'
    },
    {
      id: 'web',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
        </svg>
      ),
      title: 'Web Development',
      subtitle: 'Full-Stack Web Solutions',
      description: 'Modern, responsive websites and web applications built with performance and scalability at their core.',
      tags: ['React', 'Node.js', 'Next.js', 'TypeScript'],
      color: '#00BFA6',
      link: '/services/web'
    },
    {
      id: 'redesign',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>
        </svg>
      ),
      title: 'Web Redesign',
      subtitle: 'Modernize Your Digital Presence',
      description: 'Transform outdated websites into stunning, high-performance digital experiences.',
      tags: ['UI/UX', 'SEO', 'Migration', 'Rebranding'],
      color: '#F774B8',
      link: '/services/redesign'
    },
    {
      id: 'ai',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path>
          <path d="M20 9h3"></path><path d="M20 14h3"></path><path d="M1 9h3"></path><path d="M1 14h3"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: 'AI Solutions',
      subtitle: 'Intelligent Automation',
      description: 'Harness machine learning and AI for chatbots, predictive models, and computer vision.',
      tags: ['ML', 'NLP', 'Vision', 'LLMs'],
      color: '#A78BFA',
      link: '/services/ai'
    }
  ]

  return (
    <section id="services" className="services-section">
      {/* Dark Tech Background */}
      <div className="services-bg">
        <div className="services-glow services-glow-1"></div>
        <div className="services-glow services-glow-2"></div>
        <div className="services-glow services-glow-3"></div>
        <div className="services-grid-bg"></div>
        <div className="services-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="services-particle"
              style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`, animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 2}px`, height: `${Math.random() * 3 + 2}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="services-scan"></div>
      </div>

      <div className="services-container">
        
        {/* Header */}
        <motion.div className="services-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="services-header-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">What we build for ambitious businesses</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div key={service.id} className="service-card"
              style={{ '--card-color': service.color }}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              {/* Hover glow */}
              <div className="card-glow"></div>

              {/* Icon */}
              <div className="card-icon-box" style={{ color: service.color }}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="card-title">{service.title}</h3>
              <p className="card-subtitle" style={{ color: service.color }}>{service.subtitle}</p>
              <p className="card-desc">{service.description}</p>

              {/* Tags */}
              <div className="card-tags">
                {service.tags.map(tag => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>

              {/* Link */}
              <Link to={service.link} className="card-link" style={{ color: service.color }}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services