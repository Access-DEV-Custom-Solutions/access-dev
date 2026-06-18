import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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
          <img 
            src="/without background.png" 
            alt="ACCESS DEV" 
            className="navbar-logo-img" 
          />
        </Link>

        {/* NAV LINKS */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          
          {/* Mobile-only buttons */}
          <Link to="/signin" className="btn-signin mobile-only" onClick={closeMenu}>
            Sign In
          </Link>
          <Link to="/signup" className="btn-create-account mobile-only" onClick={closeMenu}>
            Create Account
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">
          
          {/* Sign In Button */}
          <Link to="/signin" className="btn-signin desktop-only">
            Sign In
          </Link>
          
          {/* Create Account Button */}
          <Link to="/signup" className="btn-create-account desktop-only">
            Create Account
          </Link>
          
          {/* Theme Toggle */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Animated Hamburger */}
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