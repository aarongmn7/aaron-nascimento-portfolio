import React from 'react';
import { C } from '../config';

export default function Contato() {
  const linkWa = `https://wa.me/${C.whatsapp}?text=Olá%20Aaron!%20Vi%20seu%20portfólio%20e%20achei%20seu%20perfil%20Dev%20muito%20interessante.%20Vamos%20conversar?`;

  return (
    <section id="contato" className="fi">
      <h2 className="sec-title" style={{ textAlign: 'center' }}>Vamos Conversar?</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
        Estou pronto para somar no time de engenharia e desenvolvimento da sua empresa. Se o meu perfil técnico e analítico faz sentido, mande uma mensagem!
      </p>
      <a href={linkWa} id="btnWa" className="contact-btn" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp"></i> Falar no WhatsApp
      </a>
    </section>
  );
}
