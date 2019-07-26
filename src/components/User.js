import React from 'react'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const User = () =>{
    let style={
        img:{
            width:"74px", 
        }
    }
    return(
        <MDBContainer>
            <MDBRow >
                <MDBCol>
                    
                        <div className="card-two" >
                        <Link to="/edit"><p className="back-two" align="rigth">Editar</p></Link>
                            <div className="card-body">
                                <div className="row">
                                    <div className="Col">
                                    <img style={style.img} alt="" src="https://www.lapi.com.mx/image.ashx?s=57067&im=97321&t=p"></img>
                                    </div>
                                    <div className="Col cardtextito">
                                    <h2 className="card-title" >Carmen Zavala</h2>
                                    <p className="card-text-two">Psicóloga</p>
                                    </div>
                                    <div>
                                    <p className="card-card">Información adicional</p>
                                    <p className="card-date-two">Magíster en Recursos Humanos, inglés intermedio</p>
                                    <p className="card-card">Tipo de trabajo solicitado</p>
                                    <p className="card-date-two">Part time</p>
                                </div>
                            </div>
                    </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    
    )
}

export default User;