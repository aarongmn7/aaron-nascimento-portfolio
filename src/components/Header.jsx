import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logoSvg from '../assets/logo.svg';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      {/* 1. Logo */}
      <div className="logo-container">
        <Link to="/#hero">
          <img 
            src={logoSvg} 
            alt="Logo do Portfólio" 
            className="logo-img" 
          />
        </Link>
      </div>

      {/* 2. Navegação */}
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/#hero" onClick={() => setIsMenuOpen(false)}>{t('header.nav.home')}</Link></li>
          <li><Link to="/#sobre" onClick={() => setIsMenuOpen(false)}>{t('header.nav.about')}</Link></li>
          <li><Link to="/#habilidades" onClick={() => setIsMenuOpen(false)}>{t('header.nav.skills')}</Link></li>
          <li><Link to="/#projetos" onClick={() => setIsMenuOpen(false)}>{t('header.nav.projects')}</Link></li>
          <li><Link to="/#trajetoria" onClick={() => setIsMenuOpen(false)}>{t('header.nav.trajectory')}</Link></li>
          <li><Link to="/certificados" onClick={() => setIsMenuOpen(false)}>{t('header.nav.certifications')}</Link></li>
        </ul>
      </nav>
      
      {/* 3. Controles da Navbar */}
      <div className="nav-controls">
        
        {/* Seletor de Idioma */}
        <div className="lang-selector">
          <button 
            className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`} 
            onClick={() => changeLanguage('pt')}
          >
            PT
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button 
            className="lang-btn" 
            onClick={() => console.log('[LANG] Suporte para idioma ES em breve...')}
          >
            ES
          </button>
        </div>

        {/* Seletor de Tema */}
        <label className="theme-switch-container">
          <input type="checkbox" style={{ display: 'none' }} checked={theme === 'dark'} onChange={toggleTheme} />
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <div className="theme-slider-ball"></div>
        </label>
        
        {/* Botão de Contato */}
        <Link to="/#contato" className="btn-contact">
          Contato <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
