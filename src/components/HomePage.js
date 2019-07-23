import React from 'react'
import FrameLogin from './FrameLogin'
import './../styles/HomePage.css'
import { MDBContainer } from 'mdbreact'
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
            padding:"10px"
        },
        h2: {
            fontFamily: "Playfair Display",
            fontSize: "26px",
            lineHeight: "35px",
            alignItems: "center",
            textAlign: "center",
            color: "#FFFFFF",
            padding:"10px"
        }
    }
    return (
    <div>
        <MDBContainer>
            <br/>
            <h3 style={style.h3}> Más de mil mujeres y compañías nos avalan </h3>
            <h1 style={style.h2}>Conectamos el talento femenino con las mejores empresas que tienen ofertas flexibles para ellas</h1>
        </MDBContainer>
        <MDBContainer className="sectionLogin">   
            <FrameLogin/>
        </MDBContainer>
    </div>
    )
}

export default HomePage;