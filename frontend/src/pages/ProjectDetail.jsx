import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

function ProjectDetail() {
  const { id } = useParams()
  
  // Placeholder - backend will provide real data
  const [project] = useState({
    id: id || 'PRJ-001',
    title: 'E-Commerce Mobile App',
    service: 'Mobile Development',
    status: 'in-progress',
    progress: 65,
    startDate: '2025-06-01',
    deadline: '2025-07-15',
    description: 'A full-featured shopping app with payment integration, cart system, user profiles, and order tracking.',
    color: '#4F7DF3',
    milestones: [
      { id: 1, title: 'Requirements Gathering', completed: true, date: '2025-06-05' },
      { id: 2, title: 'UI/UX Design', completed: true, date: '2025-06-12' },
      { id: 3, title: 'Frontend Development', completed: true, date: '2025-06-25' },
      { id: 4, title: 'Backend Integration', completed: false, date: '2025-07-05' },
      { id: 5, title: 'Testing & QA', completed: false, date: '2025-07-10' },
      { id: 6, title: 'Deployment', completed: false, date: '2025-07-15' },
    ],
    updates: [
      { id: 1, text: 'Backend API endpoints completed', date: '2025-06-28', icon: '🔌' },
      { id: 2, text: 'UI designs approved by client', date: '2025-06-12', icon: '🎨' },
      { id: 3, text: 'Project kickoff meeting held', date: '2025-06-01', icon: '🚀' },
    ]
  })

  const getStatusBadge = (status) => {
    const statuses = {
      'planning': { label: 'Planning', color: '#F59E0B' },
      'in-progress': { label: 'In Progress', color: '#4F7DF3' },
      'review': { label: 'In Review', color: '#A78BFA' },
      'completed': { label: 'Completed', color: '#00BFA6' },
    }
    return statuses[status] || statuses['planning']
  }

  const status = getStatusBadge(project.status)

  return (
    <section className="project-detail-page">
      <div className="project-detail-container">
        
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/my-projects" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div className="project-detail-header"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        >
          <div className="header-top">
            <div>
              <span className="project-id">#{project.id}</span>
              <h1>{project.title}</h1>
            </div>
            <span className="status-badge" style={{ background: `${status.color}15`, color: status.color }}>
              {status.label}
            </span>
          </div>
          
          <div className="header-meta">
            <span>{project.service}</span>
            <span>•</span>
            <span>Started: {project.startDate}</span>
            <span>•</span>
            <span>Deadline: {project.deadline}</span>
          </div>

          <div className="header-progress">
            <div className="progress-label">
              <span>Overall Progress</span>
              <span>{project.progress}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${project.progress}%`, background: project.color }}></div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div className="project-section"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          <h3>Project Description</h3>
          <p>{project.description}</p>
        </motion.div>

        {/* Milestones */}
        <motion.div className="project-section"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          <h3>Milestones</h3>
          <div className="milestones-list">
            {project.milestones.map((milestone, index) => (
              <div key={milestone.id} className={`milestone-item ${milestone.completed ? 'completed' : ''}`}>
                <div className="milestone-indicator" style={{ borderColor: milestone.completed ? project.color : 'var(--color-border)' }}>
                  {milestone.completed && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: project.color }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <div className="milestone-info">
                  <h4>{milestone.title}</h4>
                  <span>{milestone.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Updates */}
        <motion.div className="project-section"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        >
          <h3>Recent Updates</h3>
          <div className="updates-list">
            {project.updates.map((update) => (
              <div key={update.id} className="update-item">
                <span className="update-icon">{update.icon}</span>
                <div className="update-info">
                  <p>{update.text}</p>
                  <span>{update.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectDetail