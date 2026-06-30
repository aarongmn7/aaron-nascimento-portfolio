import React, { useState, useEffect } from 'react';
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
      <div className="header-container">
        
        {/* 1. Logo */}
        <div className="logo-container">
          <a href="#hero">
            <img 
              src={logoSvg} 
              alt="Logo do Portfólio" 
              className="logo-img" 
            />
          </a>
        </div>

        {/* 2. Navegação */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#habilidades" onClick={() => setIsMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
            <li><a href="#trajetoria" onClick={() => setIsMenuOpen(false)}>Trajetória</a></li>
          </ul>
        </nav>
        
        {/* 3. Ações (Theme Toggle + Contato + Menu Mobile) */}
        <div className="header-right">
          <label className="switch theme-toggle-btn">
            <input type="checkbox" id="themeToggle" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          
          <a href="#contato" className="contact-btn">Contato</a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
