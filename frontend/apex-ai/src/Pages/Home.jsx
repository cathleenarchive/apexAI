import React, { useState, useEffect } from 'react';
import Features from './Features';
import About from './About';
import Pricing from './Pricing';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ students: 0, counselors: 0, schools: 0, success: 0 });

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated statistics counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        students: 15000,
        counselors: 1200,
        schools: 450,
        success: 95
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Comprehensive tracking and insights",
      details: "Real-time analytics and predictive insights for better outcomes"
    },
    {
      icon: "🎯",
      title: "AI Guidance",
      description: "Personalized recommendations",
      details: "Tailored college suggestions based on student profiles"
    },
    {
      icon: "📅",
      title: "Smart Scheduling",
      description: "Streamlined appointment management",
      details: "Automated scheduling with calendar integration"
    },
    {
      icon: "📝",
      title: "Application Tracker",
      description: "Complete application oversight",
      details: "Track deadlines and progress across all applications"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Head Counselor, Westfield High",
      image: "https://via.placeholder.com/80x80/3b82f6/ffffff?text=SM",
      quote: "Apex AI transformed our counseling program. We've seen a 40% increase in college acceptance rates.",
      rating: 5
    },
    {
      name: "Mark Johnson",
      role: "Private College Counselor",
      image: "https://via.placeholder.com/80x80/f59e0b/ffffff?text=MJ",
      quote: "The platform's AI recommendations are incredibly accurate. Students are achieving their goals.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Director of College Counseling",
      image: "https://via.placeholder.com/80x80/10b981/ffffff?text=LC",
      quote: "The efficiency gains are remarkable. I can now serve twice as many students effectively.",
      rating: 5
    }
  ];

  const processSteps = [
    { title: "Student Onboarding", description: "Quick profile setup", icon: "👤" },
    { title: "AI Assessment", description: "Comprehensive analysis", icon: "🧠" },
    { title: "Personalized Plan", description: "Custom roadmap", icon: "🗺️" },
    { title: "Progress Tracking", description: "Real-time monitoring", icon: "📈" },
    { title: "Application Support", description: "Guided process", icon: "📋" },
    { title: "Success Achievement", description: "College acceptance", icon: "🎓" }
  ];

  return (
    <div className="bg-white">
      {/* Modern Light Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top bg-white border-bottom ${isScrolled ? 'shadow' : ''}`}>
        <div className="container">
          {/* Apex AI Logo with Modern Design */}
          <div className="navbar-brand d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              {/* Modern Apex AI Logo */}
              <div className="position-relative">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{ 
                    width: '45px', 
                    height: '45px', 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>AI</span>
                </div>
                <div 
                  className="position-absolute top-0 end-0 bg-warning rounded-circle"
                  style={{ width: '12px', height: '12px', transform: 'translate(25%, -25%)' }}
                ></div>
              </div>
              <div className="ms-3">
                <div className="fw-bold text-primary" style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                  Apex AI
                </div>
                <div className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: '1' }}>
                  College Counseling Platform
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle fw-semibold text-dark btn btn-link border-0 p-2" id="resourcesDropdown" role="button" data-bs-toggle="dropdown">
                  Resources
                </button>
                <ul className="dropdown-menu border-0 shadow-lg bg-white">
                  <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#demoModal">📊 Platform Demo</button></li>
                  <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#webinarModal">🎥 Free Webinars</button></li>
                  <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#guideModal">📚 Success Guide</button></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#supportModal">💬 Support Center</button></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </button>
              <button className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="fas fa-rocket me-2"></i>Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bright Hero Section with Modern Design */}
      <section className="py-5" style={{ 
        marginTop: '76px', 
        minHeight: '90vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f3e8ff 100%)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="pe-lg-4">
                <div className="mb-4">
                  <span className="badge bg-primary text-white px-4 py-2 rounded-pill shadow-sm">
                    🚀 Trusted by 450+ Schools Nationwide
                  </span>
                </div>
                <h1 className="display-3 fw-bold mb-4 text-dark" style={{ lineHeight: '1.1' }}>
                  Transform College Counseling with 
                  <span className="text-primary d-block">AI-Powered Precision</span>
                </h1>
                <p className="lead mb-4 text-secondary" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                  Apex AI revolutionizes college admissions, providing counselors and students with intelligent tools for personalized guidance and unprecedented success rates.
                </p>
                
                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-3 mb-5">
                  <button 
                    className="btn btn-primary btn-lg rounded-pill px-4" 
                    data-bs-toggle="modal" 
                    data-bs-target="#demoModal"
                  >
                    <i className="fas fa-play me-2"></i>Watch Demo
                  </button>
                  <button 
                    className="btn btn-success btn-lg rounded-pill px-4" 
                    data-bs-toggle="modal" 
                    data-bs-target="#signupModal"
                  >
                    <i className="fas fa-graduation-cap me-2"></i>Start Free Trial
                  </button>
                  <button 
                    className="btn btn-outline-primary btn-lg rounded-pill px-4" 
                    data-bs-toggle="modal" 
                    data-bs-target="#consultationModal"
                  >
                    <i className="fas fa-calendar-alt me-2"></i>Book Consultation
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="row text-center g-3">
                  <div className="col-6 col-md-3">
                    <div className="stat-counter text-primary">{stats.students.toLocaleString()}</div>
                    <small className="text-secondary">Students Guided</small>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-counter text-success">{stats.counselors.toLocaleString()}</div>
                    <small className="text-secondary">Active Counselors</small>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-counter text-info">{stats.schools}</div>
                    <small className="text-secondary">Partner Schools</small>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-counter text-warning">{stats.success}%</div>
                    <small className="text-secondary">Success Rate</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              {/* Modern Feature Showcase */}
              <div className="position-relative">
                <div className="bg-white rounded-4 shadow-lg p-5">
                  <div className="text-center mb-4">
                    <div className="d-flex justify-content-center mb-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center text-white"
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                        }}
                      >
                        <i className="fas fa-brain fa-2x"></i>
                      </div>
                    </div>
                    <h3 className="text-dark fw-bold mb-3">AI-Powered College Matching</h3>
                    <p className="text-secondary mb-4">
                      Our advanced AI analyzes student profiles, academic performance, and preferences to provide personalized college recommendations with 95% accuracy.
                    </p>
                  </div>
                  
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="text-primary fw-bold fs-3">150+</div>
                      <small className="text-secondary">Data Points</small>
                    </div>
                    <div className="col-4">
                      <div className="text-success fw-bold fs-3">95%</div>
                      <small className="text-secondary">Accuracy</small>
                    </div>
                    <div className="col-4">
                      <div className="text-warning fw-bold fs-3">3x</div>
                      <small className="text-secondary">Faster</small>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-lg rounded-pill">
                      <i className="fas fa-rocket me-2"></i>Try AI Matching
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bright White */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Powerful Features for Modern Education</h2>
              <p className="lead text-secondary">
                Discover how Apex AI transforms the college counseling experience with cutting-edge technology.
              </p>
            </div>
          </div>
          
          <Features />
          
          {/* Process Timeline */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="text-center text-dark mb-5">Student Success Journey</h3>
              <div className="row g-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="col-lg-2 col-md-4 col-6">
                    <div className="text-center">
                      <div className="position-relative mb-3">
                        <div className="bg-primary rounded-circle text-white d-inline-flex align-items-center justify-content-center shadow" style={{ width: '70px', height: '70px' }}>
                          <span className="fs-3">{step.icon}</span>
                        </div>
                        <div className="position-absolute top-0 end-0 bg-warning rounded-circle text-dark fw-bold d-flex align-items-center justify-content-center" style={{ width: '25px', height: '25px', fontSize: '0.8rem' }}>
                          {index + 1}
                        </div>
                      </div>
                      <h6 className="text-dark fw-bold mb-2">{step.title}</h6>
                      <small className="text-secondary">{step.description}</small>
                      <div className="bg-light rounded-pill mt-3" style={{ height: '6px' }}>
                        <div 
                          className="bg-primary rounded-pill h-100" 
                          style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Light Background */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">What Educators Are Saying</h2>
              <p className="lead text-secondary">
                Join thousands of counselors who have transformed their practice with Apex AI
              </p>
            </div>
          </div>
          
          <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="bg-white rounded-4 shadow-sm p-5 text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="rounded-circle mb-3 shadow-sm"
                          width="80"
                          height="80"
                        />
                        <div className="mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-warning fs-5">⭐</span>
                          ))}
                        </div>
                        <blockquote className="h5 mb-4 text-secondary fst-italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <h6 className="text-dark fw-bold mb-0">{testimonial.name}</h6>
                        <small className="text-primary">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about" className="bg-white">
        <About />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-5 bg-light">
        <Pricing />
      </div>

      {/* Bright Call to Action Section */}
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
                    <i className="fas fa-rocket fa-2x"></i>
                  </div>
                </div>
                <h2 className="display-5 fw-bold text-dark mb-4">Ready to Transform Your Counseling Practice?</h2>
                <p className="lead text-secondary mb-4">
                  Join thousands of educators who are already seeing remarkable results with Apex AI. 
                  Start your free trial today and experience the future of college counseling.
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                  <button className="btn btn-primary btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#signupModal">
                    <i className="fas fa-rocket me-2"></i>Start Free 30-Day Trial
                  </button>
                  <button className="btn btn-success btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#demoModal">
                    <i className="fas fa-video me-2"></i>Schedule Live Demo
                  </button>
                  <button className="btn btn-outline-primary btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#consultationModal">
                    <i className="fas fa-phone me-2"></i>Speak to Expert
                  </button>
                </div>
                
                <div className="row text-center mt-4">
                  <div className="col-md-4">
                    <div className="text-success fs-3 mb-2">✓</div>
                    <small className="text-secondary fw-medium">No Setup Fees</small>
                  </div>
                  <div className="col-md-4">
                    <div className="text-success fs-3 mb-2">✓</div>
                    <small className="text-secondary fw-medium">Cancel Anytime</small>
                  </div>
                  <div className="col-md-4">
                    <div className="text-success fs-3 mb-2">✓</div>
                    <small className="text-secondary fw-medium">24/7 Support</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Light Footer */}
      <footer className="py-5 bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              {/* Footer Logo */}
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  }}
                >
                  AI
                </div>
                <div>
                  <div className="fw-bold text-dark">Apex AI</div>
                  <small className="text-secondary">College Counseling Platform</small>
                </div>
              </div>
              <p className="text-secondary mb-3">
                Empowering the next generation of students through intelligent college counseling technology.
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary btn-sm rounded-circle">
                  <i className="fab fa-linkedin-in"></i>
                </button>
                <button className="btn btn-outline-primary btn-sm rounded-circle">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-outline-primary btn-sm rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="text-dark fw-bold mb-3">Platform</h6>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Features</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Pricing</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Security</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Integrations</button></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="text-dark fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Help Center</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Webinars</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Case Studies</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Blog</button></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="text-dark fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">About Us</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Careers</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Press</button></li>
                <li><button className="btn btn-link text-secondary p-0 border-0 text-start mb-2">Contact</button></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="text-dark fw-bold mb-3">Quick Actions</h6>
              <div className="d-grid gap-2">
                <button className="btn btn-primary btn-sm rounded-pill" data-bs-toggle="modal" data-bs-target="#signupModal">
                  Start Trial
                </button>
                <button className="btn btn-outline-primary btn-sm rounded-pill" data-bs-toggle="modal" data-bs-target="#demoModal">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-secondary">&copy; 2025 Apex AI. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <button className="btn btn-link text-secondary p-0 border-0 me-3">Privacy Policy</button>
              <button className="btn btn-link text-secondary p-0 border-0 me-3">Terms of Service</button>
              <button className="btn btn-link text-secondary p-0 border-0">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Essential Modals - Clean Design */}
      {/* Demo Modal */}
      <div className="modal fade" id="demoModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-play-circle text-primary me-2"></i>
                Watch Apex AI in Action
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <div className="ratio ratio-16x9 mb-3">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-3 border">
                  <div className="text-center">
                    <i className="fas fa-play-circle fa-4x text-primary mb-3"></i>
                    <h5 className="text-dark">Feature Demo Video</h5>
                    <p className="text-secondary">See how Apex AI transforms college counseling with real-time demonstrations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#signupModal">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-rocket text-primary me-2"></i>
                Start Your Free Trial
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">School/Organization</label>
                  <input type="text" className="form-control" placeholder="Enter your institution name" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Role</label>
                  <select className="form-select">
                    <option>High School Counselor</option>
                    <option>Private Counselor</option>
                    <option>College Advisor</option>
                    <option>Administrator</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label text-secondary" htmlFor="terms">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary rounded-pill">
                <i className="fas fa-check me-2"></i>
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
