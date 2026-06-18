import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './PackageBuilder.css'

function PackageBuilder() {
  const [selectedService, setSelectedService] = useState('mobile')
  const [pageCount, setPageCount] = useState(1)
  const [isDynamic, setIsDynamic] = useState(false)
  const [addons, setAddons] = useState([])

  const services = [
    { 
      id: 'mobile', 
      icon: '📱', 
      name: 'Mobile Development',
      platforms: ['iOS', 'Android', 'Both'],
      basePrice: 500,
      color: '#2355E1'
    },
    { 
      id: 'web', 
      icon: '🌐', 
      name: 'Web Development',
      platforms: ['Landing Page', 'Multi-Page', 'Web App'],
      basePrice: 400,
      color: '#008F88'
    },
    { 
      id: 'robotics', 
      icon: '🖲️', 
      name: 'Robotics',
      platforms: ['Prototype', 'Production', 'Enterprise'],
      basePrice: 1500,
      color: '#E255A1'
    },
    { 
      id: 'ai', 
      icon: '🤖', 
      name: 'AI Solutions',
      platforms: ['Basic Model', 'Advanced Model', 'Custom AI'],
      basePrice: 2000,
      color: '#8B5CF6'
    }
  ]

  const addonOptions = [
    { id: 'design', name: 'UI/UX Design', price: 200, icon: '🎨' },
    { id: 'hosting', name: 'Hosting Setup', price: 150, icon: '☁️' },
    { id: 'maintenance', name: '3 Months Maintenance', price: 300, icon: '🔧' },
    { id: 'seo', name: 'SEO Optimization', price: 250, icon: '📈' },
    { id: 'database', name: 'Database Setup', price: 200, icon: '💾' },
    { id: 'api', name: 'API Integration', price: 350, icon: '🔗' },
  ]

  const currentService = services.find(s => s.id === selectedService)

  const calculateTotal = () => {
    let total = currentService.basePrice
    if (selectedService === 'web' || selectedService === 'mobile') {
      total += (pageCount - 1) * 100
    }
    if (isDynamic) total += 500
    addons.forEach(addonId => {
      const addon = addonOptions.find(a => a.id === addonId)
      if (addon) total += addon.price
    })
    return total
  }

  const toggleAddon = (addonId) => {
    setAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  const resetBuilder = () => {
    setSelectedService('mobile')
    setPageCount(1)
    setIsDynamic(false)
    setAddons([])
  }

  return (
    <section id="package-builder" className="builder-section">
      {/* Animated background */}
      <div className="builder-bg">
        <div className="builder-glow builder-glow-1"></div>
        <div className="builder-glow builder-glow-2"></div>
        <div className="builder-grid-pattern"></div>
      </div>

      <div className="builder-container">
        
        {/* Header */}
        <motion.div 
          className="builder-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="builder-title">
            <span className="title-bracket">&lt;</span>
            Build Your Package
            <span className="title-bracket">/&gt;</span>
          </h2>
          <p className="builder-subtitle">Configure your solution and get an instant quotation</p>
        </motion.div>

        <div className="builder-layout">
          
          {/* LEFT: Configuration Panel */}
          <div className="config-panel">
            
            {/* Step 1: Choose Service */}
            <motion.div 
              className="config-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="config-label">
                <span className="step-number">01</span>
                Select Service
              </h3>
              <div className="service-selector">
                {services.map(service => (
                  <motion.button
                    key={service.id}
                    className={`service-option ${selectedService === service.id ? 'selected' : ''}`}
                    onClick={() => setSelectedService(service.id)}
                    style={{ '--option-color': service.color }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="option-icon">{service.icon}</span>
                    <span className="option-name">{service.name}</span>
                    {selectedService === service.id && (
                      <motion.span 
                        className="selected-check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Page Count */}
            <AnimatePresence>
              {(selectedService === 'web' || selectedService === 'mobile') && (
                <motion.div 
                  className="config-section"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="config-label">
                    <span className="step-number">02</span>
                    Number of Pages/Screens
                  </h3>
                  <div className="page-counter">
                    <motion.button 
                      className="counter-btn"
                      onClick={() => setPageCount(prev => Math.max(1, prev - 1))}
                      disabled={pageCount <= 1}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      −
                    </motion.button>
                    <motion.span 
                      className="counter-value"
                      key={pageCount}
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      {pageCount}
                    </motion.span>
                    <motion.button 
                      className="counter-btn"
                      onClick={() => setPageCount(prev => Math.min(20, prev + 1))}
                      disabled={pageCount >= 20}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                    <span className="counter-label">
                      {selectedService === 'web' ? 'pages' : 'screens'}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Static vs Dynamic */}
            <motion.div 
              className="config-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="config-label">
                <span className="step-number">{selectedService === 'web' || selectedService === 'mobile' ? '03' : '02'}</span>
                Project Type
              </h3>
              <div className="type-toggle">
                <motion.button 
                  className={`type-option ${!isDynamic ? 'active' : ''}`}
                  onClick={() => setIsDynamic(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="type-icon">📄</span>
                  <div className="type-info">
                    <strong>Static</strong>
                    <small>Content-based, fixed data</small>
                  </div>
                </motion.button>
                <motion.button 
                  className={`type-option ${isDynamic ? 'active' : ''}`}
                  onClick={() => setIsDynamic(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="type-icon">⚡</span>
                  <div className="type-info">
                    <strong>Dynamic</strong>
                    <small>User accounts, database, real-time</small>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Step 4: Add-ons */}
            <motion.div 
              className="config-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="config-label">
                <span className="step-number">{selectedService === 'web' || selectedService === 'mobile' ? '04' : '03'}</span>
                Add-ons & Extras
              </h3>
              <div className="addons-grid">
                {addonOptions.map(addon => (
                  <motion.button
                    key={addon.id}
                    className={`addon-option ${addons.includes(addon.id) ? 'selected' : ''}`}
                    onClick={() => toggleAddon(addon.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="addon-icon">{addon.icon}</span>
                    <span className="addon-name">{addon.name}</span>
                    <span className="addon-price">+${addon.price}</span>
                    {addons.includes(addon.id) && (
                      <motion.span 
                        className="addon-check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Summary Panel */}
          <motion.div 
            className="summary-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="summary-card">
              <h3 className="summary-title">Quotation Summary</h3>
              
              <div className="summary-items">
                <div className="summary-item">
                  <span className="summary-label">Service</span>
                  <span className="summary-value">
                    {currentService.icon} {currentService.name}
                  </span>
                </div>
                
                {(selectedService === 'web' || selectedService === 'mobile') && (
                  <motion.div 
                    className="summary-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="summary-label">
                      {selectedService === 'web' ? 'Pages' : 'Screens'}
                    </span>
                    <span className="summary-value">{pageCount} × $100</span>
                  </motion.div>
                )}
                
                <div className="summary-item">
                  <span className="summary-label">Type</span>
                  <span className="summary-value">
                    {isDynamic ? '⚡ Dynamic (+$500)' : '📄 Static'}
                  </span>
                </div>
                
                <AnimatePresence>
                  {addons.map(addonId => {
                    const addon = addonOptions.find(a => a.id === addonId)
                    return addon ? (
                      <motion.div 
                        key={addon.id} 
                        className="summary-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <span className="summary-label">{addon.icon} {addon.name}</span>
                        <span className="summary-value">+${addon.price}</span>
                      </motion.div>
                    ) : null
                  })}
                </AnimatePresence>
                
                <div className="summary-divider"></div>
                
                <motion.div 
                  className="summary-item total"
                  key={calculateTotal()}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="summary-label">Estimated Total</span>
                  <span className="summary-value total-price">
                    ${calculateTotal().toLocaleString()}
                  </span>
                </motion.div>
              </div>

              <div className="summary-note">
                * This is an automated estimate. Final pricing may vary.
              </div>

              <div className="summary-actions">
                <motion.button 
                  className="btn-request-quote"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Detailed Quote
                  <span className="btn-icon">→</span>
                </motion.button>
                <motion.button 
                  className="btn-reset" 
                  onClick={resetBuilder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reset All
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default PackageBuilder