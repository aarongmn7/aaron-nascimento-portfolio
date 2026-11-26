# 🖱️ ESPECIFICAÇÃO & PROMPT DE EXECUÇÃO — PORTFÓLIO SWARM EDITION (CURSORES AUTÔNOMOS & EFEITOS TÁTEIS)

Documento técnico e prompt pronto para o **Hydrogen** (ou outro modelo executor) criar um laboratório/cópia do portfólio pessoal com a integração do **Enxame de Mouses ("Swarm Layer" — somente o ponteiro SVG, sem etiquetas de texto embaixo)** e dos efeitos táteis interativos extraídos de [`pessoal/projetos/projetos alheios/index (2).html`](../../../projetos%20alheios/index%20(2).html).

---

## 🎯 Visão de Produto (Foco no Cliente / Recrutador Leigo)
- **Filosofia:** Sites feitos para clientes precisam parecer **vivos, táteis e com acabamento de produto caro**, onde elementos se movem e demonstram interatividade sozinhos sem exigir esforço do visitante.
- **Regra Visual Principal dos Mouses:** Ao contrário da referência original (que exibia crachás com nomes como `Layout`, `API`, `CSS` pendurados em cada cursor), nesta implementação **os cursores devem ser 100% limpos (APENAS a setinha do mouse colorida com borda branca e sombra**, mais o badge circular discreto de `+` durante clonagens).
- **Isolamento de Segurança:** Todo o experimento deve rodar em uma pasta clonada (`aaron-nascimento-portfolio-swarm`), preservando o repositório oficial `aaron-nascimento-portfolio-main` intacto até aprovação visual.

---

## 🧬 Anatomia Técnica Extraída da Referência (`index (2).html`)

| Recurso | Linhas na Referência | Como funciona e como adaptar ao Portfólio do Aaron |
| :--- | :--- | :--- |
| **1. Cursor SVG Limpo (`.cur`)** | `351–355`, `884`, `900–912` | SVG `<svg viewBox="0 0 20 22"><path d="M2 1.5v17l4.6-4.3 3 6.3 3-1.4-3-6.2h6.3z" fill="C" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>` com `drop-shadow(0 2px 3px rgba(0,0,0,.5))`. **Sem `<span class="nm">`.** |
| **2. Caixa de Seleção Figma (`.selbox`)** | `356–359`, `952–958` | Retângulo azul (`border: 1.5px solid #3ea2ff; background: rgba(62,162,255,.06)`) com 4 quadradinhos brancos nos vértices (`.hd`) e pílula inferior (`.tg`) exibindo `Largura × Altura` em tempo real enquanto o cursor arrasta. |
| **3. Smart Guides Rosa (`.guide`)** | `363–364`, `984–994` | Linhas de alinhamento de `1px` (`#ff3e9a`) horizontais/verticais que piscam rapidamente quando um cursor termina de posicionar um card ou imagem. |
| **4. Dança Conga / Lissajous (`startConga`)** | `1092–1109` | Quando os cursores terminam de montar a seção, eles entram em uma curva harmônica suave (`Math.sin(t)` / `Math.cos(t)`) passeando pela tela sem bloquear cliques (`pointer-events: none`). |
| **5. Auto-QA / Teste Autônomo (`runTests`)** | `1079–1088` | Um cursor livre voa até componentes interativos (como a seta `.story-nav-next` ou as pílulas `.story-quick-pill` dos Stories) e clica sozinho para mostrar ao visitante que o componente gira. |
| **6. Dock Flutuante (`.bar`)** | `378–401`, `858–869`, `1242–1269` | Pílula fixa no rodapé com `backdrop-filter: blur(12px)`, bolinhas das cores dos mouses ativos, contador, botão **Tour Guiado** (auto-scroll seção por seção), velocidade (`1×`, `2×`, `4×`), **Pausar/Ocultar** (`localStorage`) e **Replay (`↻`)**. |
| **7. Mira Azul de Editor no Hover (`.hsel`)** | `371–374`, `1234–1240` | Quando o usuário real passa o mouse em botões/cards, um contorno azul estilo Figma com 4 handles brancos nos cantos abraça o elemento. |
| **8. Botões Magnéticos (`.mag`)** | `492`, `1298–1300` | Botões principais sofrem leve atração magnética (`translate`) em direção ao ponteiro do mouse do visitante. |
| **9. Inclinação Física 3D (`[data-tilt]`)** | `489–491`, `1294–1296` | Cards principais (Terminal do Hero e Card de Perfil) inclinam suavemente em perspectiva 3D (`perspective(1100px) rotateX(...) rotateY(...)`) ao mover o mouse sobre eles. |

