import React, { Component } from 'react';
import './Footer.css';
import Facelogo from './logos/face.png';
import Twitlogo from './logos/twitter.png';
import Instalogo from './logos/instagram.png';
import  BvkLogo from './logos/teste.png';


class Footer extends Component 
{
  render = () => {
    return (
      <footer>
      <section className="footer"> 
       <div className="textos">
         <p>Bivaque, Inc.</p>
         <a href="">Carreira</a>
         <a href="">Imprensa</a>
         <a href="">Ajuda</a>
         <a href="">Diversidade e inclusão</a>
         <a href="">Dados da empresa</a>
        </div>
        <div className="textos">  
         <p>Bivaque, Inc</p>  
         <a href="">Guia de acampamento</a>
         <a href="">Confiança e segurança</a>
         <a href="">Convidar amigos</a>
         <a href="">Viagem</a>
        </div>
        <div className="textos">  

            <div className ="logos"> 
              <a href=""><img src={Facelogo} alt="face"/></a>  
              <a href=""><img src={Instalogo} alt="twitter"/></a>
              <a href=""><img src={Twitlogo} alt="twitter"/></a>             
            </div>

          <a href="">Condições</a>
          <a href="">Política de privacidade</a>
          <a href="">Política de uso</a>
        </div>  
      </section> 
      <div className="alinhamento">
        <p className="linha" >_________________________________________________________________________________________________________</p>
        <div id="logofooter">
          <a> <img  src={BvkLogo} alt="logo bivaque"/>  Bivaque, Inc. </a>
        </div>
      </div>
      </footer>
      
    );
  }
}

export default Footer;
