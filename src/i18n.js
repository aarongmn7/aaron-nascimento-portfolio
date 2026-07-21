import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      hero: {
        title: "Construtor de Produtos <br/>& Engenheiro de Software.",
        description: "Especialista no desenvolvimento de ecossistemas com Node.js, React e modelagem de bases de dados SQL. Traduzo regras de negócio complexas em sistemas escaláveis, combinando o rigor técnico exigido por Tech Leads à autonomia e visão comercial necessárias para estruturar e entregar aplicações completas de ponta a ponta.",
        btnSolutions: "Ver Soluções",
        btnContact: "Fale Comigo"
      },
      header: {
        nav: {
          home: "Início",
          about: "Sobre",
          skills: "Habilidades",
          projects: "Projetos",
          trajectory: "Trajetória",
          certifications: "Certificações"
        },
        contact: "Contato"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Product Builder <br/>& Software Engineer.",
        description: "Specialist in developing ecosystems with Node.js, React, and SQL database modeling. I translate complex business rules into scalable systems, combining the technical rigor demanded by Tech Leads with the autonomy and commercial vision required to structure and deliver complete end-to-end applications.",
        btnSolutions: "View Solutions",
        btnContact: "Contact Me"
      },
      header: {
        nav: {
          home: "Home",
          about: "About",
          skills: "Skills",
          projects: "Projects",
          trajectory: "Trajectory",
          certifications: "Certifications"
        },
        contact: "Contact"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
