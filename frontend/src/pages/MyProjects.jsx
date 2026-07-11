import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function MyProjects() {
  const [projects] = useState([
    {
      id: 'PRJ-001',
      title: 'E-Commerce Mobile App',
      service: 'Mobile Development',
      status: 'in-progress',
      progress: 65,
      startDate: '2025-06-01',
      deadline: '2025-07-15',
      color: '#4F7DF3'
    },
    {
      id: 'PRJ-002',
      title: 'Corporate Website Redesign',
      service: 'Web Redesign',
      status: 'planning',
      progress: 20,
      startDate: '2025-06-15',
      deadline: '2025-08-01',
      color: '#F774B8'
    },
    {
      id: 'PRJ-003',
      title: 'AI Chatbot Integration',
      service: 'AI Solutions',
      status: 'completed',
      progress: 100,
      startDate: '2025-05-01',
      deadline: '2025-06-20',
      color: '#A78BFA'
    },
  ])

  const getStatusBadge = (status) => {
    const statuses = {
      'planning': { label: 'Planning', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
      'in-progress': { label: 'In Progress', color: '#4F7DF3', bg: 'rgba(79,125,243,0.1)' },
      'review': { label: 'In Review', color: '#A78BFA', bg: 'rgba(167,139,250,0.1)' },
      'completed': { label: 'Completed', color: '#00BFA6', bg: 'rgba(0,191,166,0.1)' },
    }
    return statuses[status] || statuses['planning']
  }

  return (
    <section className="myprojects-page">
      <div className="myprojects-container">
        
        <motion.div className="myprojects-header"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <div className="header-left">
            <h1>My Projects</h1>
            <p>Track and manage your active projects</p>
          </div>
          <Link to="/contact" className="new-project-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            New Project
          </Link>
        </motion.div>

        <motion.div className="projects-stats"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="pstat-card">
            <span className="pstat-number" style={{color: '#4F7DF3'}}>2</span>
            <span className="pstat-label">Active</span>
          </div>
          <div className="pstat-card">
            <span className="pstat-number" style={{color: '#00BFA6'}}>1</span>
            <span className="pstat-label">Completed</span>
          </div>
          <div className="pstat-card">
            <span className="pstat-number" style={{color: '#A78BFA'}}>0</span>
            <span className="pstat-label">In Review</span>
          </div>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const status = getStatusBadge(project.status)
            return (
              <motion.div key={project.id} className="project-item"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link to={`/projects/${project.id}`} className="project-item-link">
                  <div className="project-item-icon" style={{ background: `${project.color}15`, color: project.color }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="project-item-info">
                    <div className="project-item-top">
                      <h3>{project.title}</h3>
                      <span className="project-status-badge" style={{ background: status.bg, color: status.color }}>
                        {status.label}
                      </span>
                    </div>
                    <div className="project-item-meta">
                      <span>{project.service}</span>
                      <span>•</span>
                      <span>Started: {project.startDate}</span>
                      <span>•</span>
                      <span>Deadline: {project.deadline}</span>
                    </div>
                    <div className="project-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${project.progress}%`, background: project.color }}></div>
                      </div>
                      <span className="progress-text">{project.progress}%</span>
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-arrow">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default MyProjects