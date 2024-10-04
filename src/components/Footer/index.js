// Footer.js
import React from 'react';
import './footer.css'; // Você pode criar um arquivo CSS para estilizar o footer

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Nome da Sua Empresa. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
