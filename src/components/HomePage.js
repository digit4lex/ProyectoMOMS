import React from 'react'
import FrameLogin from './FrameLogin'
import './../styles/HomePage.css'
import { MDBContainer } from 'mdbreact'
import Footer from './Footer'
import Background from '../assets/Group.jpg'
///import HomeLogin from './HomeLogin'

const HomePage = () => {
    let style={
        h3: {
            fontFamily: "Montserrat",
            fontSize: "18px",
            lineHeight: "22px",
            alignItems: "center",
            textAlign: "center",
            color: "#FFFFFF",
            marginTop: "3rem"
            
        },
        h2: {
            fontFamily: "Playfair Display",
            fontSize: "26px",
            lineHeight: "35px",
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
            color: "#FFFFFF",
            padding:"40px"
        }
    }
    return (

    <div>
        <MDBContainer className="homepagecontainer" style={{backgroundImage:`url(${Background})`, backgroundSize:"100%"}}>
            <br/>
            <h3 style={style.h3}> Más de mil mujeres y compañías nos avalan </h3>
            <h1 style={style.h2}>Conectamos el talento femenino con las mejores empresas que tienen ofertas flexibles para ellas</h1>
       
        
            <FrameLogin/>
            <Footer/>
        </MDBContainer>
    </div>
    )
}

export default HomePage;