import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Certificados({ theme, toggleTheme }) {
  useEffect(() => {
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

  const certificados = [
    {
      id: 1,
      titulo: 'Certificação Frontend Developer',
      instituicao: 'Rocketseat',
      data: 'Maio, 2023',
      link: '#'
    },
    {
      id: 2,
      titulo: 'React Avançado',
      instituicao: 'Udemy',
      data: 'Agosto, 2023',
      link: '#'
    },
    {
      id: 3,
      titulo: 'UX/UI Design Foundations',
      instituicao: 'Coursera',
      data: 'Novembro, 2023',
      link: '#'
    }
  ];

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main style={{ padding: '8rem 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
        <Link to="/" style={{ 
          display: 'inline-block', 
          marginBottom: '2rem', 
          color: 'var(--accent-color)', 
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          &larr; Voltar para o Portfólio
        </Link>
        
        <h1 className="sec-title" style={{ marginBottom: '3rem', textAlign: 'left' }}>
          Licenças e Certificações
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {certificados.map(cert => (
            <div key={cert.id} style={{
              backgroundColor: 'var(--bg-cards)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
            className="cert-card fi"
            >
              <h3 style={{ 
                color: 'var(--text-color)', 
                marginBottom: '1rem',
                fontSize: '1.25rem'
              }}>
                {cert.titulo}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '0.5rem',
                fontSize: '0.9rem'
              }}>
                {cert.instituicao}
              </p>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '2rem',
                fontSize: '0.9rem',
                opacity: 0.8
              }}>
                {cert.data}
              </p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  marginTop: 'auto',
                  display: 'inline-block',
                  color: 'var(--accent-color)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                Ver Credencial &uarr;
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
