import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const Register = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <br/>
            <p className="h4 text-center mb-4">Registrate y te contactaremos brevemente</p>
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
            <br/>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br/>
            <label htmlFor="defaultFormRegisterPhoneEx" className="grey-text">
              Teléfono móvil
            </label>
            <input
              type="number"
              id="defaultFormRegisterPhoneEx"
              className="form-control"
            />
            <br/>
            <MDBInput label="Filled-in unchecked" type="checkbox" id="checkbox1" />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Registrar
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;