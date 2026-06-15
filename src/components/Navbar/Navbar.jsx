
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen) // Flip true/false
  }

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
       {/* LOGO */}
       <Link to="/" className="navbar-logo">
  <img 
    src="/without background.png"           // ← Path to your logo
    alt="ACCESS DEV"          // ← Alt text for accessibility
    className="logo-image"    // ← Class for styling
  />
</Link>

        {/* NAV LINKS - Desktop */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        
        <Link to="/" onClick={closeMenu}>Home</Link>
<Link to="/projects" onClick={closeMenu}>Projects</Link>
<Link to="/about" onClick={closeMenu}>About</Link>
<Link to="/contact" onClick={closeMenu}>Contact</Link>
</div>

        {/* RIGHT SIDE: Theme Toggle + Hamburger */}
        <div className="navbar-actions">
          
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