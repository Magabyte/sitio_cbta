import React from 'react';
import logo from '../assets/img/logo.webp'
import { Link } from 'react-router-dom';
const Menu = () => {
    return (  
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" width="30"/>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item efecto">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item efecto">
                                <Link className="nav-link" to="contacto">Contáctanos</Link>
                            </li>
                            <li className="nav-item efecto">
                                <Link className="nav-link" to="plantel">Plantel</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle efecto" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/admision">Admisión</Link></li>
                                    <li><Link className="dropdown-item" to="/acerca">Acerca de</Link></li>
                                    <li><Link className="dropdown-item" to="/oferta-educativa">Oferta educativa</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
    );
}
 
export default Menu;