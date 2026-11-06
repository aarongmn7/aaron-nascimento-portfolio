# 🎨 KIT DE REBRANDING & DESIGN SYSTEM — AARON DEV (PORTFÓLIO PESSOAL)

Este documento é o **Guia Definitivo + Prompt Mestre para IA** para converter qualquer sistema ou projeto técnico em um **Repositório Público de Portfólio ("Aaron Dev")**, com a mesma identidade visual minimalista (Monochrome Light & Dark OLED) do portfólio oficial de **Aaron Nascimento**.

---

## 🛡️ 1. Regras de Sanitização White-Label (Isolamento Estrito)

Ao migrar qualquer sistema para o GitHub pessoal (`github.com/aarongmn7`), a IA deve executar uma varredura completa no código-fonte (`*.html`, `*.jsx`, `*.tsx`, `*.js`, `*.ts`, `*.css`, `package.json`, `README.md`) aplicando:

1. **Remoção Total de Marca Corporativa / PJ:**
   - Substituir qualquer nome de software house, consultoria, domínio corporativo ou CNPJ por **`Aaron Nascimento — Engenharia de Software`** (ou o nome técnico do produto, ex: `Mini-ERP | Asset Management`, `ServiceDesk Pro | RBAC & SLA`, `SmartDocs | AI Pipeline`).
   - **PROIBIDO** manter termos societários (*Founder, CEO, Sócio, Diretor, Software House*). Posicione a autoria 100% como **Desenvolvedor Fullstack / Engenheiro de Software**.
2. **Eliminação de Cores Legadas (Ex: Laranja / Azul Corporativo Antigo):**
   - Remover códigos hexadecimais laranjas (`#ff6b00`, `#f97316`, `#ea580c`, `#ff5500`) de botões, bordas, ícones e principalmente de `::-webkit-scrollbar-thumb`.
   - Substituir pela paleta **Monochrome P&B + Cinza Zinco (`Zinc`)** com indicadores semânticos sutis (Verde Esmeralda `#10b981` / `#34d399` para status online/sucesso, Amarelo `#fbbf24` para dados/alertas, Roxo `#a855f7` para pipelines de IA).
3. **Higienização de Credenciais e Dados Sensíveis:**
   - Substituir dados reais de clientes em seeds/mocks por dados fictícios realistas de engenharia.
   - Garantir que `.env` esteja no `.gitignore` e fornecer um `.env.example` limpo.

---

## 🎨 2. Design Tokens Oficiais ("Aaron Dev Monochrome")

Copie ou injete este bloco no arquivo CSS global (`global.css` ou `index.css`) do sistema:

```css
/* ==========================================================================
   AARON DEV — DESIGN SYSTEM TOKENS (LIGHT & DARK OLED)
   ========================================================================== */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {
  /* TEMA CLARO (Default Minimalista) */
  --bg-base: #ffffff;
  --bg-surface: #f4f4f5;        /* Cards e painéis (Zinc 100) */
  --bg-surface-hover: #e4e4e7;  /* Hover de cards/linhas (Zinc 200) */
  
  --text-primary: #09090b;      /* Títulos e texto principal (Zinc 950) */
  --text-secondary: #52525b;    /* Subtítulos e labels (Zinc 600) */
  --text-muted: #71717a;        /* Metadados e códigos (Zinc 500) */
  
  --accent-primary: #000000;    /* Botões principais e destaques */
  --accent-hover: #27272a;
  --accent-contrast: #ffffff;   /* Texto sobre botão principal */
  
  --border-color: #e4e4e7;      /* Bordas finas 1px (Zinc 200) */
  
  /* Cores Semânticas de Status & Telemetria */
  --status-success: #10b981;
  --status-warning: #fbbf24;
  --status-danger: #ef4444;
  --status-ai: #a855f7;

  /* Tipografia & Geometria */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 9999px;
}

[data-theme="dark"] {
  /* TEMA ESCURO (OLED Puro & Zinc) */
  --bg-base: #000000;
  --bg-surface: #0a0a0a;        /* Superfície primária */
  --bg-surface-hover: #18181b;  /* Superfície elevada (Zinc 900) */
  
  --text-primary: #fafafa;      /* Branco suave (Zinc 50) */
  --text-secondary: #a1a1aa;    /* Cinza técnico (Zinc 400) */
  --text-muted: #71717a;        /* Cinza escuro (Zinc 500) */
  
  --accent-primary: #ffffff;    /* Botões principais brancos no escuro */
  --accent-hover: #d4d4d8;
  --accent-contrast: #000000;   /* Texto preto sobre botão branco */
  
  --border-color: #27272a;      /* Bordas sutis no escuro (Zinc 800) */
}

/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar Minimalista (Zero Laranja) */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: var(--bg-base);
}
::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Logo adaptativa para Light/Dark */
.aaron-logo {
  height: 32px;
  width: auto;
  filter: grayscale(100%) brightness(0);
  transition: filter 0.25s ease;
}
[data-theme="dark"] .aaron-logo {
  filter: grayscale(100%) brightness(0) invert(1);
}
```

