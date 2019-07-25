import React from "react";
import '../styles/Footer.css'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'

const FooterPage = () => {


  return (
    <footer style={{backgroundColor:"#355E7E"}}  className="footer">
      <div style={{backgroundColor:"#355E7E"}}className="footercontainer">
        <p>Escríbenos a</p>
        <p style={{color:"#F1717F"}} >contacto@proyectomoms.com</p>
        <p>O visita nuestras redes sociales</p>
        <a href="https://www.instagram.com/proyectomoms/"><img src={instagram}  style={{width: "25px", height: "25px", marginRight: "9px"}} alt="instagram"></img></a>
        <a href="https://twitter.com/proyectoMOMS"><img src={twitter} style={{width: "25px", height: "25px", margin: "9px"}} alt="twitter"></img></a>
        <a href="https://www.youtube.com/channel/UCuxA7DoIlM2wx9QhsrGTJYw"><img src={youtube} style={{width: "25px", height: "25px", margin: "9px"}} alt="youtube"></img></a>
        <a href="https://www.facebook.com/proyectomoms/"><img src={facebook} href="https://www.facebook.com/ProyectoMoms-526667731199896/" style={{width: "25px", height: "25px", margin: "9px"}} alt="facebook"></img></a>
        <p>ProyectoMom's 2019</p>
        </div>
    </footer>
  );
}

export default FooterPage;