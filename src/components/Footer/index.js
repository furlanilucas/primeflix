
import React from 'react';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Lucas Furlani. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
