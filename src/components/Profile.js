import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Oportunities from './Oportunities'
import {Link} from 'react-router-dom'
import User from './User';


const Profile = () =>{
   
    return(
        <MDBContainer >
        <MDBRow >
        <MDBCol>
            <br></br>
            <h1 className="h7 text-center mb-4">Perfil</h1>
            <div className="col">
                    <User/>
                    <p className="h7 text-center mb-4">Oportunidades laborales</p>
                    <p><Link style={{ color: "#F1717F" }} to="/history">Ver historial de postulaciones</Link></p>
                    <Oportunities/>
                    
                </div>
               
                
            
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
}

export default Profile;