import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.css';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const logsStream = t('hero.logs', { returnObjects: true });
  const logs = Array.isArray(logsStream) ? logsStream : [];
  const [visibleLogs, setVisibleLogs] = useState(() => logs.slice(0, 8));
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    setVisibleLogs(logs.slice(0, 8));
    if (logs.length === 0) return;

    let currentIndex = Math.min(8, logs.length);

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const nextLog = logs[currentIndex % logs.length];
        currentIndex = (currentIndex + 1) % logs.length;

        if (prev.length >= 18) {
          return [...prev.slice(1), nextLog];
        }
        return [...prev, nextLog];
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [i18n.language]);

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
