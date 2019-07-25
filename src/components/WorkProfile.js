import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Button from './Button'
import '../styles/Register.css'
import {Link} from 'react-router-dom'

const WorkProfile = () => {
  return (
    <MDBContainer style={{ height:"170vh" }} >
      <MDBRow >
        <MDBCol  md="6">
          <form >
          <Link to="/aboutme"><p className="back">Atrás</p></Link>
            <p className="h6 text-center-title mb-4">Queremos conocer tu experiencia y las habilidades que has adquirido trabajando.</p>
            <hr />
            <p className="h7 text-center mb-4">Perfil laboral</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Agrega tu experiencia laboral
            </label>
            <br/>
            <label htmlFor="defaultFormWorkExperiencieEx" className="grey-text">Experiencia #1</label>
            <input type="text" className="form-control"/>
            <br />
            <label htmlFor="defaultFormWorkExperiencieEx" className="grey-text">Experiencia #2</label>
            <input type="text" className="form-control"/>
            <br />
            <label htmlFor="defaultFormWorkExperiencieEx" className="grey-text">Experiencia #3</label>
            <input type="text" className="form-control" ReadOnly/>
            <br/>
            <label htmlFor="defaultFormWorkExperiencieEx" className="grey-text">Años de experiencia laboral</label>
            <input type="text" className="form-control"/>
              <br />
            <br />    
            <label htmlFor="defaultFormUnemploymentEx" className="grey-text">¿Cuántos meses llevas desempleada?</label> <br/>
            <div >
              <input type="radio" name="desempleo" value="si"/>  <label className="grey-text">Menos de 12</label>
              <input type="radio" name="desempleo" style={{marginLeft: "60px"}} value="no"/>  <label className="grey-text">12 o más</label>
             </div>
             <br />        
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Qué tipo de trabajo buscas?</label>
            <select id="defaultFormJobSearchEx" className="form-control">
              <optgroup>
                <option value="1">Tiempo completo</option>
                <option value="2">Mitad de jornada</option>
                <option value="3">Horario flexible</option>
                <option value="4">Tiempo completo</option>
                <option value="5">Online</option>
              </optgroup>
            </select>
            <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">¿Has hecho algún postgrado?</label> <br/>
            <div >
              <input type="radio" name="postgrado" value="si"/>  <label className="grey-text">Si</label>
              <input type="radio" name="postgrado" style={{marginLeft: "145px"}} value="no"/>  <label className="grey-text">No</label>
             </div>
             <br />           
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Expectativa de salario</label> <br/>
              <input type="text" className="form-control"/>
              <br />            
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Link de tu CV</label> <br/>
              <input type="text" className="form-control"/>
              <br />            
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Link de tu LinkedIn</label> <br/>
              <input type="text" className="form-control"/>
             



            <div className="text-center mt-4">
            <Button title="Siguiente"  to="/congrats"></Button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default WorkProfile;