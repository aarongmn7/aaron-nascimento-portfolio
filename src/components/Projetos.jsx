import React from 'react';

export default function Projetos() {
  return (
    <section id="projetos" className="projects-section">

      {/* CABEÇALHO DA SEÇÃO */}
      <div className="projects-header">
        <span className="projects-badge">PRODUÇÃO & ENGENHARIA</span>
        <h2 className="sec-title">Sistemas em Destaque</h2>
        <p className="sec-subtitle">
          Aplicações reais focadas em arquitetura escalável, consistência de dados e otimização de infraestrutura corporativa.
        </p>
      </div>

      {/* O REI DA SEÇÃO: MINI-ERP (ESTRUTURA MOCKUP DE NAVEGADOR) */}
      <div className="browser-mockup hero-project">
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="browser-address">localhost:3000/erp</div>
        </div>

        <div className="hero-grid">
          {/* LADO ESQUERDO: PREVIEW DA INTERFACE */}
          <div className="hero-preview">
            <img
              src="/mini-erp.png"
              alt="Dashboard do Mini-ERP Gestão de Ativos"
              className="hero-preview-img"
            />
          </div>

          {/* LADO DIREITO: ENGENHARIA DO PRODUTO */}
          <div className="hero-content">
            <div className="project-status">
              <span className="status-indicator"></span>
              EM PRODUÇÃO / MVP
            </div>
            <h3 className="project-title">mini-erp-gestao-ativos</h3>
            <p className="project-desc">
              Sistema modular desenvolvido para centralizar, monitorar e gerenciar inventários complexos de TI, mitigando gargalos operacionais e automatizando auditorias de hardware.
            </p>

            {/* MOMENTO RAIO-X: INFRA & ARQUITETURA */}
            <ul className="benefit-list">
              <li>Persistência de dados ultra veloz e modelagem estrita com Prisma ORM e PostgreSQL.</li>
              <li>Arquitetura modular no backend isolando regras de negócio complexas via Express.</li>
              <li>Fluxo de deploy automatizado e preparado para conteinerização com Docker.</li>
            </ul>

            <div className="project-footer">
              <div className="tech-stack-row">
                <img src="/nodejs.png" alt="Node.js" className="tech-icon-mini" title="Node.js" />
                <img src="/postgresql.png" alt="PostgreSQL" className="tech-icon-mini" title="PostgreSQL" />
                <img src="/prisma.png" alt="Prisma ORM" className="tech-icon-mini" title="Prisma ORM" />
                <img src="/docker.png" alt="Docker" className="tech-icon-mini" title="Docker" />
              </div>
              <a href="#" className="btn-link" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> Acessar Repositório ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* QUADRADINHOS DE BAIXO: ENGENHARIA PURA */}
      <div className="secondary-grid">

        {/* CARD 01: FRONT-END (PORTFÓLIO) */}
        <div className="sub-project">
          <div>
            <div className="project-status sub-status">
              <span className="status-indicator sub-indicator"></span>
              FRONT-END ARCHITECTURE
            </div>
            <h4>Componentização & UI/UX (Este site)</h4>
            <p className="project-desc">
              Interface de alta performance desenvolvida com React e Vite. Foco em componentização modular, design responsivo fluido e implementação nativa de variáveis para transição de temas (Light/Dark Mode).
            </p>
          </div>
          <div className="project-footer">
            <div className="tech-stack-row">
              <img src="/react.png" alt="React" className="tech-icon-mini" title="React" />
              <img src="/javascript.png" alt="JavaScript" className="tech-icon-mini" title="JavaScript" />
              <img src="/css.png" alt="CSS3" className="tech-icon-mini" title="CSS3" />
            </div>
            {/* COLOQUE O LINK DO SEU GITHUB AQUI */}
            <a href="https://github.com/SEU-USUARIO/SEU-PORTFOLIO" className="btn-link" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i> Ver Código ↗
            </a>
          </div>
        </div>

        {/* CARD 02: AUTOMAÇÃO */}
        <div className="sub-project">
          <div>
            <div className="project-status sub-status">
              <span className="status-indicator sub-indicator"></span>
              AUTOMATION
            </div>
            <h4>Enterprise Automation Systems</h4>
            <p className="project-desc">
              Scripts inteligentes desenvolvidos para otimização de fluxos operacionais e sincronização de dados automatizada, eliminando trabalhos manuais repetitivos com manipulação avançada.
            </p>
          </div>
          <div className="project-footer">
            <div className="tech-stack-row">
              <img src="/python.png" alt="Python" className="tech-icon-mini" title="Python" />
            </div>
            <a href="#" className="btn-link" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i> Ver Código ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}