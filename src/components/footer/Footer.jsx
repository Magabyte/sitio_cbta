import React from 'react';
import logoMorelos from '../../assets/img/logo_morelos.png';
import sep from '../../assets/img/sep.png';
import anfitrion_mundo from '../../assets/img/logos-gobierno-anfitrion_mundo.png';
import './footer.css';
import facebook from '../../assets/img/sociales/facebook_logo_icon.svg'
import instagram from '../../assets/img/sociales/instagram_logo_icon.svg'
import youtube from '../../assets/img/sociales/youtube_logo_icon.svg'
import twitter from '../../assets/img/sociales/twitter_logo_icon.svg'

const Footer = () => {
    return (  
        <footer className="footer">
            <section className="footer-item mb-3">
                <div className="footer-link sombra">
                    <a rel="noopener noreferrer" href="https://morelos.gob.mx/" target="_blank">
                        <img className="footer-img" src={logoMorelos} alt="morelos.gob.mx" />
                    </a>
                </div>
                <div className="footer-link sombra">
                    <a rel="noopener noreferrer" href="https://cartelera.morelos.gob.mx/" target="_blank">
                        <img className="footer-img" src={anfitrion_mundo} alt="cartelera.morelos.gob.mx" />
                    </a>
                </div>
                <div className="footer-link sombra">
                    <a rel="noopener noreferrer" href="https://www.gob.mx/sep" target="_blank">
                        <img className="footer-img" src={sep} alt="www.gob.mx" />
                    </a>
                </div>
            </section>
            <section className="footer-item">
                <div className="contacto">
                    <span>Contacto</span>
                    <div className="huitzilac">
                        <div className="direccion">
                            <p className="mb-1">Huitzilac. Mor</p>
                            <p className="mb-1">Col. Centro,</p>
                            <p className="mb-1">Prol. Benito Juárez S/N. C.P 62510</p>
                        </div>
                        <div className="telefonos">
                            <span>Teléfonos: </span>
                            <p className="mb-1">739 393 07 82</p>
                            <p className="mb-1">739 393 07 81</p>
                        </div >
                    </div>
                    <div className="tepoztlan">
                        <div className="direccion">
                            <p className="mb-1">Tepoztlan, Mor.</p>
                            <p className="mb-1">Col. Ixcatepec,</p>
                            <p className="mb-1">Calle Progreso s/n</p>
                        </div>
                        <div className="telefonos">
                            <span>Teléfonos: </span>
                            <p className="mb-1">739 395 14 23</p>
                            <p className="mb-1">739 393 07 82</p>
                        </div >
                    </div>
                    <div className="jiutepec">
                        <div className="direccion">
                            <p className="mb-1">Jiutepec, Mor.</p>
                            <p className="mb-1">Col. El Porvenir,</p>
                            <p className="mb-1">Calle 2nda. De Anáhuac 1. C.P: 62577</p>
                        </div>
                        <div className="telefonos">
                            <span>Teléfonos: </span>
                            <p className="mb-1">739 395 14 23</p>
                            <p className="mb-1">739 393 07 82</p>
                        </div >
                    </div>
                    <div className="redes-sociales">
                        <span>
                            Redes sociales
                        </span>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Huitzilac154">
                            <img className="logo" src={facebook} alt="Facebook" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/cbta154huitzilac/">
                            <img className="logo" src={instagram} alt="Instagram" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/">
                            <img className="logo" src={youtube} alt="Youtube" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Cbta154_oficial">
                            <img className="logo" src={twitter} alt="Twitter" />
                        </a>
                        
                    </div>
                    
                </div>
                <div className="servicios">
                    <span>© cbta 154</span>
                    
                </div>
            </section>
            <section className="footer-item">
                
            </section>
        </footer>
    );
}
 
export default Footer;