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
              Desenvolvo sistemas sob medida e automações de processos projetados para transformar
              tarefas manuais, lentas e repetitivas em rotinas digitais automáticas de alta performance.
              Meu foco é entregar soluções prontas para o mercado, cuidando de toda a infraestrutura técnica
              para que você foque apenas no crescimento do seu negócio.
            </p>
            <p>
              Unindo a base analítica da <strong>Ciência da Computação na UNEMAT</strong> com o que há de mais
              moderno em desenvolvimento de software, construo plataformas seguras, escaláveis e focadas
              em usabilidade real.
            </p>
            <p>
              O meu grande diferencial de mercado é o <strong>desenvolvimento inteligente assistido por IA</strong>.
              Utilizo engenharia de prompts avançada para acelerar drasticamente o tempo de entrega dos projetos,
              executar testes de estresse rigorosos antes da publicação e otimizar a performance de sistemas complexos,
              garantindo o melhor custo-benefício para a sua empresa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}