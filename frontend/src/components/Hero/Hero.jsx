import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            Your gateway to <span className="text-highlight">Mobile</span>, <span className="text-highlight">Web</span>, <span className="text-highlight">Web Redesign</span> & <span className="text-highlight">AI</span> solutions.
          </p>
          
          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* RIGHT: Tech Constellation */}
        <div className="hero-visual">
          <div className="constellation-system">
            
            <svg className="constellation-svg" viewBox="0 0 500 500">
              <line className="const-line" x1="250" y1="250" x2="250" y2="40" />
              <line className="const-line" x1="250" y1="250" x2="440" y2="150" />
              <line className="const-line" x1="250" y1="250" x2="390" y2="420" />
              <line className="const-line" x1="250" y1="250" x2="60" y2="380" />
              <circle className="const-circle" cx="250" cy="250" r="195" />
              <circle className="const-node" cx="250" cy="40" r="6" />
              <circle className="const-node" cx="440" cy="150" r="6" />
              <circle className="const-node" cx="390" cy="420" r="6" />
              <circle className="const-node" cx="60" cy="380" r="6" />
            </svg>

            <div className="const-hub">
              <div className="const-hub-core">
                <span className="const-hub-text">&lt;/&gt;</span>
              </div>
              <div className="const-hub-pulse p1"></div>
              <div className="const-hub-pulse p2"></div>
              <div className="const-hub-pulse p3"></div>
            </div>

            <div className="const-icon ci-top">
              <div className="const-card">
                <span className="const-emoji">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </span>
                <span className="const-label">Mobile Dev</span>
              </div>
            </div>

            <div className="const-icon ci-right">
              <div className="const-card">
                <span className="const-emoji">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                  </svg>
                </span>
                <span className="const-label">Web Dev</span>
              </div>
            </div>

            <div className="const-icon ci-bottom">
              <div className="const-card">
                <span className="const-emoji">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>
                  </svg>
                </span>
                <span className="const-label">Website Redesign</span>
              </div>
            </div>

            <div className="const-icon ci-left">
              <div className="const-card">
                <span className="const-emoji">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <path d="M9 1v3"></path>
                    <path d="M15 1v3"></path>
                    <path d="M9 20v3"></path>
                    <path d="M15 20v3"></path>
                    <path d="M20 9h3"></path>
                    <path d="M20 14h3"></path>
                    <path d="M1 9h3"></path>
                    <path d="M1 14h3"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </span>
                <span className="const-label">AI</span>
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