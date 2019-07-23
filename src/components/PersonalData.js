import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import PersonalData from './PersonalData'

const Register = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h6 text-center mb-4">Cuéntanos sobre ti, esta información es fundamental para hacer match con las empresas.</p>
            <br/>
            <p className="h7 text-center mb-4">Sobre ti</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Teléfono de Contacto
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Correo electrónico
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />           
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit" onClick={PersonalData}>
                Guardar y continuar
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;