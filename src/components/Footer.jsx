import React from 'react';
import { C } from '../config';

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} <span id="footName">{C.primeiroNome}</span>. Desenvolvido via Prompt Engineering & Clean Code. <i className="fas fa-terminal" style={{ color: 'var(--accent)' }}></i>
      </p>
    </footer>
  );
}
