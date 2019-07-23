import React from 'react'
import FrameLogin from './FrameLogin'
import './../styles/HomePage.css'

const HomePage = () => {
    return (
    <div>
       <h3>Más de mil mujeres y compañias nos avalan</h3> 
       <h1>Conectamos el talento femenino con las mejores empresas que tienen ofertas flexibles para ellas</h1>
        {/* <HomeLogin/> */}
        {/* <Login/> */}
        <div className="sectionLogin">   
       <FrameLogin/>
       </div>
    </div>
    )
}

export default HomePage;