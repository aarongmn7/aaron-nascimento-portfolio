import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.css';

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-wrapper">

        {/* CARD DE PERFIL (Esquerda) */}
        <div className="profile-card">
          <div className="avatar-wrapper">
            <img
              src="https://github.com/aarongmn7.png"
              alt="Aaron Nascimento"
              className="profile-avatar"
            />
          </div>
          <div className="profile-info">
            <h2>Aaron Nascimento</h2>
            <p className="profile-subtitle">{t('sobre.subtitle')}</p>
          </div>
          <div className="profile-status">
            <span className="status-dot"></span> {t('sobre.status')}
          </div>

          {/* AÇÕES RÁPIDAS (GITHUB & LINKEDIN) */}
          <div className="profile-social-links">
            <a
              href="https://github.com/aarongmn7"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-social-btn"
              title="GitHub"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-nascimento-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-social-btn"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* CONTEÚDO (Direita) */}
        <div className="sobre-content">
          <div className="section-title">
            <span>&gt;_</span> {t('sobre.title')}
          </div>

          <div className="sobre-text">
            <p>{t('sobre.p1')}</p>
            <p>{t('sobre.p2')}</p>
            <p>{t('sobre.p3')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
