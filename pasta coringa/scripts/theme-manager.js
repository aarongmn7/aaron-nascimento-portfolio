/**
 * Theme Manager - Enforces the Light/Dark theme identity
 * 
 * Este script garante a obrigatoriedade da presença dos temas.
 * Ele detecta automaticamente a preferência do usuário ou carrega o tema salvo.
 * 
 * Como usar:
 * Importe este arquivo no ponto de entrada da sua aplicação (ex: main.jsx, index.js, ou na tag <head>).
 * Exemplo de importação no React: import './scripts/theme-manager.js';
 */

(function initThemeManager() {
  const THEME_STORAGE_KEY = 'portfolio-theme';
  
  // Função que aplica o tema no HTML
  const applyTheme = (theme) => {
    // Para ser compatível com o global.css que utiliza [data-theme="dark"]
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark'); // Caso use Tailwind no futuro
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
    }
  };

  // 1. Tenta pegar o tema salvo no localStorage
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  
  // 2. Se não houver salvo, pega a preferência do sistema operacional
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // 3. Define o tema inicial (Obrigatório)
  const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  // Expõe o gerenciador globalmente para que botões de "Switch" possam chamá-lo
  window.ThemeManager = {
    currentTheme: initialTheme,
    
    toggle: () => {
      window.ThemeManager.currentTheme = window.ThemeManager.currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(window.ThemeManager.currentTheme);
      localStorage.setItem(THEME_STORAGE_KEY, window.ThemeManager.currentTheme);
      
      // Dispara um evento customizado caso algum componente React/Vue queira escutar a mudança
      window.dispatchEvent(new CustomEvent('themeChanged', { detail: window.ThemeManager.currentTheme }));
      
      return window.ThemeManager.currentTheme;
    },
    
    setTheme: (theme) => {
      if(theme === 'dark' || theme === 'light') {
        window.ThemeManager.currentTheme = theme;
        applyTheme(theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      }
    }
  };
})();
