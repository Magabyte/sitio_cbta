import React from 'react';
import {
    //BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
    HashRouter,
    // Link
  } from "react-router-dom";
  import Menu from "./Menu";
import Home from '../pages/home/Home';
import ERROR404 from '../pages/error/ERROR404';
import Contact from '../pages/contact/Contact';
import Plantel from '../pages/plantel/Plantel';
import Admision from '../pages/admision/Admision';
// import Servicios from '../pages/servicios/Servicios';
import OfertaEducativa from '../pages/ofertaEducativa/OfertaEducativa';
import Talleres from '../pages/talleres/Talleres';
import About from '../pages/about/About';

const Principal = () => {
    return (  
        
        <div>
            <HashRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contacto" component={Contact}/>
                    <Route exact path="/plantel" component={Plantel}/>
                    <Route exact path="/admision" component={Admision}/>
                    {/* <Route exact path="/servicios" component={Servicios}/> */}
                    <Route exact path="/acerca" component={About} />
                    <Route path="/oferta-educativa" component={OfertaEducativa}/>
                    <Route exact path="/talleres" component={Talleres}/>

                    <Route path="*" component={ERROR404}/> 

                </Switch>
            </HashRouter>
        </div>
    );
}
 
export default Principal;