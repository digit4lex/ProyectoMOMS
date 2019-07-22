import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
    <header>
       <h1>ProyectoMOMS</h1>
       <NavLink to="/" exact={true} activeClassName="is-active">Home </NavLink>
       <br></br>
       <NavLink to="/register" activeClassName="is-active">Register </NavLink>
    </header>
    )
}

export default Header;