import React from 'react';
import InputBase from './InputBase';
import Button from './Button';
import { Link } from 'react-router-dom'
import './../styles/Login.css'

const Login = () => {
    let style={
        h2: {
            fontFamily: "Playfair Display",
            fontSize: "26px",
            lineHeight: "22px",
            width:"375px",
            height: "35px",
            color:"#535151",
            textAlign:"center"
        },
        h5:{
            fontFamily: "Montserrat",
            fontSize: "14px",
            textAlign:"center"
        }
    }
    return (
      <div className="modal-fluid modal-notify" role="document">
        <div className="modal-content">
            <div className="modal-header">   
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{textAlign:"center"}} >
              <h2 style={style.h2}>Ingresa a tu cuenta</h2>
              <InputBase Name="Ingresa tu correo"/>
            <InputBase Name="Ingresa tu contraseña"/>
            <Button title="Inicia Sesión"/>
          </div>
          <div className="modal-footer flex-center">
         <h5 style={style.h5}>¿No tienes cuenta? <Link style={{color:"#F1717F"}}to="/register">Regístrate</Link></h5>
          </div>
        </div>
        
      </div>
       
    
    )
}

export default Login;