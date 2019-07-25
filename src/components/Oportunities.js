import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import './../styles/Oportunities.css'

class Oportunities extends Component {


  render() {
    return (

<div className="card">
  <div className="card-body">
    <div className="row">
    <div className="Col">
    <h4 className="card-title">Especialista en RR HH</h4>
    <p className="card-date">Publicado: 20 Julio</p>
    </div>
    <div className="Col">
    <span className="dot">
    <p className="porcent">79%</p>
    <p className="match">match</p></span>
    </div>
    </div>
    <p className="card-card">Requisitos</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="button" style={this.props.style} onClick={this.handleClick}>{this.props.title}</button>
  </div>
</div>
    );
  }
};

export default withRouter(Oportunities);