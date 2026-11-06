import React from 'react';
import { useTranslation } from 'react-i18next';
import { C } from '../config';

export default function Contato() {
  const { t } = useTranslation();
  const encodedWaText = encodeURIComponent(t('contato.waText'));
  const linkWa = `https://wa.me/${C.whatsapp}?text=${encodedWaText}`;
  const linkGh = `https://github.com/${C.githubUser}`;
  const linkIn = `https://linkedin.com/in/${C.linkedinUser}`;
  const linkEmail = `mailto:${C.email}`;

  return (
    <section id="contato" className="contact-section fi">
      <div className="contact-grid">
        
        {/* Coluna da Esquerda: Textos e Ações */}
        <div className="contact-info">
          <span className="section-label">{t('contato.label')}</span>
          <h2>{t('contato.title')}</h2>
          <p>{t('contato.desc')}</p>
          
          <div className="contact-actions">
            <a href={linkEmail} className="btn-action btn-solid">
              {t('contato.btnEmail')}
            </a>
            <a href={linkWa} target="_blank" rel="noreferrer" className="btn-action btn-outline">
              {t('contato.btnWa')}
            </a>
            <div className="action-row">
              <a href={linkIn} target="_blank" rel="noreferrer" className="btn-action btn-outline">
                LinkedIn
              </a>
              <a href={linkGh} target="_blank" rel="noreferrer" className="btn-action btn-outline">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Bento Card para o Calendário */}
        <div className="contact-calendar-wrapper bento-card p-0">
          <iframe
            src="https://calendar.app.google/suFL2ecDwBGjMUv28"
            style={{ border: 0, width: '100%', height: '100%', minHeight: '500px', borderRadius: '12px' }}
            frameBorder="0"
            title={t('contato.calendarTitle')}
          ></iframe>
        </div>

      </div>
    </section>
  );
}
