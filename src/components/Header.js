import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'
import icon from '../assets/icon.png'
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
      <MDBNavbar className="navbar" style={{ boxShadow: 'none' }} light>
        <MDBContainer>
        <MDBHamburgerToggler color="white" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />

            <img className="logo" src={logo} alt="logo"></img>

          <MDBNavbarBrand>
            <NavLink to="/login"><img src={icon} alt="icon" className="icon" width="36px"></img></NavLink>
          </MDBNavbarBrand>

            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink style={{ color:"white" }} to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                  <MDBNavLink style={{ color:"white" }} className="links"  to="/register">Registro</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink style={{ color:"white" }} to="/about">Sobre Nosotros</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                  <MDBNavLink style={{ color:"white" }} to="/login">Login</MDBNavLink>
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