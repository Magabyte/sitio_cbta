import React from 'react';
import '../../normalize.css';
import './home.css';
import logo from '../../assets/img/logo.webp'
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (  
        <div className="home mb-0">
            <h1 className="h1 m-0 fondo">
                <span className="main-title text-bold">
                    Centro de Bachillerato Tecnológico Agropecuario #154
                </span>
                <span className="main-title text-thin">
                    "Dr. Belizario Dominguez Palencia"
                </span>
                <span className="main-title text-thin">
                    Huitzilac, Morelos.
                </span>
            </h1>
            <div className="card-description">
                
                <img className="item" src={logo} alt="CBTA" />

                <p className="text-desciption item mb-0">
                    OBJETIVO <br/>FORMAR PROFESIONALES TÉCNICOS ALTAMENTE CAPACITADOS EN DIVERSAS AREAS DE LA CIENCIA Y LA TECNOLOGÍA. APROVECHANDO LOS RECURSOS Y OPTIMIZANDO LA PRODUCTIVIDAD.
                </p>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Home;