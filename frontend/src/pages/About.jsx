import { motion } from 'framer-motion'

function About() {
  const values = [
    { icon: '⚡', title: 'Fast Delivery', description: 'Agile methodology ensuring rapid development and deployment cycles' },
    { icon: '🔒', title: 'Secure & Scalable', description: 'Enterprise-grade security with architecture that grows with your business' },
    { icon: '💡', title: 'Innovation First', description: 'Cutting-edge technology stack for future-proof solutions' },
    { icon: '🤝', title: 'Dedicated Support', description: '24/7 technical support and maintenance for all our solutions' }
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
      bio: 'Passionate about building intelligent systems and robotics solutions.',
      skills: ['AI/ML', 'Robotics', 'Full-Stack'],
      image: '/images/team/malvin.png'
    },
    {
      name: 'Tawanda Madanhire',
      role: 'Web and App Developer',
      bio: 'Specializing in scalable web applications and mobile development.',
      skills: ['Web Dev', 'Mobile Dev', 'Cloud'],
      image: '/images/team/tawanda.jpg'
    },
    {
      name: 'Nobuhle Trish Mkwedu',
      role: 'Web & Mobile Developer',
      bio: 'Creative developer focused on building beautiful, responsive web and mobile experiences.',
      skills: ['React', 'Flutter', 'UI/UX', 'JavaScript'],
      image: '/images/team/Nobuhle.jpeg'
    }
  ]

  return (
    <section className="about-page">
      <div className="about-bg">
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>
        <div className="about-glow about-glow-3"></div>
        <div className="about-grid-pattern"></div>
      </div>
      
      <div className="about-container">
        
        <motion.div className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="about-logo-wrap"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          >
            <img src="/without background.png" alt="ACCESS DEV" className="about-logo-img" />
            <div className="about-logo-glow"></div>
          </motion.div>
          <motion.p className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Bridging the gap between vision and technology
          </motion.p>
        </motion.div>

        <motion.div className="about-mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.p className="mission-text"
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
            We transform complex ideas into elegant, functional solutions that drive business growth.
          </motion.p>
        </motion.div>

        <div className="team-section">
          <motion.h2 className="section-heading"
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
              <motion.div key={index} className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="team-avatar">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-photo" />
                  ) : (
                    <div className="team-initials">{member.name.split(' ').map(n => n[0]).join('')}</div>
                  )}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-skills">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <motion.h2 className="section-heading"
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
              <motion.div key={index} className="value-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="tech-section"
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
              <motion.span key={index} className="tech-tag"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ y: -4, scale: 1.08 }}
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