import React  from 'react';
import Button from './Button';
import woman from '../assets/woman.png'
import './../styles/Congrats.css'
import { Link } from 'react-router-dom'

const Congrats = () => {
      let style={
          h2: {
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "22px",
              alignItems: "center",
              textAlign: "center",
              color: "#535151",
              padding:"11px"
              
          },
          h1: {
              fontFamily: "Playfair Display",
              fontSize: "26px",
              lineHeight: "35px",
              alignItems: "center",
              textAlign: "center",
              color: "#535151",
              padding:"10px"
          },
          img:{
              height:"184px",
              width:"375px",
              padding:"20px"
          }
      }
    return (
      <div className="frameOne">
          <h1 style={style.h1} >¡Felicitaciones!</h1>
          <h2 style={style.h2}>Ya eres parte de la comunidad de Proyecto Mom’s</h2>
            <img style={style.img} src={woman} alt="woman"></img>
          <Link to="/profile"><Button title="¡OK! Ingresa a tu cuenta"/></Link>
        </div>
       
    //   
    );
  };

export default Congrats;