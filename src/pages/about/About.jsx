import React, {Fragment} from 'react';
import './about.css'
import Footer from '../../components/footer/Footer';
import mision from '../../assets/img/mission.svg'
import valores from '../../assets/img/valores.svg'
import vision from '../../assets/img/vision.svg'
import man_icon from '../../assets/img/man_icon.png'
import woman_icon from '../../assets/img/woman_icon.png'
import Resumen from '../historia/Resumen';

const About = () => {
    return ( 
        <Fragment>
            <div className="about">
                <h2 className="about-title">Nuestra Institución</h2>
                
                {/* Vision mision Valores */}
                <div className="vmv">
                    <div className="item sombra_difuminada">
                        <span>Visión</span>
                        <p>
                            Ofrecer a la población de zonas rurales una educación pertinente, incluyente e integralmente formativa que será el eje fundamental del desarrollo humano.
                        </p>
                        <img src={vision} alt="Vision" />

                    </div>
                    <div className="item sombra_difuminada">
                        <span>Misión</span>
                        <p>
                            Ofrecer una formación integral, social, humanista y tecnológica, centrada en la persona, que consolide el conocimiento tecnológico, hacia el sector rural, fortalezca la permanencia, fomente la mentalidad emprendedora, innovadora y de liderazgo.
                        </p>
                        <img src={mision} alt="Mision" />

                    </div>
                    <div className="item sombra_difuminada">
                        <span>Valores</span>
                        <p>
                            Honestidad, Responsabilidad, Empatía, Solidaridad, Comunicación Asertiva, Eficacia, Disciplina, Mejora Continua, Independencia, Creatividad, Innovación, Enfoque del Sistema y Visión del Futuro.   
                        </p>
                        <img src={valores} alt="Valores" />

                    </div>
                </div>
                
                <div className="title">PERSONAL DOCENTE</div>
                <div className="docentes">

                    {/* M EN C. VÍCTOR MANUEL GÓMEZ MANJARREZ. */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    M EN C. VÍCTOR MANUEL GÓMEZ MANJARREZ.
                                </p>
                                <p>
                                    Encargado de dirección
                                </p>
                            </div>
                        </div>
                        <p>
                            Bienvenidos a todos nuestros estudiantes y compañeros. Espero vernos pronto de manera presencial.
                        </p>
                        <p>
                            les deseo el mejor de los éxitos en este semestre que empezaremos a distancia. Nunca se den por vencidos cúal sea el motivo.
                        </p>
                    </div>

                    {/* M.T.I ASAMI YURIKO CUÉLLAR YAMANAKA. */}
                    <div className="docente sombra">
                        <div>
                            <img src={woman_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    M.T.I ASAMI YURIKO CUÉLLAR YAMANAKA.
                                </p>
                                <p>
                                    Jefa de departamento de formación docente.
                                </p>
                            </div>
                        </div>
                        <p>
                            Bienvenidos sean todos, aunque nuestra presentación será a distancia, espero que pronto nos podamos reunir en nuestro hermoso plantel para hacerlo de manera presencial.
                        </p>
                        <p>
                            ¡Les deseo a todos mucho éxito en este nuevo semestre!
                        </p>
                    </div>

                    {/* LIC. MÓNICA MATUS DE LA CRUZ. */}
                    <div className="docente sombra">
                        <div>
                            <img src={woman_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. MÓNICA MATUS DE LA CRUZ.
                                </p>
                                <p>
                                    Subdirectora del plantel
                                </p>
                            </div>
                        </div>
                        <p>
                            Esperamos poder vernos pronto, mientras tanto te cuidas tú y nos cuidamos todos.
                        </p>
                        <p>"Aprender a distancia es un nuevo reto que todos podemos lograr"</p>
                    </div>

                    {/* LIC. LYDIA SÁNCHEZ ADAYA. */}
                    <div className="docente sombra">
                        <div>
                            <img src={woman_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. LYDIA SÁNCHEZ ADAYA.
                                </p>
                                <p>
                                    Encargada del área SAETA.
                                </p>
                            </div>
                        </div>
                        <p>Nos vemos pronto y mientras les dejo una frase como regalo.</p>
                        <p>
                            "Vive como si fueras a morir mañana, aprende como si fueras a vivir siempre"
                            GANDHI.
                        </p>
                    </div>

                    {/* MC. PERLA TINOCO CARRILLO. */}
                    <div className="docente sombra">
                        <div>
                            <img src={woman_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    MC. PERLA TINOCO CARRILLO.
                                </p>
                                <p>
                                    Jefa del depto de recursos financieros, materiales y de servicios.
                                </p>
                            </div>
                        </div>
                        <p>Porque nos cuidamos y te cuidamos.</p>
                        <p>Bienvenido a la nueva normalidad.</p>
                    </div>

                    {/* LIC. ARELY URIBE */}
                    <div className="docente sombra">
                        <div>
                            <img src={woman_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. ARELY URIBE
                                </p>
                                <p>
                                    Jefa del departamento de recursos humanos.
                                </p>
                            </div>
                        </div>
                        <p>
                            El éxito llegara cuando tus ganas de lograrlo, sean más grandes que tus excusas.
                        </p>
                        <p></p>
                    </div>

                    {/* ING. J. REFUGIO GONZALEZ MAYA. */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    ING. J. REFUGIO GONZALEZ MAYA.
                                </p>
                                <p>
                                    Jefe del depto de sistemas de producción e investigación.
                                </p>
                            </div>
                        </div>
                        <p>
                            Que esta contingencia sea para ti, una oportunidad de vida para demostrar tus capacidades.
                        </p>
                        <p></p>
                    </div>

                    {/* LIC. FELIPE DE JESUS RODRÍGUEZ NARES. */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. FELIPE DE JESUS RODRÍGUEZ NARES.
                                </p>
                                <p>
                                    Jefe del área de planeación.
                                </p>
                            </div>
                        </div>
                        <p>
                            ¡Con enfuerzo y perseverancia podras alcanzar tus metas!
                        </p>
                        <p></p>
                    </div>

                    {/* ING. MAYRA GONZALES MUÑOZ. */}
                    <div className="docente sombra">
                        <div>
                            <img src={woman_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    ING. MAYRA GONZALES MUÑOZ.
                                </p>
                                <p>
                                    Jefa de servicios escolares.
                                </p>
                            </div>
                        </div>
                        <p>Bienvenidos.</p>
                        <p></p>
                    </div>

                    {/* LIC. JUAN BARRERA ROMERO. */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. JUAN BARRERA ROMERO.
                                </p>
                                <p>
                                    Jefe de vinculación.
                                </p>
                            </div>
                        </div>
                        <p>
                            Bienvenidos a una nueva aventura educativa en el CBTA 154. Que la distancia no te limite en este nuevo ciclo escolar 
                        </p>
                        <p>"Ánimo y mucho éxito"</p>
                    </div>

                    {/* LIC. JUAN CARLOS ARISTA COVARRUBIAS */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. JUAN CARLOS ARISTA COVARRUBIAS
                                </p>
                                <p>
                                    Subdirector administrativo. 
                                </p>
                            </div>
                        </div>
                        <p>
                            "Bienvenidos al inicio de nuevo semestre"
                            Aunque regresamos a clases en modalidad a distancia, ¡Estamos listos!
                        </p>
                        <p>
                            El CBTA NO. 154 les desea el mejor de los éxitos, a los alumnos, padres de familia, docentes y personal administrativo.
                        </p>
                    </div>

                    {/* LIC. RENE FLORES ROSALES. */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. RENE FLORES ROSALES.
                                </p>
                                <p>
                                    Jefe del depto académico y de competencias.
                                </p>
                            </div>
                        </div>
                        <p>¡Estoy para apoyarte!</p>
                        <p></p>
                    </div>

                    {/* LIC. JUAN ALFREDO BASILIO MARTÍNEZ. */}
                    <div className="docente sombra">
                        <div>
                            <img src={man_icon} alt="" />
                            <div className="datos__personales">
                                <p>
                                    LIC. JUAN ALFREDO BASILIO MARTÍNEZ.
                                </p>
                                <p>
                                    Tutor escolar.
                                </p>
                            </div>
                        </div>
                        <p></p>
                        <p></p>
                    </div>
                </div>                
            </div>
            <Resumen/>
            <Footer/>
        </Fragment>
    );
}
 
export default About;