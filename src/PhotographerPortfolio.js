import React, { useState } from 'react';
import { Camera, Youtube, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronRight, Target } from 'lucide-react';
import { photographerData, portfolioImages, exhibitions, aboutData, contactInfo } from './mock';
import './PhotographerPortfolio.css';

const PhotographerPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages = activeFilter === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeFilter);

  const categories = ['all', 'portrait', 'fashion', 'outdoor', 'product', 'abstract'];

  return (
    <div className="photographer-portfolio">
      {/* Header Navigation */}
      <header className="portfolio-header">
        <div className="logo">
          <Camera size={32} strokeWidth={2.5} />
        </div>
        <nav className="main-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#exhibitions" className="nav-link">Exhibitions</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="header-info">
          <span className="status-badge">✨ {photographerData.name}</span>
          <span className="date-badge">22 Nov 23</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line-1">{photographerData.tagline}</span>
              <span className="title-line-2">folio</span>
            </h1>
            <p className="hero-subtitle">{photographerData.subtitle}</p>
            
            {/* Social Links */}
            <div className="social-links">
              {photographerData.socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-button">
                  {social.handle}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-section">
              <div className="stat-item">
                <h3 className="stat-number">+{photographerData.stats.videos}</h3>
                <p className="stat-description">{photographerData.stats.videosDescription}</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">+{photographerData.stats.hours}</h3>
                <p className="stat-description">{photographerData.stats.hoursDescription}</p>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div className="hero-images">
            <div className="hero-card hero-card-main">
              <img src={portfolioImages[0].url} alt="Featured work" />
              <div className="card-overlay">
                <span className="signature">Photography</span>
              </div>
              <div className="card-badge">
                <Target size={24} />
              </div>
              <div className="floating-badges">
                <div className="mini-badge badge-1">
                  <img src={portfolioImages[1].url} alt="Mini 1" />
                </div>
                <div className="mini-badge badge-2">
                  <img src={portfolioImages[2].url} alt="Mini 2" />
                </div>
                <div className="mini-badge badge-3">
                  <Target size={16} />
                </div>
              </div>
            </div>
            <div className="hero-card hero-card-secondary">
              <img src="https://images.pexels.com/photos/15988272/pexels-photo-15988272.jpeg" alt="Abstract" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="decorative-crosshair top-left">
          <Target size={32} />
        </div>
        <div className="decorative-crosshair top-right">
          <Target size={32} />
        </div>
      </section>

      {/* About Section with Repeating Text */}
      <section className="about-banner" id="about">
        <div className="banner-content">
          <div className="repeating-text">
            <span>about</span>
            <span className="dot">•</span>
            <span>about</span>
            <span className="dot">•</span>
            <span>about</span>
            <span className="dot">•</span>
            <span>about</span>
            <span className="dot">•</span>
          </div>
        </div>
        <div className="banner-image">
          <img src={portfolioImages[3].url} alt="About photographer" />
          <div className="banner-decorations">
            <div className="decoration-hands"></div>
          </div>
        </div>
        <div className="decorative-crosshair bottom-left">
          <Target size={32} />
        </div>
        <div className="decorative-crosshair bottom-right">
          <Target size={32} />
        </div>
      </section>

      {/* About Details Section */}
      <section className="about-details">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-bio">{aboutData.bio}</p>
          <div className="about-stats">
            <div className="about-stat">
              <h4>{aboutData.experience}</h4>
              <p>Experience</p>
            </div>
            <div className="about-stat">
              <h4>{aboutData.projects}</h4>
              <p>Completed Projects</p>
            </div>
            <div className="about-stat">
              <h4>{aboutData.awards}</h4>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-header-section">
          <h2 className="section-title">Portfolio</h2>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="portfolio-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="portfolio-item">
              <img src={image.url} alt={image.title} />
              <div className="portfolio-overlay">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="exhibitions-section" id="exhibitions">
        <h2 className="section-title">exhibitions</h2>
        <div className="exhibitions-grid">
          {exhibitions.map(exhibition => (
            <div key={exhibition.id} className="exhibition-card">
              <h3 className="exhibition-title">{exhibition.title}</h3>
              <p className="exhibition-description">{exhibition.description}</p>
              <div className="exhibition-details">
                <span className="exhibition-location">{exhibition.location}</span>
                <span className="exhibition-date">{exhibition.date}</span>
              </div>
              <button className="ticket-button">
                Buy Ticket
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <div className="contact-info-block">
            <h2 className="section-title">Let's Create Together</h2>
            <p className="contact-subtitle">{contactInfo.availability}</p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={24} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>
          <div className="contact-form-block">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Your Message" rows="6" className="form-textarea"></textarea>
              <button type="submit" className="submit-button">
                Send Message
                <ChevronRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Camera size={28} strokeWidth={2.5} />
            <span>{photographerData.name}</span>
          </div>
          <div className="footer-links">
            {photographerData.socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="footer-social">
                {social.platform === 'youtube' && <Youtube size={20} />}
                {social.platform === 'instagram' && <Instagram size={20} />}
                {social.platform === 'facebook' && <Facebook size={20} />}
                {social.platform === 'twitter' && <Twitter size={20} />}
              </a>
            ))}
          </div>
          <p className="footer-copyright">© 2023 {photographerData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PhotographerPortfolio;