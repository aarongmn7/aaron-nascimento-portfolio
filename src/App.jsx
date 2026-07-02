import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Trajetoria from './components/Trajetoria';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  // Intersection Observer para animações de fade in (fi)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
        }
      });
    }, { threshold: 0.08 });
    
    // Observers só são ativados após um pequeno delay para garantir que o DOM renderizou
    setTimeout(() => {
      document.querySelectorAll('.fi').forEach(el => obs.observe(el));
    }, 100);
    
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Trajetoria />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
