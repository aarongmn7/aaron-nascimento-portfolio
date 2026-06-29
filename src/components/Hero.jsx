import React from 'react';
import { C } from '../config';

export default function Hero() {
  const linkGh = `https://github.com/${C.githubUser}`;
  const linkIn = `https://linkedin.com/in/${C.linkedinUser}`;
  const linkWa = `https://wa.me/${C.whatsapp}?text=Olá%20Aaron!%20Vi%20seu%20portfólio%20e%20achei%20seu%20perfil%20Dev%20muito%20interessante.%20Vamos%20conversar?`;

  return (
    <section id="hero" className="fi">
      <h1 className="hero-title">
        Olá, eu sou<br/>
        <span style={{ color: 'var(--accent)' }}>{C.primeiroNome}</span>
      </h1>
      <p className="hero-desc">
        Desenvolvedor Back-End / Full Stack em transição acelerada, especialista em ecossistemas JavaScript (Node.js, React) e modelagem de banco de dados SQL. Focado em otimização de regras de negócio complexas e desenvolvimento produtivo assistido por IA.
      </p>
      <div className="hero-social">
        <a href={linkGh} className="icon-btn" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href={linkIn} className="icon-btn" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href={linkWa} className="icon-btn" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
      </div>
    </section>
  );
}
