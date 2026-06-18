import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PackageBuilder.css'

function PackageBuilder() {

  const packages = [
    {
      id: 'off-shelf',
      icon: '📦',
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
      badge: 'Popular'
    },
    {
      id: 'custom',
      icon: '⚡',
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
      badge: 'Premium'
    }
  ]

  return (
    <section id="package-builder" className="packages-section">
      <div className="packages-bg">
        <div className="packages-glow packages-glow-1"></div>
        <div className="packages-glow packages-glow-2"></div>
        <div className="packages-glow packages-glow-3"></div>
        <div className="packages-grid-bg"></div>
        <div className="packages-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="packages-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="packages-container">
        <motion.div className="packages-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="packages-header-icon"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >💼</motion.span>
          <h2 className="packages-title">
            <span className="title-bracket">&lt;</span>
            Package Solutions
            <span className="title-bracket">/&gt;</span>
          </h2>
          <p className="packages-subtitle">Choose the right solution for your business</p>
        </motion.div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div key={pkg.id} className="package-card"
              style={{ '--package-color': pkg.color }}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 80 }}
              whileHover={{ y: -12 }}
            >
              <div className="package-glow-border"></div>
              <div className="package-badge" style={{ background: pkg.color }}>{pkg.badge}</div>
              <motion.div className="package-icon-wrap"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="package-icon">{pkg.icon}</span>
                <div className="package-icon-ring"></div>
              </motion.div>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-subtitle-text" style={{ color: pkg.color }}>{pkg.subtitle}</p>
              <p className="package-description">{pkg.description}</p>
              <div className="package-features">
                {pkg.features.map((feature, i) => (
                  <motion.div key={i} className="package-feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
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
              <Link to={pkg.link} className="package-btn"
                style={{ background: pkg.color, boxShadow: `0 8px 30px ${pkg.color}40` }}
              >
                <span>{pkg.btnText}</span>
                <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackageBuilder