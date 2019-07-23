import React from 'react';
import InputBase from './InputBase';
import Button from './Button';

const Login = () => {
    return (
    <div>
        <div className="login"> 
       <InputBase Name="Ingresa tu correo"/>
       <InputBase Name="Ingresa tu contraseña"/>
       <Button title="Inicia Sesión"/>
       </div>
    </div>
    )
}

export default Login;