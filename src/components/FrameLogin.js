import React, { Component }  from 'react';
import Button from './Button';
import './../styles/FrameLogin.css';


class FrameLogin extends Component {

  render() {
    return (
      <div>
        <div className="frame">
          <h3 className="titulos">Soy una mujer en busca de mi próxima oportunidad laboral</h3>
          <Button title="Ingresa tus datos"/>
        </div>
        <div className="frame">
          <h3 className="titulos">Estoy reclutando para un puesto o proyecto en nombre de una empresa</h3>
          <Button title="Inscribe tu Empresa"/>
        </div>
      </div>
    //   
    );
  }
};

export default FrameLogin;