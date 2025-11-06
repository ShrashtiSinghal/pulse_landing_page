import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Activity, Search, Users, Network, Lock, Zap, Menu, X } from 'lucide-react';
import dashboardImage from './../assets/images/landing-page.png';
import favIcon from './../assets/images/culinda_logo.png';
import pulseLogo from './../assets/images/logo-dark.svg';
import mascotBot from './../assets/images/mascot-bot.gif';

import trellix from './../assets/images/trellix.jpg'
import logrhythm from './../assets/images/logrythm.jpg'
import tenable from './../assets/images/tenable.png'
import snort from './../assets/images/snort.png'
import rapid7 from './../assets/images/rapid7.png'
import solarwinds from './../assets/images/solarwinds.png'

import ChatbotUI from '../components/chat-bot/ChatbotUI';
import '../components/chat-bot/ChatbotUI.css';

import '../styles/landing.css';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);


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
    // Existing integrations
    { name: 'Trellix', logo: trellix, color: '#E31E24' },
    { name: 'LogRhythm', logo: logrhythm, color: '#1B365D' },
    { name: 'Tenable', logo: tenable, color: '#00A9CE' },
    { name: 'Snort', logo: snort, color: '#D52B1E' },
    { name: 'Rapid7', logo: rapid7, color: '#7B2CBF' },
    { name: 'SolarWinds', logo: solarwinds, color: '#FF6B35' },
    
    // New integrations from the list
    { name: 'Fortigate', logo: 'https://cdn.worldvectorlogo.com/logos/fortinet-2.svg', color: '#EE3124' },
    { name: 'Mimecast', logo: 'https://cdn.worldvectorlogo.com/logos/mimecast.svg', color: '#FF6900' },
    { name: 'Proofpoint', logo: 'https://cdn.worldvectorlogo.com/logos/proofpoint.svg', color: '#0066CC' },
    { name: 'CyberArk', logo: 'https://cdn.worldvectorlogo.com/logos/cyberark.svg', color: '#1B4D72' },
    { name: 'KnowBe4', logo: 'https://cdn.worldvectorlogo.com/logos/knowbe4-1.svg', color: '#FF6A00' },
    { name: 'VMware', logo: 'https://cdn.worldvectorlogo.com/logos/vmware.svg', color: '#607078' },
    { name: 'Zscaler', logo: 'https://cdn.worldvectorlogo.com/logos/zscaler.svg', color: '#0080FF' },
    { name: 'Absolute', logo: 'https://cdn.worldvectorlogo.com/logos/absolute-software.svg', color: '#E94B3C' },
    { name: 'Cisco Umbrella', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg', color: '#1BA0D7' },
    { name: 'CarbonBlack', logo: 'https://cdn.worldvectorlogo.com/logos/vmware-carbon-black.svg', color: '#000000' },
    { name: 'Sophos', logo: 'https://cdn.worldvectorlogo.com/logos/sophos.svg', color: '#00308F' },
    { name: 'ExaBeam', logo: 'https://cdn.worldvectorlogo.com/logos/exabeam.svg', color: '#FF6900' },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', color: '#4A154B' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg', color: '#6264A7' }
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
      <header className="dark-header">
        <div className="header-content">
          <video
            src={require("./../assets/videos/culinda-product.mp4")}
            autoPlay
            loop
            muted
            playsInline
            className="Culinda-Logo"
          />
          <nav className={`dark-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#features" className="dark-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="dark-nav-link" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#integrations" className="dark-nav-link" onClick={() => setMobileMenuOpen(false)}>Integrations</a>
            <a href="#testimonials" className="dark-nav-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="https://pulsedemo.culinda.com/login" className="btn-primary">Login</a>
          </nav>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

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
              <button
                onClick={() => setIsChatOpen(true)}
                className="btn-primary btn-large"
              >
                Request Demo
                <ArrowRight size={20} />
              </button>
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
                src={dashboardImage}
                alt="Pulse Dashboard"
                className="dashboard-image"
              />
              <div className="pulse-wave"></div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="integrations" className="integrations-section">
        <div className="section-content">
          <h2 className="section-title">One Pulse View. Endless Integrations.</h2>
          <p className="section-description">
            Extend your security visibility with seamless integrations across your existing stack.
          </p>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="integration-logo"
                style={{
                  '--brand-color': integration.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <img src={integration.logo} alt={integration.name} />
                <div className="integration-name">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <button
            onClick={() => setIsChatOpen(true)}
            className="btn-primary btn-large"
          >
            Request Demo
            <ArrowRight size={20} />
          </button>

        </div>
      </section>

      <footer className="dark-footer">
        <div className="footer-content">
          <div className="footer-section">
            <video
              src={require("./../assets/videos/culinda-product.mp4")}
              autoPlay
              loop
              muted
              playsInline
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

      {!isChatOpen ? (
        <div
          className="mascot-button"
          onClick={() => setIsChatOpen(true)}
          role="button"
          aria-label="Open chat"
          style={{ cursor: "pointer" }}
        >
          <img
            src={mascotBot}
            alt="Pulse Mascot"
            className="mascot-image"
          />
          <div className="mascot-tooltip">
            Hey there! I’m Ray — your Real-Time Network Traffic Monitoring & Analytics assistant, here to help you uncover threats, explore features, and book a quick demo anytime.
          </div>
        </div>
      ) : (
        <ChatbotUI
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
};

export default LandingPage;