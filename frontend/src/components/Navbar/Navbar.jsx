import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    setIsLoggedIn(!!token)
  }, [])

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
          
          {/* Mobile-only Dashboard */}
          {isLoggedIn && (
            <Link to="/dashboard" className="dashboard-link mobile-only" onClick={closeMenu}>
              Dashboard
            </Link>
          )}
          
          {/* Mobile-only buttons */}
          {!isLoggedIn ? (
            <>
              <Link to="/signin" className="btn-signin mobile-only" onClick={closeMenu}>
                Sign In
              </Link>
              <Link to="/signup" className="btn-create-account mobile-only" onClick={closeMenu}>
                Create Account
              </Link>
            </>
          ) : (
            <button 
              className="btn-signin mobile-only" 
              onClick={() => {
                localStorage.removeItem('access_token')
                localStorage.removeItem('user_email')
                setIsLoggedIn(false)
                closeMenu()
                window.location.href = '/'
              }}
            >
              Sign Out
            </button>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">
          
          {isLoggedIn ? (
            <>
              {/* Dashboard Button - Desktop */}
              <Link to="/dashboard" className="dashboard-link desktop-only">
                Dashboard
              </Link>
              
              {/* Sign Out Button - Desktop */}
              <button 
                className="btn-signin desktop-only"
                onClick={() => {
                  localStorage.removeItem('access_token')
                  localStorage.removeItem('user_email')
                  setIsLoggedIn(false)
                  window.location.href = '/'
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              {/* Sign In Button - Desktop */}
              <Link to="/signin" className="btn-signin desktop-only">
                Sign In
              </Link>
              
              {/* Create Account Button - Desktop */}
              <Link to="/signup" className="btn-create-account desktop-only">
                Create Account
              </Link>
            </>
          )}
          
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