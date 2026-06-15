import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'SMS Chatbot',
      category: 'ai',
      icon: '💬',
      description: 'An AI-powered artificial intelligent chatbot for SMS messages. Automated conversations and support via text messaging.',
      tags: ['JavaScript', 'Kotlin', 'TypeScript', 'Ruby', 'Objective-C'],
      color: '#8B5CF6',
      
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 2,
      title: 'AI Helpdesk',
      category: 'ai',
      icon: '🖥️',
      description: 'AI-based customer service and helpdesk solution. Intelligent ticket routing and automated response system.',
      tags: ['Python', 'Java', 'Jupyter Notebook'],
      color: '#8B5CF6',
    
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 3,
      title: 'Customer Support Chatbot LLM',
      category: 'ai',
      icon: '🤖',
      description: 'LLM Low Rank Adaptation using Reinforcement Learning with Human Feedback (RLHF) for a customer service chatbot.',
      tags: ['Python', 'LLM', 'RLHF', 'Jupyter Notebook'],
      color: '#8B5CF6',
     
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 4,
      title: 'My ROS Bot',
      category: 'robotics',
      icon: '🖲️',
      description: 'ROS2 Jazzy robot built from scratch. Custom robotics solution with full hardware and software integration.',
      tags: ['C++', 'Python', 'JavaScript', 'CSS', 'Kotlin'],
      color: '#E255A1',
      demo: '#',
      source: 'https://github.com/Malvinhaparimwi'
    },
    {
      id: 5,
      title: 'ZimDirect Harvest',
      category: 'web',
      icon: '🌐',
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
    { id: 'all', icon: '🗂️', label: 'All' },
    { id: 'ai', icon: '🤖', label: 'AI' },
    { id: 'robotics', icon: '🖲️', label: 'Robotics' },
    { id: 'web', icon: '🌐', label: 'Web' },
  ]

  return (
    <section className="projects-section" style={{ paddingTop: '120px' }}>
      <div className="projects-container">
        
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            My Projects
            <span className="title-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle">Real-world solutions built with cutting-edge technology</p>
        </div>

        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ '--project-color': project.color }}
            >
              <div className="project-image">
                <div className="project-gradient" style={{ 
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` 
                }}>
                  <span className="project-icon">{project.icon}</span>
                </div>
                
                <div className="project-overlay">
                  <a href={project.demo} className="overlay-btn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.source} className="overlay-btn secondary" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects