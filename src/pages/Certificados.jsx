import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { C } from '../config';

function Certificados({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const certificados = t('certificados.items', { returnObjects: true }) || [];
  const linkedinCertsUrl = `https://www.linkedin.com/in/${C.linkedinUser}/details/certifications/`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        }
      });
    }, { threshold: 0.08 });

    const elements = document.querySelectorAll('.fi');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main style={{ padding: '4rem 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
        <Link to="/" style={{ 
          display: 'inline-block', 
          marginBottom: '2rem', 
          color: 'var(--text-primary)', 
          textDecoration: 'none',
          fontWeight: '600',
          fontFamily: 'var(--mono)',
          fontSize: '0.9rem'
        }}>
          {t('certificados.backBtn')}
        </Link>
        
        <h1 className="sec-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>
          {t('certificados.title')}
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', fontSize: '1.05rem' }}>
          {t('certificados.subtitle')}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {Array.isArray(certificados) && certificados.map(cert => (
            <div key={cert.id} style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
            className="cert-card fi on"
            >
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-secondary)',
                marginBottom: '0.75rem'
              }}>
                {cert.categoria}
              </span>
              <h3 style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '0.75rem',
                fontSize: '1.15rem',
                lineHeight: '1.35'
              }}>
                {cert.titulo}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '1.75rem',
                fontSize: '0.9rem'
              }}>
                {cert.instituicao}
              </p>
              
              <a 
                href={linkedinCertsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  marginTop: 'auto',
                  display: 'inline-block',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '4px',
                  width: 'fit-content'
                }}
              >
                {t('certificados.viewBtn')}
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Certificados;
