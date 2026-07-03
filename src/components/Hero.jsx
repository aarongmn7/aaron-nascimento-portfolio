import React, { useState, useEffect, useRef } from 'react';
import '../styles/index.css';

const LOGS_STREAM = [
  { text: "[INFO] Inicializando servidor backend...", type: "log-info" },
  { text: "[INFO] Conectando ao banco de dados SQL... OK", type: "log-info" },
  { text: "[INFO] Sincronizando cluster Redis...", type: "log-info" },
  { text: "[DATA] Executando captura automatizada...", type: "log-warning" },
  { text: "[DATA] Varrendo endpoints da API externa...", type: "log-warning" },
  { text: "[DATA] 14.820 registros encontrados na fila.", type: "log-warning" },
  { text: "[SUCCESS] Bulk insert concluído com sucesso.", type: "log-success" },
  { text: "[IA] Orquestrando pipeline com LLM...", type: "log-ai" },
  { text: "[IA] Processando análise de sentimento...", type: "log-ai" },
  { text: "[SUCCESS] Triagem de dados finalizada.", type: "log-success" },
  { text: "[SEC] Checando tokens de autenticação...", type: "log-info" },
  { text: "[INFO] Disparando webhooks de integração...", type: "log-info" },
  { text: "[SUCCESS] Resposta 200 OK dos gateways.", type: "log-success" },
  { text: "[INFO] Otimizando container Docker...", type: "log-info" },
  { text: "[SUCCESS] Operação concluída sem gargalos.", type: "log-success" },
  { text: "[STATUS] Pipeline em execução. Aguardando...", type: "log-ai" }
];

export default function Hero() {
  // Evita o cold start: o terminal já inicia populado com os primeiros 8 logs
  const [visibleLogs, setVisibleLogs] = useState(LOGS_STREAM.slice(0, 8));
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    // O próximo log a ser inserido será o de índice 8
    let currentIndex = 8;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const nextLog = LOGS_STREAM[currentIndex];
        currentIndex = (currentIndex + 1) % LOGS_STREAM.length;

        // Limite aumentado para 18 para ocupar a altura vertical de 550px sem deixar buracos
        if (prev.length >= 18) {
          return [...prev.slice(1), nextLog];
        }
        return [...prev, nextLog];
      });
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="badge-status">
            <span className="dot-green"></span> Disponível para novos projetos
          </div>

          <h1>
            Prazer, sou <br />
            <span className="text-display">o Aaron</span>
          </h1>

          <p>
            Construo sistemas, aplicativos e automações sob medida para o seu negócio
            como desenvolvedor Full Stack. Crio soluções digitais completas e prontas
            para o mercado, cuidando de tudo — do banco de dados à tela do usuário.
            <br /><br />
            <strong>Role a página para baixo para conhecer meus projetos, minha trajetória ou entrar em contato.</strong>
          </p>

          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">Ver Soluções</a>
            <a href="#contato" className="btn-secondary">Fale Comigo</a>
          </div>

          <div className="hero-metrics">
            <div className="stat-item">
              <h3>5+ Projetos</h3>
              <p>No meu GitHub</p>
            </div>
            <div className="stat-item">
              <h3>Full Stack</h3>
              <p>Soluções Completas</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Entrega e Dedicação</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">automacao_de_processos</span>
            </div>
            <div className="terminal-body" ref={terminalBodyRef}>
              {visibleLogs.map((log, index) => (
                <p key={index} className={log.type}>{log.text}</p>
              ))}
              <span className="terminal-cursor">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}