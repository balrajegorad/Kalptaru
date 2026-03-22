# कल्पतरू पतसंस्था - Website

React JavaScript + Plain CSS website (no TypeScript, no Tailwind), with **i18next** for dual-language support.

## Tech Stack
- **React 18** (JavaScript, .js)
- **React Router DOM v6** (client-side routing)
- **i18next + react-i18next** (internationalization)
- **Plain CSS** (one CSS file per component)
- **Marathi default** (`mr`), English toggle (`en`)

## Project Structure

```
src/
├── index.js                   # Entry — imports i18n before render
├── index.css                  # Global CSS variables & resets
├── App.js                     # Router setup
├── i18n.js                    # i18next config (loads mr.json & en.json)
├── locales/
│   ├── mr.json                # All Marathi translations
│   └── en.json                # All English translations
├── contexts/
│   └── LanguageContext.js     # Language toggle (wraps i18n.changeLanguage)
├── components/
│   ├── Navbar.js / Navbar.css
│   ├── Footer.js / Footer.css
│   └── PageHeader.js / PageHeader.css
└── pages/
    ├── Home.js / Home.css
    ├── About.js / About.css
    ├── LoanSchemes.js / Schemes.css
    ├── DepositSchemes.js
    └── Contact.js / Contact.css
```

## How i18n Works

- `src/i18n.js` initializes i18next with both locale files, defaulting to `mr`.
- Every component uses `useTranslation()` from `react-i18next`.
  - Simple strings: `t('nav.home')`
  - Arrays (stats, services, members): `t('home.stats', { returnObjects: true })`
- Language toggle calls `i18n.changeLanguage('en' | 'mr')` — all components re-render automatically.
- To add a new language, add a new JSON file in `src/locales/` and register it in `i18n.js`.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (default: http://localhost:3000)
npm start

# Build for production
npm run build
```

## API

The Contact form POSTs to `/api/inquiries`.
Body: `{ name, phone, loanType, message }`

## Theme Colors
- Primary (Green): `#2e7d32`
- Accent (Orange): `#f57c00`
- Defined as CSS custom properties in `src/index.css`
