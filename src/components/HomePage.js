import React from 'react'
import FrameLogin from './FrameLogin'
///import HomeLogin from './HomeLogin'
import './../styles/HomePage.css'

const HomePage = () => {
    let style={
        h3: {
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "22px",
            alignItems: "center",
            textAlign: "center",

            /* Blanco mom's */

            /* background: "#FFFFFF" */
            color: "#FFFFFF"
        },
        h2: {
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "26px",
            lineHeight: "35px",
            alignItems: "center",
            textAlign: "center",
            color: "#FFFFFF"

        }
    }
    return (
    <div>
        <div>
            <h3 style={style.h3}> Más de mil mujeres y compañias nos avalan </h3>
            <h1 style={style.h2}>Conectamos el talento femenino con las mejores empresas que tienen ofertas flexibles para ellas</h1>
        </div>
        {/* <HomeLogin/> */}
        {/* <Login/> */}
        <div className="sectionLogin">   
            <FrameLogin/>
        </div>
    </div>
    )
}

export default HomePage;