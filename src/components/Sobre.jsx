import React from 'react';
import { C } from '../config';

export default function Sobre() {
  return (
    <section id="sobre" className="fi">
      <h2 className="sec-title">Sobre Mim</h2>
      <div className="sobre-grid">
        <div className="photo-ph">
          <i className="fas fa-user-astronaut" style={{ fontSize: '3rem', color: 'var(--border-color)' }}></i>
        </div>
        <div className="bio">
          <p>
            Olá! Sou <strong>{C.nome}</strong>, desenvolvedor focado em engenharia de software backend e aplicações web completas. Tenho sólido domínio na stack <strong>Node.js, React, JavaScript e bancos de dados SQL</strong>, aplicando boas práticas de Programação Orientada a Objetos (POO) para traduzir fluxos operacionais em sistemas limpos.
          </p>
          <p>
            Atualmente curso <strong>Ciência da Computação na UNEMAT</strong>, ambiente onde desenvolvo projetos robustos e atuo ativamente na liderança e facilitação de eventos de tecnologia e inovação.
          </p>
          <p>
            Meu grande diferencial de produtividade é o <strong>desenvolvimento assistido por IA (Vibe Coding)</strong>. Utilizo ativamente Engenharia de Prompts com LLMs avançadas para refatoração de código, testes de estresse, otimização de queries e escrita ágil de documentação técnica.
          </p>
          <div className="badges">
            <div className="badge"><i className="fas fa-map-marker-alt"></i> <span>{C.cidade}</span></div>
            <div className="badge"><i className="fas fa-laptop-code"></i> Back-End / Full Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}
