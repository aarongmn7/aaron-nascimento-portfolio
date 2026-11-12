# 📋 PENDÊNCIAS & ROADMAP — PORTFÓLIO PESSOAL (AARON DEV)

Documento de controle de melhorias, acabamento técnico e publicação de projetos públicos para o portfólio pessoal.
- **Domínio Próprio Oficial:** `https://aaron.dev.br/`
- **Deploy Vercel:** `https://aaron-nascimento-portfolio.vercel.app/`

---

## 🌐 Configuração de Domínio Personalizado (`aaron.dev.br`)
- [ ] **Apontamento de DNS no Provedor / Registro.br:**
  - **Tipo CNAME:** `www` apontando para `cname.vercel-dns.com`
  - **Tipo A (Apex `aaron.dev.br`):** apontando para `76.76.21.21` (IP oficial da Vercel)
- [ ] **Vincular no Dashboard da Vercel:**
  - Acessar o projeto `aaron-nascimento-portfolio` -> Settings -> Domains.
  - Adicionar `aaron.dev.br` e `www.aaron.dev.br` (com redirect automático).
  - Validar emissão do certificado SSL gratuito.

---

- [x] **Nova Seção de Habilidades com Esteira Infinita Autônoma (Dual Infinite Marquee)**:
  - Substituída a listagem estática por duas esteiras horizontais contínuas que se movem sozinhas em direções opostas:
    - **Fita 01 (Core Dev & Engenharia):** React 19, Node.js, TypeScript, PostgreSQL, Next.js, Python, Prisma ORM, Express.js, Tailwind CSS, GitHub Actions, JavaScript ES6+ e Vite.
    - **Fita 02 (IA, Infra, QA & Redes):** Claude Code, Cursor IDE, **Orca ADE (`orca.dev`)**, Google Antigravity, Docker, Linux & Terminal, Microsoft Azure (AI-900), Git & GitHub, LLM APIs & Prompts, Firewall & Redes, QA Testing e Figma.
  - Efeito suave de desvanecimento (*fade-out mask*) nas extremidades laterais e desaceleração/pausa suave ao passar o mouse (*pause on hover*).
  - Removido definitivamente o `Stitch IA` e corrigidas as divergências de ícones (Azure com vetor oficial da Microsoft, Actions e Linux).
- [x] **Estabilidade das Setas e Botões de Ação do Story**:
  - Eliminado o efeito de inversão brusca/foco persistente nas setas de navegação (removida a sombra branca e inversão de cores no clique).
  - Alinhamento simétrico e ancorado das setas laterais (`story-nav-prev` e `story-nav-next`) garantindo visibilidade em ambos os lados e sem cortes.
  - Correção dos botões de ação: projetos sem `Live Demo` (como Mini-ERP e Service Desk) agora exibem **um único botão** (`story-btn-single`) de largura total para "Ver Código no GitHub ↗".
  - Cor do botão 100% invertida em relação ao tema: **Branco no Dark Mode** (com texto/ícone escuro) e **Preto no Light Mode** (com texto/ícone branco).
- [x] **Avatar Oficial do GitHub Integrado no Topo dos Stories**:
  - Foto de perfil oficial do GitHub de Aaron (`https://github.com/aarongmn7.png` salva localmente em `public/aaron-github.png`) exibida no header de cada story com anel estilizado e selo de verificado.
- [x] **Enxugamento Cirúrgico do Portfólio (Apenas Projetos Reais)**:
  - Cortados definitivamente `SmartDocs` e `B2B SLA Analytics` (removidos do código e das traduções).
  - Retirado o projeto do próprio Portfólio da listagem dos stories para receber dinâmica futura dedicada.
  - Vitrine com 4 projetos de destaque: **Radar de Vagas Remotas Tech**, **Neon Protocol: Cyber Survivor**, **mini-erp-gestao-ativos** e **Service Desk, Chamados & Kanban**.
- [x] **Card Exclusivo do Jogo "Neon Protocol: Cyber Survivor" Lançado**:
  - Integrado ao carrossel de stories 3D com captura de tela em 1280x720 (`public/cyber-survivor.png`).
  - Suporte a Live Demo (`https://survivor.aaron.dev.br/`) e código fonte.
  - Badges e status com temática synthwave: `ROGUE-LITE // CANVAS & GODOT`, status `ONLINE // 60 FPS` com indicador ciano `#00f0ff`.
- [x] **Layout com Print Real em Destaque Absoluto por Projeto**:
  - Cada story agora exibe a captura real de tela da aplicação (`story-print-frame`) com barra de navegador simulada, bordas arredondadas e efeito sutil de zoom.
  - Screenshots integrados:
    - Story 01: `public/radar-vagas.png` (com badge de atualização diária às 09:00 mantido e destacado).
    - Story 02: `public/cyber-survivor.png` (interface e HUD do jogo Neon Protocol).
    - Story 03: `public/mini-erp.png` (painel de ativos de TI).
    - Story 04: `public/service-desk.png` (quadro Kanban de triagem com SLA).
- [x] **Redesign Completo da Seção de Projetos em "Stories de Instagram + 3D Card Deck"**:
  - Implementada a arquitetura inspirada no desenho autoral: cartas em formato vertical de smartphone/story empilhadas com profundidade 3D (`perspective: 1200px`, deslocamentos em perspectiva e opacidades decrescentes).
  - Botão circular de avançar com seta à direita `(->)` exatamente conforme o rascunho, além de botão à esquerda `(<-)`.
  - Barrinhas de progresso segmentadas no topo (estilo Instagram Stories) clicáveis para pular diretamente para qualquer projeto (3 segmentos).
  - Interação por toque/gestos: tocar na metade esquerda volta o story, tocar na metade direita avança.
  - Suporte completo a navegação por teclado (`ArrowLeft` / `ArrowRight`) e swipe horizontal em dispositivos mobile.
  - Pílulas de seleção rápida de projetos no rodapé do deck.
