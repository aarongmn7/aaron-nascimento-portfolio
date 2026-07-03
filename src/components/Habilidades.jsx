import React from 'react';
import '../styles/index.css';

export default function Habilidades() {
  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">

        {/* CABEÇALHO DA SEÇÃO */}
        <div className="skills-header">
          <span className="skills-badge">STACK & FERRAMENTAS</span>
          <h2>O que eu uso para construir.</h2>
          <p>Ferramentas e tecnologias que utilizo no dia a dia para entregar projetos ágeis, robustos e prontos para o mercado.</p>
        </div>

        {/* GRADE DE COLUNAS */}
        <div className="skills-grid-premium">

          {/* COLUNA 01 */}
          <div className="skills-column">
            <div className="column-num">01</div>
            <h3>FRONT-END</h3>
            <ul>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="tech-icon" />
                JavaScript (ES6+)
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
                React.js
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="tech-icon" />
                Tailwind CSS
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="tech-icon" />
                HTML5 / CSS3
              </li>
            </ul>
          </div>

          {/* COLUNA 02 */}
          <div className="skills-column">
            <div className="column-num">02</div>
            <h3>BACK-END & BANCO</h3>
            <ul>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="tech-icon" />
                Node.js
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="tech-icon dark-invert" />
                Express
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres" className="tech-icon" />
                PostgreSQL
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" alt="Prisma" className="tech-icon dark-invert" />
                Prisma ORM
              </li>
            </ul>
          </div>

          {/* COLUNA 03 */}
          <div className="skills-column">
            <div className="column-num">03</div>
            <h3>DEPLOY & INFRA</h3>
            <ul>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="tech-icon" />
                Docker
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="tech-icon" />
                Cloud AWS
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tech-icon" />
                Git / GitHub
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" alt="API" className="tech-icon" />
                APIs RESTful
              </li>
            </ul>
          </div>

          {/* COLUNA 04 - IA & ENGENHARIA AVANÇADA */}
          <div className="skills-column">
            <div className="column-num">04</div>
            <h3>IA & PRODUTIVIDADE</h3>
            <ul>
              {/* CLAUDE CODE */}
              <li>
                <svg className="tech-icon dark-invert" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Claude Code / Agentic
              </li>

              {/* CURSOR / ANTIGRAVITY */}
              <li>
                <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 3.5L10.5 20.5L13.5 13.5L20.5 10.5L4.5 3.5Z" fill="#38bdf8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Cursor / Antigravity IDE
              </li>

              {/* ENGENHARIA DE PROMPTS */}
              <li>
                <svg className="tech-icon dark-invert" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5C4.5 16.5 7.5 13.5 12 13.5C16.5 13.5 19.5 16.5 19.5 16.5M12 3V9M12 9L9 6M12 9L15 6M6 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Engenharia de Prompts
              </li>

              {/* LANGCHAIN / AGENTES */}
              <li>
                <svg className="tech-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#a855f7" strokeWidth="2" />
                  <path d="M12 6V12L16 14" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                </svg>
                LangChain & Agentes IA
              </li>
            </ul>
          </div>

        </div>

        {/* NOTA DE RODAPÉ */}
        <div className="skills-footer">
          <span className="footer-line"></span>
          <p>Aberto a novas ferramentas conforme a necessidade estratégica do seu projeto.</p>
        </div>

      </div>
    </section>
  );
}