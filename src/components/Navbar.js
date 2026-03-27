import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { toggleLanguage } = useLanguage();

  const isMr = i18n.language === 'mr';

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.loanSchemes'), href: '/loan-schemes' },
    { name: t('nav.depositSchemes'), href: '/deposit-schemes' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Kalpataru Logo" className='logo-img' />
          {/*
          <div className="navbar__logo-icon">
            <img src={logo} alt="Kalpataru Logo" className="navbar__logo-img" />
          </div>
          
           */}
          <div>
            <div className="navbar__logo-name">{isMr ? 'कल्पतरू' : 'Kalpataru'}</div>
            <div className="navbar__logo-sub">{isMr ? 'पतसंस्था' : 'Patsanstha'}</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`navbar__link ${location.pathname === link.href ? 'navbar__link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <span className="navbar__phone">📞 +91 9604060809</span>
          <button className="navbar__lang-btn" onClick={toggleLanguage}>
            🌐 {t('nav.switchLang')}
          </button>
          <Link to="/contact" className="btn btn--accent">{t('nav.applyNow')}</Link>
        </div>

        {/* Mobile right */}
        <div className="navbar__mobile-right">
          <button className="navbar__lang-btn navbar__lang-btn--sm" onClick={toggleLanguage}>
            🌐 {t('nav.switchLang')}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`navbar__mobile-link ${location.pathname === link.href ? 'navbar__mobile-link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="navbar__mobile-bottom">
            <span className="navbar__phone">📞 +91 98225 35463</span>
            <Link to="/contact" className="btn btn--accent btn--full">{t('nav.applyForLoan')}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