---

## 📋 PROMPT PRONTO PARA O HYDROGEN EXECUTAR

> **Instrução de uso:** Quando quiser implementar, basta copiar todo o bloco abaixo e colar para o modelo **Hydrogen**.

```markdown
Você vai criar uma versão experimental do portfólio pessoal de Aaron integrando a engine de cursores autônomos ("Swarm Layer") e os efeitos táteis extraídos de `C:\Users\AaronGabrieldaEphexT\Downloads\ECO-AARON-master\pessoal\projetos\projetos alheios\index (2).html`.

Siga rigorosamente os 4 passos abaixo:

### PASSO 1: Clonar o Portfólio Corrigido (Ambiente Isolado)
1. Crie a pasta irmão:
   `C:\Users\AaronGabrieldaEphexT\Downloads\ECO-AARON-master\pessoal\projetos\projetos pessoais\codigo\aaron-nascimento-portfolio-swarm`
2. Copie todo o código-fonte de `aaron-nascimento-portfolio-main` (`public`, `src`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, etc., exceto `node_modules` e `dist`) para `aaron-nascimento-portfolio-swarm`.
3. IMPORTANTE: Execute todas as alterações a seguir EXCLUSIVAMENTE dentro de `aaron-nascimento-portfolio-swarm`, mantendo `aaron-nascimento-portfolio-main` intacto.

### PASSO 2: Criar `src/components/SwarmLayer.jsx` e `src/components/SwarmLayer.css`
Baseado nas linhas 348–402 e 884–1270 de `C:\Users\AaronGabrieldaEphexT\Downloads\ECO-AARON-master\pessoal\projetos\projetos alheios\index (2).html`, crie o componente `SwarmLayer` e integre-o em `src/pages/Home.jsx`:

1. **Cursores Limpos (APENAS O MOUSE SVG, ZERO TEXTO EMBAIXO)**:
   - Use o SVG do ponteiro:
     `<svg viewBox="0 0 20 22"><path d="M2 1.5v17l4.6-4.3 3 6.3 3-1.4-3-6.2h6.3z" fill="COLOR" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>`
   - Paleta de cores vibrantes:
     `['#ff5a4e','#3ea2ff','#ffb020','#2fd08b','#b26bff','#ff3e9a','#21c7d9','#ff7a1a','#7c8cff','#e0d020','#ff6fb5','#4fd1a5']`
   - **REGRA OBRIGATÓRIA:** NÃO renderize nenhuma etiqueta de texto (`<span class="nm">`) embaixo dos mouses. Deve aparecer apenas o ponteiro do mouse colorido (e o badge circular `+` discreto apenas durante animações de cópia).
   - O container `#swarm-layer` deve cobrir a altura total do documento com `pointer-events: none; z-index: 80; overflow: hidden;` para nunca atrapalhar os cliques reais do visitante.

