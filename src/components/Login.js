import React from 'react';
// import InputBase from './InputBase';
import Button from './Button';
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './../styles/Login.css'

const Login = () => {
    let style = { background: {backgroundColor: '#FAFAFA' }, hr: { marginTop: "4rem" },
        button:{
        marginLeft:"45px",
        marginTop:"20px"
      },
      h5: {
        fontFamily: "Montserrat",
        fontSize: "16px",
        textAlign:"center"
    },}
    return (
        <MDBContainer className="my-page-text" style={style.background}>
        <MDBRow style={style.background}>
          <MDBCol style={style.background} md="6">
          <Link to="/"><button type="button" style={{ fontSize: "2.5rem" }}  className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button></Link>
         <form>
            <p class="h7 text-center mb-4">Ingresa a tu cuenta</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Ingresa tu correo</label>
                <input type="email" id="defaultLoginFormEmail" className="input mb-4" placeholder="E-mail"/>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Ingresa contraseña</label>
                <input type="password" id="defaultLoginFormPassword" className="input mb-4" placeholder="Password"/>
                    <div class="d-flex justify-content-around">
                    <div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                    </div>
                </div>
            <div>
            <a href="aaa" style={{ color: "#F1717F" }}>Forgot password?</a>
        </div>
    </div>
    <Button style={style.button} title="Inicia Sesión"/>
    <hr style={style.hr} />
    <h5 style={style.h5}>¿No tienes cuenta? <Link style={{ color: "#F1717F" }} to="/register">Regístrate</Link></h5>
</form>
</MDBCol>
      </MDBRow>
    </MDBContainer>
    )
}

export default Login;