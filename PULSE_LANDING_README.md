# Pulse Landing Page - Culinda

Enterprise-grade landing website for **Pulse**, a B2B IoMT Network Traffic Monitoring and Analytics (NTMA) platform by Culinda.

## 🚀 Features

### Design
- **Futuristic Dark Theme**: Black (#000000) background with cyan-green (#00FFD1) accents
- **Sharp-edged Buttons**: Modern, corporate aesthetic with border-radius: 0px
- **Glassmorphism Effects**: Subtle transparency and backdrop blur
- **Parallax Animations**: Floating dashboard preview with pulse wave effects
- **Micro-interactions**: Hover states, smooth transitions, and entrance animations
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Sections
1. **Hero Section**
   - Split-screen layout (content left, dashboard preview right)
   - Compelling headline and subheadline
   - Two CTAs: "Request Demo" and "View Live Dashboard"
   - Witty tagline about cybersecurity

2. **About Pulse**
   - Product description
   - 4 core pillars in grid layout

3. **Features** (7 sections for cyber analysts)
   - Asset & Traffic Visibility
   - Exposure & Anomaly Detection
   - Threat Hunting & Investigation
   - Utilization Intelligence
   - Analyst-First UX
   - Identity & Org Controls
   - Integration Ecosystem

4. **How It Works**
   - 3-step workflow with large numbered cards
   - Detect → Analyze → Respond flow

5. **Integrations**
   - Partner logos: Trellix, LogRhythm, Tenable, Snort, Rapid7, SolarWinds
   - Grid layout with hover effects

6. **Testimonials**
   - 3 authentic quotes from security leaders
   - Healthcare industry focus

7. **Contact/CTA**
   - Contact information (email, phone, address)
   - Demo request CTA

8. **Footer**
   - Multi-column layout (Product, Company, Legal)
   - Quick links and copyright

### Interactive Elements
- **Fixed Header**: Logo, navigation links, and Login button
- **Mobile Menu**: Hamburger toggle with slide-in navigation
- **Mascot Button**: Fixed bottom-right corner
  - Links to demo video: https://drive.google.com/file/d/19_iCm3FYdXiktIM-bJC8-CLgUOs4Y0R-/view
  - Bouncing animation with tooltip on hover
  - "Watch Demo Video" label

## 🎨 Color Palette

```css
--bg-primary: #000000;           /* Main background */
--bg-secondary: #121212;         /* Card backgrounds */
--text-primary: #FFFFFF;         /* Primary text */
--text-secondary: rgba(255, 255, 255, 0.85);  /* Secondary text */
--text-muted: #4D4D4D;           /* Muted text */
--brand-primary: #00FFD1;        /* Cyan-green brand color */
--brand-hover: rgba(0, 255, 209, 0.1);  /* Hover backgrounds */
--brand-active: #6FD2C0;         /* Active states */
--border-subtle: rgba(255, 255, 255, 0.25);  /* Borders */
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔗 Key Links

- **Login**: https://pulsedemo.culinda.com/login
- **Demo Video**: https://drive.google.com/file/d/19_iCm3FYdXiktIM-bJC8-CLgUOs4Y0R-/view
- **Company Website**: https://www.culinda.com
- **Email**: support@culinda.com
- **Phone**: +1 213-968-2099

## 📂 File Structure

```
/app/frontend/src/
├── pages/
│   └── LandingPage.jsx      # Main landing page component
├── styles/
│   └── landing.css          # All landing page styles
├── App.js                   # Main app router
└── App.css                  # Global styles
```

## 🎯 Design Principles Applied

1. **90/10 Color Rule**: Large areas use black; cyan-green only for buttons and accents
2. **High Contrast**: White text on black backgrounds for maximum readability
3. **Sharp Edges**: 0px border-radius for corporate, modern aesthetic
4. **Minimal Gradients**: Only subtle gradients for depth, never on large areas
5. **Lucide Icons Only**: No emoji characters, professional icon library
6. **Consistent Spacing**: 7.6923% horizontal padding, large vertical spacing (60-100px)

## 🚀 Getting Started

The landing page is already integrated into the main React app and accessible at:
```
http://localhost:3000
```

### Production Deployment
The website will be deployed at:
```
https://pulsedemo.culinda.com
```

## 📝 Content Highlights

- **70+ U.S. hospitals** using Pulse
- **Real-time monitoring** of IoMT and enterprise networks
- **AI-powered threat analytics**
- **Cross-sector defense** (healthcare, government, finance)
- **One Pulse View. Endless Integrations.**

## 🎭 Animations

1. **Hero Section**: Parallax scrolling effect on dashboard preview
2. **Pulse Wave**: Expanding circular border animation
3. **Float Effect**: Gentle up-down motion on dashboard image
4. **Fade In Up**: Entrance animation for content sections
5. **Mascot Bounce**: Continuous gentle bounce with hover scale
6. **Card Hover**: Lift effect with border color change and shadow

## 📧 Contact Information

**Culinda**
- Address: 374 FA Tower, William S Blvd 2721, IL, USA
- Email: support@culinda.com
- Phone: +1 213-968-2099
- Website: www.culinda.com

---

Built with ❤️ using React, TailwindCSS, and Lucide Icons
