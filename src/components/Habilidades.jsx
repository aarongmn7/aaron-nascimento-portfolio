import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.css';

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
        </div>

        {/* GRADE DE COLUNAS */}
        <div className="skills-grid-premium">

          {/* COLUNA 01 - FRONT-END */}
          <div className="skills-column">
            <div className="column-num">01</div>
            <h3>{t('habilidades.col1Title')}</h3>
            <ul>
              <li>
                <img src="/javascript.png" alt="JavaScript" className="tech-icon" />
                <img src="/typescript.png" alt="TypeScript" className="tech-icon" style={{ marginLeft: '-8px', position: 'relative', zIndex: 2 }} />
                <span style={{ marginLeft: '4px' }}>JavaScript & TypeScript</span>
              </li>
              <li>
                <img src="/react.png" alt="React" className="tech-icon" />
                <img src="/nextjs.png" alt="Next.js" className="tech-icon" style={{ marginLeft: '-8px', position: 'relative', zIndex: 2 }} />
                <span style={{ marginLeft: '4px' }}>React.js & Next.js</span>
              </li>
              <li><img src="/tailwind.png" alt="Tailwind CSS" className="tech-icon" /> <span>Tailwind CSS & CSS3</span></li>
              <li><img src="/vite.png" alt="Vite" className="tech-icon" /> <span>Vite & HTML5</span></li>
            </ul>
          </div>

          {/* COLUNA 02 - BACK-END & DADOS */}
          <div className="skills-column">
            <div className="column-num">02</div>
            <h3>{t('habilidades.col2Title')}</h3>
            <ul>
              <li><img src="/nodejs.png" alt="Node.js" className="tech-icon" /> Node.js & REST APIs</li>
              <li><img src="/express.png" alt="Express" className="tech-icon" /> Express</li>
              <li><img src="/postgresql.png" alt="PostgreSQL" className="tech-icon" /> PostgreSQL & SQL</li>
              <li><img src="/prisma.svg" alt="Prisma ORM" className="tech-icon" /> Prisma ORM</li>
            </ul>
          </div>

          {/* COLUNA 03 - INFRA, QA & DEPLOY */}
          <div className="skills-column">
            <div className="column-num">03</div>
            <h3>{t('habilidades.col3Title')}</h3>
            <ul>
              <li><img src="/docker.png" alt="Docker" className="tech-icon" /> Docker & Containers</li>
              <li><img src="/git.png" alt="Git" className="tech-icon" /> Git, GitHub & QA Testing</li>
              <li><img src="/aws.png" alt="Redes & Cloud" className="tech-icon" /> Firewall, Redes & Azure</li>
              <li><img src="/vercel.png" alt="Vercel" className="tech-icon" /> Deploy & Linux</li>
            </ul>
          </div>

          {/* COLUNA 04 - IA & AUTOMAÇÃO */}
          <div className="skills-column">
            <div className="column-num">04</div>
            <h3>{t('habilidades.col4Title')}</h3>
            <ul>
              <li><img src="/claude.png" alt="Claude Code" className="tech-icon" /> Claude Code / Agentic</li>
              <li>
                <img src="/cursor.png" alt="Cursor" className="tech-icon" />
                <img src="/antigravity.png" alt="Antigravity" className="tech-icon" style={{ marginLeft: '-8px', position: 'relative', zIndex: 2 }} />
                <span style={{ marginLeft: '4px' }}>Cursor & Antigravity IDE</span>
              </li>
              <li><img src="/python.png" alt="Python" className="tech-icon" /> Python Automation</li>
              <li><img src="/langchain.png" alt="LLM APIs" className="tech-icon" /> Prompt Eng. & LLM APIs</li>
            </ul>
          </div>

          {/* COLUNA 05 - DESIGN & PRODUTO */}
          <div className="skills-column">
            <div className="column-num">05</div>
            <h3>{t('habilidades.col5Title')}</h3>
            <ul>
              <li><img src="/figma.png" alt="Figma" className="tech-icon" /> Figma</li>
              <li><img src="/claude.png" alt="Claude Design" className="tech-icon" /> Design Systems</li>
              <li><img src="/stitch.png" alt="Stitch IA" className="tech-icon" /> Stitch IA</li>
              <li><img src="/uiux.svg" alt="UI/UX Prototyping" className="tech-icon" /> UI/UX Prototyping</li>
            </ul>
          </div>

        </div>

        {/* NOTA DE RODAPÉ */}
        <div className="skills-footer">
          <span className="footer-line"></span>
          <p>{t('habilidades.footer')}</p>
        </div>

      </div>
    </section>
  );
}
