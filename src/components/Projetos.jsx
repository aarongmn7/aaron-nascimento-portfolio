import React from 'react';
import { useTranslation } from 'react-i18next';
import { C } from '../config';

const TECH_ICON_MAP = {
  react: { src: '/react.png', alt: 'React' },
  typescript: { src: '/typescript.png', alt: 'TypeScript' },
  javascript: { src: '/javascript.png', alt: 'JavaScript' },
  nodejs: { src: '/nodejs.png', alt: 'Node.js' },
  postgresql: { src: '/postgresql.png', alt: 'PostgreSQL' },
  prisma: { src: '/prisma.svg', alt: 'Prisma ORM' },
  docker: { src: '/docker.png', alt: 'Docker' },
  python: { src: '/python.png', alt: 'Python' },
  claude: { src: '/claude.png', alt: 'LLM / Claude API' },
  langchain: { src: '/langchain.png', alt: 'LangChain / Agents' },
  git: { src: '/git.png', alt: 'Git' },
  vite: { src: '/vite.png', alt: 'Vite' },
  css: { src: '/css.png', alt: 'CSS3' }
};

export default function Projetos() {
  const { t } = useTranslation();
  const cards = t('projetos.cards', { returnObjects: true }) || [];
  const ghProfileUrl = `https://github.com/${C.githubUser}`;

  return (
    <section id="projetos" className="projects-section">

      {/* CABEÇALHO DA SEÇÃO */}
      <div className="projects-header">
        <span className="projects-badge">{t('projetos.badge')}</span>
        <h2 className="sec-title">{t('projetos.title')}</h2>
        <p className="sec-subtitle">
          {t('projetos.subtitle')}
        </p>
      </div>

      {/* DESTAQUE PRINCIPAL: MINI-ERP (MOCKUP DE NAVEGADOR) */}
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
              {t('projetos.hero.status')}
            </div>
            <h3 className="project-title">{t('projetos.hero.title')}</h3>
            <p className="project-desc">
              {t('projetos.hero.desc')}
            </p>

            <ul className="benefit-list">
              <li>{t('projetos.hero.b1')}</li>
              <li>{t('projetos.hero.b2')}</li>
              <li>{t('projetos.hero.b3')}</li>
            </ul>

            <div className="project-footer">
              <div className="tech-stack-row">
                <img src="/nodejs.png" alt="Node.js" className="tech-icon-mini" title="Node.js" />
                <img src="/postgresql.png" alt="PostgreSQL" className="tech-icon-mini" title="PostgreSQL" />
                <img src="/prisma.svg" alt="Prisma ORM" className="tech-icon-mini dark-invert-always" title="Prisma ORM" />
                <img src="/docker.png" alt="Docker" className="tech-icon-mini" title="Docker" />
              </div>
              <a href={ghProfileUrl} className="btn-link" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> {t('projetos.repoBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GRID SECUNDÁRIO DE ENGENHARIA (2x2) */}
      <div className="secondary-grid">
        {Array.isArray(cards) && cards.map((card, idx) => (
          <div key={idx} className="sub-project">
            <div>
              <div className="project-status sub-status">
                <span
                  className="status-indicator sub-indicator"
                  style={{
                    backgroundColor: card.indicatorColor || '#94a3b8',
                    boxShadow: `0 0 8px ${card.indicatorColor || '#94a3b8'}`
                  }}
                ></span>
                {card.status}
              </div>
              <h4>{card.title}</h4>
              <p className="project-desc">{card.desc}</p>
            </div>
            <div className="project-footer">
              <div className="tech-stack-row">
                {card.techs && card.techs.map((techKey) => {
                  const icon = TECH_ICON_MAP[techKey];
                  if (!icon) return null;
                  return (
                    <img
                      key={techKey}
                      src={icon.src}
                      alt={icon.alt}
                      title={icon.alt}
                      className="tech-icon-mini"
                    />
                  );
                })}
              </div>
              <a href={card.link || ghProfileUrl} className="btn-link" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> {t('projetos.codeBtn')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
