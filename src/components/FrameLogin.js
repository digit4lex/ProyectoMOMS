import React, { Component }  from 'react';
import './../styles/FrameLogin.css'


class FrameLogin extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.props.customOnButtonClick();
//   }
  render() {
    return (
      <div>
        <div className="frame">
          <h3 className="titulos">Soy una mujer en busca de mi próxima oportunidad laboral</h3>
          <button className="button">Ingresa tus datos</button>
        </div>
        <div className="frame">
          <h3 className="titulos">Estoy reclutando para un puesto o proyecto en nombre de una empresa</h3>
          <button className="button">Inscribe tu Empresa</button>
        </div>
      </div>
    //   
    );
  }
};

export default FrameLogin;