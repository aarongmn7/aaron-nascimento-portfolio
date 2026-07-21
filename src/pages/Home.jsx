import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import Trajetoria from '../components/Trajetoria';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

function Home({ theme, toggleTheme }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        }
      });
    }, { threshold: 0.08 });

    // Seleciona todos os elementos com a classe .fi
    const elements = document.querySelectorAll('.fi');
    elements.forEach((el) => observer.observe(el));

    // Cleanup: desconecta o observer quando o usuário mudar de rota
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="feed-container">
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Trajetoria />
        <Contato />
        <Footer />
      </main>
    </>
  );
}

export default Home;
