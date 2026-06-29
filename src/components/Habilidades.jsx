import React from 'react';

export default function Habilidades() {
  return (
    <section id="habilidades" className="fi">
      <h2 className="sec-title">Habilidades</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3><i className="fas fa-server"></i> Backend & Banco</h3>
          <div className="stags">
            <span className="stag">Node.js</span>
            <span className="stag">Express</span>
            <span className="stag">Prisma ORM</span>
            <span className="stag">PostgreSQL</span>
            <span className="stag">Jest / Supertest (QA)</span>
            <span className="stag">REST APIs</span>
          </div>
        </div>
        <div className="skill-card">
          <h3><i className="fas fa-desktop"></i> Frontend & Mobile</h3>
          <div className="stags">
            <span className="stag">JavaScript (ES6+)</span>
            <span className="stag">React</span>
            <span className="stag">Tailwind CSS</span>
            <span className="stag">HTML5 / CSS3</span>
            <span className="stag">React Native</span>
          </div>
        </div>
        <div className="skill-card">
          <h3><i className="fas fa-tools"></i> Engenharia & Práticas</h3>
          <div className="stags">
            <span className="stag">Clean Architecture</span>
            <span className="stag">Engenharia de Prompts (IA)</span>
            <span className="stag">Testes E2E</span>
            <span className="stag">POO</span>
            <span className="stag">Modelagem Relacional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
