import React from "react";
// import {
//   Link,
//   Route,
//   Switch,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./ofertaEducativa.css";
import Ofimatica from "./Ofimatica";
import Agropecuario from "./Agropecuario";
import Administracion from "./Administracion";

const OfertaEducativa = () => {
  return (
    <div>
      <h2 className="title title--oferta">OFERTA EDUCATIVA</h2>
      <ul className="lista-modalidad">
        <li className="lista-modalidad__item">
          <p>Sistema escolarizado</p>
          <ul className="lista-oferta">
            <li className="lista-oferta__item">Técnico agropecuario.</li>
            <li className="lista-oferta__item">Técnico ofimática.</li>
            <li className="lista-oferta__item">
              Técnico en administración para el emprendimiento agropecuario
            </li>
          </ul>
        </li>
        <li className="lista-modalidad__item">
          <p>
            Modalidad mixta sistema autoplaneado. <span>(sabatino)</span>
          </p>
          <ul className="lista-oferta">
            <li className="lista-oferta__item">Técnico agropecuario.</li>
          </ul>
        </li>
      </ul>
      <Agropecuario />
      <Administracion />
      <Ofimatica />

      <Footer />
    </div>
  );
};

export default OfertaEducativa;
