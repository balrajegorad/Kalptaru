import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from '../assets/footer-img.png';


export default function Footer() {
  const { t, i18n } = useTranslation();
  const isMr = i18n.language === 'mr';

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('footer.aboutOrg'), href: '/about' },
    { name: t('nav.loanSchemes'), href: '/loan-schemes' },
    { name: t('nav.depositSchemes'), href: '/deposit-schemes' },
    { name: t('footer.contactUs'), href: '/contact' },
  ];

  const services = [
    t('footer.personalLoans'),
    t('footer.businessLoans'),
    t('footer.goldLoans'),
    t('footer.fixedDeposits'),
    t('footer.recurringDeposits'),
    t('footer.savingsAccounts'),
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="Kalpataru Logo" className='footer-logo' />
              <div>
                <div className="footer__logo-name">{isMr ? 'कल्पतरू' : 'Kalpataru'}</div>
                <div className="footer__logo-sub">{isMr ? 'ग्रामीण बिगर शेती सहकारी मर्या. पतसंस्था' : 'Gramin Bigar Sheti Sahakari Maryadit Patsanstha'}</div>
              </div>
            </div>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__heading">{t('footer.quickLinks')}</h3>
            <ul className="footer__list">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="footer__link">→ {link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer__heading">{t('footer.ourServices')}</h3>
            <ul className="footer__list">
              {services.map(s => (
                <li key={s} className="footer__service-item">
                  <span className="footer__dot"></span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer__heading">{t('footer.contactInfo')}</h3>
            <ul className="footer__contact-list">
              <li>📍 {t('footer.address')}</li>
              <li>📞 +91 98225 35463</li>
              <li>✉ infokalpatarupatsanstha@gmail.com</li>
              <li>🕐 {t('footer.hours')}</li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <p>{t('footer.regNo')}</p>
        </div>
      </div>
    </footer>
  );
}
