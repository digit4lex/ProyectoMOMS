import React  from 'react';
import Button from './Button';
import woman from '../assets/woman.png'
import './../styles/Congrats.css'
import { Link } from 'react-router-dom'

const Congrats = () => {
      let style={
          h2: {
              fontFamily: "Montserrat",
              fontSize: "22px",
              lineHeight: "27px",
              alignItems: "center",
              textAlign: "center",
              color: "#535151",
              padding:"15px 50px 20px 50px"
             
          },
          h1: {
              fontFamily: "Playfair Display",
              fontSize: "26px",
              lineHeight: "35px",
              alignItems: "center",
              textAlign: "center",
              color: "#535151",
              padding:"40px 0px 20px 0px",
              fontWeight: "bold"
          },
          img:{
              height:"250px",
              width:"100%",
              padding:"10px 0px 20px 0px"
          },
          button:{
            marginLeft:"53px"
          }
      }
    return (
      <div className="frameOne">
          <h1 style={style.h1} >¡Felicitaciones!</h1>
          <h2 style={style.h2}>Ya eres parte de la comunidad de Proyecto Mom’s</h2>
            <img style={style.img} src={woman} alt="woman"></img>
           
          <Link to="/profile"><Button style={style.button} title="¡OK! Ingresa a tu cuenta"/></Link>
         
        </div>
       
    //   
    );
  };

export default Congrats;