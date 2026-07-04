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

          {/* COLUNA 01 - FRONT-END (UNIFICADA COM EFEITO STACK) */}
          <div className="skills-column">
            <div className="column-num">01</div>
            <h3>FRONT-END</h3>
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
              <li>
                <img src="/tailwind.png" alt="Tailwind CSS" className="tech-icon" />
                <span>Tailwind CSS</span>
              </li>
              <li>
                <img src="/vite.png" alt="Vite" className="tech-icon" />
                <span>Vite</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 02 */}
          <div className="skills-column">
            <div className="column-num">02</div>
            <h3>BACK-END & BANCO</h3>
            <ul>
              <li><img src="/nodejs.png" alt="Node.js" className="tech-icon" /> Node.js</li>
              <li><img src="/express.png" alt="Express" className="tech-icon" /> Express</li>
              <li><img src="/postgresql.png" alt="PostgreSQL" className="tech-icon" /> PostgreSQL</li>
              <li><img src="/prisma.png" alt="Prisma ORM" className="tech-icon" /> Prisma ORM</li>
            </ul>
          </div>

          {/* COLUNA 03 */}
          <div className="skills-column">
            <div className="column-num">03</div>
            <h3>DEPLOY & INFRA</h3>
            <ul>
              <li><img src="/Vercel.png" alt="Vercel" className="tech-icon" /> Vercel</li>
              <li><img src="/docker.png" alt="Docker" className="tech-icon" /> Docker & Kubernetes</li>
              <li><img src="/aws.png" alt="AWS" className="tech-icon" /> Multi-Cloud (AWS/Azure)</li>
              <li><img src="/git.png" alt="Git" className="tech-icon" /> Git / GitHub</li>
              <li><img src="/api.png" alt="APIs" className="tech-icon" /> APIs RESTful</li>
            </ul>
          </div>

          {/* COLUNA 04 */}
          <div className="skills-column">
            <div className="column-num">04</div>
            <h3>IA & Ferramentas</h3>
            <ul>
              <li><img src="/claude.png" alt="Claude Code" className="tech-icon" /> Claude Code / Agentic</li>
              <li><img src="/cursor.png" alt="Cursor" className="tech-icon" /> Cursor IDE</li>
              <li><img src="/python.png" alt="Python" className="tech-icon" /> Python Automation</li>
              <li><img src="/langchain.png" alt="LangChain" className="tech-icon" /> LangChain & Agentes</li>
            </ul>
          </div>

          {/* COLUNA 05 */}
          <div className="skills-column">
            <div className="column-num">05</div>
            <h3>DESIGN</h3>
            <ul>
              <li><img src="/figma.png" alt="Figma" className="tech-icon" /> Figma</li>
              <li><img src="/claude.png" alt="Claude Design" className="tech-icon" /> Claude Design</li>
              <li><img src="/stitch.png" alt="Stitch IA" className="tech-icon" /> Stitch IA</li>
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