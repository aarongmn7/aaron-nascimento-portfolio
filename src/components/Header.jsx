import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import logoSvg from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
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
          <li><Link to="/#hero" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
          <li><Link to="/#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
          <li><Link to="/#habilidades" onClick={() => setIsMenuOpen(false)}>Habilidades</Link></li>
          <li><Link to="/#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</Link></li>
          <li><Link to="/#trajetoria" onClick={() => setIsMenuOpen(false)}>Trajetória</Link></li>
          <li><Link to="/certificados" onClick={() => setIsMenuOpen(false)}>Certificações</Link></li>
        </ul>
      </nav>
      
      {/* 3. Ações (Theme Toggle + Contato + Menu Mobile) */}
      <div className="header-actions">
        <label className="switch theme-toggle-btn">
          <input type="checkbox" id="themeToggle" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
        
        <Link to="/#contato" className="contact-btn">Contato</Link>
        
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
