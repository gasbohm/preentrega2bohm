// Footer.js
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="mapa">
        <a href="https://www.google.com/maps/place/Delta+Fitness/@-34.9040187,-56.1706857,17z/data=!3m1!4b1!4m6!3m5!1s0x959f81c26360be27:0xf310700c488c4d62!8m2!3d-34.9040231!4d-56.1681108!16s%2Fg%2F11nl734zyh?entry=ttu" target="_blank">
          <img src="../imagenes/mapa .png" alt="Mapa" />
        </a>
        <p>CHANA 2220</p>
      </div>
      <div className="tel">
        <a href="https://wa.me/+598099555742" target="_blank">
          <img src="../imagenes/telefono.png" alt="Teléfono" />
        </a>
        <p>099 555 742</p>
      </div>
      <div className="redes">
        <a href="https://www.instagram.com/deltafitness.uy/?hl=es-la" target="_blank">
          <img src="../imagenes/ig.png" alt="Instagram" width="32px" height="auto" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="../imagenes/facebook .png" alt="Facebook" width="32px" height="auto" />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des" target="_blank">
          <img src="../imagenes/twiter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/?hl=es" target="_blank">
          <img src="../imagenes/youtube .png" alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
