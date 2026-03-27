import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import './Contact.css';
import emailjs from "emailjs-com";


const VALID_TYPES = ['personal_loan', 'business_loan', 'gold_loan', 'fixed_deposit', 'recurring_deposit', 'savings_account', 'other'];

export default function Contact() {
  const location = useLocation();
  const { t } = useTranslation();

  const serviceOptions = t('contact.services', { returnObjects: true });

  const [form, setForm] = useState({ name: '', phone: '', loanType: 'other', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type && VALID_TYPES.includes(type)) {
      setForm(f => ({ ...f, loanType: type }));
    }
  }, [location.search]);

  function validate() {
    const errs = {};
    if (!form.name || form.name.length < 2) errs.name = t('contact.nameError');
    if (!form.phone || !/^[0-9]{10,15}$/.test(form.phone)) errs.phone = t('contact.phoneError');
    return errs;
  }


async function handleSubmit(e) {
  e.preventDefault();

  const errs = validate();
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  setErrors({});
  setLoading(true);

  try {
    await emailjs.send(
      "service_w7k69kc",
      "template_7650b1i",
      {
        name: form.name,
        phone: form.phone,
        loanType: form.loanType,
        message: form.message,
      },
      "G1ZeKz0RfAFM-Ecrx"
    );

    setStatus("success");
    setForm({ name: "", phone: "", loanType: "other", message: "" });

  } catch (err) {
    setStatus("error");
  } finally {
    setLoading(false);
  }
}

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e2 => ({ ...e2, [name]: '' }));
  }


  const openMap = () => {
  window.open("https://www.google.com/maps?q=17.795157,74.875265", "_blank");
  };

  return (
    <div className="page">
      <Navbar />
      <main className="main-content">
        <PageHeader title={t('contact.pageTitle')} description={t('contact.pageDesc')} />

        <section className="section section--white">
          <div className="container contact__grid">

            {/* Left: Info */}
            <div className="contact__info">
              <h3 className="contact__info-title">{t('contact.getInTouch')}</h3>
              <p className="contact__info-desc">{t('contact.getInTouchDesc')}</p>

              <div className="contact__details">
                <div className="contact__detail-card">
                  <div className="contact__detail-icon">📍</div>
                  <div>
                    <div className="contact__detail-label">{t('contact.branchAddress')}</div>
                    <div className="contact__detail-value" style={{ whiteSpace: 'pre-line' }}>
                      {t('contact.addressText')}
                    </div>
                  </div>
                </div>
                <div className="contact__detail-card">
                  <div className="contact__detail-icon contact__detail-icon--accent">📞</div>
                  <div>
                    <div className="contact__detail-label">{t('contact.phone')}</div>
                    <div className="contact__detail-value">+91 98225 35463</div>
                  </div>
                </div>
                <div className="contact__detail-grid">
                  <div className="contact__detail-card">
                    <div className="contact__detail-icon contact__detail-icon--blue">✉</div>
                    <div>
                      <div className="contact__detail-label">{t('contact.email')}</div>
                      <div className="contact__detail-value contact__detail-value--sm">
                        infokalpatarupatsanstha@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="contact__detail-card">
                    <div className="contact__detail-icon contact__detail-icon--purple">🕐</div>
                    <div>
                      <div className="contact__detail-label">{t('contact.hours')}</div>
                      <div className="contact__detail-value contact__detail-value--sm">
                        {t('contact.hoursText')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact__map-placeholder" onClick={openMap}>
                <span>📍</span>
                <div className="contact__map-text">{t('contact.mapTitle')}</div>
                <div className="contact__map-sub">{t('contact.mapSubtitle')}</div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact__form-wrap">
              <h3 className="contact__form-title">{t('contact.formTitle')}</h3>
              <p className="contact__form-desc">{t('contact.formDesc')}</p>

              {status === 'success' && (
                <div className="contact__alert contact__alert--success">✅ {t('contact.successMsg')}</div>
              )}
              {status === 'error' && (
                <div className="contact__alert contact__alert--error">❌ {t('contact.errorMsg')}</div>
              )}

              <form onSubmit={handleSubmit} className="contact__form" noValidate>
                <div className="form-field">
                  <label className="form-label">{t('contact.nameLabel')}</label>
                  <input
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.phoneLabel')}</label>
                  <input
                    className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t('contact.phonePlaceholder')}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.serviceLabel')}</label>
                  <select
                    className="form-input form-select"
                    name="loanType"
                    value={form.loanType}
                    onChange={handleChange}
                  >
                    {serviceOptions.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.messageLabel')}</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    rows={4}
                  />
                </div>
                

                <button type="submit" className="btn btn--primary btn--full form-submit" disabled={loading}>
                  {loading ? t('contact.submitting') : t('contact.submit')}
                </button>

                <p className="form-secure">🔒 {t('contact.secureText')}</p>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
