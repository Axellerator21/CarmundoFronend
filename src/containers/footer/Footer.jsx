import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Cuida a tu carrito uwu</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicita el servicio</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Sincelejo K12 182 DK Alknjkcb, <br /> Todos los derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compañia</h4>
        <p>Terminos y condiciones & Condiciones </p>
        <p>Politicas de privacidad</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>mpalaciosm2000@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Carmundo. Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
