import React from 'react';
import InputBase from './InputBase';
import Button from './Button';
import { Link } from 'react-router-dom'
import './../styles/Login.css'

const Login = () => {
    let style = {
        h2: {
            fontFamily: "Playfair Display",
            color: "#535151",
            fontSize: "26px"
        },
        h5: {
            fontFamily: "Montserrat",
            fontSize: "16px",
            marginTop: "-10rem"
        },
        button: {
            marginTop: "15%"
        }
    }
    return (
        <div className="modal-fluid modal-notify" role="document">
            <div className="modal-content">
                <div className="modal-header" style={{ borderBottom: "0px solid #ff0000"  }}>
                    <button type="button" style={{ fontSize: "2.5rem" }} to="/" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={{ textAlign: "center" }} >
                    <h2 style={style.h2}>Ingresa a tu cuenta</h2>
                    <InputBase style={{ textAlign: "left" }} Name="Ingresa tu correo" />
                    <InputBase Name="Ingresa tu contraseña" />
                    <Button style={style.button} title="Inicia Sesión" />
                </div>
                <br/>
                <div className="modal-footer flex-center">
                    <h5 style={style.h5}>¿No tienes cuenta? <Link style={{ color: "#F1717F" }} to="/register">Regístrate</Link></h5>
                </div>
            </div>

        </div>


    )
}

export default Login;