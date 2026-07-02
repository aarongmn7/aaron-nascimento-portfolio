import React, { useState, useEffect, useRef } from 'react';
import '../styles/index.css';

// Lista expandida de logs para dar volume e densidade visual
const LOGS_STREAM = [
  { text: "[INFO] Inicializando sistema de automação...", type: "log-info" },
  { text: "[INFO] Conectando ao banco de dados relacional... OK", type: "log-info" },
  { text: "[DATA] Varrendo tabelas em busca de gargalos operacionais...", type: "log-warning" },
  { text: "[DATA] Capturando registros pendentes: 14.820 encontrados.", type: "log-warning" },
  { text: "[IA] Processando triagem e análise de dados com LLM...", type: "log-ai" },
  { text: "[IA] Otimizando fluxos de requisições de ponta a ponta... OK", type: "log-ai" },
  { text: "[SUCCESS] Relatório exportado. 4 horas de trabalho economizadas.", type: "log-success" },
  { text: "[SEC] Executando varredura preventiva de segurança nos endpoints...", type: "log-info" },
  { text: "[CACHE] Atualizando instâncias e limpando indexações... OK", type: "log-success" },
  { text: "[INFO] Sincronizando logs com o painel de controle externo...", type: "log-info" },
  { text: "[STATUS] Ciclo concluído. Reiniciando rotina de monitoramento...", type: "log-ai" }
];

export default function Hero() {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const terminalBodyRef = useRef(null);

  // Efeito para alimentar os logs continuamente
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const nextLog = LOGS_STREAM[currentIndex];
        currentIndex = (currentIndex + 1) % LOGS_STREAM.length;

        // Limita o máximo de linhas na tela para proteger a memória do navegador
        // 16 linhas preenchem perfeitamente uma caixa de 550px sem sobrar buraco
        if (prev.length >= 16) {
          return [...prev.slice(1), nextLog]; // Remove a primeira do topo e põe a nova embaixo
        }
        return [...prev, nextLog];
      });
    }, 1000); // Velocidade ideal de 1 segundo por linha para parecer que está processando

    return () => clearInterval(interval);
  }, []);

  // Efeito mágico para rolar o terminal para baixo automaticamente a cada nova linha
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
            <span className="text-gradient">AARON</span>
          </h1>

          <p>
            Sou o Aaron Nascimento. Construo sistemas, aplicativos e automações sob medida
            para o seu negócio como desenvolvedor Full Stack. Crio soluções digitais completas
            e prontas para o mercado, cuidando de tudo — do banco de dados à tela do usuário.
            <br /><br />
            <strong>Role a página para baixo para conhecer meus projetos ou entrar em contato.</strong>
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
              <span className="terminal-title">automation_pipeline.py</span>
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