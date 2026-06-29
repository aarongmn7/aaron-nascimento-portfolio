import React, { useState, useEffect } from 'react';
import { C } from '../config';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 90;
      const sections = ['hero', 'sobre', 'habilidades', 'projetos', 'trajetoria', 'contato'];
      
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActiveSection(id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" className="logo" id="navLogo">{C.primeiroNome}.</a>
      <button className="nav-toggle" onClick={toggleNav}><i className="fas fa-bars"></i></button>
      <div className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
        <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Início</a>
        <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>Sobre</a>
        <a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''}>Habilidades</a>
        <a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''}>Projetos</a>
        <a href="#trajetoria" className={activeSection === 'trajetoria' ? 'active' : ''}>Trajetória</a>
        <a href="#contato" className={activeSection === 'contato' ? 'active' : ''}>Contato</a>
      </div>
      <label className="switch">
        <input type="checkbox" id="themeToggle" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </nav>
  );
}
