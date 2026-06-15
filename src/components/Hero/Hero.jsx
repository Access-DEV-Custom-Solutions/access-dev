import { useEffect } from 'react'
import './Hero.css'

function Hero() {

  useEffect(() => {
    const container = document.querySelector('.hero-particles')
    if (container) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 5 + 's'
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's'
        particle.style.width = (Math.random() * 4 + 2) + 'px'
        particle.style.height = particle.style.width
        container.appendChild(particle)
      }
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* Animated Particles */}
      <div className="hero-particles"></div>

      {/* Glow Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      <div className="hero-container">
        
        {/* LEFT: Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Projects
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Access the Future of</span>
            <span className="title-line gradient-text">Development</span>
          </h1>
          
          <p className="hero-subtitle">
            Your gateway to <span className="text-highlight">Mobile</span>, <span className="text-highlight">Web</span>, <span className="text-highlight">Robotics</span> & <span className="text-highlight">AI</span> solutions. We build technology that transforms ideas into reality.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-secondary">
              <span>View Services</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Domains</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Tech Constellation */}
        <div className="hero-visual">
          <div className="constellation-system">
            
            {/* Connecting Lines SVG */}
            <svg className="constellation-svg" viewBox="0 0 500 500">
              {/* Lines from center to each node */}
              <line className="const-line" x1="250" y1="250" x2="250" y2="40" />
              <line className="const-line" x1="250" y1="250" x2="440" y2="150" />
              <line className="const-line" x1="250" y1="250" x2="390" y2="420" />
              <line className="const-line" x1="250" y1="250" x2="60" y2="380" />
              
              {/* Outer connecting circle */}
              <circle className="const-circle" cx="250" cy="250" r="195" />
              
              {/* Glow nodes */}
              <circle className="const-node" cx="250" cy="40" r="6" />
              <circle className="const-node" cx="440" cy="150" r="6" />
              <circle className="const-node" cx="390" cy="420" r="6" />
              <circle className="const-node" cx="60" cy="380" r="6" />
            </svg>

            {/* Central Hub */}
            <div className="const-hub">
              <div className="const-hub-core">
                <span className="const-hub-text">&lt;/&gt;</span>
              </div>
              <div className="const-hub-pulse p1"></div>
              <div className="const-hub-pulse p2"></div>
              <div className="const-hub-pulse p3"></div>
            </div>

            {/* Icon 1 - Top */}
            <div className="const-icon ci-top">
              <div className="const-card">
                <span className="const-emoji">📱</span>
                <span className="const-label">Mobile Dev</span>
              </div>
            </div>

            {/* Icon 2 - Right */}
            <div className="const-icon ci-right">
              <div className="const-card">
                <span className="const-emoji">🌐</span>
                <span className="const-label">Web Dev</span>
              </div>
            </div>

            {/* Icon 3 - Bottom */}
            <div className="const-icon ci-bottom">
              <div className="const-card">
                <span className="const-emoji">🖲️</span>
                <span className="const-label">Robotics</span>
              </div>
            </div>

            {/* Icon 4 - Left */}
            <div className="const-icon ci-left">
              <div className="const-card">
                <span className="const-emoji">🤖</span>
                <span className="const-label">AI Solutions</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero