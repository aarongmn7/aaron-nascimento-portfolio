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
        terminalTitle: "automacao_de_processos",
        logs: [
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
        ]
      },
      sobre: {
        subtitle: "Desenvolvedor Full Stack | Node.js, React, TypeScript & PostgreSQL",
        status: "Disponível para projetos & vagas remotas",
        title: "Quem sou eu?",
        p1: "Atuando na interseção entre a engenharia de software e a garantia de qualidade. O código mais limpo do mundo perde seu valor se a regra de negócio não funcionar. É com essa mentalidade que construo e avalio aplicações, aplicando minha base técnica no ecossistema JavaScript (Node.js, React e TypeScript) para desenvolver sistemas e projetos Fullstack do zero, sempre com foco em escalabilidade e performance.",
        p2: "No meu dia a dia com Qualidade de Software (QA) e suporte, atuo diretamente no mapeamento de falhas, execução de testes e validação de regras de negócio em sistemas ERP complexos. Essa vivência me treinou para antecipar bugs antes que eles cheguem em produção e a ter um olhar extremamente crítico sobre a arquitetura da aplicação.",
        p3: "Minha Stack Principal — Front-end & Linguagens: JavaScript, TypeScript, React | Back-end & Dados: Node.js, API REST, SQL (PostgreSQL) | Infra & Qualidade: Docker, Git/GitHub, Testes Funcionais, Mapeamento de Bugs e Redes/Firewall."
      },
      habilidades: {
        badge: "STACK & ENGENHARIA",
        title: "O que eu uso para construir.",
        subtitle: "Ferramentas e tecnologias que utilizo no dia a dia para entregar software escalável, performático e em produção.",
        statusPulse: "ESTEIRA CONTÍNUA // LIVE",
        track1Label: "CORE DEV & ENGENHARIA DE SOFTWARE",
        track2Label: "IA, INFRAESTRUTURA, QA & REDES",
        footer: "Aberto a novas linguagens, frameworks e ferramentas conforme a necessidade estratégica de cada projeto."
      },
      projetos: {
        badge: "PRODUÇÃO & ENGENHARIA",
        title: "Sistemas em Destaque",
        subtitle: "Aplicações reais projetadas do zero com foco em arquitetura escalável, integridade relacional e automação de processos.",
        storyModeBadge: "STORIES DE ENGENHARIA",
        storyHint: "Toque nas laterais ou use as setas para navegar pelos projetos",
        liveDemoBtn: "Acessar Live Demo ↗",
        repoBtn: "Ver Código no GitHub ↗",
        stories: [
          {
            id: "radar-vagas",
            badge: "JORNAL TECH // ZERO-DEP",
            status: "DIÁRIO 09:00 BRT",
            indicatorColor: "#10b981",
            title: "Radar de Vagas Remotas Tech",
            tagline: "Boletim diário automatizado de oportunidades 100% remotas com coleta multi-fonte e scoring algorítmico.",
            printSrc: "/radar-vagas.png",
            printAlt: "Print da interface do Radar de Vagas Remotas Tech",
            urlPill: "radar.aaron.dev.br",
            techs: ["nodejs", "javascript", "git"],
            demoLink: "https://radar.aaron.dev.br/",
            codeLink: "https://github.com/aarongmn7/radarvagas"
          },
          {
            id: "payledger-api",
            badge: "FINTECH BACKEND // PYTHON & FASTAPI",
            status: "ATOMIC LEDGER // ACID",
            indicatorColor: "#34d399",
            title: "PayLedger: Payment & Digital Wallet API",
            tagline: "API transacional de carteira digital com ledger imutável append-only em centavos, prevenção de deadlocks (SELECT FOR UPDATE), idempotência real e webhooks HMAC-SHA256.",
            printSrc: "/payledger.png",
            printAlt: "Print da arquitetura e trace transacional do PayLedger API",
            urlPill: "github.com/aarongmn7/payledger-api",
            techs: ["python", "postgresql", "docker", "git"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/payledger-api"
          },
          {
            id: "axon-workflow-engine",
            badge: "AI ORCHESTRATOR // KAHN DAG 60FPS",
            status: "ZERO CANVAS LIBS",
            indicatorColor: "#a855f7",
            title: "Axon Workflow Engine: Visual AI & DAG",
            tagline: "Orquestrador visual de agentes autônomos de IA e grafos direcionados acíclicos (DAG) com ordenação topológica de Kahn, canvas vetorial 60 FPS puro e banco Dual-Mode.",
            printSrc: "/axon.png",
            printAlt: "Print do canvas espacial DAG e console de execução do Axon Workflow Engine",
            urlPill: "github.com/aarongmn7/axon-workflow-engine",
            techs: ["react", "nodejs", "postgresql", "tailwind"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/axon-workflow-engine"
          },
          {
            id: "agendaflow-saas",
            badge: "MULTI-TENANT SAAS // LARAVEL & LIVEWIRE",
            status: "ATOMIC BOOKING LOCK",
            indicatorColor: "#38bdf8",
            title: "AgendaFlow: Multi-Tenant Booking SaaS",
            tagline: "Plataforma SaaS multi-tenant com isolamento automático por Global Scope (BelongsToTenant), gestão de quotas por plano e reservas atômicas contra double-booking.",
            printSrc: "/agendaflow.png",
            printAlt: "Print do painel multi-tenant e reservas atômicas do AgendaFlow SaaS",
            urlPill: "github.com/aarongmn7/agendaflow-saas",
            techs: ["tailwind", "vite", "git"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/agendaflow-saas"
          },
          {
            id: "field-telemetry-pwa",
            badge: "OFFLINE-FIRST PWA // WEB CRYPTO SHA-256",
            status: "CANVAS 2D POD // SYNC",
            indicatorColor: "#f59e0b",
            title: "FieldSync: Offline-First Field Telemetry PWA",
            tagline: "PWA para operações críticas em zonas sem sinal com fila Outbox resiliente, canhoto digital antifraude georreferenciado em Canvas 2D, assinatura touch e hash SHA-256.",
            printSrc: "/fieldsync.png",
            printAlt: "Print do chassi mobile PWA e central de telemetria do FieldSync",
            urlPill: "github.com/aarongmn7/field-telemetry-pwa",
            techs: ["react", "nodejs", "postgresql", "html5"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/field-telemetry-pwa"
          },
          {
            id: "nexus-erp-bridge",
            badge: "ENTERPRISE INTEGRATION // SSE & DLQ",
            status: "TOLERÂNCIA FISCAL R$ 0,01",
            indicatorColor: "#ef4444",
            title: "Nexus Bridge: Conciliação ERP & DLQ",
            tagline: "Malha de integração e conciliação financeira para ERPs (TOTVS, SAP, Sankhya, Omie) com retenção preventiva de anomalias fiscais em Dead-Letter Queue e telemetria via SSE.",
            printSrc: "/nexus.png",
            printAlt: "Print da malha de conciliação financeira e mesa de resolução DLQ do Nexus Bridge",
            urlPill: "github.com/aarongmn7/nexus-erp-bridge",
            techs: ["react", "nodejs", "postgresql", "vite"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/nexus-erp-bridge"
          }
        ]
      },
      trajetoria: {
        title: "Trajetória Profissional & Acadêmica",
        items: [
          {
            date: "Outubro de 2026 – Atual",
            role: "Bolsista Articulador de Projetos em IA e Desenvolvimento de Software (Programa FOCCO) — UNEMAT",
            desc: "Atuação como Bolsista Articulador no Programa de Formação de Células Cooperativas e Solidárias (FOCCO) da UNEMAT, liderando o projeto interdisciplinar 'Do Texto ao Código com IA'. • Planejamento e condução de encontros práticos de desenvolvimento de software assistido por Inteligência Artificial, programação em pares (Pair Programming) e revisão de código coletiva (Code Review). • Integração entre estudantes de Ciência da Computação e Letras para engenharia de prompts, estruturação de documentação técnica e criação de soluções tecnológicas aplicadas ao ensino, pesquisa e extensão. • Acompanhamento de métricas de evolução técnica da equipe, mediação de conflitos, elaboração de relatórios de progresso e produção científica para o Seminário FOCCO-UNEMAT."
          },
          {
            date: "Maio de 2026 – Atual",
            role: "Estagiário — Ephex Tecnologia",
            desc: "Atuação híbrida em Qualidade de Software (QA) para sistema ERP e Suporte de TI & Infraestrutura Multi-Clientes (MSP). • Execução de testes funcionais manuais, validação de regras de negócio e identificação, mapeamento e documentação de bugs para o time de desenvolvimento. • Administração de Firewall, redes corporativas, suporte técnico N1/N2 e manutenção/padronização de ambientes de TI em múltiplos clientes."
          },
          {
            date: "Março de 2026 – Maio de 2026",
            role: "Suporte Técnico Interno — Interfibras Telecomunicações",
            desc: "Atuação como suporte técnico N1 em provedor de internet, realizando triagem, diagnóstico e resolução de incidentes relacionados à conectividade (Wi-Fi e rede cabeada). Responsável por identificar falhas em roteadores, interferências de sinal e problemas de configuração de rede, aplicando soluções rápidas e eficazes. Experiência com atendimento ao cliente, orientação técnica para usuários leigos e uso de ferramentas de acesso remoto para suporte. Abertura, registro e acompanhamento de chamados, além de escalonamento para níveis superiores quando necessário."
          },
          {
            date: "Abril de 2025 – Dezembro de 2025",
            role: "Estagiário — Prefeitura Municipal de Rondonópolis",
            desc: "Desenvolvimento e manutenção de planilhas para controle administrativo, incluindo captação e organização de dados; lançamento e atualização de informações relevantes ao setor, garantindo precisão e agilidade nos processos internos; confecção, organização e análise de documentos administrativos e suporte ao cliente, oferecendo atendimento eficaz e solucionando dúvidas operacionais."
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
            categoria: "Ciência da Computação"
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
        rights: "TODOS OS DIREITOS RESERVADOS.",
        sideQuest: "Side Quest: Cyber Survivor"
      },
      swarm: {
        cursors: "cursores",
        scanning: "Escaneando arquitetura…",
        building: "Montando",
        ready: "pronto",
        active: "Cursores ativos",
        paused: "Pausado",
        tour: "Tour",
        stop: "Parar",
        pauseTitle: "Pausar/Ocultar cursores",
        resumeTitle: "Retomar cursores",
        replayTitle: "Reconstruir coreografia"
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
        terminalTitle: "process_automation",
        logs: [
          { text: "[INFO] Initializing Node.js backend server...", type: "log-info" },
          { text: "[INFO] Connecting to PostgreSQL database... OK", type: "log-info" },
          { text: "[INFO] Validating Prisma ORM schema...", type: "log-info" },
          { text: "[DATA] Running automated data capture...", type: "log-warning" },
          { text: "[DATA] Scanning REST API endpoints...", type: "log-warning" },
          { text: "[DATA] 14,820 records validated in queue.", type: "log-warning" },
          { text: "[SUCCESS] SQL transaction completed successfully.", type: "log-success" },
          { text: "[AI] Orchestrating LLM extraction pipeline...", type: "log-ai" },
          { text: "[AI] Structuring validated JSON payload...", type: "log-ai" },
          { text: "[SUCCESS] Data triage and SLA completed.", type: "log-success" },
          { text: "[SEC] Checking RBAC policies and Firewall...", type: "log-info" },
          { text: "[INFO] Dispatching integration webhooks...", type: "log-info" },
          { text: "[SUCCESS] 200 OK response from services.", type: "log-success" },
          { text: "[INFO] Checking Docker container health...", type: "log-info" },
          { text: "[SUCCESS] Operation completed with zero bottlenecks.", type: "log-success" },
          { text: "[STATUS] Pipeline active. Monitoring...", type: "log-ai" }
        ]
      },
      sobre: {
        subtitle: "Full Stack Developer | Node.js, React, TypeScript & PostgreSQL",
        status: "Available for projects & remote roles",
        title: "Who am I?",
        p1: "Operating at the intersection of software engineering and quality assurance. The cleanest code in the world loses its value if the business rule doesn't work. With this mindset, I build and evaluate applications, applying my technical foundation in the JavaScript ecosystem (Node.js, React, and TypeScript) to develop Fullstack systems from scratch with a focus on scalability and performance.",
        p2: "In my daily work with Software Quality Assurance (QA) and support, I directly handle failure mapping, test execution, and business rule validation in complex ERP systems. This experience trained me to anticipate bugs before they hit production and maintain a highly critical eye on application architecture.",
        p3: "Core Stack — Front-end & Languages: JavaScript, TypeScript, React | Back-end & Data: Node.js, REST APIs, SQL (PostgreSQL) | Infra & QA: Docker, Git/GitHub, Functional Testing, Bug Mapping & Networking/Firewall."
      },
      habilidades: {
        badge: "STACK & ENGINEERING",
        title: "What I use to build.",
        subtitle: "Technologies and tools I use daily to engineer scalable, high-performance, production-ready software.",
        statusPulse: "CONTINUOUS PIPELINE // LIVE",
        track1Label: "CORE DEV & SOFTWARE ENGINEERING",
        track2Label: "AI, INFRASTRUCTURE, QA & NETWORKING",
        footer: "Open to adopting new languages, frameworks, and tools tailored to strategic project requirements."
      },
      projetos: {
        badge: "PRODUCTION & ENGINEERING",
        title: "Featured Systems",
        subtitle: "Real-world applications built from scratch focusing on scalable architecture, relational data integrity, and process automation.",
        storyModeBadge: "ENGINEERING STORIES",
        storyHint: "Tap sides or use arrow keys to navigate through projects",
        liveDemoBtn: "Live Demo ↗",
        repoBtn: "View on GitHub ↗",
        stories: [
          {
            id: "radar-vagas",
            badge: "TECH JOURNAL // ZERO-DEP",
            status: "DAILY 09:00 BRT",
            indicatorColor: "#10b981",
            title: "Tech Remote Jobs Radar",
            tagline: "Automated daily gazette of 100% remote jobs with multi-source harvesting and algorithmic scoring.",
            printSrc: "/radar-vagas.png",
            printAlt: "Screenshot of the Tech Remote Jobs Radar interface",
            urlPill: "radar.aaron.dev.br",
            techs: ["nodejs", "javascript", "git"],
            demoLink: "https://radar.aaron.dev.br/",
            codeLink: "https://github.com/aarongmn7/radarvagas"
          },
          {
            id: "payledger-api",
            badge: "FINTECH BACKEND // PYTHON & FASTAPI",
            status: "ATOMIC LEDGER // ACID",
            indicatorColor: "#34d399",
            title: "PayLedger: Payment & Digital Wallet API",
            tagline: "Transactional digital wallet API featuring append-only immutable ledger in integer cents, deadlock prevention (SELECT FOR UPDATE), strict idempotency, and HMAC-SHA256 webhooks.",
            printSrc: "/payledger.png",
            printAlt: "Screenshot of PayLedger API architecture and live transactional trace",
            urlPill: "github.com/aarongmn7/payledger-api",
            techs: ["python", "postgresql", "docker", "git"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/payledger-api"
          },
          {
            id: "axon-workflow-engine",
            badge: "AI ORCHESTRATOR // KAHN DAG 60FPS",
            status: "ZERO CANVAS LIBS",
            indicatorColor: "#a855f7",
            title: "Axon Workflow Engine: Visual AI & DAG",
            tagline: "Visual orchestrator for autonomous AI agents and Directed Acyclic Graphs (DAG) with Kahn's topological sorting, native 60 FPS vector canvas, and Dual-Mode database.",
            printSrc: "/axon.png",
            printAlt: "Screenshot of Axon Workflow Engine spatial DAG canvas and execution console",
            urlPill: "github.com/aarongmn7/axon-workflow-engine",
            techs: ["react", "nodejs", "postgresql", "tailwind"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/axon-workflow-engine"
          },
          {
            id: "agendaflow-saas",
            badge: "MULTI-TENANT SAAS // LARAVEL & LIVEWIRE",
            status: "ATOMIC BOOKING LOCK",
            indicatorColor: "#38bdf8",
            title: "AgendaFlow: Multi-Tenant Booking SaaS",
            tagline: "Multi-tenant SaaS platform with automatic Global Scope data isolation (BelongsToTenant), subscription plan quota enforcement, and atomic lockForUpdate booking engine.",
            printSrc: "/agendaflow.png",
            printAlt: "Screenshot of AgendaFlow SaaS multi-tenant dashboard and atomic bookings",
            urlPill: "github.com/aarongmn7/agendaflow-saas",
            techs: ["tailwind", "vite", "git"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/agendaflow-saas"
          },
          {
            id: "field-telemetry-pwa",
            badge: "OFFLINE-FIRST PWA // WEB CRYPTO SHA-256",
            status: "CANVAS 2D POD // SYNC",
            indicatorColor: "#f59e0b",
            title: "FieldSync: Offline-First Field Telemetry PWA",
            tagline: "Offline-First mobile PWA for critical field operations with resilient Outbox queue, anti-fraud geo-stamped Proof of Delivery in Canvas 2D, touch signature, and SHA-256 hashing.",
            printSrc: "/fieldsync.png",
            printAlt: "Screenshot of FieldSync mobile PWA chassis and telemetry hub",
            urlPill: "github.com/aarongmn7/field-telemetry-pwa",
            techs: ["react", "nodejs", "postgresql", "html5"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/field-telemetry-pwa"
          },
          {
            id: "nexus-erp-bridge",
            badge: "ENTERPRISE INTEGRATION // SSE & DLQ",
            status: "ZERO-TOLERANCE AUDIT",
            indicatorColor: "#ef4444",
            title: "Nexus Bridge: ERP Reconciliation & DLQ",
            tagline: "Enterprise ERP integration and financial reconciliation mesh (TOTVS, SAP, Sankhya, Omie) with preventive Dead-Letter Queue anomaly retention and real-time SSE telemetry.",
            printSrc: "/nexus.png",
            printAlt: "Screenshot of Nexus Bridge financial reconciliation mesh and DLQ resolution drawer",
            urlPill: "github.com/aarongmn7/nexus-erp-bridge",
            techs: ["react", "nodejs", "postgresql", "vite"],
            demoLink: "",
            codeLink: "https://github.com/aarongmn7/nexus-erp-bridge"
          }
        ]
      },
      trajetoria: {
        title: "Professional & Academic Trajectory",
        items: [
          {
            date: "October 2026 – Present",
            role: "AI & Software Development Project Fellow (FOCCO Program) — UNEMAT",
            desc: "Serving as Project Fellow in the FOCCO Program at UNEMAT, leading the interdisciplinary project 'From Text to Code with AI'. • Planning and conducting hands-on workshops in AI-assisted software development, Pair Programming, and collective Code Review. • Integrating Computer Science and Literature students for prompt engineering, technical documentation structuring, and building technological solutions for teaching, research, and extension. • Tracking technical evolution metrics, conflict mediation, progress reporting, and scientific production for the FOCCO-UNEMAT Seminar."
          },
          {
            date: "May 2026 – Present",
            role: "Intern — Ephex Tecnologia",
            desc: "Hybrid role in Software Quality Assurance (QA) for an ERP system and IT Support & Multi-Client Infrastructure (MSP). • Execution of manual functional tests, business rule validation, and bug identification, mapping, and documentation for the development team. • Firewall administration, corporate networking, N1/N2 technical support, and IT environment maintenance/standardization across multiple clients."
          },
          {
            date: "March 2026 – May 2026",
            role: "Internal Technical Support — Interfibras Telecomunicações",
            desc: "Tier 1 technical support at an ISP, performing triage, diagnostics, and resolution of connectivity incidents (Wi-Fi and wired networks). Responsible for identifying router failures, signal interference, and network configuration issues, applying fast and effective solutions. Experienced in customer service, technical guidance for non-technical users, remote support tools, ticket management, and SLA escalation."
          },
          {
            date: "April 2025 – December 2025",
            role: "Intern — Municipality of Rondonópolis",
            desc: "Development and maintenance of spreadsheets for administrative control, including data collection and organization; entry and updating of sector records ensuring accuracy and agility in internal processes; preparation, organization, and analysis of administrative documents and customer support, providing effective assistance and resolving operational questions."
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
        rights: "ALL RIGHTS RESERVED.",
        sideQuest: "Side Quest: Cyber Survivor"
      },
      swarm: {
        cursors: "cursors",
        scanning: "Scanning architecture…",
        building: "Building",
        ready: "ready",
        active: "Active cursors",
        paused: "Paused",
        tour: "Tour",
        stop: "Stop",
        pauseTitle: "Pause/Hide cursors",
        resumeTitle: "Resume cursors",
        replayTitle: "Replay choreography"
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
