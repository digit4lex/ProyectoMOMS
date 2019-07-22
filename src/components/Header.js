import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../image.png';
import '../styles/Header.css'


/*  <NavLink to="/" exact={true} activeclassName="is-active">Home </NavLink>
 <br></br>
 <NavLink to="/register" activeclassName="is-active">Register </NavLink> */


const Header = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <img src={logo} className="" alt="logo" ></img>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink to="/" className="nav-item nav-link" exact={true} >Inicio </NavLink>
                <NavLink to="/register" className="nav-item nav-link" exact={true} >Registro </NavLink>
                <NavLink to="/about" className="nav-item nav-link" exact={true} >Sobre nosotros </NavLink>
                <NavLink to="/contact" className="nav-item nav-link" exact={true} >Contacto </NavLink>
                </div>
            </div>

            </nav>

        </header>
    )
}

export default Header;