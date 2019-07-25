import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
    <div>
       <p> 404! - <Link to="/">Ve a la página de Inicio</Link></p> 
    </div>
    )
}

export default NotFoundPage;