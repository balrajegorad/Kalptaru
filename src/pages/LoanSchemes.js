import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import './Schemes.css';

export default function LoanSchemes() {
  const { t } = useTranslation();

  const loans = t('loans.items', { returnObjects: true });

  return (
    <div className="page">
      <Navbar />
      <main className="main-content">
        <PageHeader title={t('loans.pageTitle')} description={t('loans.pageDesc')} />
        <section className="section">
          <div className="container">
            <div className="schemes-grid">
              {loans.map(loan => (
                <div key={loan.id} className="scheme-card scheme-card--loan">
                  <div className="scheme-card__header">
                    <h3 className="scheme-card__title">{loan.title}</h3>
                    <p className="scheme-card__desc">{loan.description}</p>
                  </div>
                  <div className="scheme-card__body">
                    <div className="scheme-card__meta">
                      <div className="scheme-card__meta-item">
                        <span className="scheme-card__meta-label">{t('loans.interestRate')}</span>
                        <span className="scheme-card__meta-value scheme-card__meta-value--primary">{loan.interest}</span>
                      </div>
                      <div className="scheme-card__meta-item">
                        <span className="scheme-card__meta-label">{t('loans.maxAmount')}</span>
                        <span className="scheme-card__meta-value">{loan.maxAmount}</span>
                      </div>
                      <div className="scheme-card__meta-item scheme-card__meta-item--full">
                        <span className="scheme-card__meta-label">{t('loans.tenure')}</span>
                        <span className="scheme-card__meta-value">{loan.tenure}</span>
                      </div>
                    </div>
                    <ul className="scheme-card__features">
                      {loan.features.map((f, i) => (
                        <li key={i} className="scheme-card__feature">
                          <span className="scheme-card__feature-check">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/contact?type=${loan.id}`} className="btn btn--primary btn--full scheme-card__cta">
                      {t('loans.applyNow')} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="schemes-note">
              <span className="schemes-note__icon">ℹ️</span>
              <div>
                <strong>{t('loans.noteTitle')}:</strong> {t('loans.noteDesc')}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
