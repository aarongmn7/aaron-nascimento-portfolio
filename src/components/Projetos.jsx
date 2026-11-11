import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { C } from '../config';
import './Projetos.css';

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
  css: { src: '/css.png', alt: 'CSS3' },
  express: { src: '/express.png', alt: 'Express' },
  tailwind: { src: '/tailwind.png', alt: 'Tailwind CSS' }
};

export default function Projetos() {
  const { t } = useTranslation();
  const stories = t('projetos.stories', { returnObjects: true }) || [];
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(null);
  const ghProfileUrl = `https://github.com/${C.githubUser}`;

  const totalStories = Array.isArray(stories) ? stories.length : 0;

  const nextStory = () => {
    setActiveIdx((prev) => (prev + 1) % totalStories);
  };

  const prevStory = () => {
    setActiveIdx((prev) => (prev - 1 + totalStories) % totalStories);
  };

  const goToStory = (idx) => {
    if (idx >= 0 && idx < totalStories) {
      setActiveIdx(idx);
    }
  };

  // NAVEGAÇÃO VIA TECLADO (Setas Direita e Esquerda)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignora se o usuário estiver digitando em um input ou textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight') nextStory();
      if (e.key === 'ArrowLeft') prevStory();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalStories]);

  // GESTOS TOUCH (Swipe mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextStory(); // Swipe esquerda -> avança
      } else {
        prevStory(); // Swipe direita -> volta
      }
    }
    touchStartX.current = null;
  };

  // RENDERIZADOR DOS MOCKUPS VISUAIS DENTRO DO STORY
  const renderVisualMockup = (story) => {
    switch (story.type) {
      case 'radar':
        return (
          <div className="story-visual-canvas">
            <div className="mockup-radar">
              <div className="radar-top-row">
                <div className="radar-brand">
                  <img src="/radar-logo.svg" alt="Radar Logo" style={{ width: 18, height: 18 }} />
                  <span>AARON.DEV // JORNAL_VAGAS</span>
                </div>
                <span className="radar-streak">🔥 1d SEQUÊNCIA</span>
              </div>

              <div className="radar-job-card">
                <div className="radar-job-title">
                  <span>Desenvolvedor Full Stack Júnior</span>
                  <span className="radar-score-pill">98% MATCH</span>
                </div>
                <div className="radar-job-sub">
                  <span>100% Remoto // Node.js + React + SQL</span>
                </div>
              </div>

              <div className="radar-source-tags">
                <span className="source-tag">LinkedIn Guest (Zero Ban)</span>
                <span className="source-tag">Himalayas</span>
                <span className="source-tag">Jobicy</span>
                <span className="source-tag">Remotive</span>
              </div>
            </div>
          </div>
        );

      case 'minierp':
        return (
          <div className="story-visual-canvas">
            <div className="mockup-minierp">
              <div className="minierp-browser-bar">
                <div className="minierp-dots">
                  <span className="minierp-dot" style={{ background: '#ef4444' }}></span>
                  <span className="minierp-dot" style={{ background: '#f59e0b' }}></span>
                  <span className="minierp-dot" style={{ background: '#10b981' }}></span>
                </div>
                <span className="minierp-url">localhost:3000/erp</span>
              </div>
              <div className="minierp-image-wrap">
                <img
                  src="/mini-erp.png"
                  alt="Mini-ERP Gestão de Ativos"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );

      case 'servicedesk':
        return (
          <div className="story-visual-canvas">
            <div className="mockup-kanban">
              <div className="kanban-col">
                <span className="kanban-col-title">Triagem (SLA 15m)</span>
                <div className="kanban-mini-card">
                  <span>Falha de rota no gateway</span>
                  <span className="sla-tag">⚡ Crítico</span>
                </div>
              </div>
              <div className="kanban-col">
                <span className="kanban-col-title">Em Atendimento</span>
                <div className="kanban-mini-card">
                  <span>Refatorar RBAC Admin</span>
                  <span className="sla-tag">⏳ 1h restante</span>
                </div>
              </div>
              <div className="kanban-col">
                <span className="kanban-col-title">Resolvido</span>
                <div className="kanban-mini-card">
                  <span>Deploy PostgreSQL OK</span>
                  <span className="sla-tag" style={{ color: '#10b981' }}>✓ 100% SLA</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'smartdocs':
        return (
          <div className="story-visual-canvas">
            <div className="mockup-pipeline">
              <div className="pipeline-node">
                <i className="fas fa-file-pdf" style={{ color: '#ef4444', marginBottom: 4, display: 'block' }}></i>
                <span>PDF Ingest</span>
              </div>
              <span className="pipeline-arrow">➔</span>
              <div className="pipeline-node active-node">
                <i className="fas fa-brain" style={{ color: '#a855f7', marginBottom: 4, display: 'block' }}></i>
                <span>LLM Engine</span>
              </div>
              <span className="pipeline-arrow">➔</span>
              <div className="pipeline-node">
                <i className="fas fa-code" style={{ color: '#10b981', marginBottom: 4, display: 'block' }}></i>
                <span>JSON Validado</span>
              </div>
            </div>
          </div>
        );

      case 'graphs':
        return (
          <div className="story-visual-canvas">
            <div className="mockup-graphs">
              <div className="graph-nodes-art">
                <div className="graph-node-dot" style={{ top: 15, left: 10 }}></div>
                <div className="graph-node-dot" style={{ top: 60, left: 35 }}></div>
                <div className="graph-node-dot" style={{ top: 20, right: 15 }}></div>
                <div className="graph-node-dot" style={{ bottom: 10, right: 30 }}></div>
                <div className="graph-line" style={{ top: 22, left: 18, width: 70, transform: 'rotate(15deg)' }}></div>
                <div className="graph-line" style={{ top: 40, left: 30, width: 60, transform: 'rotate(-40deg)' }}></div>
                <div className="graph-line" style={{ top: 55, left: 45, width: 50, transform: 'rotate(35deg)' }}></div>
              </div>
              <div className="graph-stats">
                <div className="graph-stat-val">99.8%</div>
                <div className="graph-stat-lbl">Cumprimento de SLA</div>
                <div className="graph-stat-val" style={{ fontSize: '1rem', marginTop: 6, color: '#38bdf8' }}>
                  TSP Otimizado
                </div>
                <div className="graph-stat-lbl">Rotas de Campo</div>
              </div>
            </div>
          </div>
        );

      case 'designsystem':
      default:
        return (
          <div className="story-visual-canvas">
            <div className="mockup-designsystem">
              <div className="ds-tokens-row">
                <div className="ds-swatch" style={{ background: '#09090b', borderColor: '#3f3f46' }}></div>
                <div className="ds-swatch" style={{ background: '#27272a' }}></div>
                <div className="ds-swatch" style={{ background: '#71717a' }}></div>
                <div className="ds-swatch" style={{ background: '#ffffff' }}></div>
              </div>
              <div className="ds-info">
                <span>Design Tokens Monochrome • React 19 • i18n PT/EN</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projetos" className="projects-section">
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="projects-header">
        <span className="projects-badge">{t('projetos.badge')}</span>
        <h2 className="sec-title">{t('projetos.title')}</h2>
        <p className="sec-subtitle">{t('projetos.subtitle')}</p>
        <div className="stories-instruction-pill">
          <i className="fas fa-layer-group"></i>
          <span>{t('projetos.storyHint')}</span>
        </div>
      </div>

      {/* VIEWPORT DOS STORIES COM BOTÕES LATERAIS */}
      <div className="stories-viewport">
        {/* BOTÃO VOLTAR (À ESQUERDA) */}
        <button
          className="story-nav-btn story-nav-prev"
          onClick={prevStory}
          aria-label="Story anterior"
          title="Projeto anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* CONTAINER DO DECK 3D EMPILHADO (Estilo Stories / Desenho do Paint) */}
        <div
          className="stories-deck-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Array.isArray(stories) &&
            stories.map((story, idx) => {
              // Determina a posição de profundidade relativa ao card ativo
              let stackClass = 'stack-hidden-next';
              if (idx === activeIdx) {
                stackClass = 'stack-0'; // Ativo na frente
              } else if (idx === (activeIdx + 1) % totalStories) {
                stackClass = 'stack-1'; // Primeiro atrás
              } else if (idx === (activeIdx + 2) % totalStories) {
                stackClass = 'stack-2'; // Segundo atrás
              } else if (idx === (activeIdx + 3) % totalStories) {
                stackClass = 'stack-3'; // Terceiro atrás
              } else if (
                idx === (activeIdx - 1 + totalStories) % totalStories &&
                totalStories > 2
              ) {
                stackClass = 'stack-prev';
              }

              const isActive = idx === activeIdx;

              return (
                <div
                  key={story.id || idx}
                  className={`story-card ${stackClass}`}
                  aria-hidden={!isActive}
                >
                  {/* BARRINHAS DE PROGRESSO ESTILO INSTAGRAM NO TOPO */}
                  <div className="story-progress-bar">
                    {stories.map((_, pIdx) => {
                      let pClass = '';
                      if (pIdx < activeIdx) pClass = 'completed';
                      else if (pIdx === activeIdx) pClass = 'active';
                      return (
                        <div
                          key={pIdx}
                          className={`progress-segment ${pClass}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToStory(pIdx);
                          }}
                          title={`Ir para projeto ${pIdx + 1}`}
                        />
                      );
                    })}
                  </div>

                  {/* HEADER DO STORY (Avatar, Autor, Status e Contador) */}
                  <div className="story-top-header">
                    <div className="story-author-info">
                      <div className="story-avatar-ring">
                        <img
                          src="/favicon.svg"
                          alt="Aaron Nascimento"
                          className="story-avatar-img"
                        />
                      </div>
                      <div className="story-meta">
                        <span className="story-author-name">
                          {C.nome}
                          <i className="fas fa-check-circle story-verified-badge" title="Perfil Verificado"></i>
                        </span>
                        <span className="story-status-line">
                          <span
                            className="live-pulse-dot"
                            style={{
                              backgroundColor: story.indicatorColor || '#10b981',
                              boxShadow: `0 0 8px ${story.indicatorColor || '#10b981'}`
                            }}
                          ></span>
                          {story.status}
                        </span>
                      </div>
                    </div>
                    <span className="story-counter">
                      {String(idx + 1).padStart(2, '0')} / {String(totalStories).padStart(2, '0')}
                    </span>
                  </div>

                  {/* ZONAS DE TOQUE (Tap left = prev, Tap right = next) */}
                  {isActive && (
                    <>
                      <div
                        className="story-tap-zone-left"
                        onClick={prevStory}
                        title="Voltar story"
                      />
                      <div
                        className="story-tap-zone-right"
                        onClick={nextStory}
                        title="Próximo story"
                      />
                    </>
                  )}

                  {/* CORPO DO STORY */}
                  <div className="story-body">
                    {/* BADGE E TÍTULO DO PROJETO */}
                    <div className="story-project-badge-row">
                      <span
                        className="story-project-badge"
                        style={{ color: story.indicatorColor || '#10b981' }}
                      >
                        {story.badge}
                      </span>
                    </div>

                    <h3 className="story-project-title">{story.title}</h3>
                    <p className="story-project-tagline">{story.tagline}</p>

                    {/* MOCKUP VISUAL EXCLUSIVO */}
                    {renderVisualMockup(story)}

                    {/* BULLETS DE ENGENHARIA */}
                    {Array.isArray(story.bullets) && (
                      <ul className="story-bullets">
                        {story.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>
                            <span className="bullet-check">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* STACK DE TECNOLOGIAS */}
                    <div className="story-techs-row">
                      {Array.isArray(story.techs) &&
                        story.techs.map((techKey) => {
                          const icon = TECH_ICON_MAP[techKey];
                          if (!icon) return null;
                          return (
                            <img
                              key={techKey}
                              src={icon.src}
                              alt={icon.alt}
                              title={icon.alt}
                              className={`story-tech-icon ${
                                techKey === 'prisma' ? 'dark-invert-always' : ''
                              }`}
                            />
                          );
                        })}
                    </div>
                  </div>

                  {/* BOTÕES DE AÇÃO NO RODAPÉ DO STORY */}
                  <div className="story-actions-footer">
                    {story.demoLink ? (
                      <a
                        href={story.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="story-btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>{t('projetos.liveDemoBtn')}</span>
                      </a>
                    ) : (
                      <a
                        href={story.codeLink || ghProfileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="story-btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i>
                        <span>{t('projetos.repoBtn')}</span>
                      </a>
                    )}

                    <a
                      href={story.codeLink || ghProfileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="story-btn-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                      <span>{t('projetos.repoBtn')}</span>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* BOTÃO AVANÇAR (À DIREITA — CONFORME O DESENHO DO PAINT) */}
        <button
          className="story-nav-btn story-nav-next"
          onClick={nextStory}
          aria-label="Próximo story"
          title="Próximo projeto"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* SELETOR RÁPIDO DE STORIES (PILLS NO RODAPÉ) */}
      <div className="stories-pills-bar">
        {Array.isArray(stories) &&
          stories.map((story, pIdx) => (
            <button
              key={story.id || pIdx}
              className={`story-quick-pill ${pIdx === activeIdx ? 'active' : ''}`}
              onClick={() => goToStory(pIdx)}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  display: 'inline-block',
                  backgroundColor: story.indicatorColor || '#10b981'
                }}
              ></span>
              <span>{story.title}</span>
            </button>
          ))}
      </div>
    </section>
  );
}
