import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PackageBuilder.css'

function PackageBuilder() {

  const packages = [
    {
      id: 'off-shelf',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: 'Off the Shelf',
      subtitle: 'Ready-Made Solutions',
      description: 'Pre-built, battle-tested solutions that you can deploy immediately. Perfect for businesses needing quick, reliable results.',
      features: [
        'Quick deployment within days',
        'Proven & tested solutions',
        'Cost-effective pricing',
        'Regular updates included',
        'Basic customization available',
        'Community support'
      ],
      color: '#2355E1',
      link: '/projects',
      btnText: 'View Projects',
      badge: 'Popular',
      badgeColor: '#39D353'
    },
    {
      id: 'custom',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 8.5 12 2 22 8.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="9"></line>
        </svg>
      ),
      title: 'Custom Made',
      subtitle: 'Tailored to Your Needs',
      description: 'Bespoke solutions built from the ground up specifically for your business. Full control, unlimited possibilities.',
      features: [
        'Fully customized development',
        'Dedicated development team',
        'Unlimited revisions',
        'Proprietary source code',
        'Scalable architecture',
        'Priority support 24/7'
      ],
      color: '#8B5CF6',
      link: '/signup',
      btnText: 'Get Started',
      badge: 'Premium',
      badgeColor: '#F59E0B'
    }
  ]

  return (
    <section id="package-builder" className="packages-section">
      {/* Animated Background */}
      <div className="packages-bg">
        <div className="packages-glow packages-glow-1"></div>
        <div className="packages-glow packages-glow-2"></div>
        <div className="packages-glow packages-glow-3"></div>
        <div className="packages-grid-bg"></div>
        <div className="packages-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="packages-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                '--particle-color': ['#2355E1', '#8B5CF6', '#008F88'][Math.floor(Math.random() * 3)],
              }}
            ></div>
          ))}
        </div>
        <div className="packages-scan-line"></div>
      </div>

      <div className="packages-container">
        
        {/* Header */}
        <motion.div 
          className="packages-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="packages-header-icon"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"></path>
            </svg>
          </motion.div>
          <h2 className="packages-title">Package Solutions</h2>
          <p className="packages-subtitle">Choose the right solution for your business</p>
        </motion.div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id} 
              className="package-card"
              style={{ '--package-color': pkg.color }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 80 }}
              whileHover={{ y: -10 }}
            >
              {/* Glow border */}
              <div className="package-glow-border"></div>
              
              {/* Badge */}
              <motion.div 
                className="package-badge"
                style={{ background: pkg.badgeColor }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <span className="badge-star">✦</span>
                {pkg.badge}
              </motion.div>

              {/* Icon */}
              <motion.div 
                className="package-icon-wrap"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="package-icon-box" style={{ color: pkg.color }}>
                  {pkg.icon}
                </div>
                <div className="package-icon-ring" style={{ borderColor: pkg.color }}></div>
                <div className="package-icon-ring-2" style={{ borderColor: pkg.color }}></div>
              </motion.div>

              {/* Title & Subtitle */}
              <div className="package-header-text">
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-subtitle-text" style={{ color: pkg.color }}>
                  {pkg.subtitle}
                </p>
              </div>
              
              <p className="package-description">{pkg.description}</p>

              {/* Divider */}
              <div className="package-divider"></div>

              {/* Features List */}
              <div className="package-features">
                {pkg.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="package-feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.08) }}
                  >
                    <span className="feature-check" style={{ color: pkg.color }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="feature-text">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to={pkg.link} className="package-btn" style={{ 
                  background: pkg.color,
                  boxShadow: `0 8px 30px ${pkg.color}40`
                }}>
                  <span>{pkg.btnText}</span>
                  <motion.svg 
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PackageBuilder