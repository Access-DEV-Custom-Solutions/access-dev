import { motion } from 'framer-motion'
import './Testimonials.css'

function Testimonials() {

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Moyo',
      role: 'CEO, EduTech Zimbabwe',
      image: '/images/testimonials/person1.jpg',
      quote: 'ACCESS DEV transformed our outdated website into a modern platform that doubled our student enrollment. Their attention to detail and commitment to deadlines was exceptional.',
      rating: 5,
      color: '#2355E1'
    },
    {
      id: 2,
      name: 'David Chikwanda',
      role: 'Founder, AgriConnect',
      image: '/images/testimonials/person2.jpg',
      quote: 'The mobile app they built for our farmers marketplace has been a game-changer. Over 5,000 farmers are now connected to buyers. Truly transformative work.',
      rating: 5,
      color: '#008F88'
    },
    {
      id: 3,
      name: 'Precious Ndlovu',
      role: 'CTO, FinTech Solutions',
      image: '/images/testimonials/person3.jpg',
      quote: 'Working with ACCESS DEV on our AI chatbot was seamless. They understood our vision and delivered beyond expectations. The team is professional and highly skilled.',
      rating: 5,
      color: '#8B5CF6'
    },
    {
      id: 4,
      name: 'Tendai Makoni',
      role: 'Managing Director, RetailPro',
      image: '/images/testimonials/person4.jpg',
      quote: 'Our e-commerce redesign was completed in just 3 weeks. Sales increased by 40% within the first month. I highly recommend ACCESS DEV for any digital project.',
      rating: 5,
      color: '#E255A1'
    },
  ]

  return (
    <section className="testimonials-section">
      {/* Background */}
      <div className="testimonials-bg">
        <div className="testimonials-glow testimonials-glow-1"></div>
        <div className="testimonials-glow testimonials-glow-2"></div>
        <div className="testimonials-grid-pattern"></div>
      </div>

      <div className="testimonials-container">
        
        {/* Header */}
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="testimonials-header-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
          </div>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">Trusted by businesses across Africa</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              style={{ '--card-color': testimonial.color }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow border */}
              <div className="testimonial-glow-border"></div>
              
              {/* Quote Icon */}
              <div className="testimonial-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials