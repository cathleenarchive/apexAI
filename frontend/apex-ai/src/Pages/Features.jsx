import React, { useState } from 'react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze student profiles to suggest optimal college matches",
      metrics: { accuracy: 95, speed: "3x faster", satisfaction: 98 },
      benefits: ["Personalized recommendations", "Real-time updates", "Predictive analytics"]
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Comprehensive insights into student progress and counseling effectiveness",
      metrics: { dataPoints: 150, insights: "Real-time", reports: "Custom" },
      benefits: ["Progress tracking", "Performance metrics", "Custom reports"]
    },
    {
      icon: "📱",
      title: "Mobile Application",
      description: "Access guidance and track progress anywhere with our intuitive mobile app",
      metrics: { rating: 4.8, downloads: "100K+", uptime: "99.9%" },
      benefits: ["Offline access", "Push notifications", "Cross-platform sync"]
    },
    {
      icon: "🎯",
      title: "Goal Setting & Tracking",
      description: "Set academic and personal goals with AI-driven milestone recommendations",
      metrics: { goalCompletion: 87, motivation: "+40%", success: "2x higher" },
      benefits: ["SMART goals", "Progress visualization", "Achievement rewards"]
    }
  ];

  const comparisonData = [
    { feature: "AI-Powered Recommendations", apex: true, traditional: false, premium: true },
    { feature: "Real-time Analytics", apex: true, traditional: false, premium: true },
    { feature: "Mobile Application", apex: true, traditional: false, premium: false },
    { feature: "24/7 Support", apex: true, traditional: false, premium: true },
    { feature: "Custom Reporting", apex: true, traditional: false, premium: true },
    { feature: "Multi-language Support", apex: true, traditional: false, premium: false },
    { feature: "API Integration", apex: true, traditional: false, premium: false },
    { feature: "White-label Options", apex: true, traditional: false, premium: false }
  ];

  return (
    <div className="bg-white">
      {/* Feature Tabs Navigation */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="nav nav-pills nav-fill bg-light rounded-pill p-2">
              <li className="nav-item">
                <button 
                  className={`nav-link rounded-pill fw-semibold ${activeTab === 'overview' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <i className="fas fa-eye me-2"></i>Overview
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link rounded-pill fw-semibold ${activeTab === 'demo' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveTab('demo')}
                >
                  <i className="fas fa-play me-2"></i>Interactive Demo
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link rounded-pill fw-semibold ${activeTab === 'comparison' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveTab('comparison')}
                >
                  <i className="fas fa-chart-bar me-2"></i>Comparison
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="row">
            {/* Feature Selection */}
            <div className="col-lg-4 mb-4">
              <div className="bg-light rounded-4 p-4 sticky-top">
                <h5 className="text-dark fw-bold mb-4">
                  <i className="fas fa-list-ul text-primary me-2"></i>
                  Core Features
                </h5>
                <div className="d-grid gap-2">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`btn text-start p-3 rounded-3 ${
                        selectedFeature === index 
                          ? 'btn-primary text-white' 
                          : 'btn-outline-primary'
                      }`}
                      onClick={() => setSelectedFeature(index)}
                    >
                      <div className="d-flex align-items-center">
                        <span className="fs-4 me-3">{feature.icon}</span>
                        <div>
                          <div className="fw-bold">{feature.title}</div>
                          <small className={selectedFeature === index ? 'text-white' : 'text-secondary'}>
                            Click to explore
                          </small>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Details */}
            <div className="col-lg-8">
              <div className="bg-white border rounded-4 shadow-sm p-5">
                <div className="text-center mb-4">
                  <span className="fs-1 d-block mb-3">{features[selectedFeature].icon}</span>
                  <h3 className="text-dark fw-bold mb-3">{features[selectedFeature].title}</h3>
                  <p className="lead text-secondary">{features[selectedFeature].description}</p>
                </div>

                {/* Feature Metrics */}
                <div className="row text-center mb-5">
                  {Object.entries(features[selectedFeature].metrics).map(([key, value], index) => (
                    <div key={index} className="col-4">
                      <div className="p-3">
                        <div className="text-primary fw-bold fs-3">{value}</div>
                        <small className="text-secondary text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Benefits */}
                <div>
                  <h5 className="text-dark fw-bold mb-3">Key Benefits</h5>
                  <div className="row">
                    {features[selectedFeature].benefits.map((benefit, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <span className="text-secondary">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="text-center mt-4">
                  <button className="btn btn-primary btn-lg rounded-pill me-3" data-bs-toggle="modal" data-bs-target="#demoModal">
                    <i className="fas fa-video me-2"></i>Watch Demo
                  </button>
                  <button className="btn btn-outline-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#trialModal">
                    <i className="fas fa-rocket me-2"></i>Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Demo Tab */}
        {activeTab === 'demo' && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white border rounded-4 shadow-lg p-5">
                <div className="text-center mb-5">
                  <h3 className="text-dark fw-bold mb-3">
                    <i className="fas fa-desktop text-primary me-2"></i>
                    Interactive Platform Demo
                  </h3>
                  <p className="lead text-secondary">
                    Experience how Apex AI transforms the college counseling process
                  </p>
                </div>

                {/* Demo Interface Mockup */}
                <div className="border rounded-3 overflow-hidden mb-4">
                  {/* Demo Header */}
                  <div className="bg-light border-bottom p-3">
                    <div className="d-flex align-items-center">
                      <div className="d-flex gap-2 me-3">
                        <div className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                        <div className="bg-warning rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                        <div className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                      </div>
                      <small className="text-secondary">app.apexai.com/dashboard</small>
                    </div>
                  </div>

                  {/* Demo Content */}
                  <div className="p-4 bg-white">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="text-dark fw-bold mb-3">Student Profiles</h6>
                        <div className="list-group list-group-flush">
                          <div className="list-group-item border-0 px-0">
                            <div className="d-flex align-items-center">
                              <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                <small className="fw-bold">JS</small>
                              </div>
                              <div>
                                <div className="fw-medium text-dark">John Smith</div>
                                <small className="text-success">95% Match Score</small>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item border-0 px-0">
                            <div className="d-flex align-items-center">
                              <div className="bg-success rounded-circle text-white d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                <small className="fw-bold">MJ</small>
                              </div>
                              <div>
                                <div className="fw-medium text-dark">Maria Johnson</div>
                                <small className="text-warning">89% Match Score</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-8">
                        <h6 className="text-dark fw-bold mb-3">AI Recommendations</h6>
                        <div className="bg-light rounded-3 p-3 mb-3">
                          <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-university text-primary me-2"></i>
                            <span className="fw-medium text-dark">Stanford University</span>
                            <span className="badge bg-success ms-auto">Perfect Match</span>
                          </div>
                          <p className="text-secondary small mb-2">
                            Based on academic profile, interests in AI, and leadership experience
                          </p>
                          <div className="progress" style={{ height: '4px' }}>
                            <div className="progress-bar bg-success" style={{ width: '96%' }}></div>
                          </div>
                        </div>
                        
                        <div className="bg-light rounded-3 p-3">
                          <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-university text-primary me-2"></i>
                            <span className="fw-medium text-dark">MIT</span>
                            <span className="badge bg-warning ms-auto">Great Match</span>
                          </div>
                          <p className="text-secondary small mb-2">
                            Strong fit for engineering program and research opportunities
                          </p>
                          <div className="progress" style={{ height: '4px' }}>
                            <div className="progress-bar bg-warning" style={{ width: '88%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#fullDemoModal">
                    <i className="fas fa-external-link-alt me-2"></i>
                    Launch Full Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white border rounded-4 shadow-sm p-5">
                <div className="text-center mb-5">
                  <h3 className="text-dark fw-bold mb-3">
                    <i className="fas fa-balance-scale text-primary me-2"></i>
                    Feature Comparison
                  </h3>
                  <p className="lead text-secondary">
                    See how Apex AI compares to traditional counseling methods
                  </p>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr className="bg-light">
                        <th className="text-dark fw-bold border-0">Feature</th>
                        <th className="text-center text-primary fw-bold border-0">
                          <i className="fas fa-star me-2"></i>Apex AI
                        </th>
                        <th className="text-center text-secondary fw-bold border-0">Traditional Methods</th>
                        <th className="text-center text-warning fw-bold border-0">Premium Services</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index}>
                          <td className="text-dark fw-medium">{row.feature}</td>
                          <td className="text-center">
                            {row.apex ? (
                              <i className="fas fa-check-circle text-success fs-5"></i>
                            ) : (
                              <i className="fas fa-times-circle text-danger fs-5"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {row.traditional ? (
                              <i className="fas fa-check-circle text-success fs-5"></i>
                            ) : (
                              <i className="fas fa-times-circle text-danger fs-5"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {row.premium ? (
                              <i className="fas fa-check-circle text-success fs-5"></i>
                            ) : (
                              <i className="fas fa-times-circle text-danger fs-5"></i>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-center mt-4">
                  <button className="btn btn-primary btn-lg rounded-pill me-3" data-bs-toggle="modal" data-bs-target="#pricingModal">
                    <i className="fas fa-dollar-sign me-2"></i>View Pricing
                  </button>
                  <button className="btn btn-outline-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#consultationModal">
                    <i className="fas fa-phone me-2"></i>Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feature Highlight Cards */}
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="bg-light rounded-4 p-4 h-100 text-center hover-lift">
              <div className="mb-3">
                <i className="fas fa-clock text-primary fa-3x"></i>
              </div>
              <h5 className="text-dark fw-bold mb-3">Save 75% Time</h5>
              <p className="text-secondary">
                Automated matching and recommendations reduce manual research time significantly.
              </p>
              <button className="btn btn-outline-primary rounded-pill">Learn More</button>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="bg-light rounded-4 p-4 h-100 text-center hover-lift">
              <div className="mb-3">
                <i className="fas fa-chart-line text-success fa-3x"></i>
              </div>
              <h5 className="text-dark fw-bold mb-3">Improve Outcomes</h5>
              <p className="text-secondary">
                95% accuracy in college matching leads to better student satisfaction and success.
              </p>
              <button className="btn btn-outline-success rounded-pill">View Results</button>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="bg-light rounded-4 p-4 h-100 text-center hover-lift">
              <div className="mb-3">
                <i className="fas fa-users text-warning fa-3x"></i>
              </div>
              <h5 className="text-dark fw-bold mb-3">Scale Your Practice</h5>
              <p className="text-secondary">
                Handle 3x more students without compromising on personalized attention.
              </p>
              <button className="btn btn-outline-warning rounded-pill">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Essential Modals */}
      
      {/* Demo Modal */}
      <div className="modal fade" id="demoModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-video text-primary me-2"></i>
                Feature Demo Video
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <div className="ratio ratio-16x9 mb-3">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-3 border">
                  <div className="text-center">
                    <i className="fas fa-play-circle fa-4x text-primary mb-3"></i>
                    <h5 className="text-dark">AI Matching Demo</h5>
                    <p className="text-secondary">Watch how our AI analyzes student profiles and generates personalized recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary rounded-pill">
                <i className="fas fa-rocket me-2"></i>Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trial Modal */}
      <div className="modal fade" id="trialModal" tabIndex="-1">
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
              <div className="text-center mb-4">
                <div className="bg-primary rounded-circle text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="fas fa-gift fa-2x"></i>
                </div>
                <h4 className="text-dark fw-bold">30-Day Free Trial</h4>
                <p className="text-secondary">No credit card required • Full feature access • Cancel anytime</p>
              </div>
              
              <form>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Institution Name</label>
                  <input type="text" className="form-control" placeholder="Your school or organization" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Role</label>
                  <select className="form-select">
                    <option>School Counselor</option>
                    <option>Private Counselor</option>
                    <option>Administrator</option>
                    <option>Other</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary rounded-pill">
                <i className="fas fa-check me-2"></i>Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}