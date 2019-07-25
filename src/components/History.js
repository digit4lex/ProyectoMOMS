import React  from 'react';
import { withRouter,Link} from 'react-router-dom';


import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


const History= () => {
    return (
        <MDBContainer style={{ height: "80vh", marginTop:"100px" }} >
            <Link to="/profile"><p className="back">Atrás</p></Link>
            <MDBRow >
                
                <MDBCol md="6">
                
                <div className="col">
                <div className="card">
  <div className="card-body">
    <div className="row">
    <div className="Col">
    <h4 className="card-title">Especialista en RR HH</h4>
    <p className="card-date">Publicado: 20 Julio</p>
    </div>
    <div className="Col">
    <span className="dot stateDot">
    <p className="state">En Curso</p></span>
    </div>
    </div>
  </div>
</div>
 </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
//         
    );
  }

export default withRouter(History);