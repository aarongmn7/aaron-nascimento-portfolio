# Aaron Nascimento — Portfólio Pessoal (`aaron.dev.br`)

Portfólio pessoal de engenharia de software desenvolvido com **React 19**, **Vite 8** e **i18next**, com foco em performance, acessibilidade, suporte bilíngue (**PT-BR / EN**) e **Design System Monochrome (Light / Dark OLED)**.

- **Produção:** [https://aaron.dev.br/](https://aaron.dev.br/)
- **Mirror Vercel:** [https://aaron-nascimento-portfolio.vercel.app/](https://aaron-nascimento-portfolio.vercel.app/)
- **GitHub:** [@aarongmn7](https://github.com/aarongmn7) · **LinkedIn:** [aaron-nascimento-dev](https://www.linkedin.com/in/aaron-nascimento-dev)

---

## Destaques Técnicos & Arquitetura

- **Vitrine de Projetos em Stories 3D (`src/components/Projetos.jsx`):**
  - Deck interativo em perspectiva 3D (`perspective: 1200px`) com auto-play, barra de progresso clicável, navegação por teclado (`ArrowLeft` / `ArrowRight`), gestos *touch* (swipe) e suporte a duplo link (`Live Demo` + `Repositório`).
  - **6 Stories de Engenharia Curados:**
    1. **Radar de Vagas Remotas Tech** (`radar.aaron.dev.br`) — *Node.js, JavaScript Zero-Dep, Git*
    2. **PayLedger: Payment & Digital Wallet API** — *Python 3.12, FastAPI, SQLAlchemy 2.0 Async, PostgreSQL 16, Docker*
    3. **Axon Workflow Engine: Visual AI & DAG** — *React 19, Node.js, Kahn DAG Engine, Canvas SVG 60fps, Dual-Mode DB*
    4. **AgendaFlow: Multi-Tenant Booking SaaS** — *Laravel 13, Livewire 4, PHP 8.4, Global Scope Isolation, Atomic Lock*
    5. **FieldSync: Offline-First Field Telemetry PWA** — *React 19, Node.js, Web Crypto SHA-256, Canvas 2D POD, Outbox Sync*
    6. **Nexus Bridge: Conciliação ERP & DLQ** — *React 19, Node.js, Server-Sent Events (SSE), Dead-Letter Queue, PostgreSQL*
  - **Side Quest no Rodapé (`src/components/Footer.jsx`):** Link dedicado para o jogo autoral **Cyber Survivor** (`cybersurvivor.aaron.dev.br`).
- **Esteira Dupla de Habilidades (`src/components/Habilidades.jsx`):**
  - *Dual Infinite Marquee* em direções opostas com *fade-out* lateral e pausa suave no *hover*.
- **Internacionalização Completa (`src/i18n.js`):**
  - Alternância instantânea entre **Português (PT-BR)** e **Inglês (EN)** cobrindo Hero, Sobre, Habilidades, Projetos, Trajetória, Certificados e Contato.
- **Design System Monochrome & SEO:**
  - Tokens CSS nativos para Light Mode e Dark Mode OLED (`src/styles/index.css`) e metadados Open Graph / Twitter Cards configurados em `index.html`.

---

## Stack

- **Frontend:** React 19, React Router DOM 7, i18next / react-i18next
- **Build & Tooling:** Vite 8, Oxlint
- **Hospedagem:** Vercel (`aaron.dev.br`)

---

## Estrutura do Projeto

```text
├── public/                 # Assets estáticos, ícones de stack e prints dos projetos
├── src/
│   ├── components/         # Header, Hero, Sobre, Habilidades, Projetos, Trajetoria, Contato, Footer
│   ├── pages/              # Home e Certificados
│   ├── styles/             # global.css e tokens do Design System (index.css)
│   ├── config.js           # Dados de perfil e links oficiais
│   ├── i18n.js             # Traduções PT-BR / EN e catálogo de stories
│   └── main.jsx            # Entrypoint React
├── index.html              # Meta tags SEO / Open Graph
└── vite.config.js          # Configuração de build Vite
```

---

## Como Executar Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Verificar lint
npm run lint

# Build de produção e preview
npm run build
npm run preview
```
