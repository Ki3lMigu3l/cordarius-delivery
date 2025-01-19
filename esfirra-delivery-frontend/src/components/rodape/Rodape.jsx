import React from "react";
import "./Rodape.css";

function Rodape() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Informações de Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p><i className="fa-solid fa-phone"></i> Telefone: (81) 99274-4218</p>
          {/* <p>📧 Email: delivery@example.com</p> */}
          <p> <i className="fa-solid fa-location-dot"></i> Belo Jardim - PE</p>
        </div>

        {/* Links Úteis */}
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a href="/menu">Cardápio</a>
            </li>
            <li>
              <a href="/about">Sobre Nós</a>
            </li>
            <li>
              <a href="/contact">Fale Conosco</a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/+558199999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Cordarius Delivery. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
