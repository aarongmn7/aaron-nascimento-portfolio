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
  git: { src: '/git.png', alt: 'Git' }
};

export default function Projetos() {
  const { t } = useTranslation();
  const stories = t('projetos.stories', { returnObjects: true }) || [];
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(null);
  const ghProfileUrl = `https://github.com/${C.githubUser}`;
  const avatarUrl = '/aaron-github.png';

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
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight') nextStory();
      if (e.key === 'ArrowLeft') prevStory();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalStories]);

  // GESTOS TOUCH (Swipe em dispositivos mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextStory();
      } else {
        prevStory();
      }
    }
    touchStartX.current = null;
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
          aria-label="Projeto anterior"
          title="Projeto anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* CONTAINER DO DECK 3D EMPILHADO (Stories de Instagram) */}
        <div
          className="stories-deck-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Array.isArray(stories) &&
            stories.map((story, idx) => {
              let stackClass = 'stack-hidden-next';
              if (idx === activeIdx) {
                stackClass = 'stack-0';
              } else if (idx === (activeIdx + 1) % totalStories) {
                stackClass = 'stack-1';
              } else if (idx === (activeIdx + 2) % totalStories) {
                stackClass = 'stack-2';
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

                  {/* HEADER DO STORY COM FOTO REAL DO GITHUB DE AARON */}
                  <div className="story-top-header">
                    <div className="story-author-info">
                      <div className="story-avatar-ring">
                        <img
                          src={avatarUrl}
                          onError={(e) => {
                            e.currentTarget.src = `https://github.com/${C.githubUser}.png`;
                          }}
                          alt={C.nome}
                          className="story-avatar-img"
                        />
                      </div>
                      <div className="story-meta">
                        <span className="story-author-name">
                          {C.nome}
                          <i
                            className="fas fa-check-circle story-verified-badge"
                            title="Desenvolvedor Verificado"
                          ></i>
                        </span>
                        <span className="story-status-line">
                          <span
                            className="live-pulse-dot"
                            style={{
                              backgroundColor: story.indicatorColor || '#10b981',
                              boxShadow: `0 0 8px ${story.indicatorColor || '#10b981'}`
                            }}
                          ></span>
                          <strong>{story.status}</strong>
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

                  {/* CORPO DO STORY COM O PRINT EM DESTAQUE */}
                  <div className="story-body">
                    {/* BADGE E TÍTULO */}
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

                    {/* PRINT REAL DA TELA DO PROJETO */}
                    <div className="story-print-frame">
                      <div className="print-browser-bar">
                        <div className="print-dots">
                          <span className="pdot dot-red"></span>
                          <span className="pdot dot-yellow"></span>
                          <span className="pdot dot-green"></span>
                        </div>
                        <span className="print-url-pill">
                          {story.id === 'radar-vagas'
                            ? 'aaron.dev.br/radar'
                            : story.id === 'mini-erp'
                            ? 'localhost:3000/erp'
                            : 'servicedesk.local/kanban'}
                        </span>
                      </div>

                      <div className="print-image-wrapper">
                        <img
                          src={story.printSrc}
                          alt={story.printAlt || story.title}
                          className="story-print-img"
                          loading="lazy"
                        />
                      </div>
                    </div>

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
          aria-label="Próximo projeto"
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
                  width: 8,
                  height: 8,
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
