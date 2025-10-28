import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Activity, Search, Users, Network, Lock, Zap } from 'lucide-react';
import '../styles/landing.css';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Network className="feature-icon" />,
      title: "Asset & Traffic Visibility",
      description: "Complete device inventory with real-time network context. Monitor protocols, connections, ports, VLANs across 5,000+ rows of granular data."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Exposure & Anomaly Detection",
      description: "Risk scoring, unencrypted traffic monitoring, and covert channel detection. Identify threats before they become headlines."
    },
    {
      icon: <Search className="feature-icon" />,
      title: "Threat Hunting & Investigation",
      description: "DNS tunneling detection, C2 beaconing identification, and drill-down workflows. Hunt threats with precision."
    },
    {
      icon: <Activity className="feature-icon" />,
      title: "Utilization Intelligence",
      description: "Resource optimization, dormant device identification, and activity timelines. Align security with operations."
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Analyst-First UX",
      description: "Global filters, custom time windows, and drag-and-drop dashboards. Speed triage with intuitive workflows."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Identity & Org Controls",
      description: "AD-integrated SSO, multi-site governance, and granular role management. Enterprise-ready access control."
    },
    {
      icon: <Lock className="feature-icon" />,
      title: "Integration Ecosystem",
      description: "Seamless integration with Trellix, LogRhythm, Tenable, Snort, Rapid7, and SolarWinds. One view, endless enrichment."
    }
  ];

  const integrations = [
    { name: 'Trellix', logo: 'https://via.placeholder.com/120x40/000000/00FFD1?text=Trellix' },
    { name: 'LogRhythm', logo: 'https://via.placeholder.com/120x40/000000/00FFD1?text=LogRhythm' },
    { name: 'Tenable', logo: 'https://via.placeholder.com/120x40/000000/00FFD1?text=Tenable' },
    { name: 'Snort', logo: 'https://via.placeholder.com/120x40/000000/00FFD1?text=Snort' },
    { name: 'Rapid7', logo: 'https://via.placeholder.com/120x40/000000/00FFD1?text=Rapid7' },
    { name: 'SolarWinds', logo: 'https://via.placeholder.com/120x40/000000/00FFD1?text=SolarWinds' }
  ];

  const testimonials = [
    {
      quote: "Pulse transformed our cybersecurity posture. Real-time visibility across 2,000+ IoMT devices saved us during a ransomware attempt.",
      author: "Chief Information Security Officer",
      organization: "Major U.S. Healthcare System"
    },
    {
      quote: "The threat hunting capabilities are unmatched. We detected DNS tunneling in under 10 minutes—something our SIEM missed for weeks.",
      author: "Security Operations Manager",
      organization: "Regional Medical Center"
    },
    {
      quote: "Finally, a platform that speaks both security and operations. Our IT and SecOps teams actually collaborate now.",
      author: "Director of IT Operations",
      organization: "Multi-Site Hospital Network"
    }
  ];

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <img 
            src="https://customer-assets.emergentagent.com/job_0931337e-4617-4273-8249-100789d72150/artifacts/akfuo9lj_culindalogo.jpg" 
            alt="Culinda Logo" 
            className="dark-logo"
          />
          <nav className="dark-nav">
            <a href="#features" className="dark-nav-link">Features</a>
            <a href="#how-it-works" className="dark-nav-link">How It Works</a>
            <a href="#integrations" className="dark-nav-link">Integrations</a>
            <a href="#testimonials" className="dark-nav-link">Testimonials</a>
            <a href="https://pulsedemo.culinda.com/login" className="btn-primary">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Real-Time Network Traffic Monitoring & Analytics
            </h1>
            <p className="hero-subtitle">
              Built for Healthcare. Ready for Every Enterprise.
            </p>
            <p className="hero-description">
              Powering cybersecurity in <span className="highlight">70+ U.S. hospitals</span> — now expanding protection to government, finance, and enterprise networks worldwide.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary btn-large">
                Request Demo
                <ArrowRight size={20} />
              </a>
              <a href="https://pulsedemo.culinda.com/login" className="btn-secondary btn-large">
                View Live Dashboard
              </a>
            </div>
            <p className="hero-tagline">
              If you're serious about cybersecurity — and tired of ransomware lawsuits — it's time to take Pulse.
            </p>
          </div>
          <div className="hero-right">
            <div className="dashboard-preview" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_0931337e-4617-4273-8249-100789d72150/artifacts/xuom7vji_image.png" 
                alt="Pulse Dashboard" 
                className="dashboard-image"
              />
              <div className="pulse-wave"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Pulse */}
      <section className="about-section">
        <div className="section-content">
          <h2 className="section-title">What is Pulse?</h2>
          <p className="section-description">
            Pulse is an intelligent <strong>Network Traffic Monitoring & Analytics (NTMA)</strong> platform engineered for Internet of Medical Things (IoMT) and enterprise networks. It delivers real-time visibility, AI-powered threat analytics, and device-level vulnerability detection — enabling hospitals, governments, and businesses to secure every connected endpoint.
          </p>
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Real-Time Monitoring</h3>
              <p>Watch every connected device in motion.</p>
            </div>
            <div className="pillar-card">
              <h3>AI-Driven Analytics</h3>
              <p>Spot anomalies before attackers do.</p>
            </div>
            <div className="pillar-card">
              <h3>Proactive Security</h3>
              <p>Patch the hole before it becomes a headline.</p>
            </div>
            <div className="pillar-card">
              <h3>Cross-Sector Defense</h3>
              <p>Designed for healthcare, government, and financial networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <div className="section-content">
          <h2 className="section-title">Built for Cyber Analysts. Powered by Intelligence.</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-content">
          <h2 className="section-title">How Pulse Works</h2>
          <div className="workflow-container">
            <div className="workflow-step">
              <div className="workflow-number">01</div>
              <h3>Detect</h3>
              <p>Real-time monitoring of IoMT and enterprise traffic across all network segments.</p>
            </div>
            <div className="workflow-arrow">
              <ArrowRight size={40} />
            </div>
            <div className="workflow-step">
              <div className="workflow-number">02</div>
              <h3>Analyze</h3>
              <p>AI analytics identify risks, anomalies, and threats before exploitation occurs.</p>
            </div>
            <div className="workflow-arrow">
              <ArrowRight size={40} />
            </div>
            <div className="workflow-step">
              <div className="workflow-number">03</div>
              <h3>Respond</h3>
              <p>Alerts and forensic tools help you act before downtime strikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="integrations-section">
        <div className="section-content">
          <h2 className="section-title">One Pulse View. Endless Integrations.</h2>
          <p className="section-description">
            Extend your security visibility with seamless integrations across your existing stack.
          </p>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-logo">
                <img src={integration.logo} alt={integration.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-content">
          <h2 className="section-title">Trusted by Security Leaders</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-org">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="contact-section">
        <div className="section-content">
          <h2 className="section-title">Your Network Has a Heartbeat. Keep It Secure.</h2>
          <p className="section-description">
            Request a demo and see how Pulse protects the networks that matter most.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> support@culinda.com
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +1 213-968-2099
            </div>
            <div className="contact-item">
              <strong>Address:</strong> 374 FA Tower, William S Blvd 2721, IL, USA
            </div>
          </div>
          <a href="https://pulsedemo.culinda.com/login" className="btn-primary btn-large">
            Request Demo
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-footer">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_0931337e-4617-4273-8249-100789d72150/artifacts/akfuo9lj_culindalogo.jpg" 
              alt="Culinda Logo" 
              className="footer-logo"
            />
            <p>Securing the networks that power life-saving care.</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#integrations">Integrations</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="https://www.culinda.com" target="_blank" rel="noopener noreferrer">About Culinda</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Culinda. All rights reserved.</p>
        </div>
      </footer>

      {/* Mascot - Fixed Bottom Right */}
      <a 
        href="https://drive.google.com/your-demo-video-link" 
        className="mascot-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch Demo Video"
      >
        <img 
          src="https://customer-assets.emergentagent.com/job_secure-pulse-3/artifacts/1bquru6f_ChatGPT%20Image%20Oct%2028%2C%202025%2C%2002_42_00%20PM.png" 
          alt="Pulse Mascot"
          className="mascot-image"
        />
      </a>
    </div>
  );
};

export default LandingPage;