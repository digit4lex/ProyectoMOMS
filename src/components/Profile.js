import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Oportunities from './Oportunities'
import {Link} from 'react-router-dom'


const Profile = () =>{
    let style = { background: {backgroundColor: '#FAFAFA' },
                    nombre:{fontFamily: 'Montserra',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '22px',
                        lineHeight: '27px',
                        textColor: '#355E7E'},
                    };
    return(
        <MDBContainer className="my-page-text" style={style.background}>
        <MDBRow style={style.background}>
        <MDBCol  style={style.background} md="6">
                        <h1 className="h7 text-center mb-4">Perfil</h1>
            <div>
                <div>
                    <img src="https://www.lapi.com.mx/image.ashx?s=57067&im=97321&t=p" alt=""></img>
                    <p>Editar</p>
                    <h2>Carmen Zavala</h2>
                    <p>Psicóloga</p>
                </div>
                    <div><p>Información adicional</p>
                    <p>Magíster en Recursos Humanos, inglés intermedio</p>
                    <p>Tipo de trabajo solicitado</p>
                    <p>Part time</p>
                </div>
                <div className="col">
                    <p className="h7 text-center mb-4">Oportunidades laborales</p>
                    <p><Link style={{ color: "#F1717F" }} to="/historial">Ver historial de postulaciones</Link></p>
                    <Oportunities/>
                </div>
                
            </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
}

export default Profile;