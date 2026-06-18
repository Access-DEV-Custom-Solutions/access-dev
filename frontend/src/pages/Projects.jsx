import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'SMS Chatbot',
      category: 'ai',
      image: '/images/projects/chatbot.webp',
      description: 'An AI-powered artificial intelligent chatbot for SMS messages. Automated conversations and support via text messaging.',
      tags: ['JavaScript', 'Kotlin', 'TypeScript', 'Ruby', 'Objective-C'],
      color: '#8B5CF6',
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 2,
      title: 'AI Helpdesk',
      category: 'ai',
      image: '/images/projects/helpdesk.jpeg',
      description: 'AI-based customer service and helpdesk solution. Intelligent ticket routing and automated response system.',
      tags: ['Python', 'Java', 'Jupyter Notebook'],
      color: '#8B5CF6',
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 3,
      title: 'Customer Support Chatbot LLM',
      category: 'ai',
      image: '/images/projects/chatbot2.jpeg',
      description: 'LLM Low Rank Adaptation using Reinforcement Learning with Human Feedback (RLHF) for a customer service chatbot.',
      tags: ['Python', 'LLM', 'RLHF', 'Jupyter Notebook'],
      color: '#8B5CF6',
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 4,
      title: 'My ROS Bot',
      category: 'robotics',
      image: '/images/projects/ros.jpeg',
      description: 'ROS2 Jazzy robot built from scratch. Custom robotics solution with full hardware and software integration.',
      tags: ['C++', 'Python', 'JavaScript', 'CSS', 'Kotlin'],
      color: '#E255A1',
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 5,
      title: 'ZimDirect Harvest',
      category: 'web',
      image: '/images/projects/farming.jpeg',
      description: 'Agricultural marketplace connecting Zimbabwean farmers directly with buyers. Empowering local agriculture through technology.',
      tags: ['PHP', 'Laravel', 'Blade'],
      color: '#008F88',
      source: 'https://github.com/Tawanda02/zimdirect-harvest'
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const filters = [
    { id: 'all', icon: '🗂️', label: 'All Projects' },
    { id: 'ai', icon: '🤖', label: 'AI / ML' },
    { id: 'robotics', icon: '🖲️', label: 'Robotics' },
    { id: 'web', icon: '🌐', label: 'Web Dev' },
  ]

  return (
    <section className="projects-page">
      {/* Background Effects */}
      <div className="projects-bg">
        <div className="projects-glow projects-glow-1"></div>
        <div className="projects-glow projects-glow-2"></div>
        <div className="projects-grid-pattern"></div>
        <div className="projects-particles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="projects-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="projects-container">
        
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="header-icon-wrap"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
          >
            <span className="header-icon">🚀</span>
          </motion.div>
          <h1 className="section-title">
            <span className="title-bracket">&lt;</span>
            My Projects
            <span className="title-bracket">/&gt;</span>
          </h1>
          <p className="section-subtitle">Real-world solutions built with cutting-edge technology</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
              {activeFilter === filter.id && (
                <motion.span 
                  className="active-indicator"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                style={{ '--project-color': project.color }}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -40 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Glow border on hover */}
                <div className="card-glow-border"></div>
                
                {/* Project Image */}
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="project-img-overlay"></div>
                  
                  {/* Hover Overlay */}
                  <div className="project-overlay">
                    <motion.a 
                      href={project.source} 
                      className="overlay-btn"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/>
                      </svg>
                      View Source
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <div className="project-category" style={{ color: project.color }}>
                    {project.category.toUpperCase()}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        className="project-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="empty-icon">📭</span>
            <h3>No projects found</h3>
            <p>Try selecting a different category</p>
          </motion.div>
        )}

        {/* View All Projects Button - Redirects to SignUp */}
        <motion.div 
          className="view-all-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/signup" className="view-all-btn">
            <span>View All Projects</span>
            <motion.svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </motion.svg>
          </Link>
          <p className="view-all-hint">Create an account to access all our projects and request custom solutions</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects