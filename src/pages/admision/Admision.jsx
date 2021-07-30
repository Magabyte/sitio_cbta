import React from 'react';
import Footer from '../../components/footer/Footer';
import './admision.css'
import lista_icon from '../../assets/img/lista_icon.png';
const Admision = () => {
    return (  
        <div>
            {/* <h2 className="admision_title">Admision</h2> */}
            <section className="admision">
                <article className="documentos">
                    <div className="bg-p">
                        <h3 className="documentos_title">solicita tu ingreso con la sigueinte informacion en 4 copias</h3>
                    </div>
                    <ul className="documentos_lista">
                        <li className="documento"><p>Certificado de secundaria</p></li>
                        <li className="documento"><p>Acta de nacimiento</p></li>
                        <li className="documento"><p>Curp</p></li>
                        <li className="documento"><p>Comprobante de domicilio</p></li>
                        <li className="documento"><p>Carta de buena conducta</p></li>
                        <li className="documento">
                            <p>
                                Seis fotografías tamaño infantil 
                            </p> 
                            <span>A Color o B/N</span>

                        </li>
                    </ul>
                    <img className="documentos_icon" src={lista_icon} alt="" />
                </article>

            </section>

            <Footer/>
        </div>
    );
}
 
export default Admision;