---

## 🧩 3. Componentes Padrão para Sistemas (Bento UI)

### 3.1. Cards & Painéis (Bento Card)
```css
.bento-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.bento-card:hover {
  border-color: var(--text-muted);
}

.bento-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}
```

### 3.2. Botões Primário & Outline (Adaptativos ao Tema)
```css
.btn-aaron-primary {
  background-color: var(--accent-primary);
  color: var(--accent-contrast);
  border: 1px solid var(--accent-primary);
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-aaron-primary:hover {
  background-color: var(--accent-hover);
  border-color: var(--accent-hover);
}

.btn-aaron-outline {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-aaron-outline:hover {
  background-color: var(--bg-surface-hover);
  border-color: var(--text-secondary);
}
```

### 3.3. Badge de Status em Produção
```css
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-pill::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
}
```

---

## 🤖 4. PROMPT MESTRE PARA COLAR NA IA (Ao converter um sistema)

Quando você abrir qualquer sistema que deseja transformar em projeto público do seu portfólio, copie a pasta `pasta coringa` para dentro dele (ou apenas cole o prompt abaixo no chat da IA):

```markdown
Quero converter este sistema para a minha linha de Portfólio Pessoal ("Aaron Dev") para publicação no meu GitHub (`https://github.com/aarongmn7`).

Execute obrigatoriamente as 4 etapas abaixo:

1. **SANITIZAÇÃO WHITE-LABEL & ISOLAMENTO ESTRITO:**
   - Remova 100% de qualquer menção a "Neocron", domínios corporativos (`neocron.com.br`), CNPJ ou títulos empresariais (Founder, CEO, Diretor, Software House).
   - Substitua a assinatura/autoria do sistema em rodapés, títulos, cabeçalhos, `package.json` e metadados por: **Aaron Nascimento | Engenharia de Software** (`https://aaron-nascimento-portfolio.vercel.app/` | `https://github.com/aarongmn7`).

2. **APLICAÇÃO DO DESIGN SYSTEM "AARON DEV" (MONOCHROME LIGHT & DARK OLED):**
   - Elimine todas as cores laranjas ou azuis antigas (incluindo scrollbars laranjas).
   - Aplique a paleta minimalista baseada em variáveis CSS (`--bg-base`, `--bg-surface`, `--text-primary`, `--text-secondary`, `--border-color`, `--accent-primary`):
     - **Light Mode:** Fundo `#ffffff`, Superfícies `#f4f4f5`, Bordas `#e4e4e7`, Texto `#09090b`, Acento `#000000`.
     - **Dark Mode (`[data-theme="dark"]`):** Fundo OLED `#000000`, Superfícies `#0a0a0a` e `#18181b`, Bordas `#27272a`, Texto `#fafafa`, Acento `#ffffff`.
   - Use tipografia `Inter` para interface e `JetBrains Mono` para métricas, IDs, logs, badges e tabelas técnicas.
   - Adicione um botão de alternância de tema (Light/Dark) na barra superior do sistema persistindo no `localStorage`.

3. **ASSINATURA VISUAL NO HEADER E FOOTER DO SISTEMA:**
   - No Header/Sidebar do sistema, utilize a logo de `assets/logo.svg` com filtro adaptativo (`filter: grayscale(100%) brightness(0)` no claro e `invert(1)` no escuro) acompanhada do nome técnico do módulo e uma badge `AARON DEV // ENGINEERING SHOWCASE`.
   - No rodapé, inclua links diretos para o Portfólio (`https://aaron-nascimento-portfolio.vercel.app/`), GitHub (`https://github.com/aarongmn7`) e LinkedIn (`https://www.linkedin.com/in/aaron-nascimento-dev/`).

4. **README.md DE ENGENHARIA (PADRÃO RECRUTADOR / TECH LEAD):**
   - Reescreva o `README.md` apresentando o projeto como um estudo de caso de Engenharia de Software construído do zero por **Aaron Gabriel Maciel Nascimento**, detalhando: Problema Resolvido, Arquitetura Técnica, Stack, Modelagem de Dados, Como Rodar Localmente e Links de Contato.
```