- [x] **Remoção de links quebrados e placeholders** em `src/components/Projetos.jsx`.
- [x] **Internacionalização 100% funcional (PT / EN)** em todos os componentes (`src/i18n.js`, `Header`, `Hero`, `Sobre`, `Habilidades`, `Projetos`, `Trajetoria`, `Contato`, `Footer`, `Certificados`).
- [x] **Sincronização da Trajetória (`Trajetoria.jsx`)** com o dossiê oficial (inclusão da Bolsa FOCCO/UNEMAT em IA & Dev, atualização da Ephex Tecnologia com QA + Infra MSP/Firewall e destaques acadêmicos UNEMAT).
- [x] **Atualização das Certificações Reais (`Certificados.jsx`)** com as 8 credenciais verificadas e link direto para o LinkedIn.
- [x] **Ajustes de Contraste no Dark Mode (`src/styles/index.css`)** para o botão `.btn-primary` e ícones escuros em superfícies OLED (`.dark-invert-always`).
- [x] **Criação do Kit de Rebranding White-Label (`pasta coringa/KIT_REBRANDING_AARON_DEV.md`)** para converter sistemas da linha PJ em showcases públicos "Aaron Dev".

---

## 🛠️ Pendências Técnicas de Acabamento (Alta Prioridade)

### 1. SEO & Open Graph no `index.html` (Preview para WhatsApp / LinkedIn / Discord)
- [x] Configurado `<meta name="description">` com resumo técnico (Full Stack Node.js, React, TypeScript, SQL, IA & QA).
- [x] Configuradas tags Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`) e Twitter/Discord Cards para gerar card rico de preview no compartilhamento.

### 2. Acesso Rápido a Redes no Card de Perfil (`src/components/Sobre.jsx`)
- [x] Adicionados botões diretos de **GitHub** (`github.com/aarongmn7`) e **LinkedIn** (`linkedin.com/in/aaron-nascimento-dev`) dentro do `.profile-card` na seção **Sobre**, permitindo acesso em 1 clique sem precisar rolar até o rodapé.
- [ ] *(Opcional)* Download de currículo mantido fora para evitar versões desatualizadas frente à evolução contínua da carreira.

### 3. Limpeza e Documentação do Repositório Raiz
- [ ] Substituir o `README.md` padrão do template React + Vite por uma documentação autoral de engenharia detalhando a arquitetura do portfólio, o Design System Monochrome e o suporte bilíngue.
- [ ] Remover o arquivo legado `index_old.html` (27 KB) da raiz após confirmar que nada dele é mais necessário.

### 4. Suporte a Duplo Link nos Cards de Projeto (`Live Demo` + `Repositório`)
- [ ] Atualizar `src/components/Projetos.jsx` e `src/i18n.js` para permitir dois links por projeto:
  - **Botão 1:** `Live Demo ↗` (para clientes, parceiros de Empresa Júnior e recrutadores testarem a interface).
  - **Botão 2:** `Ver Código ↗` (link direto para o repositório específico no GitHub `aarongmn7`).

---

## 🚀 Pendências de Migração de Projetos (Linha PJ ➔ GitHub Público "Aaron Dev")

Para cada sistema abaixo, aplicar o prompt do arquivo [`pasta coringa/KIT_REBRANDING_AARON_DEV.md`](./pasta%20coringa/KIT_REBRANDING_AARON_DEV.md) antes de tornar o repositório público:

### 1. Mini-ERP de Gestão de Ativos (`mini-erp-gestao-ativos`)
- [ ] Aplicar sanitização White-Label (zero menção empresarial/CNPJ, assinatura `Aaron Nascimento | Engenharia de Software`).
- [ ] Aplicar Design Tokens Monochrome (Light/Dark OLED) e remover cores legadas.
- [ ] Gerar novo screenshot atualizado da tela principal e substituir `public/mini-erp.png`.
- [ ] Publicar repositório no GitHub (`github.com/aarongmn7`) e atualizar a URL exata no card principal de `Projetos.jsx`.

### 2. Plataforma Web de Service Desk, Chamados & Kanban
- [ ] Aplicar rebranding visual "Aaron Dev" (paleta Zinc/OLED + toggle de tema).
- [ ] Preparar seed de demonstração com chamados, filas de SLA e quadro Kanban populados.
- [ ] Escrever `README.md` de engenharia destacando RBAC, modelagem PostgreSQL e arquitetura React + TypeScript + Node.js.
- [ ] Publicar no GitHub e vincular o link direto no Card 01 de `Projetos.jsx`.

### 3. SmartDocs — Pipeline de Extração Documental com IA
- [ ] Higienizar scripts Python, prompts e exemplos de PDFs (usar apenas documentos fictícios de demonstração).
- [ ] Documentar o fluxo `PDF -> LLM API -> Validação de Schema JSON` no `README.md`.
- [ ] Publicar no GitHub e vincular o link direto no Card 02 de `Projetos.jsx`.

### 4. B2B SLA Analytics & Otimizador de Rotas em Grafos
- [ ] Organizar scripts e datasets de exemplo (anonimizados) com instruções claras de execução.
- [ ] Publicar/atualizar repositório no GitHub e vincular o link direto no Card 03 de `Projetos.jsx`.
