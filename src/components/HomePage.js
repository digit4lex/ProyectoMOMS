import React from 'react'
import FrameLogin from './FrameLogin'
import './../styles/HomePage.css'

const HomePage = () => {
    return (
    <div>
       <p> Hola esta es la página de inicio </p> 
        {/* <HomeLogin/> */}
        {/* <Login/> */}
        <div className="sectionLogin">   
       <FrameLogin/>
       </div>
    </div>
    )
}

export default HomePage;