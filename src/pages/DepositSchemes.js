import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import './Schemes.css';

export default function DepositSchemes() {
  const { t } = useTranslation();

  const deposits = t('deposits.items', { returnObjects: true });

  return (
    <div className="page">
      <Navbar />
      <main className="main-content">
        <PageHeader title={t('deposits.pageTitle')} description={t('deposits.pageDesc')} />
        <section className="section">
          <div className="container">
            <div className="schemes-grid">
              {deposits.map(dep => (
                <div key={dep.id} className="scheme-card scheme-card--deposit">
                  <div className="scheme-card__header">
                    <h3 className="scheme-card__title">{dep.title}</h3>
                    <p className="scheme-card__desc">{dep.description}</p>
                  </div>
                  <div className="scheme-card__body">
                    <div className="scheme-card__rate-box">
                      <div className="scheme-card__rate-label">{t('deposits.ratesUpTo')}</div>
                      <div className="scheme-card__rate-value">{dep.rates}</div>
                    </div>
                    <div className="scheme-card__meta scheme-card__meta--2col">
                      <div className="scheme-card__meta-item">
                        <span className="scheme-card__meta-label">{t('deposits.minAmount')}</span>
                        <span className="scheme-card__meta-value">{dep.minAmount}</span>
                      </div>
                      <div className="scheme-card__meta-item">
                        <span className="scheme-card__meta-label">{t('deposits.tenure')}</span>
                        <span className="scheme-card__meta-value">{dep.tenure}</span>
                      </div>
                    </div>
                    <ul className="scheme-card__features">
                      {dep.features.map((f, i) => (
                        <li key={i} className="scheme-card__feature">
                          <span className="scheme-card__feature-check scheme-card__feature-check--primary">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/contact?type=${dep.id}`} className="btn btn--outline-primary btn--full scheme-card__cta">
                      {t('deposits.openAccount')} →
                    </Link>
                  </div>
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
