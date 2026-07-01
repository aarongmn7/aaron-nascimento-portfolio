import React from 'react';
import { C } from '../config';

export default function Contato() {
  const linkWa = `https://wa.me/${C.whatsapp}?text=Olá%20Aaron!%20Vi%20seu%20portfólio%20e%20achei%20seu%20perfil%20Dev%20muito%20interessante.%20Vamos%20conversar?`;
  const linkGh = `https://github.com/${C.githubUser}`;
  const linkIn = `https://linkedin.com/in/${C.linkedinUser}`;
  const linkEmail = `mailto:${C.email}`;

  return (
    <section id="contato" className="contact-section fi">
      <div className="contact-grid">
        
        {/* Coluna da Esquerda: Textos e Ações */}
        <div className="contact-info">
          <span className="section-label">CONTATO</span>
          <h2>Vamos conversar sobre o seu projeto.</h2>
          <p>Escolha um horário no calendário ou, se preferir algo mais rápido, mande uma mensagem direta.</p>
          
          <div className="contact-actions">
            <a href={linkEmail} className="btn-action btn-solid">
              ENVIAR E-MAIL
            </a>
            <a href={linkWa} target="_blank" rel="noreferrer" className="btn-action btn-outline">
              WhatsApp
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
            title="Agendar reunião com Aaron"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
