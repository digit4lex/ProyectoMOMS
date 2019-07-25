import React from "react";
import '../styles/Footer.css'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'

const FooterPage = () => {


  return (
    <footer style={{backgroundColor:"#355E7E"}}  className="footer">
      <container style={{backgroundColor:"#355E7E"}}className="footercontainer">
        <p>Escríbenos a</p>
        <p style={{color:"#F1717F"}} >contacto@proyectomoms.com</p>
        <p>O vista nuestras redes sociales</p>
        <img src={instagram} style={{width: "25px", height: "25px", marginRight: "9px"}} alt="instagram"></img>
        <img src={twitter} style={{width: "25px", height: "25px", margin: "9px"}} alt="twitter"></img>
        <img src={youtube} style={{width: "25px", height: "25px", margin: "9px"}} alt="youtube"></img>
        <img src={facebook} style={{width: "25px", height: "25px", margin: "9px"}} alt="facebook"></img>
        <p>ProyectoMom's 2019</p>
        </container>
    </footer>
  );
}

export default FooterPage;