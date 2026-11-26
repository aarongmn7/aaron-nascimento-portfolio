import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/#hero">{t('header.nav.home')}</Link>
        <Link to="/#sobre">{t('header.nav.about')}</Link>
        <Link to="/#habilidades">{t('header.nav.skills')}</Link>
        <Link to="/#projetos">{t('header.nav.projects')}</Link>
        <Link to="/#trajetoria">{t('header.nav.trajectory')}</Link>
        <Link to="/certificados">{t('header.nav.certifications')}</Link>
        <Link to="/#contato">{t('header.contact')}</Link>
        <a
          href="https://cybersurvivor.aaron.dev.br/"
          target="_blank"
          rel="noopener noreferrer"
          title="Side Quest: Cyber Survivor (Roguelike 60 FPS)"
          style={{ opacity: 0.75 }}
        >
          🎮 {t('footer.sideQuest')} ↗
        </a>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} AARON NASCIMENTO. {t('footer.rights')}
      </div>
    </footer>
  );
}
