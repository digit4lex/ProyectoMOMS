import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import logo from '../image.png'
import '../styles/Header.css'

class Header extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <MDBContainer >
      <MDBNavbar className="navbar" id="navbarsito" style={{ boxShadow: 'none' }} light>
        <MDBContainer  >
        <MDBHamburgerToggler color="black" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />

          <MDBNavbarBrand>
            <img className="logo" src={logo} alt="logo"></img>
          </MDBNavbarBrand>

            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/register">Registro</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about">Sobre Nosotros</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default Header;