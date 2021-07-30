import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import correo_icon from '../../assets/img/correo_icon.png';
import './contact.css';
const Contact = () => {
    // const [hora, setHora] = useState(new Date().toLocaleTimeString());
    // const [visible, setVisible] = useState(true);
    // const [dia, setDia] = useState(new Date().toLocaleDateString());

    // useEffect(() => {
    //     let temporizador;
    //     if(visible){
    //         temporizador = setInterval(() => {
    //         setHora(new Date().toLocaleTimeString());
    //         console.log(dia)
    //     },1000);
    //     }
    // }, [visible])

    return (  
        <Fragment>
        <div className="grid-contact">
            <h2 className="contact-title">Contactanos</h2>
            <div className="mapa">
                <iframe className="contact-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8759224293167!2d-99.27539728509964!3d19.02518838711716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88ab313b544354c0!2sCBTA%20154%20Centro%20de%20Bachillerato%20Tecnol%C3%B3gico%20Agropecuario%20N%C2%B0154!5e0!3m2!1ses-419!2smx!4v1627564381255!5m2!1ses-419!2smx"  allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="correos">
                <p className="correos_title">CORREOS</p>
                <div className="correo">
                    <div>
                        <img className="correo_icon" src={correo_icon} alt="" />
                        <p className="correo_text">sedetepoztlan154@gmail.com</p>
                    </div>
                </div>
                <div className="correo">
                    <div>
                        <img className="correo_icon" src={correo_icon} alt="" />
                        <p className="correo_text">fichascbta1542021@gmail.com</p>
                    </div>
                </div>
                <div className="correo">
                    <div>
                        <img className="correo_icon" src={correo_icon} alt="" />
                        <p className="correo_text">154serviciosescolares@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </Fragment>
    );
}
 
export default Contact;