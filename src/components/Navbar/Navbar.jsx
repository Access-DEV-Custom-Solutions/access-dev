import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show navbar when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        
        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          ACCESS DEV
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* NAV LINKS - Desktop */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* RIGHT SIDE: Create Account + Theme Toggle + Hamburger */}
        <div className="navbar-actions">
          
          {/* Create Account Button */}
          <Link to="/contact" className="btn-create-account">
            Create Account
          </Link>
          
          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger Menu Button - Mobile only */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar