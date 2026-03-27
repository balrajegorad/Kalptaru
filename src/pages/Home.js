import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from "../components/ImageSlider";
import aboutImg from "../assets/about-bg.png";
import './Home.css';

const ICONS = ['👤', '💼', '🪙', '🏦', '🔄'];
const WHY_ICONS = ['🛡️', '🤝', '⚡', '💰'];

export default function Home() {
  const { t } = useTranslation();

  const stats = t('home.stats', { returnObjects: true });
  const services = t('home.services', { returnObjects: true });
  const whyPoints = t('home.whyPoints', { returnObjects: true });

  return (
    <div className="page">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="container hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              {t('home.badge')}
            </div>
            <h1 className="hero__title">
              {t('home.heroTitle1')} <span className="hero__title-accent">{t('home.heroTitle2')}</span>
            </h1>
            <p className="hero__subtitle">{t('home.heroSubtitle')}</p>
            <div className="hero__buttons">
              <Link to="/contact" className="btn btn--accent btn--lg">{t('home.applyLoan')}</Link>
              <Link to="/about" className="btn btn--white-outline btn--lg">{t('home.knowMore')} →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar__grid">
            {stats.map((s, i) => (
              <div key={i} className="stats-bar__item">
                <div className="stats-bar__value">{s.value}</div>
                <div className="stats-bar__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section">
        <div className="container">
          <div className="section__header">
            <div className="section__tag">{t('home.servicesTag')}</div>
            <h2 className="section__title">{t('home.servicesTitle')}</h2>
          </div>
          <div className="services__grid">
            {services.map((s, i) => (
              <Link key={i} to={s.href} className="service-card">
                <div className="service-card__icon">{ICONS[i]}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <span className="service-card__link">{t('home.viewDetails')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why section section--white">
        <div className="container">
          <div className="why__grid">
            <div className="why__content">
              <div className="section__tag">{t('home.whyTag')}</div>
              <h2 className="section__title">{t('home.whyTitle')}</h2>
              <p className="why__desc">{t('home.whyDesc')}</p>
              <div className="why__points">
                {whyPoints.map((p, i) => (
                  <div key={i} className="why__point">
                    <div className="why__point-icon">{WHY_ICONS[i]}</div>
                    <div>
                      <h4 className="why__point-title">{p.title}</h4>
                      <p className="why__point-desc">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why__image-wrap">
              <img src={aboutImg} alt="About Us" className="why__image-wrap why-is-img" />  
              
              <div className="why__reg-badge">
                <span className="why__reg-icon">🛡️</span>
                <div>
                  <div className="why__reg-label">{t('home.govtReg')}</div>
                  <div className="why__reg-no">{t('home.regNo')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-section__inner">
          <h2 className="cta-section__title">{t('home.ctaTitle')}</h2>
          <p className="cta-section__desc">{t('home.ctaDesc')}</p>
          <div className="cta-section__buttons">
            <Link to="/contact" className="btn btn--accent btn--lg">{t('home.becomeMember')}</Link>
            <Link to="/contact" className="btn btn--white btn--lg">{t('home.contactUs')}</Link>
          </div>
        </div>
      </section>
      <ImageSlider />
      <Footer />
    </div>
  );
}
