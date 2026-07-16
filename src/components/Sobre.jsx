import React from 'react';
import '../styles/index.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-wrapper">

        {/* CARD DE PERFIL (Esquerda) - Estilo Premium & Mídia do GitHub */}
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
            <p className="profile-subtitle">Dev Full Stack & Automações</p>
          </div>
          <div className="profile-status">
            <span className="status-dot"></span> Disponível para projetos
          </div>
        </div>

        {/* CONTEÚDO COM FOCO COMERCIAL (Direita) */}
        <div className="sobre-content">
          <div className="section-title">
            <span>&gt;_</span> Quem sou eu?
          </div>

          <div className="sobre-text">
            <p>
              Sou um desenvolvedor focado em unir engenharia de software com visão de negócios. Tenho sólido domínio na stack Node.js, React e SQL, aplicando Clean Architecture e testes para garantir que o código seja legível, manutenível e pronto para escalar dentro de qualquer equipe.
            </p>
            <p>
              Atualmente cursando Ciência da Computação na UNEMAT, combino a base rigorosa da faculdade com um perfil de alta autonomia no mercado. Não sou apenas um executor de tarefas; atuo como um parceiro estratégico que entende as dores do produto.
            </p>
            <p>
              Meu principal diferencial de produtividade é o desenvolvimento assistido por IA. Orquestro Modelos de Linguagem (LLMs) para acelerar a refatoração de código, otimizar queries e desenhar arquiteturas, entregando valor real e em tempo recorde.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}