import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Services.css'

function Services() {
  const [activeTab, setActiveTab] = useState('all')

  const services = [
    {
      id: 'mobile',
      icon: '📱',
      title: 'ACCESS MOBILE DEV',
      subtitle: 'Native & Cross-Platform',
      description: 'Build powerful mobile applications for iOS and Android with cutting-edge frameworks. Seamless user experiences that drive engagement.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'PWA'],
      color: '#2355E1'
    },
    {
      id: 'web',
      icon: '🌐',
      title: 'ACCESS WEB DEV',
      subtitle: 'Full-Stack Solutions',
      description: 'From responsive landing pages to complex web applications. Modern architectures with performance and scalability at core.',
      tags: ['React', 'Node.js', 'Next.js', 'TypeScript', 'APIs'],
      color: '#008F88'
    },
    {
      id: 'redesign',
      icon: '✨',
      title: 'ACCESS WEB REDESIGN',
      subtitle: 'Modernize Your Digital Presence',
      description: 'Transform outdated websites into modern, high-performance digital experiences with cutting-edge redesign and optimization.',
      tags: ['UI/UX', 'Performance', 'SEO', 'Migration', 'Rebranding'],
      color: '#E255A1'
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'ACCESS ARTIFICIAL INTELLIGENCE',
      subtitle: 'Intelligence at Scale',
      description: 'Harness the power of machine learning and AI. From predictive models to natural language processing and computer vision.',
      tags: ['ML', 'NLP', 'Vision', 'LLMs', 'Analytics'],
      color: '#8B5CF6'
    }
  ]

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.id === activeTab)

  return (
    <section id="services" className="services-section">
      {/* Live Animated Background */}
      <div className="services-live-bg">
        {/* Floating orbs */}
        <div className="services-orb services-orb-1"></div>
        <div className="services-orb services-orb-2"></div>
        <div className="services-orb services-orb-3"></div>
        <div className="services-orb services-orb-4"></div>
        
        {/* Animated grid */}
        <div className="services-animated-grid"></div>
        
        {/* Floating particles */}
        <div className="services-particles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="services-particle"
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

        {/* Code rain effect */}
        <div className="services-code-rain">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="code-column"
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
          <p className="section-subtitle">Choose your domain of innovation</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span className="tab-icon">🗂️</span>
            All
          </button>
          {services.map(service => (
            <button
              key={service.id}
              className={`tab ${activeTab === service.id ? 'active' : ''}`}
              onClick={() => setActiveTab(service.id)}
              style={{ '--tab-color': service.color }}
            >
              <span className="tab-icon">{service.icon}</span>
              {service.title.replace('ACCESS ', '').replace(' DEV', '')}
            </button>
          ))}
        </motion.div>

        {/* Service Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
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
              {/* Glow border */}
              <div className="card-glow"></div>
              
              {/* Card top accent line */}
              <div className="card-accent"></div>
              
              {/* Card Content */}
              <div className="card-content">
                <div className="card-icon-wrap">
                  <span className="card-icon">{service.icon}</span>
                  <div className="card-icon-ring"></div>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-subtitle">{service.subtitle}</p>
                <p className="card-description">{service.description}</p>
                
                {/* Tech Tags */}
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

      </div>
    </section>
  )
}

export default Services