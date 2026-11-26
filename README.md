# Aaron Nascimento — Portfólio Pessoal (`Swarm Edition`)

Versão experimental interativa do portfólio pessoal de engenharia de software (**React 19 + Vite 8 + i18next**), integrando a engine **`SwarmLayer`** (cursores autônomos de montagem progressiva em 2 fases e efeitos táteis estilo Figma) sobre o **Design System Monochrome (Light / Dark OLED)**.

- **Repositório Base Oficial:** `../aaron-nascimento-portfolio-main` (`https://aaron.dev.br/`)
- **Diretório Experimental (Clone Isolado):** `aaron-nascimento-portfolio-swarm`
- **GitHub:** [@aarongmn7](https://github.com/aarongmn7) · **LinkedIn:** [aaron-nascimento-dev](https://www.linkedin.com/in/aaron-nascimento-dev)

---

## 🖱️ Arquitetura da Engine `SwarmLayer` (`src/components/SwarmLayer.jsx`)

1. **Cursores Monochrome Adaptativos por Tema (Zero Texto Embaixo):**
   - 12 ponteiros SVG no desktop (6 no mobile) operando a **`2×` de velocidade permanente** e sem barra inferior (`swarm-bar` removida para visual 100% limpo).
   - **Contraste Automático:**
     - **Light Mode:** Cursores pretos (`#09090b`) com contorno branco (`#ffffff`).
     - **Dark Mode:** Cursores brancos (`#ffffff`) com contorno preto (`#09090b`).
   - Camada `#swarm-layer` com `pointer-events: none; z-index: 80;` para nunca bloquear cliques reais do visitante.

2. **Construção Real do Site em 2 Fases (33 Blocos Mapeados):**
   - **Estado Inicial Oculto (`.bw`):** Todos os 33 blocos das 6 seções (`Hero`, `Sobre`, `Habilidades`, `Projetos`, `Trajetória`, `Contato`) iniciam invisíveis preservando o layout.
   - **Fase 1 — Marcação Figma (`selectDrag` + `.selbox` + `.skel`):** Os cursores voam até o espaço vazio, arrastam caixas azuis (`#3ea2ff`) com 4 handles quadrados brancos e pílula `Largura × Altura` em tempo real, deixando um *skeleton* tracejado reservando o bloco.
   - **Fase 2 — Deposição, Digitação & Encaixe Físico (`applyBlock`):**
     - **Digitação Real (`typeIn`):** Títulos são digitados caractere por caractere pelo cursor.
     - **Revelação & Nudge (`photoIn` + `nudgeIn`):** Cards principais entram com `clip-path`, são empurrados fisicamente para o alinhamento final e piscam uma *Smart Guide* rosa (`#ff3e9a`).
     - **Clonagem com Badge `+` (`dupIn`):** Métricas do Hero e itens da Trajetória são clonados a partir do primeiro card com arraste de clone fantasma (`.swarm-ghost`).

3. **Dança Ociosa nas Laterais (`startConga`) & Auto-Demo nos Stories:**
   - **Centro 100% Livre:** Quando terminam de montar uma seção, os cursores se dividem em duas trilhas harmônicas independentes nas margens **esquerda (~3%–14%)** e **direita (~86%–97%)** da tela, sem cruzar o centro de leitura.
   - **Auto-Demo (`9s`):** Se o visitante não estiver com o mouse sobre o deck de Stories, um cursor livre voa até a seta `.story-nav-next` e avança o story automaticamente.

4. **Efeitos Táteis Extras (Desktop `pointer: fine`):**
   - **Mira Azul no Hover (`.hsel`):** Moldura estilo editor com 4 handles nos cantos ao passar o mouse real em botões e links.
   - **Botões Magnéticos (`.mag`):** Atração suave em direção ao ponteiro do usuário.
   - **Tilt 3D (`.swarm-tilt-card`):** Inclinação física em perspectiva no Terminal do Hero e no Card de Perfil.
   - **Barra de Progresso de Leitura (`.scroll-prog`):** Fita superior de `2.5px` sincronizada com o scroll.

---

## 📱 Vitrine de 6 Stories de Engenharia (`src/i18n.js`)

1. **Radar de Vagas Remotas Tech** (`/radar-vagas.png`) — *Node.js, JS Zero-Dep, Git*
2. **PayLedger: Payment & Digital Wallet API** (`/payledger.png`) — *Python 3.12, FastAPI, SQLAlchemy 2.0 Async, PostgreSQL 16*
3. **Axon Workflow Engine: Visual AI & DAG** (`/axon.png`) — *React 19, Node.js, Kahn DAG 60fps, Dual-Mode DB*
4. **AgendaFlow: Multi-Tenant Booking SaaS** (`/agendaflow.png`) — *Laravel 13, Livewire 4, PHP 8.4, Atomic Lock*
5. **FieldSync: Offline-First Field Telemetry PWA** (`/fieldsync.png`) — *React 19, Node.js, Web Crypto SHA-256, Canvas 2D POD*
6. **Nexus Bridge: Conciliação ERP & DLQ** (`/nexus.png`) — *React 19, Node.js, SSE Stream, Dead-Letter Queue*
- **Side Quest no Rodapé:** **Cyber Survivor** (`https://cybersurvivor.aaron.dev.br/`).

---

## ▶️ Como Executar Localmente

```bash
npm install
npm run dev -- --port 5173
```
