import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Button from './Button'
import '../styles/Register.css'

const PersonalData = () => {
  
  return (
    <MDBContainer >
      <MDBRow >
        <MDBCol   md="6">
          <form >
            <p className="h6 text-center-title mb-4">Cuéntanos sobre ti, esta información es fundamental para hacer match con las empresas.</p>
            <hr />
            <p className="h7 text-center mb-4">Sobre ti</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Biografía
            </label>
            <textarea id="defaultFormRegisterBiographyEx" className="form-control" rows= "5"/>
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">¿Cuál es tu profesión?</label>
            <select id="defaultFormRegisterProfesionEx" className="form-control">
              <optgroup>
                <option value="1">Arquitectura</option>
                <option value="2">Ingeniería</option>
                <option value="3">Psicología</option>
                <option value="4">Derecho</option>
                <option value="5">Administración</option>
              </optgroup>
            </select>
            <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Tienes algun área de interés?</label>
            <select id="defaultFormRegisterProfesionEx" className="form-control">
              <optgroup>
                <option value="1">Informática</option>
                <option value="2">Diseño y arte</option>
                <option value="3">Tecnología</option>
                <option value="4">Salud</option>
                <option value="5">Comunicación</option>
              </optgroup>
            </select>
            <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Has hecho algún postgrado?</label> <br/>
            <div >
              <input type="radio" name="postgrado" value="si"/><label className="grey-text">Si</label>
              <br/>
              <input type="radio" name="postgrado" value="no"/><label className="grey-text">No</label>
             </div>
             <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Cuál?</label> <br/>
              <input type="text" className="form-control"/>
              <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Cuál es tu nivel de inglés?</label>
            <select id="defaultFormRegisterEnglishEx" className="form-control">
              <optgroup>
                <option value="1">Básico</option>
                <option value="2">Intermedio</option>
                <option value="3">Avanzado</option>
                <option value="4">Nativo</option>
              </optgroup>
            </select>
            <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Manejas algún otro idioma?</label> <br/>
              <input type="text" className="form-control"/>
             



            <div className="text-center mt-4">
            <Button title="Siguiente"  to="/workprofile"></Button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PersonalData;