2. **Coreografia de Construção e Movimento Autônomo**:
   - **Boot Orbital Rápido (~0.9s):** Ao carregar a Home, spawne 12 cursores no desktop (6 no mobile) vindos das bordas da tela, faça uma órbita rápida no centro da viewport e distribua-os para "montar" os blocos visíveis.
   - **Seleção Estilo Figma (`.selbox`) + Smart Guides (`.guide`):** Nos elementos principais de cada seção as caixas azuis (`1.5px solid #3ea2ff`, `background: rgba(62,162,255,.06)`) com 4 handles quadrados brancos nos cantos e o badge inferior (`${Math.round(w)} × ${Math.round(h)}`) devem ser arrastadas pelos cursores antes de revelar/destacar o bloco, piscando uma smart guide rosa (`#ff3e9a`) ao finalizar.
   - **Voo Livre Harmônico (`startConga`):** Quando os cursores estiverem livres, mantenha-os deslizando suavemente em curva de Lissajous pela viewport ativa (seguindo a trilha histórica com defasagem `gap`), dando vida contínua à página.
   - **Interação Autônoma com os Stories (`autoDemo`):** Se o visitante não estiver com o mouse em cima do deck de Stories, a cada ~9 segundos um cursor livre pode voar até o botão `.story-nav-next`, fazer um efeito visual de clique (`scale(0.85)`) e acionar o avanço do story ou simular inspeção do card ativo.

3. **Dock Flutuante no Rodapé (`.swarm-bar`)**:
   - Barra fixa em `bottom: 14px; left: 50%; transform: translateX(-50%); z-index: 90;` em formato pílula com `backdrop-filter: blur(12px)`, adaptada tanto ao Dark Mode quanto ao Light Mode do portfólio.
   - Itens da barra:
     - Bolinhas coloridas sobrepostas (`.swarm-avs`) + contador (`12 cursores`).
     - Status curto em tempo real (`Montando seção...` / `Cursores ativos` / `Pausado`).
     - Botão **Tour** (`Tour` / `Parar`): faz auto-scroll suave passando por `#hero`, `#sobre`, `#habilidades`, `#projetos`, `#trajetoria` e `#contato`, interrompendo imediatamente se o usuário usar `wheel`, `touchstart` ou `keydown`.
     - Seletor de velocidade (`1×`, `2×`, `4×`).
     - Botão **Pausar/Ocultar Mouses** (salva estado em `localStorage.getItem('aaronSwarmPaused')`) e botão **Replay (`↻`)** que reinicia a coreografia de montagem.
   - Adicione suporte a `i18n` (PT/EN) para os textos da barra em `src/i18n.js`.

### PASSO 3: Integrar os 3 Efeitos Táteis Extras (Desktop `pointer: fine`)
1. **Mira Azul de Editor no Hover (`.hsel`):**
   - Ao passar o mouse real sobre botões e controles clicáveis (`.btn-primary`, `.btn-secondary`, `.btn-contact`, `.story-nav-btn`, `.story-quick-pill`, `.btn-action`, `.profile-social-btn`), posicione uma moldura fixa `.hsel` (`border: 1.5px solid #3ea2ff`) com 4 quadradinhos brancos nos cantos envolvendo o elemento com folga de `5px`. Esconda durante o scroll.
2. **Botões Magnéticos (`.mag`):**
   - Nos botões principais, adicione o efeito magnético suave no `pointermove` (`translate: ${(x - width/2) * 0.25}px ${(y - height/2) * 0.3}px`) e resete no `pointerleave`.
3. **Inclinação Física 3D (`Tilt 3D`) + Barra de Progresso no Topo (`.scroll-prog`):**
   - No `.terminal-window` (Hero) e no `.profile-card` (Sobre), aplique inclinação 3D suave (`perspective(1100px) rotateX(...) rotateY(...)`, máximo de `6deg`) conforme a posição do mouse sobre o card.
   - Adicione a barra fina de progresso de leitura (`height: 2px; position: fixed; top: 0; left: 0; right: 0; z-index: 101;`) que cresce com `scaleX` conforme o scroll da página.

### PASSO 4: Build e Verificação
1. Na pasta `aaron-nascimento-portfolio-swarm`, vincule ou instale os pacotes e execute `npm run build`.
2. Garanta zero erros de compilação ou warnings de imports quebrados.
```
