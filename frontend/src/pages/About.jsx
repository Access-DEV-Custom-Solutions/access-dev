import { motion } from 'framer-motion'
import './About.css'

function About() {
  const values = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Agile methodology ensuring rapid development and deployment cycles'
    },
    {
      icon: '🔒',
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with architecture that grows with your business'
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'Cutting-edge technology stack for future-proof solutions'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 technical support and maintenance for all our solutions'
    }
  ]

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

  const techStack = [
    'React', 'Node.js', 'Python', 'TypeScript', 
    'C++', 'Kotlin', 'PHP', 'Laravel',
    'ROS2', 'TensorFlow', 'NLP', 'Computer Vision'
  ]

  const team = [
    {
      name: 'Malvin Haparimwi',
      role: 'Lead Developer & AI Specialist',
      bio: 'Passionate about building intelligent systems and robotics solutions. Expert in machine learning and full-stack development.',
      skills: ['AI/ML', 'Robotics', 'Full-Stack'],
      image: '/images/team/malvin.png'
    },
    {
      name: 'Tawanda Madanhire',
      role: 'Web and App Developer',
      bio: 'Specializing in scalable web applications and mobile development. Experienced in cloud architecture and DevOps.',
      skills: ['Web Dev', 'Mobile Dev', 'Cloud'],
      image: '/images/team/tawanda.jpg'
    },
    {
      name: 'Nobuhle Trish Mkwedu',
      role: 'Web & Mobile Developer',
      bio: 'Creative developer focused on building beautiful, responsive web and mobile experiences. Passionate about UI/UX design and frontend innovation.',
      skills: ['React', 'Flutter', 'UI/UX', 'JavaScript'],
      image: '/images/team/nobuhle.jpg'
    }
  ]

  return (
    <section className="about-page">
      {/* Animated Background */}
      <div className="about-bg">
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>
        <div className="about-glow about-glow-3"></div>
        <div className="about-grid-pattern"></div>
        <div className="about-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="about-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="about-container">
        
        {/* Header with Logo */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="about-logo-wrap"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            <img 
              src="/without background.png" 
              alt="ACCESS DEV" 
              className="about-logo-img" 
            />
            <div className="about-logo-glow"></div>
          </motion.div>
          
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Bridging the gap between vision and technology
          </motion.p>
        </motion.div>

        {/* Mission */}
        <motion.div 
          className="about-mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.p 
            className="mission-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ACCESS DEV is a technology company specializing in 
            <span className="highlight"> Mobile Development</span>, 
            <span className="highlight"> Web Development</span>, 
            <span className="highlight"> Web Redesign</span>, and 
            <span className="highlight"> Artificial Intelligence</span>. 
            We transform complex ideas into elegant, functional solutions 
            that drive business growth.
          </motion.p>
        </motion.div>

        {/* Industries We Serve */}
        <div className="industries-section">
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

        {/* Meet the Engineers */}
        <div className="team-section">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="heading-bracket">&lt;</span>
            Meet the Engineers
            <span className="heading-bracket">/&gt;</span>
          </motion.h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="team-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="team-avatar"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-photo" />
                  ) : (
                    <div className="team-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </motion.div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-skills">
                    {member.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="skill-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="values-section">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="heading-bracket">&lt;</span>
            Why Choose Us
            <span className="heading-bracket">/&gt;</span>
          </motion.h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="value-card"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  borderColor: 'var(--color-blue)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="value-icon"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: index * 0.5
                  }}
                >
                  {value.icon}
                </motion.span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div 
          className="tech-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="heading-bracket">&lt;</span>
            Our Tech Stack
            <span className="heading-bracket">/&gt;</span>
          </h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="tech-tag"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.08,
                  borderColor: 'var(--color-blue)',
                  color: 'var(--color-blue)',
                  boxShadow: '0 8px 25px rgba(35, 85, 225, 0.2)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About