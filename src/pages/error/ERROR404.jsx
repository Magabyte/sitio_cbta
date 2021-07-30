import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import './error.css'
const ERROR404 = () => {
    return (
        <Fragment>
            <div className="contenedor">
                <div className="error">
                    <p className="m-0">404</p>
                    <div className="fondo-claro m-0">Opps! Page not found</div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default ERROR404;