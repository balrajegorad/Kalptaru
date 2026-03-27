import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  const members = t('about.members', { returnObjects: true });

  return (
    <div className="page">
      <Navbar />
      <main className="main-content">
        <PageHeader title={t('about.pageTitle')} description={t('about.pageDesc')} />

        {/* Intro */}
        <section className="section section--white">
          <div className="container about-intro__grid">
            <div className="about-intro__text">
              <h2 className="section__title" style={{ textAlign: 'left', marginBottom: 24 }}>
                {t('about.introTitle')}
              </h2>
              <p className="about-intro__para">{t('about.intro1')}</p>
              <p className="about-intro__para">{t('about.intro2')}</p>
              <p className="about-intro__para">{t('about.intro3')}</p>
            </div>
            <div className="about-intro__image-wrap">
              <div className="about-intro__image-placeholder">
                <span>🏛️</span>
              </div>
              <div className="about-intro__badge">
                <div className="about-intro__badge-pct">100%</div>
                <div className="about-intro__badge-text">{t('about.dedication')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-card__icon mv-card__icon--primary">🎯</div>
                <h3 className="mv-card__title">{t('about.missionTitle')}</h3>
                <p className="mv-card__desc">{t('about.missionDesc')}</p>
              </div>
              <div className="mv-card">
                <div className="mv-card__icon mv-card__icon--accent">💡</div>
                <h3 className="mv-card__title">{t('about.visionTitle')}</h3>
                <p className="mv-card__desc">{t('about.visionDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Board */}
        <section className="section section--white">
          <div className="container">
            <div className="section__header">
              <div className="section__tag">{t('about.leadershipTag')}</div>
              <h2 className="section__title">{t('about.leadershipTitle')}</h2>
              <p className="section__subtitle">{t('about.leadershipDesc')}</p>
            </div>
            <div className="board-grid">
              {members.map((m, i) => (
                <div key={i} className="board-card">
                  <img src={m.img} alt={m.name} className="board-card__avatar" onError={(e) => {e.target.src = "/images/default-user.webp";}} loading="lazy"/>
                  <h4 className="board-card__name">{m.name}</h4>
                  <p className="board-card__role">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
