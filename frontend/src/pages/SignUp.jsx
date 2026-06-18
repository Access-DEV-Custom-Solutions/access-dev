import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const slides = [
    { image: "/images/industries/education.jpg", title: "Education", desc: "E-learning & Student Management Systems" },
    { image: "/images/industries/healthcare.webp", title: "Healthcare", desc: "Patient Care & Telemedicine Platforms" },
    { image: "/images/industries/agriculture.jpeg", title: "Agriculture", desc: "Farm Management & Supply Chain Solutions" },
    { image: "/images/industries/finance.jpg", title: "Finance", desc: "Fintech Apps & Payment Gateway Systems" },
    { image: "/images/industries/retail.jpg", title: "Retail", desc: "E-commerce & POS Management Systems" },
    { image: "/images/industries/manufacturing.jpg", title: "Manufacturing", desc: "Automation & Quality Control Systems" },
    { image: "/images/industries/logistics.webp", title: "Logistics", desc: "Fleet Management & Delivery Tracking" },
    { image: "/images/industries/realestate.webp", title: "Real Estate", desc: "Property Listings & Virtual Tour Platforms" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    fetch('https://access-dev.onrender.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Account created:', data)
        setIsSubmitting(false)
        setIsSuccess(true)
        setTimeout(() => {
          navigate('/contact', {
            state: {
              fromSignup: true,
              userName: formData.fullname
            }
          })
        }, 2000)
      })
      .catch((error) => {
        console.error('Error:', error)
        setIsSubmitting(false)
      })
  }

  return (
    <section className="signup-page">
      <div className="signup-bg">
        <div className="signup-glow signup-glow-1"></div>
        <div className="signup-glow signup-glow-2"></div>
        <div className="signup-glow signup-glow-3"></div>
        <div className="signup-grid-pattern"></div>
        <div className="signup-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="signup-particle"
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

      <div className="signup-container">
        <motion.div className="signup-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="signup-header-icon"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </motion.div>
          <h1 className="signup-title">
            <span className="title-bracket">&lt;</span>
            Create Account
            <span className="title-bracket">/&gt;</span>
          </h1>
          <p className="signup-subtitle">Join ACCESS DEV to request custom solutions</p>
        </motion.div>

        <div className="signup-layout">
          <motion.div className="signup-card"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="signup-logo"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            >
              <img src="/without background.png" alt="ACCESS DEV" className="signup-logo-img" />
            </motion.div>

            {isSuccess ? (
              <motion.div className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <motion.div className="success-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </motion.div>
                <h2>Account Created!</h2>
                <p>Redirecting you to request your custom solution...</p>
              </motion.div>
            ) : (
              <motion.form className="signup-form" onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="signup-form-group">
                  <label htmlFor="fullname">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Full Name
                  </label>
                  <input type="text" id="fullname" placeholder="Tawanda Madanhire"
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                    required
                  />
                </div>
                <div className="signup-form-group">
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
                <div className="signup-form-group">
                  <label htmlFor="phone">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                    Phone Number
                  </label>
                  <input type="tel" id="phone" placeholder="+263 77 664 2351"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <motion.button type="submit" className="signup-btn"
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
                      Creating...
                    </>
                  ) : (
                    <>
                      Create Account
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
            <motion.p className="signup-footer-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Already have an account?{' '}
              <Link to="/contact" className="signup-link">Contact Support</Link>
            </motion.p>
          </motion.div>

          <motion.div className="signup-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="signup-slideshow-card">
              <div className="signup-slideshow-container">
                <AnimatePresence mode="wait">
                  <motion.div key={currentSlide} className="signup-slide"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="signup-slide-image" />
                    <div className="signup-slide-overlay">
                      <h3 className="signup-slide-title">{slides[currentSlide].title}</h3>
                      <p className="signup-slide-desc">{slides[currentSlide].desc}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="signup-slide-indicators">
                  {slides.map((_, index) => (
                    <button key={index}
                      className={`signup-slide-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div className="signup-info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="signup-info-title">Why Create an Account?</h3>
              <div className="signup-benefits">
                <div className="signup-benefit">
                  <span className="benefit-icon">⚡</span>
                  <div>
                    <strong>Request Custom Solutions</strong>
                    <p>Submit detailed project requirements</p>
                  </div>
                </div>
                <div className="signup-benefit">
                  <span className="benefit-icon">📁</span>
                  <div>
                    <strong>Upload Documents</strong>
                    <p>Share specs, designs, and requirements</p>
                  </div>
                </div>
                <div className="signup-benefit">
                  <span className="benefit-icon">📊</span>
                  <div>
                    <strong>Track Progress</strong>
                    <p>Monitor your project from start to finish</p>
                  </div>
                </div>
                <div className="signup-benefit">
                  <span className="benefit-icon">💬</span>
                  <div>
                    <strong>Direct Communication</strong>
                    <p>Chat directly with your development team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SignUp