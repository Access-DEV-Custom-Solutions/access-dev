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
      role: 'Senior Developer & Systems Architect',
      bio: 'Specializing in scalable web applications and mobile development. Experienced in cloud architecture and DevOps.',
      skills: ['Web Dev', 'Mobile Dev', 'Cloud'],
      image: '/images/team/tawanda.jpg'
    }
  ]

  return (
    <section className="about-page">
      <div className="about-container">
        
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">
            <span className="title-bracket">&lt;</span>
            About ACCESS DEV
            <span className="title-bracket">/&gt;</span>
          </h1>
          <p className="about-subtitle">Bridging the gap between vision and technology</p>
        </div>

        {/* Mission */}
        <div className="about-mission">
          <p className="mission-text">
            ACCESS DEV is a technology company specializing in 
            <span className="highlight"> Mobile Development</span>, 
            <span className="highlight"> Web Development</span>, 
            <span className="highlight"> Robotics</span>, and 
            <span className="highlight"> Artificial Intelligence</span>. 
            We transform complex ideas into elegant, functional solutions 
            that drive business growth.
          </p>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-heading">Meet the Engineers</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-photo" />
                  ) : (
                    <div className="team-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
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
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="values-section">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-section">
          <h2 className="section-heading">Our Tech Stack</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About