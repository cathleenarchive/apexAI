import React, { useState, useEffect } from 'react';

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      title: "Transform College Counseling",
      subtitle: "AI-Powered Guidance for Every Student",
      description: "Revolutionize your counseling practice with intelligent recommendations and data-driven insights.",
      image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=AI+Analytics",
      cta: "Start Free Trial",
      stats: { students: "15,000+", schools: "450+", success: "95%" }
    },
    {
      title: "Personalized Student Success",
      subtitle: "Every Student Deserves the Best Guidance",
      description: "Our AI analyzes student profiles to provide tailored college recommendations and career pathways.",
      image: "https://via.placeholder.com/600x400/10b981/ffffff?text=Student+Success",
      cta: "Watch Demo",
      stats: { matches: "96%", time: "75%", satisfaction: "98%" }
    },
    {
      title: "Scale Your Impact",
      subtitle: "Serve More Students Without Compromise",
      description: "Handle 3x more students while maintaining personalized attention through intelligent automation.",
      image: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Scale+Impact",
      cta: "Book Consultation",
      stats: { efficiency: "3x", capacity: "500%", outcomes: "40%" }
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Smart Matching",
      description: "AI-powered college recommendations based on comprehensive student analysis",
      color: "primary"
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track student progress and counseling effectiveness with live dashboards",
      color: "success"
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Access your platform anywhere with our responsive mobile application",
      color: "warning"
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description: "FERPA-compliant security ensuring student data protection",
      color: "info"
    }
  ];

  const schools = [
    "Stanford University", "Harvard University", "MIT", "Princeton University",
    "Yale University", "Columbia University", "University of Pennsylvania", "Brown University",
    "Dartmouth College", "Cornell University", "Northwestern University", "Duke University",
    "University of Chicago", "Johns Hopkins University", "Georgetown University", "Vanderbilt University"
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-white">
      {/* Hero Slideshow */}
      <section className="position-relative overflow-hidden" style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f3e8ff 100%)'
      }}>
        {/* Apex AI Logo */}
        <div className="position-absolute top-0 start-0 p-4 z-3">
          <div className="d-flex align-items-center">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
              style={{ 
                width: '50px', 
                height: '50px', 
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>AI</span>
            </div>
            <div>
              <div className="fw-bold text-dark" style={{ fontSize: '1.6rem', lineHeight: '1' }}>
                Apex AI
              </div>
              <div className="text-secondary" style={{ fontSize: '0.8rem', lineHeight: '1' }}>
                College Counseling Platform
              </div>
            </div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 px-5">
              <div className="pe-lg-5" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <div className="mb-4">
                  <span className="badge bg-primary text-white px-4 py-2 rounded-pill">
                    ✨ {slides[currentSlide].subtitle}
                  </span>
                </div>
                
                <h1 className="display-2 fw-bold text-dark mb-4" style={{ lineHeight: '1.1' }}>
                  {slides[currentSlide].title}
                </h1>
                
                <p className="lead text-secondary mb-5" style={{ fontSize: '1.3rem' }}>
                  {slides[currentSlide].description}
                </p>

                {/* Statistics */}
                <div className="row mb-5">
                  {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                    <div key={index} className="col-4 text-center">
                      <div className="text-primary fw-bold" style={{ fontSize: '2rem' }}>
                        {value}
                      </div>
                      <small className="text-secondary text-capitalize">{key}</small>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-primary btn-lg rounded-pill px-5">
                    <i className="fas fa-rocket me-2"></i>
                    {slides[currentSlide].cta}
                  </button>
                  <button className="btn btn-outline-primary btn-lg rounded-pill px-5">
                    <i className="fas fa-play me-2"></i>
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 px-5">
              <div className="text-center position-relative">
                <div 
                  className="bg-white rounded-4 shadow-xl p-4 d-inline-block"
                  style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
                >
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title}
                    className="img-fluid rounded-3"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                
                {/* Floating Elements */}
                <div 
                  className="position-absolute top-0 end-0 bg-success rounded-circle text-white d-flex align-items-center justify-content-center animate-float"
                  style={{ width: '80px', height: '80px', transform: 'translate(20px, -20px)' }}
                >
                  <i className="fas fa-check fa-2x"></i>
                </div>
                
                <div 
                  className="position-absolute bottom-0 start-0 bg-warning rounded-4 text-white p-3 animate-pulse"
                  style={{ transform: 'translate(-20px, 20px)' }}
                >
                  <div className="fw-bold">Live Updates</div>
                  <small>Real-time insights</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="d-flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle ${index === currentSlide ? 'btn-primary' : 'btn-outline-primary'}`}
                style={{ width: '12px', height: '12px', padding: '0' }}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x animate-bounce" style={{ marginBottom: '2rem' }}>
          <i className="fas fa-chevron-down text-primary fa-2x"></i>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Why Choose Apex AI?</h2>
              <p className="lead text-secondary">
                Discover the features that make us the leading college counseling platform
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100 hover-lift">
                  <div className="mb-3">
                    <div 
                      className={`bg-${feature.color} rounded-circle text-white d-inline-flex align-items-center justify-content-center`}
                      style={{ width: '70px', height: '70px' }}
                    >
                      <span className="fs-2">{feature.icon}</span>
                    </div>
                  </div>
                  <h5 className="text-dark fw-bold mb-3">{feature.title}</h5>
                  <p className="text-secondary mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Trusted by Top Institutions</h2>
              <p className="lead text-secondary">
                Join hundreds of schools already using Apex AI to transform their counseling programs
              </p>
            </div>
          </div>
          
          {/* Scrolling Schools */}
          <div className="overflow-hidden">
            <div className="d-flex animate-scroll">
              {[...schools, ...schools].map((school, index) => (
                <div key={index} className="flex-shrink-0 mx-4">
                  <div className="bg-light rounded-3 px-4 py-3 text-center">
                    <span className="text-secondary fw-medium">{school}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4">
                <div className="text-primary fw-bold mb-2" style={{ fontSize: '3rem' }}>15K+</div>
                <h6 className="text-dark fw-bold mb-2">Students Guided</h6>
                <p className="text-secondary small mb-0">Across all partner institutions</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4">
                <div className="text-success fw-bold mb-2" style={{ fontSize: '3rem' }}>450+</div>
                <h6 className="text-dark fw-bold mb-2">Partner Schools</h6>
                <p className="text-secondary small mb-0">From coast to coast</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4">
                <div className="text-warning fw-bold mb-2" style={{ fontSize: '3rem' }}>95%</div>
                <h6 className="text-dark fw-bold mb-2">Success Rate</h6>
                <p className="text-secondary small mb-0">Students achieve their goals</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4">
                <div className="text-info fw-bold mb-2" style={{ fontSize: '3rem' }}>24/7</div>
                <h6 className="text-dark fw-bold mb-2">Platform Access</h6>
                <p className="text-secondary small mb-0">Always available support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://via.placeholder.com/100x100/3b82f6/ffffff?text=SM" 
                    alt="Sarah Mitchell"
                    className="rounded-circle shadow-sm"
                    width="100"
                    height="100"
                  />
                </div>
                <blockquote className="h4 text-secondary fst-italic mb-4">
                  "Apex AI has completely transformed our counseling program. We've seen a 40% 
                  increase in college acceptance rates and our students are more confident than ever."
                </blockquote>
                <div>
                  <h5 className="text-dark fw-bold mb-1">Dr. Sarah Mitchell</h5>
                  <p className="text-primary mb-3">Director of College Counseling, Westfield High School</p>
                  <div className="text-warning">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="mb-4">
                <div 
                  className="rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  }}
                >
                  <i className="fas fa-graduation-cap fa-2x"></i>
                </div>
              </div>
              
              <h2 className="display-5 fw-bold text-dark mb-4">
                Ready to Transform Your Counseling Practice?
              </h2>
              <p className="lead text-secondary mb-5">
                Join thousands of educators who are already seeing remarkable results. 
                Start your journey with Apex AI today.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <button className="btn btn-primary btn-lg rounded-pill px-5">
                  <i className="fas fa-rocket me-2"></i>
                  Start Free 30-Day Trial
                </button>
                <button className="btn btn-success btn-lg rounded-pill px-5">
                  <i className="fas fa-video me-2"></i>
                  Schedule Live Demo
                </button>
                <button className="btn btn-outline-primary btn-lg rounded-pill px-5">
                  <i className="fas fa-download me-2"></i>
                  Download Brochure
                </button>
              </div>
              
              <div className="row text-center">
                <div className="col-md-4">
                  <small className="text-success fw-medium">
                    <i className="fas fa-check me-2"></i>No Credit Card Required
                  </small>
                </div>
                <div className="col-md-4">
                  <small className="text-success fw-medium">
                    <i className="fas fa-check me-2"></i>Setup in 5 Minutes
                  </small>
                </div>
                <div className="col-md-4">
                  <small className="text-success fw-medium">
                    <i className="fas fa-check me-2"></i>Full Feature Access
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-white border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
                  style={{ 
                    width: '35px', 
                    height: '35px', 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  }}
                >
                  AI
                </div>
                <div>
                  <div className="fw-bold text-dark">Apex AI</div>
                  <small className="text-secondary">&copy; 2025 All rights reserved</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3 mt-3 mt-md-0">
                <button className="btn btn-outline-primary btn-sm rounded-circle">
                  <i className="fab fa-linkedin-in"></i>
                </button>
                <button className="btn btn-outline-primary btn-sm rounded-circle">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-outline-primary btn-sm rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="btn btn-primary btn-sm rounded-pill px-3">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
