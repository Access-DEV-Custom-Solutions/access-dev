import { useState } from 'react'
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
      id: 'robotics',
      icon: '🔄',
      title: 'WEB REDESIGNING',
      subtitle: 'Modernize Your Web Presence',
      description: 'Transform outdated websites into modern, high-performance digital experiences with cutting-edge redesign and optimization.',
      tags: ['ROS', 'UI/UX Redesign', 'Perfomance Optimization', 'Modern Stack', 'Responsive'],
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
      {/* Tech dot pattern */}
      <div className="services-bg-pattern"></div>
      
      <div className="services-container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            Our Services
            <span className="title-bracket">/&gt;</span>
          </h2>
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