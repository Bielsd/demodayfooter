import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component 
{
  render = () => {
    return (
      <section className="footer">
        <div class="bloquinho1">
          <p>Bivaque, Inc.</p>
          <a href="">Carreira</a>
          <a href="">Imprensa</a>
          <a href="">Ajuda</a>
          <a href="">Diversidade e inclusão</a>
          <a href="">Dados da empresa</a>
        </div> 
        <div className="bloquinho2">        
          <a href="">Guia de acampamento</a>
          <a href="">Confiança e segurança</a>
          <a href="">Convidar amigos</a>
          <a href="">Viagem</a>
        </div>  
        <div className="Loguinhos"></div>
        <div className="bloquinho3">
          <a href="">Condições</a>
          <a href="">Política de privacidade</a>
          <a href="">Política de uso</a>
        </div>    
      </section>
    );
  }
}

export default Footer;
