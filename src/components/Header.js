import React from 'react'
import { NavLink } from 'react-router-dom'

      /*  <NavLink to="/" exact={true} activeClassName="is-active">Home </NavLink>
       <br></br>
       <NavLink to="/register" activeClassName="is-active">Register </NavLink> */


const Header = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">ProyectoMOMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Registro</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header;