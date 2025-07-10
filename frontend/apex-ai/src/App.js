import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Features from './Pages/Features';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import CounselorDashboard from './Pages/Dashboard/counselorDash';
import StudentDashboard from './Pages/Dashboard/studentDash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, Popover } from 'bootstrap';
import './App.css';

// Bootstrap Initialization Component
function BootstrapInit() {
  useEffect(() => {
    // Delay initialization to ensure DOM is ready
    const initializeBootstrap = () => {
      try {
        // Initialize Bootstrap tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
          return new Tooltip(tooltipTriggerEl, {
            boundary: 'viewport',
            placement: 'auto'
          });
        });

        // Initialize Bootstrap popovers
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => {
          return new Popover(popoverTriggerEl, {
            boundary: 'viewport',
            placement: 'auto'
          });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
              e.preventDefault();
              const target = document.querySelector(href);
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }
          });
        });

        // Return cleanup function
        return () => {
          tooltipList.forEach(tooltip => {
            if (tooltip && typeof tooltip.dispose === 'function') {
              tooltip.dispose();
            }
          });
          popoverList.forEach(popover => {
            if (popover && typeof popover.dispose === 'function') {
              popover.dispose();
            }
          });
        };
      } catch (error) {
        console.warn('Bootstrap initialization error:', error);
        return () => {}; // Return empty cleanup function
      }
    };

    // Initialize after a short delay to ensure components are mounted
    const timeoutId = setTimeout(initializeBootstrap, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Re-initialize tooltips when route changes
  useEffect(() => {
    const reinitializeTooltips = () => {
      try {
        // Clean up existing tooltips
        const existingTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        existingTooltips.forEach(element => {
          const tooltip = Tooltip.getInstance(element);
          if (tooltip) {
            tooltip.dispose();
          }
        });

        // Reinitialize tooltips
        setTimeout(() => {
          const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
          [...tooltipTriggerList].forEach(tooltipTriggerEl => {
            if (!Tooltip.getInstance(tooltipTriggerEl)) {
              new Tooltip(tooltipTriggerEl, {
                boundary: 'viewport',
                placement: 'auto'
              });
            }
          });
        }, 50);
      } catch (error) {
        console.warn('Tooltip reinitialization error:', error);
      }
    };

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(reinitializeTooltips, 100);
    };

    // Add event listener for navigation
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <BootstrapInit />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard/counselor" element={<CounselorDashboard />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;