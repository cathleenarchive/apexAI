import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: { monthly: 29, yearly: 25 },
      description: "Perfect for individual counselors",
      icon: "🌱",
      color: "success",
      features: [
        "Up to 50 students",
        "Basic AI recommendations",
        "Mobile app access",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: { monthly: 79, yearly: 69 },
      description: "Ideal for small to medium schools",
      icon: "⭐",
      color: "primary",
      features: [
        "Up to 500 students",
        "Advanced AI analytics",
        "Custom branding",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: 199, yearly: 169 },
      description: "For large institutions",
      icon: "🏢",
      color: "warning",
      features: [
        "Unlimited students",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "Training & onboarding",
        "SLA guarantee",
        "Custom features"
      ],
      popular: false
    }
  ];

  const addons = [
    { name: "Advanced Analytics", price: 15, description: "Enhanced reporting and insights" },
    { name: "Custom Integrations", price: 25, description: "Connect with your existing systems" },
    { name: "Priority Support", price: 10, description: "24/7 premium support channel" },
    { name: "Training & Onboarding", price: 50, description: "Dedicated training sessions" }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 30-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Professional and Enterprise plans get priority support with faster response times."
    },
    {
      question: "Do you offer discounts for educational institutions?",
      answer: "Yes, we provide special pricing for educational institutions. Contact our sales team for a custom quote."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures and are fully FERPA compliant to protect student data."
    }
  ];

  const handleAddonToggle = (addon) => {
    setSelectedAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  const calculateSavings = (monthly, yearly) => {
    const monthlyCost = monthly * 12;
    const yearlyCost = yearly * 12;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f3e8ff 100%)' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <span className="badge bg-primary text-white px-4 py-2 rounded-pill">
                  💰 Transparent Pricing
                </span>
              </div>
              <h1 className="display-4 fw-bold text-dark mb-4">
                Choose the Perfect Plan for Your
                <span className="text-primary d-block">Institution's Needs</span>
              </h1>
              <p className="lead text-secondary mb-5">
                Flexible pricing options designed to grow with your counseling program. 
                Start free, upgrade anytime.
              </p>
              
              {/* Billing Toggle */}
              <div className="d-flex justify-content-center align-items-center mb-4">
                <span className={`me-3 ${billingCycle === 'monthly' ? 'text-dark fw-bold' : 'text-secondary'}`}>
                  Monthly
                </span>
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={billingCycle === 'yearly'}
                    onChange={(e) => setBillingCycle(e.target.checked ? 'yearly' : 'monthly')}
                  />
                </div>
                <span className={`ms-3 ${billingCycle === 'yearly' ? 'text-dark fw-bold' : 'text-secondary'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="badge bg-success ms-3 rounded-pill">Save up to 20%</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-lg-4">
                <div className={`card h-100 border-0 shadow-lg position-relative ${plan.popular ? 'border-primary' : ''}`}>
                  {plan.popular && (
                    <>
                      {/* Corner Ribbon */}
                      <div className="position-absolute" style={{ 
                        top: '20px', 
                        right: '-10px', 
                        zIndex: 10,
                        transform: 'rotate(10deg)'
                      }}>
                        <div 
                          className="bg-primary text-white px-4 py-2 shadow-lg"
                          style={{
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                            animation: 'pulse 2s infinite'
                          }}
                        >
                          🏆 Most Popular
                        </div>
                        {/* Small triangle for ribbon effect */}
                        <div 
                          className="position-absolute"
                          style={{
                            bottom: '-8px',
                            right: '15px',
                            width: '0',
                            height: '0',
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '8px solid #1d4ed8'
                          }}
                        ></div>
                      </div>
                      
                      {/* Glowing effect behind card */}
                      <div 
                        className="position-absolute w-100 h-100 rounded-4"
                        style={{
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
                          zIndex: -1,
                          top: '8px',
                          left: '8px'
                        }}
                      ></div>
                    </>
                  )}
                  
                  <div className={`card-header border-0 text-center pt-5 pb-4 ${plan.popular ? 'bg-gradient' : 'bg-light'}`} 
                       style={plan.popular ? {
                         background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)'
                       } : {}}>
                    <div className="mb-3">
                      <span className="fs-1">{plan.icon}</span>
                    </div>
                    <h3 className="text-dark fw-bold mb-2">
                      {plan.name}
                      {plan.popular && (
                        <span className="badge bg-warning text-dark ms-2 rounded-pill px-2 py-1" style={{ fontSize: '0.7rem' }}>
                          RECOMMENDED
                        </span>
                      )}
                    </h3>
                    <p className="text-secondary mb-3">{plan.description}</p>
                    
                    <div className="mb-3">
                      <span className={`display-4 fw-bold ${plan.popular ? 'text-primary' : 'text-dark'}`}>
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-secondary">
                        /{billingCycle === 'monthly' ? 'month' : 'month (billed yearly)'}
                      </span>
                    </div>
                    
                    {billingCycle === 'yearly' && (
                      <div className="text-success small fw-medium">
                        Save {calculateSavings(plan.price.monthly, plan.price.yearly)}% annually
                      </div>
                    )}
                  </div>
                  
                  <div className="card-body flex-grow-1">
                    <ul className="list-unstyled">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-3 d-flex align-items-center">
                          <i className={`fas fa-check-circle me-3 ${plan.popular ? 'text-primary' : 'text-success'}`}></i>
                          <span className="text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="card-footer bg-white border-0 text-center">
                    <button 
                      className={`btn ${plan.popular ? 'btn-primary btn-lg' : 'btn-outline-primary btn-lg'} w-100 rounded-pill ${plan.popular ? 'shadow-lg' : ''}`}
                      data-bs-toggle="modal" 
                      data-bs-target="#checkoutModal"
                      style={plan.popular ? {
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                        border: 'none',
                        transform: 'translateY(-2px)'
                      } : {}}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                      {plan.popular && <i className="fas fa-arrow-right ms-2"></i>}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Enhance Your Experience</h2>
              <p className="lead text-secondary">
                Optional add-ons to customize your Apex AI experience
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {addons.map((addon, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="text-dark fw-bold mb-0">{addon.name}</h5>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={selectedAddons.includes(addon)}
                        onChange={() => handleAddonToggle(addon)}
                      />
                    </div>
                  </div>
                  <p className="text-secondary mb-3">{addon.description}</p>
                  <div className="text-primary fw-bold">+${addon.price}/month</div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedAddons.length > 0 && (
            <div className="row justify-content-center mt-4">
              <div className="col-lg-6">
                <div className="bg-primary rounded-4 text-white p-4 text-center">
                  <h5 className="fw-bold mb-2">Selected Add-ons</h5>
                  <p className="mb-3">
                    Total additional cost: <span className="fw-bold">
                      +${selectedAddons.reduce((sum, addon) => sum + addon.price, 0)}/month
                    </span>
                  </p>
                  <button className="btn btn-light rounded-pill">
                    Add to Plan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Feature Comparison</h2>
              <p className="lead text-secondary">
                See what's included in each plan
              </p>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <button className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#comparisonModal">
              <i className="fas fa-table me-2"></i>View Full Comparison
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-4">Frequently Asked Questions</h2>
              <p className="lead text-secondary">
                Get answers to common questions about our pricing
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button fw-bold text-dark ${openFaq === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}>
                      <div className="accordion-body text-secondary">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold text-dark mb-4">Trusted by Educators Worldwide</h2>
              <p className="lead text-secondary mb-5">
                Your data is secure and we're committed to your success
              </p>
              
              <div className="row g-4">
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i className="fas fa-shield-alt text-primary fa-3x mb-3"></i>
                    <h6 className="text-dark fw-bold">FERPA Compliant</h6>
                    <small className="text-secondary">Student data protected</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i className="fas fa-lock text-success fa-3x mb-3"></i>
                    <h6 className="text-dark fw-bold">SSL Encrypted</h6>
                    <small className="text-secondary">Bank-level security</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i className="fas fa-cloud text-info fa-3x mb-3"></i>
                    <h6 className="text-dark fw-bold">99.9% Uptime</h6>
                    <small className="text-secondary">Always available</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <i className="fas fa-headset text-warning fa-3x mb-3"></i>
                    <h6 className="text-dark fw-bold">24/7 Support</h6>
                    <small className="text-secondary">We're here to help</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)' }}>
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
                  <i className="fas fa-rocket fa-2x"></i>
                </div>
              </div>
              <h2 className="display-5 fw-bold text-dark mb-4">
                Ready to Get Started?
              </h2>
              <p className="lead text-secondary mb-4">
                Join thousands of counselors who are already transforming their practice with Apex AI.
                Start your free trial today!
              </p>
              
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fas fa-rocket me-2"></i>Start 30-Day Free Trial
                </button>
                <button className="btn btn-success btn-lg rounded-pill px-5" data-bs-toggle="modal" data-bs-target="#salesModal">
                  <i className="fas fa-phone me-2"></i>Talk to Sales
                </button>
              </div>
              
              <div className="row text-center mt-4">
                <div className="col-md-4">
                  <small className="text-success fw-medium">
                    <i className="fas fa-check me-2"></i>No Credit Card Required
                  </small>
                </div>
                <div className="col-md-4">
                  <small className="text-success fw-medium">
                    <i className="fas fa-check me-2"></i>Cancel Anytime
                  </small>
                </div>
                <div className="col-md-4">
                  <small className="text-success fw-medium">
                    <i className="fas fa-check me-2"></i>Setup in Minutes
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Modals */}
      
      {/* Checkout Modal */}
      <div className="modal fade" id="checkoutModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-credit-card text-primary me-2"></i>
                Complete Your Order
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <div className="text-center mb-4">
                <div className="bg-success rounded-circle text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="fas fa-gift fa-2x"></i>
                </div>
                <h4 className="text-dark fw-bold">30-Day Free Trial</h4>
                <p className="text-secondary">Start your journey with Apex AI today</p>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-dark fw-medium">First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-dark fw-medium">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Email Address</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Institution Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Phone Number</label>
                  <input type="tel" className="form-control" />
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

      {/* Sales Modal */}
      <div className="modal fade" id="salesModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark fw-bold">
                <i className="fas fa-phone text-primary me-2"></i>
                Schedule Sales Call
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <div className="text-center mb-4">
                <h4 className="text-dark fw-bold">Let's discuss your needs</h4>
                <p className="text-secondary">Our team will help you find the perfect solution</p>
              </div>
              
              <form>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Preferred Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Preferred Time</label>
                  <select className="form-select">
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 5PM)</option>
                    <option>Evening (5PM - 8PM)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Number of Students</label>
                  <select className="form-select">
                    <option>Less than 100</option>
                    <option>100 - 500</option>
                    <option>500 - 1000</option>
                    <option>1000+</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark fw-medium">Special Requirements</label>
                  <textarea className="form-control" rows="3" placeholder="Tell us about any specific needs or questions..."></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-light border-0">
              <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary rounded-pill">
                <i className="fas fa-calendar me-2"></i>Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

