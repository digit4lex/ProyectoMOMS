import React  from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'
import errorPage from '../assets/errorPage.png'

const NotFoundPage = () => {
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
              fontWeight: "bold"
          },
          h8: {
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            marginLeft: "40%",
            alignItems: "center",
            textAlign: "center"
          },
          img:{
              height:"185px",
              width:"360px",
          },
          button: {
            width:"270px",
            height:"41px",
            marginLeft: "14%",
            marginTop: "15%",
            textAlign:"center"
          }
      }
    return (
      <div className="frameOne">
          <h1 style={style.h1} >¡Oops!</h1>
          <h8 style={style.h8} >Error 404</h8>
          <h2 style={style.h2}>Parece que no podemos encontrar la página que estás buscando</h2>
            <img style={style.img} src={errorPage} alt="error"></img>
           
          <Link to="/"><Button style={style.button} title="Volver a la página de inicio"/></Link>
         
        </div>
       
    //   
    );
  };

export default NotFoundPage;