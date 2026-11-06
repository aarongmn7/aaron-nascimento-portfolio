import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.css';

const LOGS_STREAM = [
  { text: "[INFO] Inicializando servidor backend Node.js...", type: "log-info" },
  { text: "[INFO] Conectando ao banco PostgreSQL... OK", type: "log-info" },
  { text: "[INFO] Validando schema Prisma ORM...", type: "log-info" },
  { text: "[DATA] Executando captura automatizada...", type: "log-warning" },
  { text: "[DATA] Varrendo endpoints da API REST...", type: "log-warning" },
  { text: "[DATA] 14.820 registros validados na fila.", type: "log-warning" },
  { text: "[SUCCESS] Transação SQL concluída com sucesso.", type: "log-success" },
  { text: "[IA] Orquestrando pipeline de extração LLM...", type: "log-ai" },
  { text: "[IA] Estruturando payload JSON validado...", type: "log-ai" },
  { text: "[SUCCESS] Triagem de dados e SLA finalizada.", type: "log-success" },
  { text: "[SEC] Checando políticas RBAC e Firewall...", type: "log-info" },
  { text: "[INFO] Disparando webhooks de integração...", type: "log-info" },
  { text: "[SUCCESS] Resposta 200 OK dos serviços.", type: "log-success" },
  { text: "[INFO] Verificando container Docker...", type: "log-info" },
  { text: "[SUCCESS] Operação concluída sem gargalos.", type: "log-success" },
  { text: "[STATUS] Pipeline ativo. Monitorando...", type: "log-ai" }
];

export default function Hero() {
  const { t } = useTranslation();
  const [visibleLogs, setVisibleLogs] = useState(LOGS_STREAM.slice(0, 8));
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    let currentIndex = 8;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const nextLog = LOGS_STREAM[currentIndex];
        currentIndex = (currentIndex + 1) % LOGS_STREAM.length;

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
    <section id="hero" className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div
            style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' }}
            id="heroName"
          >
            Aaron Nascimento
          </div>

          <h1
            className="hero-title"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />

          <p className="hero-desc">
            {t('hero.description')}
          </p>

          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">{t('hero.btnSolutions')}</a>
            <a href="#contato" className="btn-secondary">{t('hero.btnContact')}</a>
          </div>

          <div className="hero-metrics">
            <div className="stat-item">
              <h3>{t('hero.metrics.m1Title')}</h3>
              <p>{t('hero.metrics.m1Desc')}</p>
            </div>
            <div className="stat-item">
              <h3>{t('hero.metrics.m2Title')}</h3>
              <p>{t('hero.metrics.m2Desc')}</p>
            </div>
            <div className="stat-item">
              <h3>{t('hero.metrics.m3Title')}</h3>
              <p>{t('hero.metrics.m3Desc')}</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">{t('hero.terminalTitle')}</span>
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
