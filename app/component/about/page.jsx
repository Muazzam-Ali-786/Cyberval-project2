import Link from 'next/link';
import './about.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-left">
            <div className="radar-wrapper">
              <span className="about-badge">ABOUT US</span>
              <img 
                src="/images/radar-graphic.svg" 
                alt="Security Radar" 
                className="radar-image"
              />
            </div>
          </div>
          
          <div className="about-hero-right">
            <h1 className="about-title">
              Protecting What Matters,
              <br />
              <span className="hero-title-blue">Advancing What&apos;s Next.</span>
            </h1>
            
            <p className="about-description">
              At Cyberval, we don&apos;t just secure; we innovate. Our unique approach blends 
              cutting-edge cybersecurity solutions with a forward-thinking mindset. Trust us 
              to safeguard your digital assets while propelling your technological resilience.
            </p>

            <div className="mission-block">
              <h2 className="mission-heading">Our Mission</h2>
              <h3 className="mission-subheading">Fortifying Excellence through Advanced Cybersecurity Solutions</h3>
              <p className="mission-description">
                At the crux of our mission is a dedication to empowering organizations with 
                transformative solutions, enhancing performance, optimizing operations, and 
                fortifying the security of their digital assets.
              </p>
            </div>
            
            <Link href="/About2"><button className="btn-read-more">Read More</button></Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-value">10<span className="stat-plus">+</span> <span className="stat-unit">Years</span></div>
            <div className="stat-label">Professional Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-value">25<span className="stat-plus">+</span></div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-value">99.9<span className="stat-plus">%</span></div>
            <div className="stat-label">Threat Detection Accuracy</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Security Monitoring</div>
          </div>
        </div>
      </section>

      {/* Commitment Section (Previously What We Offer) */}
      <section className="commitment-section">
        <span className="commitment-label">WHAT WE OFFER</span>
        <h2 className="commitment-heading">
          Our <span className="blue-text">Commitment</span>
        </h2>
        <p className="commitment-subtext">
          We evaluate your environment, design the right mix of services, and execute with accuracy.
        </p>
        
        <div className="commitment-cards-container">
          <div className="commitment-card">
            <div className="card-icon-wrapper">
              <img src="/group1.svg" alt="Needs" />
            </div>
            <div className="card-content">
              <h4 className="card-title">We Understand Your Needs</h4>
              <p className="card-desc">We take time to understand your environment, risk profile, and business goals.</p>
            </div>
          </div>

          <div className="commitment-card">
            <div className="card-icon-wrapper">
              <img src="/group2.svg" alt="Precision" />
            </div>
            <div className="card-content">
              <h4 className="card-title">We Build with Precision</h4>
              <p className="card-desc">We combine proven methodologies with automation to reduce gaps and human error.</p>
            </div>
          </div>

          <div className="commitment-card">
            <div className="card-icon-wrapper">
              <img src="/group3.svg" alt="Excellence" />
            </div>
            <div className="card-content">
              <h4 className="card-title">We Deliver Excellence</h4>
              <p className="card-desc">We stay engaged after go-live—measuring outcomes and helping teams mature.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
