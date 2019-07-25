import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


const Profile = () =>{
    let style = { background: {backgroundColor: '#FAFAFA' }};
    return(
        <MDBContainer className="my-page-text" style={style.background}>
      <MDBRow style={style.background}>
        <MDBCol  style={style.background} md="6">
          <h1 className="h7 text-center mb-4">Cuenta</h1>
          <div>
              <div>
                  <img src="https://www.lapi.com.mx/image.ashx?s=57067&im=97321&t=p"></img>
                  <h2>Carmen Zavala</h2>
                  <p>Psicóloga</p>
              </div>
              <div><p>Información adicional</p>
              <p>Magíster en Recursos Humanos, inglés intermedio</p>

              </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
}

export default Profile;