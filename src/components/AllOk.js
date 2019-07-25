import React  from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


const AllOk= () => {
    return (
        <MDBContainer style={{ height: "80vh", marginTop:"100px" }} >
            <MDBRow >
                <MDBCol  md="6">
                <div className="card">
            <div className="card-body"> 
             <div className="Col">
             <h4 className="h7 text-center mb-4">Todo Listo</h4>
             <p className="card-text">Estamos al tanto de tu postulación. Te pondremos en contacto con la empresa para que se conozcan y continuen con el proceso</p>
             <Link to="/profile"><Button title="¡PERFECTO!"/></Link>
   </div>

   </div>
 </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
//         
    );
  }

export default withRouter(AllOk);