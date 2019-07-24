import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../styles/Register.css'
import Button from "./Button";

const Register = () => {

  let style = { backgroundColor: '#FAFAFA' };

  return (
    <MDBContainer className="my-page-text" style={style}>
      <MDBRow style={style}>
        <MDBCol style={style} md="6">
          <form>
            <p className="h6 text-center-title mb-4">Si eres mamá profesional y buscas trabajo flexible, ¡no te lo pierdas! Inscríbete aquí.</p>
            <hr />
            <p className="h7 text-center mb-4">Datos Personales</p>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nombre Completo
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />

            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <label htmlFor="defaultFormRegisterPhoneEx" className="grey-text">
              Número de teléfono
            </label>
            <input
              type="number"
              id="defaultFormRegisterPhoneEx"
              className="form-control"
            />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Ingresa tu contraseña
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Confirma tu contraseña
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <Button title="Siguiente" to="/sobreti"></Button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;