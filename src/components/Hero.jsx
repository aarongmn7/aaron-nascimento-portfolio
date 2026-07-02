import React from 'react';
import '../styles/index.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="badge-status">
            <span className="dot-green"></span> Disponível para novos projetos
          </div>
          <h1>Desenvolvo soluções e inovações através de sistemas sob medida para o seu negócio.</h1>
          <p>
            Sou o Aaron Nascimento. Crio softwares, aplicativos e ferramentas personalizadas que 
            resolvem os gargalos da sua empresa ou colocam a sua nova ideia direto no mercado. 
            Eu cuido de toda a construção tecnológica, do início ao fim, para você receber uma 
            solução pronta, intuitiva e que gera resultados reais. <strong>Se quiser conhecer mais 
            sobre o meu trabalho ou entrar em contato para fecharmos uma parceria, basta rolar a 
            página para baixo.</strong>
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">Ver Soluções</a>
            <a href="#contato" className="btn-secondary">Fale Comigo</a>
          </div>
          <div className="hero-metrics">
            <div className="stat-item">
              <h3>Python & IA</h3>
              <p>Core Stack</p>
            </div>
            <div className="stat-item">
              <h3>Eficiência</h3>
              <p>Foco em Performance</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Soluções Reais</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">automation_pipeline.py</span>
            </div>
            <div className="terminal-body">
              <p className="log-info">[INFO] Inicializando sistema de monitoramento...</p>
              <p className="log-info">[INFO] Conectando ao banco de dados relacional... OK</p>
              <p className="log-warning">[DATA] Capturando 14.820 registros pendentes...</p>
              <p className="log-ai">[IA] Processando triagem e análise de dados com LLM... OK</p>
              <p className="log-success">[SUCESSO] Relatório exportado. 4 hours de trabalho manual economizadas.</p>
              <span className="terminal-cursor">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
