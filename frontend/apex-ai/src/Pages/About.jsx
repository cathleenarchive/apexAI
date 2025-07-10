import React, { useState, useEffect } from 'react';

export default function About() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      number: 15000, 
      label: "Students Helped", 
      icon: "🎓",
      color: "text-primary"
    },
    { 
      number: 450, 
      label: "Partner Schools", 
      icon: "🏫",
      color: "text-success"
    },
    { 
      number: 95, 
      label: "Success Rate", 
      suffix: "%",
      icon: "📈",
      color: "text-warning"
    },
    { 
      number: 1200, 
      label: "Active Counselors", 
      icon: "👥",
      color: "text-info"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      education: "Ph.D. Education Technology, Stanford",
      image: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=SC",
      bio: "Former Director of College Counseling at prestigious institutions, passionate about democratizing access to quality guidance.",
      achievements: ["15+ years in education", "Published researcher", "TEDx speaker"]
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      education: "MS Computer Science, MIT",
      image: "https://via.placeholder.com/150x150/10b981/ffffff?text=MR",
      bio: "AI researcher and former Google engineer, dedicated to building technology that empowers educational excellence.",
      achievements: ["Former Google AI", "10+ AI patents", "MIT graduate"]
    },
    {
      name: "Dr. Lisa Wang",
      role: "Head of Product",
      education: "Ph.D. Cognitive Psychology, Harvard", 
      image: "https://via.placeholder.com/150x150/f59e0b/ffffff?text=LW",
      bio: "Learning science expert focused on creating intuitive, research-backed tools for student success.",
      achievements: ["Harvard researcher", "UX design expert", "Psychology specialist"]
    },
    {
      name: "James Thompson",
      role: "Head of Partnerships",
      education: "MBA, Wharton School",
      image: "https://via.placeholder.com/150x150/ef4444/ffffff?text=JT",
      bio: "Former admissions director with deep connections across higher education institutions nationwide.",
      achievements: ["Former admissions officer", "500+ school network", "Policy advisor"]
    }
  ];

  const values = [
    {
      title: "Accessibility First",
      description: "Quality college counseling should be available to every student, regardless of background or resources.",
      icon: "🌟",
      color: "bg-primary"
    },
    {
      title: "Data-Driven Decisions",
      description: "We believe in the power of data and AI to provide personalized, effective guidance for each student's unique journey.",
      icon: "📊", 
      color: "bg-success"
    },
    {
      title: "Continuous Innovation",
      description: "The education landscape evolves rapidly. We stay ahead with cutting-edge research and technology.",
      icon: "🚀",
      color: "bg-warning"
    },
    {
      title: "Collaborative Success",
      description: "We partner with counselors, schools, and families to create a supportive ecosystem for student achievement.",
      icon: "🤝",
      color: "bg-info"
    }
  ];

  return (
    <div className="bg-white">
      {/* Modern Hero Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f3e8ff 100%)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="pe-lg-4">
                <div className="mb-4">
                  <span className="badge bg-primary text-white px-4 py-2 rounded-pill">
                    🎯 About Apex AI
                  </span>
                </div>
                <h1 className="display-3 fw-bold text-dark mb-4">
                  Empowering Educational Excellence Through
                  <span className="text-primary d-block">Intelligent Technology</span>
                </h1>
                <p className="lead text-secondary mb-4">
                  We're revolutionizing college counseling by combining artificial intelligence with human expertise, 
                  making personalized guidance accessible to students everywhere.
                </p>
                
                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#missionModal">
                    <i className="fas fa-bullseye me-2"></i>Our Mission
                  </button>
                  <button className="btn btn-outline-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#contactModal">
                    <i className="fas fa-envelope me-2"></i>Get in Touch
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="text-center">
                <div className="bg-white rounded-4 shadow-lg p-5">
                  <div className="mb-4">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3"
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                      }}
                    >
                      <i className="fas fa-graduation-cap fa-3x"></i>
                    </div>
                  </div>
                  <h3 className="text-dark fw-bold mb-3">Transforming Futures Since 2019</h3>
                  <p className="text-secondary mb-4">
                    Founded by educators and technologists who believe every student deserves 
                    access to world-class college counseling guidance.
                  </p>
                  
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="text-primary fw-bold fs-2">5+</div>
                      <small className="text-secondary">Years of Innovation</small>
                    </div>
                    <div className="col-6">
                      <div className="text-success fw-bold fs-2">50+</div>
                      <small className="text-secondary">Team Members</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="stats-section" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Making a Real Difference</h2>
              <p className="lead text-secondary">
                Our platform has helped thousands of students achieve their college dreams
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="bg-white rounded-4 shadow-sm p-5 text-center h-100 hover-lift">
                  <div className="mb-3">
                    <span className="fs-1 mb-3 d-block">{stat.icon}</span>
                  </div>
                  <div className={`stat-counter ${stat.color}`}>
                    {visibleStats ? stat.number.toLocaleString() : '0'}{stat.suffix || ''}
                  </div>
                  <p className="text-secondary fw-medium mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Meet Our Leadership Team</h2>
              <p className="lead text-secondary">
                Passionate educators and technologists dedicated to student success
              </p>
            </div>
          </div>
          
          <div className="row">
            {/* Team Navigation */}
            <div className="col-lg-3 mb-4">
              <div className="bg-light rounded-4 p-4">
                <h5 className="text-dark fw-bold mb-3">Leadership</h5>
                <div className="d-grid gap-2">
                  {teamMembers.map((member, index) => (
                    <button
                      key={index}
                      className={`btn text-start p-3 rounded-3 ${
                        selectedTeamMember === index 
                          ? 'btn-primary' 
                          : 'btn-outline-primary'
                      }`}
                      onClick={() => setSelectedTeamMember(index)}
                    >
                      <div className="d-flex align-items-center">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="rounded-circle me-3"
                          width="40"
                          height="40"
                        />
                        <div className="text-start">
                          <div className="fw-bold">{member.name}</div>
                          <small className={selectedTeamMember === index ? 'text-white' : 'text-secondary'}>
                            {member.role}
                          </small>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Team Member Detail */}
            <div className="col-lg-9">
              <div className="bg-white rounded-4 shadow-lg p-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img 
                      src={teamMembers[selectedTeamMember].image} 
                      alt={teamMembers[selectedTeamMember].name}
                      className="rounded-circle shadow-sm mb-3"
                      width="150"
                      height="150"
                    />
                    <h4 className="text-dark fw-bold mb-1">{teamMembers[selectedTeamMember].name}</h4>
                    <p className="text-primary fw-medium mb-2">{teamMembers[selectedTeamMember].role}</p>
                    <small className="text-secondary">{teamMembers[selectedTeamMember].education}</small>
                  </div>
                  <div className="col-md-8">
                    <h5 className="text-dark fw-bold mb-3">Biography</h5>
                    <p className="text-secondary mb-4">{teamMembers[selectedTeamMember].bio}</p>
                    
                    <h6 className="text-dark fw-bold mb-3">Key Achievements</h6>
                    <div className="row">
                      {teamMembers[selectedTeamMember].achievements.map((achievement, index) => (
                        <div key={index} className="col-sm-4 mb-2">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <small className="text-secondary">{achievement}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <button className="btn btn-outline-primary rounded-pill me-2">
                        <i className="fab fa-linkedin me-2"></i>Connect
                      </button>
                      <button className="btn btn-outline-secondary rounded-pill">
                        <i className="fas fa-envelope me-2"></i>Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Our Core Values</h2>
              <p className="lead text-secondary">
                The principles that guide everything we do at Apex AI
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-lg-6">
                <div className="bg-white rounded-4 shadow-sm p-5 h-100 hover-lift">
                  <div className="d-flex align-items-start">
                    <div 
                      className={`${value.color} rounded-circle text-white d-flex align-items-center justify-content-center me-4 flex-shrink-0`}
                      style={{ width: '60px', height: '60px' }}
                    >
                      <span className="fs-3">{value.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-dark fw-bold mb-3">{value.title}</h4>
                      <p className="text-secondary mb-0">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center p-5 rounded-4" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)' }}>
                <div className="mb-4">
                  <div 
                    className="rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                    }}
                  >
                    <i className="fas fa-handshake fa-2x"></i>
                  </div>
                </div>
                <h2 className="display-5 fw-bold text-dark mb-4">Ready to Partner with Us?</h2>
                <p className="lead text-secondary mb-4">
                  Join our mission to transform college counseling and help students achieve their dreams. 
                  Let's work together to build the future of education.
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button className="btn btn-primary btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#partnerModal">
                    <i className="fas fa-handshake me-2"></i>Become a Partner
                  </button>
                  <button className="btn btn-success btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#careerModal">
                    <i className="fas fa-briefcase me-2"></i>Join Our Team
                  </button>
                  <button className="btn btn-outline-primary btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#investorModal">
                    <i className="fas fa-chart-line me-2"></i>Investor Relations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Modals */}
      
      {/* Mission Modal */}
      <div className="modal fade" id="missionModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-bullseye text-primary me-2"></i>
                Our Mission & Vision
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-5">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="text-center mb-3">
                    <div className="bg-primary rounded-circle text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-target fa-2x"></i>
                    </div>
                  </div>
                  <h4 className="text-dark fw-bold mb-3 text-center">Mission</h4>
                  <p className="text-secondary text-center">
                    To democratize access to high-quality college counseling through intelligent technology, 
                    ensuring every student has the guidance they need to succeed.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="text-center mb-3">
                    <div className="bg-success rounded-circle text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-eye fa-2x"></i>
                    </div>
                  </div>
                  <h4 className="text-dark fw-bold mb-3 text-center">Vision</h4>
                  <p className="text-secondary text-center">
                    A world where every student, regardless of background, has access to personalized, 
                    AI-powered guidance that maximizes their potential and opens doors to their dreams.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <div className="modal fade" id="contactModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-envelope text-primary me-2"></i>
                Get in Touch
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-dark fw-medium">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter first name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-dark fw-medium">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter last name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Subject</label>
                  <select className="form-select">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                    <option>Media & Press</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Tell us how we can help you..."></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary rounded-pill">
                <i className="fas fa-paper-plane me-2"></i>Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
