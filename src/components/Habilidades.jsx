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
                <img src="/javascript.png" alt="JavaScript" className="tech-icon" />
                JavaScript (ES6+)
              </li>
              <li>
                <img src="/react.png" alt="React.js" className="tech-icon" />
                React.js
              </li>
              <li>
                <img src="/tailwind.png" alt="Tailwind CSS" className="tech-icon" />
                Tailwind CSS
              </li>
              <li>
                <img src="/html5.png" alt="HTML5 / CSS3" className="tech-icon" />
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
                <img src="/nodejs.png" alt="Node.js" className="tech-icon" />
                Node.js
              </li>
              <li>
                <img src="/express.png" alt="Express" className="tech-icon" />
                Express
              </li>
              <li>
                <img src="/postgresql.png" alt="PostgreSQL" className="tech-icon" />
                PostgreSQL
              </li>
              <li>
                <img src="/prisma.png" alt="Prisma ORM" className="tech-icon" />
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
                <img src="/docker.png" alt="Docker" className="tech-icon" />
                Docker
              </li>
              <li>
                <img src="/aws.png" alt="Cloud AWS" className="tech-icon" />
                Cloud AWS
              </li>
              <li>
                <img src="/git.png" alt="Git / GitHub" className="tech-icon" />
                Git / GitHub
              </li>
              <li>
                <img src="/api.png" alt="APIs RESTful" className="tech-icon" />
                APIs RESTful
              </li>
            </ul>
          </div>

          {/* COLUNA 04 */}
          <div className="skills-column">
            <div className="column-num">04</div>
            <h3>IA & PRODUTIVIDADE</h3>
            <ul>
              <li>
                <img src="/claude.png" alt="Claude Code" className="tech-icon" />
                Claude Code / Agentic
              </li>
              <li>
                <img src="/cursor.png" alt="Cursor" className="tech-icon" />
                Cursor / Antigravity IDE
              </li>
              <li>
                <img src="/prompt.png" alt="Engenharia de Prompts" className="tech-icon" />
                Engenharia de Prompts
              </li>
              <li>
                <img src="/langchain.png" alt="LangChain" className="tech-icon" />
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