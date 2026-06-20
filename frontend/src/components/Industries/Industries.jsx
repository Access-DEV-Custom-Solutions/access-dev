import { motion } from 'framer-motion'
import './Industries.css'

function Industries() {
  const industries = [
    { 
      image: '/images/industries/education.jpg', 
      name: 'Education', 
      desc: 'E-learning platforms, student management systems, and digital classrooms' 
    },
    { 
      image: '/images/industries/healthcare.webp', 
      name: 'Healthcare', 
      desc: 'Patient management, telemedicine, and health monitoring solutions' 
    },
    { 
      image: '/images/industries/agriculture.jpeg', 
      name: 'Agriculture', 
      desc: 'Farm management, marketplace platforms, and supply chain solutions' 
    },
    { 
      image: '/images/industries/finance.jpg', 
      name: 'Finance', 
      desc: 'Fintech apps, payment gateways, and financial management systems' 
    },
    { 
      image: '/images/industries/retail.jpg', 
      name: 'Retail', 
      desc: 'E-commerce platforms, inventory management, and POS systems' 
    },
    { 
      image: '/images/industries/manufacturing.jpg', 
      name: 'Manufacturing', 
      desc: 'Automation systems, quality control, and production monitoring' 
    },
    { 
      image: '/images/industries/logistics.webp', 
      name: 'Logistics', 
      desc: 'Fleet management, tracking systems, and delivery optimization' 
    },
    { 
      image: '/images/industries/realestate.webp', 
      name: 'Real Estate', 
      desc: 'Property listings, virtual tours, and property management platforms' 
    },
  ]

  return (
    <section className="industries-section">
      <div className="industries-container">
        
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="heading-bracket">&lt;</span>
          Industries We Serve
          <span className="heading-bracket">/&gt;</span>
        </motion.h2>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="industry-card"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.07,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="industry-image-wrap">
                <img src={industry.image} alt={industry.name} className="industry-image" />
                <div className="industry-overlay"></div>
                <div className="industry-shine"></div>
              </div>
              <div className="industry-card-content">
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-desc">{industry.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Industries