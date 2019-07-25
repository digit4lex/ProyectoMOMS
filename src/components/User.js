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
                    <div className="col">
                        <div className="card">
                        <Link to="/edit"><p className="back">Editar</p></Link>
                            <div className="card-body">
                                <div className="row">
                                    <div className="Col">
                                    <img style={style.img} alt="" src="https://www.lapi.com.mx/image.ashx?s=57067&im=97321&t=p"></img>
                                    </div>
                                    <div className="Col">
                                    <h2 >Carmen Zavala</h2>
                                    <p >Psicóloga</p>
                                    </div>
                                    <div>
                                    <p >Información adicional</p>
                                <p>Magíster en Recursos Humanos, inglés intermedio</p>
                                <p>Tipo de trabajo solicitado</p>
                                <p>Part time</p>
                                </div>
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