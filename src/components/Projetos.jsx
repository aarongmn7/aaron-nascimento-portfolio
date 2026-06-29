import React, { useState, useEffect } from 'react';
import { C, LANG_COLORS } from '../config';

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadRepos() {
      if (!C.githubUser || C.githubUser === 'seu-usuario-github') {
        setError('Configure seu usuário do GitHub no código para carregar seus projetos reais aqui.');
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`https://api.github.com/users/${C.githubUser}/repos?sort=updated&per_page=4`);
        const data = await res.json();
        if (data.length === 0) throw new Error();
        setRepos(data);
      } catch (err) {
        setError('Nenhum repositório público encontrado ou limite de API excedido.');
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  return (
    <section id="projetos" className="fi">
      <h2 className="sec-title">Projetos de Destaque</h2>
      <div className="grid">
        <div className="project-card fi">
          <h3><i className="fas fa-box-open" style={{ color: 'var(--accent)', marginRight: '.5rem' }}></i>mini-erp-gestao-ativos</h3>
          <p>Mini-ERP modular para gestão e monitoramento de ativos de TI. Desenvolvido com Node.js, React, Tailwind CSS e SQL.</p>
          <div className="project-tech">
            <span className="stag">Node.js</span><span className="stag">Express</span><span className="stag">PostgreSQL</span><span className="stag">React</span>
          </div>
          <div className="project-links">
            <a href="#" className="btn-outline"><i className="fab fa-github"></i> Repositório</a>
          </div>
        </div>

        <div className="project-card fi">
          <h3><i className="fas fa-globe" style={{ color: 'var(--accent)', marginRight: '.5rem' }}></i>Portfólio Pessoal</h3>
          <p>Meu site de portfólio desenvolvido sem frameworks, focando em performance e Clean Code. Possui design responsivo, tema escuro e integração em tempo real com a API do GitHub.</p>
          <div className="project-tech">
            <span className="stag">HTML5</span><span className="stag">CSS3</span><span className="stag">JavaScript</span>
          </div>
          <div className="project-links">
            <a href="#" className="btn-outline"><i className="fab fa-github"></i> Repositório</a>
          </div>
        </div>
      </div>

      <div id="gh-repos" className="fi">
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Projetos em desenvolvimento (GitHub)</h3>
        <div className="gh-grid" id="reposGrid">
          {loading && <div style={{ gridColumn: '1/-1', color: 'var(--text-muted)', textAlign: 'center' }}>Carregando repositórios...</div>}
          
          {error && (
            <div style={{ gridColumn: '1/-1', color: 'var(--text-muted)', padding: '1rem', border: '1px dashed var(--border-color)', borderRadius: '6px', textAlign: 'center' }}>
              <i className="fas fa-info-circle"></i> {error}
            </div>
          )}

          {!loading && !error && repos.map(repo => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="gh-card">
              <div className="gh-title"><i className="far fa-folder" style={{ color: 'var(--accent)' }}></i> {repo.name}</div>
              <div className="gh-desc">{repo.description || 'Projeto focado em regras de negócio e desenvolvimento backend.'}</div>
              <div className="gh-meta">
                {repo.language && (
                  <span>
                    <span className="lang-dot" style={{ background: LANG_COLORS[repo.language] || 'var(--accent)' }}></span>
                    {repo.language}
                  </span>
                )}
                <span><i className="fas fa-star" style={{ marginRight: '.25rem' }}></i>{repo.stargazers_count}</span>
                <span><i className="fas fa-clock" style={{ marginRight: '.25rem' }}></i>{new Date(repo.pushed_at).toLocaleDateString('pt-BR')}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
