# Identidade Visual e Arquivos Coringa

Esta pasta (`pasta coringa`) contém os arquivos essenciais que definem a identidade visual do seu portfólio. Você pode copiar esta pasta para futuros projetos para garantir que todos tenham a mesma cara, estilo, funcionalidade de temas e marca (logo).

## 📁 Estrutura da Pasta

- `styles/global.css`: Define as variáveis CSS globais de cores para os temas Claro (Light) e Escuro (Dark), o background, fontes, scrollbar, botões padrão e estilos básicos.
- `styles/index.css`: Define a estética complementar focada no seu portfólio (ex: janela do terminal Apple).
- `assets/logo.svg`: Sua logo original Azul Royal (`#2563eb`).
- `assets/logo-black.svg`: Sua logo na cor preta (Ideal para o **Tema Claro**).
- `assets/logo-white.svg`: Sua logo na cor branca (Ideal para o **Tema Escuro**).
- `scripts/theme-manager.js`: Script que garante a **obrigatoriedade da presença dos temas**, gerenciando o modo Light/Dark automaticamente.

## 🎨 Paleta de Cores e Temas

A estrutura é baseada em variáveis CSS (`--var`). Aqui está o resumo técnico das cores:

### Modo Claro (Light Theme)
- **Background Principal:** `#ffffff` (Branco puro)
- **Superfícies:** `#f4f4f5` (Cinza claro sutil)
- **Texto Principal:** `#09090b` (Quase preto)
- **Texto Secundário:** `#52525b` (Cinza médio)
- **Acentos:** `#000000` (Preto puro)
- **Logo Recomendada:** `logo-black.svg` ou `logo.svg` (Azul)

### Modo Escuro (Dark Theme)
- **Background Principal:** `#000000` (Preto puro OLED)
- **Superfícies:** `#0a0a0a` e `#18181b` (Quase preto/chumbo escuro)
- **Texto Principal:** `#fafafa` (Branco suave)
- **Texto Secundário:** `#a1a1aa` (Cinza zinco)
- **Acentos:** `#ffffff` (Branco no escuro)
- **Logo Recomendada:** `logo-white.svg`

## ⚙️ Como Utilizar em um Novo Projeto

### 1. Garantir a Obrigatoriedade do Tema (Theme Manager)
Para que o sistema de Light/Dark Mode funcione em qualquer projeto futuro:
- Copie a pasta `scripts` e importe o `theme-manager.js` no arquivo de inicialização do seu app (Ex: `main.jsx`, `App.jsx`, `index.js`, ou direto no `<head>` do HTML).
- Isso garantirá que o atributo `data-theme="dark"` seja aplicado corretamente no `<html>` baseado na preferência do sistema operacional do visitante, e salva a escolha se ele trocar!
- Para adicionar um botão de alternar tema no seu código, basta chamar a função global: `window.ThemeManager.toggle()` no clique.

### 2. Importar os Estilos
Copie a pasta `styles` para o seu diretório CSS e faça as importações (ex: `import './styles/global.css'`). A marcação HTML que seguir o CSS vai automaticamente adotar a identidade.

### 3. Utilizar as Logos
Copie a pasta `assets`. Dependendo de como você gerencia o tema no seu componente (exemplo em React), você pode trocar dinamicamente a logo:
```jsx
// Exemplo React:
const temaAtual = document.documentElement.getAttribute('data-theme') === 'dark';
<img src={temaAtual ? 'caminho/logo-white.svg' : 'caminho/logo-black.svg'} />
```
