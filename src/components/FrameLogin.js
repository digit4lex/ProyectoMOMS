import React from 'react';
import Button from './Button';
import './../styles/FrameLogin.css';
import { Link } from 'react-router-dom'

const FrameLogin = () => {

  let style = { button: {width:"90%"} }

    return (
      <div>
        <div className="frame">
          <h3 className="titulos">Soy una mujer en busca de mi próxima oportunidad laboral</h3>
          <Link to="/register"><Button style={style.button} title="Ingresa tus datos"/></Link>
        </div>
        <div className="frame">
          <h3 className="titulos">Estoy reclutando para un puesto o proyecto en nombre de una empresa</h3>
          <Button style ={style.button} title="Inscribe tu Empresa"/>
        </div>
      </div>
    //   
    );
};

export default FrameLogin;
