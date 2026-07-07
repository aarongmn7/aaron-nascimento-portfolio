export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} AARON NASCIMENTO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}