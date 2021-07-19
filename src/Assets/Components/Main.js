import React from "react";

import mainIcon from "../img/2905211.svg";

const Main = () => {
  return (
    <section id="home" className="container main">
      <div className="main-text coluna">
        <h2>
          Inovação, Design e <strong>Experiência</strong>
        </h2>
        <p>Sempre a frente em soluções digitais</p>
        <a href="#servicos">Saiba mais</a>
      </div>
      <div className="main-icon coluna">
        <img src={mainIcon} alt="Main Photo" />
      </div>
    </section>
  );
};

export default Main;
