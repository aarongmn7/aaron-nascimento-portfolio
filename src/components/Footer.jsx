import React from 'react';
import logo from '../assets/logo.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links-area">
          {/* Coluna 1: Marca */}
          <div className="footer-col-1">
            <div className="footer-brand">
              <img src={logo} alt="Aaron Nascimento Logo" className="footer-logo" />
              <span className="footer-name">Aaron Nascimento</span>
            </div>
            <p>Desenvolvimento Back-End & Full Stack com foco em performance e automação assistida por IA.</p>
            <div className="footer-social-icons">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="footer-col-2">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#projetos">Projetos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="footer-col-3">
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:exemplo@email.com">exemplo@email.com</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Área de Copyright */}
        <div className="footer-copyright-area">
          <div className="copyright-left">
            &copy; {new Date().getFullYear()} Aaron Nascimento. Todos os direitos reservados.
          </div>
          <div className="copyright-right">
            Desenvolvido com React, Vite e IA.
          </div>
        </div>
      </div>
    </footer>
  );
}
