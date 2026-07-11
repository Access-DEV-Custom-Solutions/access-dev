import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [user] = useState({
    name: 'User',
    email: 'user@example.com',
    joinDate: '2025'
  })

  const stats = [
    { 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path>
        </svg>
      ),
      number: '0', 
      label: 'Active Projects',
      color: '#4F7DF3'
    },
    { 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
      number: '0', 
      label: 'Completed',
      color: '#00BFA6'
    },
    { 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
        </svg>
      ),
      number: '0', 
      label: 'Messages',
      color: '#A78BFA'
    },
    { 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      number: '0', 
      label: 'Upcoming',
      color: '#F774B8'
    },
  ]

  const recentActivity = [
    { 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      action: 'Welcome to ACCESS DEV!', 
      time: 'Just now',
      color: '#4F7DF3'
    },
    { 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      ),
      action: 'Complete your profile setup', 
      time: 'Pending',
      color: '#F59E0B'
    },
    { 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      action: 'Explore our services', 
      time: 'Recommended',
      color: '#00BFA6'
    },
  ]

  const quickActions = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Mobile App',
      desc: 'Build your app',
      color: '#4F7DF3',
      link: '/services/mobile'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
        </svg>
      ),
      title: 'Website',
      desc: 'Start a web project',
      color: '#00BFA6',
      link: '/services/web'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path>
          <path d="M20 9h3"></path><path d="M20 14h3"></path><path d="M1 9h3"></path><path d="M1 14h3"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: 'AI Solution',
      desc: 'Explore AI services',
      color: '#A78BFA',
      link: '/services/ai'
    },
  ]

  return (
    <section className="dashboard-page">
      {/* Background */}
      <div className="dashboard-bg">
        <div className="dashboard-glow dashboard-glow-1"></div>
        <div className="dashboard-glow dashboard-glow-2"></div>
        <div className="dashboard-grid-pattern"></div>
      </div>

      <div className="dashboard-container">
        
        {/* Welcome Header */}
        <motion.div className="dashboard-welcome"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <div className="welcome-left">
            <div className="welcome-avatar">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="welcome-text">
              <h1>Welcome back, {user.name}</h1>
              <p>Here's what's happening with your projects</p>
            </div>
          </div>
          <Link to="/contact" className="dash-btn dash-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            New Project
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div className="dashboard-stats"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -4 }}
            >
              <div className="stat-icon-box" style={{ background: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="dashboard-grid">
          
          {/* Recent Activity */}
          <motion.div className="dashboard-card"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-header">
              <h3>Recent Activity</h3>
              <Link to="/my-projects" className="card-link">View All</Link>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity, index) => (
                <motion.div key={index} className="activity-item"
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="activity-icon-box" style={{ background: `${activity.color}15`, color: activity.color }}>
                    {activity.icon}
                  </div>
                  <div className="activity-info">
                    <p className="activity-action">{activity.action}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div className="dashboard-card"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link to={action.link} className="quick-action-card" style={{ '--action-color': action.color }}>
                    <div className="action-icon-box" style={{ background: `${action.color}15`, color: action.color }}>
                      {action.icon}
                    </div>
                    <div className="action-info">
                      <h4>{action.title}</h4>
                      <p>{action.desc}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Profile Card */}
        <motion.div className="dashboard-card profile-card"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card-header">
            <h3>Your Profile</h3>
            <button className="card-link edit-btn">Edit</button>
          </div>
          <div className="profile-info">
            <div className="profile-avatar">
              {user.name.charAt(0)}
            </div>
            <div className="profile-details">
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <span className="profile-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                Member since {user.joinDate}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Dashboard