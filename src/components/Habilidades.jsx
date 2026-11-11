import React from 'react';
import { useTranslation } from 'react-i18next';
import './Habilidades.css';

// ESTEIRA 1: CORE DEV & ENGENHARIA DE SOFTWARE
const TRACK_1_ITEMS = [
  { name: 'React 19', icon: '/react.png', tag: 'Front-End' },
  { name: 'Node.js', icon: '/nodejs.png', tag: 'Back-End' },
  { name: 'TypeScript', icon: '/typescript.png', tag: 'Language' },
  { name: 'PostgreSQL', icon: '/postgresql.png', tag: 'Database' },
  { name: 'Next.js', icon: '/nextjs.png', tag: 'Full Stack' },
  { name: 'Python', icon: '/python.png', tag: 'Language' },
  { name: 'Prisma ORM', icon: '/prisma.svg', tag: 'ORM', invert: true },
  { name: 'Express.js', icon: '/express.png', tag: 'REST API' },
  { name: 'Tailwind CSS', icon: '/tailwind.png', tag: 'Styling' },
  { name: 'GitHub Actions', icon: '/githubactions.svg', tag: 'CI/CD' },
  { name: 'JavaScript ES6+', icon: '/javascript.png', tag: 'Core' },
  { name: 'Vite', icon: '/vite.png', tag: 'Tooling' }
];

// ESTEIRA 2: IA, INFRAESTRUTURA, QA & REDES
const TRACK_2_ITEMS = [
  { name: 'Claude Code', icon: '/claude.png', tag: 'Agentic AI' },
  { name: 'Cursor IDE', icon: '/cursor.png', tag: 'AI Editor' },
  { name: 'Orca ADE', icon: '/orca.png', tag: 'orca.dev' },
  { name: 'Google Antigravity', icon: '/antigravity.png', tag: 'AI Agents' },
  { name: 'Docker', icon: '/docker.png', tag: 'Containers' },
  { name: 'Linux & Terminal', icon: '/linux.svg', tag: 'Infra' },
  { name: 'Microsoft Azure', icon: '/azure.svg', tag: 'AI-900' },
  { name: 'Git & GitHub', icon: '/git.png', tag: 'Version Control' },
  { name: 'LLM APIs & Prompts', icon: '/langchain.png', tag: 'Engineering' },
  { name: 'Firewall & Redes', iconFont: 'fas fa-shield-alt', tag: 'Segurança' },
  { name: 'QA Testing & Bugs', iconFont: 'fas fa-vial', tag: 'Qualidade' },
  { name: 'Figma Prototyping', icon: '/figma.png', tag: 'UI/UX' }
];

export default function Habilidades() {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">

        {/* CABEÇALHO DA SEÇÃO */}
        <div className="skills-header">
          <span className="skills-badge">{t('habilidades.badge')}</span>
          <h2>{t('habilidades.title')}</h2>
          <p>{t('habilidades.subtitle')}</p>
          <div className="skills-status-pill">
            <span className="skills-pulse-dot"></span>
            <span>{t('habilidades.statusPulse')}</span>
          </div>
        </div>

        {/* CONJUNTO DE ESTEIRAS INFINITAS AUTÔNOMAS */}
        <div className="marquee-stream-wrapper">

          {/* ESTEIRA 1 (DIREITA PARA ESQUERDA) */}
          <div className="marquee-track-label">
            <span>{t('habilidades.track1Label')}</span>
            <span className="track-line"></span>
          </div>
          <div className="marquee-row marquee-left">
            <div className="marquee-inner">
              {/* Cópia 1 */}
              {TRACK_1_ITEMS.map((item, idx) => (
                <div key={`t1-a-${idx}`} className="tech-capsule">
                  <div className="capsule-icon-wrap">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={item.invert ? 'dark-invert-always' : ''}
                      />
                    ) : (
                      <i className={item.iconFont} style={{ color: '#10b981', fontSize: '1rem' }}></i>
                    )}
                  </div>
                  <span className="capsule-name">{item.name}</span>
                  <span className="capsule-tag">{item.tag}</span>
                </div>
              ))}
              {/* Cópia 2 (Loop contínuo imperceptível) */}
              {TRACK_1_ITEMS.map((item, idx) => (
                <div key={`t1-b-${idx}`} className="tech-capsule" aria-hidden="true">
                  <div className="capsule-icon-wrap">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={item.invert ? 'dark-invert-always' : ''}
                      />
                    ) : (
                      <i className={item.iconFont} style={{ color: '#10b981', fontSize: '1rem' }}></i>
                    )}
                  </div>
                  <span className="capsule-name">{item.name}</span>
                  <span className="capsule-tag">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ESTEIRA 2 (ESQUERDA PARA DIREITA) */}
          <div className="marquee-track-label" style={{ marginTop: '16px' }}>
            <span>{t('habilidades.track2Label')}</span>
            <span className="track-line"></span>
          </div>
          <div className="marquee-row marquee-right">
            <div className="marquee-inner">
              {/* Cópia 1 */}
              {TRACK_2_ITEMS.map((item, idx) => (
                <div key={`t2-a-${idx}`} className="tech-capsule">
                  <div className="capsule-icon-wrap">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={item.invert ? 'dark-invert-always' : ''}
                      />
                    ) : (
                      <i className={item.iconFont} style={{ color: '#38bdf8', fontSize: '1rem' }}></i>
                    )}
                  </div>
                  <span className="capsule-name">{item.name}</span>
                  <span className="capsule-tag">{item.tag}</span>
                </div>
              ))}
              {/* Cópia 2 (Loop contínuo imperceptível) */}
              {TRACK_2_ITEMS.map((item, idx) => (
                <div key={`t2-b-${idx}`} className="tech-capsule" aria-hidden="true">
                  <div className="capsule-icon-wrap">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={item.invert ? 'dark-invert-always' : ''}
                      />
                    ) : (
                      <i className={item.iconFont} style={{ color: '#38bdf8', fontSize: '1rem' }}></i>
                    )}
                  </div>
                  <span className="capsule-name">{item.name}</span>
                  <span className="capsule-tag">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* NOTA DE RODAPÉ */}
        <div className="skills-footer-note">
          <p>{t('habilidades.footer')}</p>
        </div>

      </div>
    </section>
  );
}
