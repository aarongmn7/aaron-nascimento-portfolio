import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
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
      },
      hero: {
        title: "Construtor de Produtos <br/>& Engenheiro de Software.",
        description: "Especialista no desenvolvimento de ecossistemas com Node.js, React, TypeScript e modelagem de bases de dados SQL. Traduzo regras de negócio complexas em sistemas escaláveis, combinando rigor técnico, arquitetura limpa e desenvolvimento assistido por IA para entregar aplicações completas de ponta a ponta.",
        btnSolutions: "Ver Soluções",
        btnContact: "Fale Comigo",
        metrics: {
          m1Title: "Full Stack",
          m1Desc: "Node, React, TS & SQL",
          m2Title: "IA & Automação",
          m2Desc: "Pipelines & Agentes LLM",
          m3Title: "QA & Infra",
          m3Desc: "Testes, Docker & Redes"
        },
        terminalTitle: "automacao_de_processos"
      },
      sobre: {
        subtitle: "Dev Full Stack, IA & Infraestrutura",
        status: "Disponível para projetos & vagas remotas",
        title: "Quem sou eu?",
        p1: "Sou um desenvolvedor focado em unir engenharia de software com visão prática de negócios. Tenho sólido domínio na stack Node.js, React, TypeScript e PostgreSQL, aplicando arquitetura modular, validação de regras de negócio (QA) e bancos de dados relacionais para garantir código legível, seguro e pronto para escalar.",
        p2: "Cursando Bacharelado em Ciência da Computação na UNEMAT (com nota máxima 10.0 em Algoritmos e Laboratório de Programação I e II), atuo também como Bolsista Articulador de Projetos em IA e Desenvolvimento de Software no Programa FOCCO, conduzindo ciclos de Pair Programming, Code Review e Engenharia de Prompts.",
        p3: "Meu principal diferencial de produtividade é o desenvolvimento assistido por IA aliado à vivência real em suporte de infraestrutura multi-clientes (MSP), redes/firewall e garantia de qualidade em sistemas ERP — entregando soluções robustas de ponta a ponta."
      },
      habilidades: {
        badge: "STACK & FERRAMENTAS",
        title: "O que eu uso para construir.",
        subtitle: "Ferramentas e tecnologias que utilizo no dia a dia para entregar projetos ágeis, robustos e prontos para produção.",
        col1Title: "FRONT-END",
        col2Title: "BACK-END & DADOS",
        col3Title: "INFRA, QA & DEPLOY",
        col4Title: "IA & AUTOMAÇÃO",
        col5Title: "DESIGN & PRODUTO",
        footer: "Aberto a novas ferramentas e arquiteturas conforme a necessidade estratégica de cada projeto."
      },
      projetos: {
        badge: "PRODUÇÃO & ENGENHARIA",
        title: "Sistemas em Destaque",
        subtitle: "Aplicações reais projetadas do zero com foco em arquitetura escalável, integridade relacional e automação de processos.",
        repoBtn: "Acessar Repositório ↗",
        codeBtn: "Ver no GitHub ↗",
        hero: {
          status: "EM PRODUÇÃO / FULL STACK",
          title: "mini-erp-gestao-ativos",
          desc: "Sistema modular fullstack desenvolvido do zero para centralizar, monitorar e gerenciar inventários de TI e auditorias de hardware, mitigando gargalos operacionais.",
          b1: "Persistência relacional estrita e alta performance com PostgreSQL e Prisma ORM.",
          b2: "Arquitetura modular em Node.js e Express com isolamento de regras de negócio e APIs RESTful.",
          b3: "Ambiente conteinerizado com Docker e pronto para implantação contínua."
        },
        cards: [
          {
            status: "FULL STACK & RBAC",
            indicatorColor: "#34d399",
            title: "Service Desk, Chamados & Kanban",
            desc: "Plataforma web fullstack construída do zero com controle de permissões por perfil (RBAC), abertura e triagem de chamados técnicos com monitoramento de SLA e quadro Kanban operacional em tempo real.",
            techs: ["react", "typescript", "nodejs", "postgresql"],
            link: "https://github.com/aarongmn7"
          },
          {
            status: "AI & DOCUMENT PIPELINE",
            indicatorColor: "#a855f7",
            title: "SmartDocs — Extração com IA",
            desc: "Pipeline automatizado em Python integrado a APIs de Modelos de Linguagem (LLMs) para leitura inteligente de documentos PDF e extração estruturada de dados diretamente para payloads JSON validados.",
            techs: ["python", "claude", "langchain"],
            link: "https://github.com/aarongmn7"
          },
          {
            status: "DATA & GRAPH ALGORITHMS",
            indicatorColor: "#eab308",
            title: "B2B SLA Analytics & Otimizador em Grafos",
            desc: "Automação em Python para consolidação e auditoria de tickets de suporte técnico (cumprimento rigoroso de SLAs) combinada a algoritmos de otimização de rotas baseados em Teoria dos Grafos (TSP).",
            techs: ["python", "git"],
            link: "https://github.com/aarongmn7"
          },
          {
            status: "FRONT-END ARCHITECTURE",
            indicatorColor: "#94a3b8",
            title: "Design System & Portfólio (Este Site)",
            desc: "Interface de alta performance em React 19 e Vite. Arquitetura componentizada, internacionalização nativa (PT/EN), Design Tokens minimalistas P&B e suporte fluido a Light/Dark Mode.",
            techs: ["react", "javascript", "vite", "css"],
            link: "https://github.com/aarongmn7"
          }
        ]
      },
      trajetoria: {
        title: "Trajetória Profissional & Acadêmica",
        items: [
          {
            date: "Outubro de 2026 – Atual",
            role: "Bolsista Articulador de Projetos em IA e Desenvolvimento de Software — UNEMAT (Programa FOCCO)",
            desc: "Liderança do projeto interdisciplinar 'Do Texto ao Código com IA'. Planejamento e condução de encontros práticos aos sábados focados em desenvolvimento assistido por IA, Pair Programming, Code Review coletivo e engenharia de prompts."
          },
          {
            date: "Maio de 2026 – Atual",
            role: "Estagiário de TI (QA, Suporte Técnico & Infraestrutura) — Ephex Tecnologia",
            desc: "Atuação dupla: (1) Qualidade de Software (QA) com testes funcionais manuais, validação de regras de negócio em ERP e documentação técnica de bugs; (2) Suporte de TI e infraestrutura multi-clientes (MSP), administração de Firewall, redes e padronização de ambientes."
          },
          {
            date: "Março de 2026 – Maio de 2026",
            role: "Suporte Técnico Interno (N1) — Interfibras Telecomunicações",
            desc: "Triagem, diagnóstico lógico e resolução de incidentes de conectividade (Wi-Fi e rede cabeada). Configuração de roteadores, análise de TCP/IP, DNS e DHCP via acesso remoto garantindo o cumprimento de SLA."
          },
          {
            date: "Abril de 2025 – Dezembro de 2025",
            role: "Estagiário Administrativo — Prefeitura Municipal de Rondonópolis (DESOPEM)",
            desc: "Desenvolvimento de planilhas automatizadas para controle operacional, captação, higienização e organização de dados públicos, além de atualização de sistemas internos e atendimento técnico."
          },
          {
            date: "Julho de 2025 – Julho de 2029 (Cursando)",
            role: "Bacharelado em Ciência da Computação — UNEMAT",
            desc: "CRA 7.71/10.0 com nota máxima (10.0) em Algoritmos e Laboratório de Programação I e II, 9.7 em Gestão de Projetos de Software e 9.3 em Propriedade Intelectual. Organizador na VII SECOMP (80h) e coautor em projeto de extensão universitária (60h)."
          }
        ]
      },
      contato: {
        label: "CONTATO",
        title: "Vamos conversar sobre o seu projeto.",
        desc: "Escolha um horário direto na minha agenda ou, se preferir rapidez, envie uma mensagem pelo WhatsApp ou e-mail.",
        btnEmail: "ENVIAR E-MAIL",
        btnWa: "WhatsApp",
        calendarTitle: "Agendar reunião com Aaron",
        waText: "Olá Aaron! Vi seu portfólio e achei seu perfil Dev muito interessante. Vamos conversar?"
      },
      certificados: {
        backBtn: "← Voltar para o Portfólio",
        title: "Licenças e Certificações",
        subtitle: "Formação complementar verificada em Engenharia de Software Fullstack, Inteligência Artificial, Cloud, Containers e Cibersegurança.",
        viewBtn: "Ver Perfil & Credenciais no LinkedIn ↗",
        items: [
          {
            id: 1,
            titulo: "Projeto Fullstack do ZERO (React + Node.js + PostgreSQL + TypeScript)",
            instituicao: "Formação Prática em Engenharia Fullstack",
            categoria: "Full Stack Development"
          },
          {
            id: 2,
            titulo: "Arquitetura de Software & Design de Sistemas Modernos",
            instituicao: "Engenharia & Padrões de Arquitetura",
            categoria: "Software Architecture"
          },
          {
            id: 3,
            titulo: "Microsoft Azure AI Fundamentals (AI-900)",
            instituicao: "Microsoft / Cloud & Inteligência Artificial",
            categoria: "Cloud & AI"
          },
          {
            id: 4,
            titulo: "BluePex® Certified Cybersecurity Framework Professional",
            instituicao: "BluePex Cybersecurity",
            categoria: "Segurança & Firewall"
          },
          {
            id: 5,
            titulo: "Docker para Desenvolvedores",
            instituicao: "DevOps & Conteinerização",
            categoria: "Infra & Containers"
          },
          {
            id: 6,
            titulo: "Projetos de Sistemas de TI & Modelagem",
            instituicao: "Engenharia de Sistemas",
            categoria: "Análise & Sistemas"
          },
          {
            id: 7,
            titulo: "Programação Orientada a Objetos (POO)",
            instituicao: "Fundamentos de Engenharia de Software",
            categoria: " Ciência da Computação"
          },
          {
            id: 8,
            titulo: "Linguagem de Programação Python & Automação",
            instituicao: "Desenvolvimento & Scripts",
            categoria: "Backend & Data"
          }
        ]
      },
      footer: {
        rights: "TODOS OS DIREITOS RESERVADOS."
      }
    }
  },
  en: {
    translation: {
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
      },
      hero: {
        title: "Product Builder <br/>& Software Engineer.",
        description: "Specialist in building ecosystems with Node.js, React, TypeScript, and SQL database modeling. I translate complex business rules into scalable systems, combining technical rigor, clean architecture, and AI-assisted development to deliver end-to-end applications.",
        btnSolutions: "View Solutions",
        btnContact: "Contact Me",
        metrics: {
          m1Title: "Full Stack",
          m1Desc: "Node, React, TS & SQL",
          m2Title: "AI & Automation",
          m2Desc: "LLM Pipelines & Agents",
          m3Title: "QA & Infra",
          m3Desc: "Testing, Docker & Networks"
        },
        terminalTitle: "process_automation"
      },
      sobre: {
        subtitle: "Full Stack Dev, AI & Infrastructure",
        status: "Available for projects & remote roles",
        title: "Who am I?",
        p1: "I am a software developer focused on bridging software engineering with practical business vision. I have strong command of the Node.js, React, TypeScript, and PostgreSQL stack, applying modular architecture, QA business rule validation, and relational modeling to ensure maintainable, scalable code.",
        p2: "Currently pursuing a B.Sc. in Computer Science at UNEMAT (scoring a perfect 10.0 in Algorithms and Programming Lab I & II), I also serve as an AI & Software Development Project Fellow in the FOCCO Program, leading Pair Programming, Code Review, and Prompt Engineering sessions.",
        p3: "My core productivity edge is AI-assisted engineering combined with hands-on experience in multi-client IT infrastructure support (MSP), firewall/networking, and ERP quality assurance — delivering reliable solutions from end to end."
      },
      habilidades: {
        badge: "STACK & TOOLS",
        title: "What I use to build.",
        subtitle: "Technologies and tools I use daily to deliver agile, robust, production-ready software.",
        col1Title: "FRONT-END",
        col2Title: "BACK-END & DATA",
        col3Title: "INFRA, QA & DEPLOY",
        col4Title: "AI & AUTOMATION",
        col5Title: "DESIGN & PRODUCT",
        footer: "Open to adopting new tools and architectures according to your project's strategic needs."
      },
      projetos: {
        badge: "PRODUCTION & ENGINEERING",
        title: "Featured Systems",
        subtitle: "Real-world applications built from scratch focusing on scalable architecture, relational data integrity, and process automation.",
        repoBtn: "View Repository ↗",
        codeBtn: "View on GitHub ↗",
        hero: {
          status: "IN PRODUCTION / FULL STACK",
          title: "mini-erp-asset-management",
          desc: "Modular fullstack system built from scratch to centralize, monitor, and manage complex IT inventories and hardware audits, eliminating operational bottlenecks.",
          b1: "Strict relational persistence and high performance with PostgreSQL and Prisma ORM.",
          b2: "Modular Node.js and Express backend isolating complex business rules via RESTful APIs.",
          b3: "Containerized environment with Docker ready for automated deployment."
        },
        cards: [
          {
            status: "FULL STACK & RBAC",
            indicatorColor: "#34d399",
            title: "Service Desk, Ticketing & Kanban Platform",
            desc: "Fullstack web platform built from scratch featuring Role-Based Access Control (RBAC), technical ticket triage with SLA tracking, and a real-time operational Kanban board.",
            techs: ["react", "typescript", "nodejs", "postgresql"],
            link: "https://github.com/aarongmn7"
          },
          {
            status: "AI & DOCUMENT PIPELINE",
            indicatorColor: "#a855f7",
            title: "SmartDocs — AI Document Extraction",
            desc: "Automated Python pipeline integrated with LLM APIs for intelligent PDF parsing and structured data extraction directly into validated JSON payloads.",
            techs: ["python", "claude", "langchain"],
            link: "https://github.com/aarongmn7"
          },
          {
            status: "DATA & GRAPH ALGORITHMS",
            indicatorColor: "#eab308",
            title: "B2B SLA Analytics & Graph Route Optimizer",
            desc: "Python automation for consolidating and auditing technical support tickets (strict SLA compliance) combined with combinatorial route optimization based on Graph Theory (TSP).",
            techs: ["python", "git"],
            link: "https://github.com/aarongmn7"
          },
          {
            status: "FRONT-END ARCHITECTURE",
            indicatorColor: "#94a3b8",
            title: "Design System & Portfolio (This Site)",
            desc: "High-performance interface built with React 19 and Vite. Modular component architecture, native bilingual support (PT/EN), monochrome Design Tokens, and seamless Light/Dark Mode.",
            techs: ["react", "javascript", "vite", "css"],
            link: "https://github.com/aarongmn7"
          }
        ]
      },
      trajetoria: {
        title: "Professional & Academic Trajectory",
        items: [
          {
            date: "October 2026 – Present",
            role: "AI & Software Development Project Fellow — UNEMAT (FOCCO Program)",
            desc: "Leading the interdisciplinary project 'From Text to Code with AI'. Planning and conducting Saturday hands-on workshops focused on AI-assisted software development, Pair Programming, collective Code Review, and prompt engineering."
          },
          {
            date: "May 2026 – Present",
            role: "IT Intern (QA, Technical Support & Infrastructure) — Ephex Tecnologia",
            desc: "Dual role: (1) Software Quality Assurance (QA) performing manual functional testing, ERP business rule validation, and bug documentation; (2) Multi-client IT infrastructure support (MSP), Firewall administration, networking, and workstation standardization."
          },
          {
            date: "March 2026 – May 2026",
            role: "Internal Technical Support (Tier 1) — Interfibras Telecomunicações",
            desc: "Triage, logical diagnostics, and resolution of connectivity incidents (Wi-Fi and wired networks). Router configuration, TCP/IP, DNS, and DHCP troubleshooting via remote access within strict SLA targets."
          },
          {
            date: "April 2025 – December 2025",
            role: "Administrative Intern — Municipality of Rondonópolis (DESOPEM)",
            desc: "Developed automated spreadsheets for operational control, data collection, cleaning, and organization, alongside internal system updates and public technical assistance."
          },
          {
            date: "July 2025 – July 2029 (In Progress)",
            role: "B.Sc. in Computer Science — UNEMAT",
            desc: "GPA 7.71/10.0 with top grades (10.0) in Algorithms & Programming Lab I and II, 9.7 in Software Project Management, and 9.3 in Intellectual Property & Data Protection. Organizer at VII SECOMP (80h) and co-author in a Mobile Hardware Extension Project (60h)."
          }
        ]
      },
      contato: {
        label: "CONTACT",
        title: "Let's talk about your project.",
        desc: "Pick a time slot directly on my calendar or, if you prefer a quick chat, send me a direct message via WhatsApp or email.",
        btnEmail: "SEND EMAIL",
        btnWa: "WhatsApp",
        calendarTitle: "Schedule a meeting with Aaron",
        waText: "Hi Aaron! I saw your portfolio and found your developer profile very interesting. Let's talk?"
      },
      certificados: {
        backBtn: "← Back to Portfolio",
        title: "Licenses & Certifications",
        subtitle: "Verified continuing education in Fullstack Software Engineering, Artificial Intelligence, Cloud, Containers, and Cybersecurity.",
        viewBtn: "View Profile & Credentials on LinkedIn ↗",
        items: [
          {
            id: 1,
            titulo: "Fullstack Project from Scratch (React + Node.js + PostgreSQL + TypeScript)",
            instituicao: "Practical Fullstack Engineering Training",
            categoria: "Full Stack Development"
          },
          {
            id: 2,
            titulo: "Software Architecture & Modern System Design",
            instituicao: "Engineering & Architecture Patterns",
            categoria: "Software Architecture"
          },
          {
            id: 3,
            titulo: "Microsoft Azure AI Fundamentals (AI-900)",
            instituicao: "Microsoft / Cloud & Artificial Intelligence",
            categoria: "Cloud & AI"
          },
          {
            id: 4,
            titulo: "BluePex® Certified Cybersecurity Framework Professional",
            instituicao: "BluePex Cybersecurity",
            categoria: "Security & Firewall"
          },
          {
            id: 5,
            titulo: "Docker for Developers",
            instituicao: "DevOps & Containerization",
            categoria: "Infra & Containers"
          },
          {
            id: 6,
            titulo: "IT Systems Design & Modeling",
            instituicao: "Systems Engineering",
            categoria: "Systems Analysis"
          },
          {
            id: 7,
            titulo: "Object-Oriented Programming (OOP)",
            instituicao: "Software Engineering Foundations",
            categoria: "Computer Science"
          },
          {
            id: 8,
            titulo: "Python Programming & Automation",
            instituicao: "Development & Scripting",
            categoria: "Backend & Data"
          }
        ]
      },
      footer: {
        rights: "ALL RIGHTS RESERVED."
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
      escapeValue: false
    }
  });

export default i18n;
