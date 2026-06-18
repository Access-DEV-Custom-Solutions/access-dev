import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      console.log('Sign in:', formData)
    }, 1500)
  }

  return (
    <section className="signin-page">
      <div className="signin-bg">
        <div className="signin-glow signin-glow-1"></div>
        <div className="signin-glow signin-glow-2"></div>
        <div className="signin-glow signin-glow-3"></div>
        <div className="signin-grid-pattern"></div>
        <div className="signin-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="signin-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="signin-container">
        <motion.div className="signin-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <motion.div className="signin-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <img src="/without background.png" alt="ACCESS DEV" className="signin-logo-img" />
          </motion.div>

          <motion.div className="signin-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="signin-title">Welcome Back</h1>
            <p className="signin-subtitle">Sign in to your account</p>
          </motion.div>

          <motion.form className="signin-form" onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="signin-form-group">
              <label htmlFor="email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Address
              </label>
              <input type="email" id="email" placeholder="tawanda@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="signin-form-group">
              <label htmlFor="password">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0110 0v4"></path>
                </svg>
                Password
              </label>
              <input type="password" id="password" placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <div className="signin-forgot">
              <Link to="/contact">Forgot password?</Link>
            </div>

            <motion.button type="submit" className="signin-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <motion.div className="spinner-icon" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 12a9 9 0 11-6.219-8.56"></path>
                    </svg>
                  </motion.div>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.p className="signin-footer-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Don't have an account?{' '}
            <Link to="/signup" className="signin-link">Create Account</Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default SignIn