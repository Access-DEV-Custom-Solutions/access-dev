import './Industries.css'

function Industries() {

  const topRow = [
    { image: '/images/industries/education.jpg', name: 'Education' },
    { image: '/images/industries/healthcare.webp', name: 'Healthcare' },
    { image: '/images/industries/agriculture.jpeg', name: 'Agriculture' },
    { image: '/images/industries/finance.jpg', name: 'Finance' },
  ]

  const bottomRow = [
    { image: '/images/industries/retail.jpg', name: 'Retail' },
    { image: '/images/industries/manufacturing.jpg', name: 'Manufacturing' },
    { image: '/images/industries/logistics.webp', name: 'Logistics' },
    { image: '/images/industries/realestate.webp', name: 'Real Estate' },
  ]

  return (
    <section className="industries-section">
      {/* Dark Background with Live Effects */}
      <div className="industries-bg">
        <div className="industries-glow industries-glow-1"></div>
        <div className="industries-glow industries-glow-2"></div>
        <div className="industries-glow industries-glow-3"></div>
        <div className="industries-grid-pattern"></div>
        <div className="industries-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="industries-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            ></div>
          ))}
        </div>
        {/* Scan line effect */}
        <div className="industries-scan-line"></div>
      </div>

      <div className="industries-container">
        
        {/* Section Header */}
        <div className="industries-header">
          <div className="industries-header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
            </svg>
          </div>
          <h2 className="industries-title">Industries We Serve</h2>
          <p className="industries-subtitle">Delivering solutions across diverse sectors</p>
        </div>

        {/* Row 1 - Moving Left to Right */}
        <div className="industries-row">
          <div className="industries-track track-left">
            {[...topRow, ...topRow, ...topRow].map((industry, i) => (
              <div key={i} className="industry-card">
                <div className="industry-card-image">
                  <img src={industry.image} alt={industry.name} />
                  <div className="industry-card-overlay"></div>
                  <div className="industry-card-shine"></div>
                </div>
                <div className="industry-card-label">
                  <span>{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Left to Right */}
        <div className="industries-row">
          <div className="industries-track track-left">
            {[...bottomRow, ...bottomRow, ...bottomRow].map((industry, i) => (
              <div key={i} className="industry-card">
                <div className="industry-card-image">
                  <img src={industry.image} alt={industry.name} />
                  <div className="industry-card-overlay"></div>
                  <div className="industry-card-shine"></div>
                </div>
                <div className="industry-card-label">
                  <span>{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Industries