import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import LoanSchemes from './pages/LoanSchemes';
import DepositSchemes from './pages/DepositSchemes';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loan-schemes" element={<LoanSchemes />} />
          <Route path="/deposit-schemes" element={<DepositSchemes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
