import React from "react";

import sobrePhoto from "../img/sobre-photo.png";
import bg1 from "../img/bg1.png";

const Sobre = () => {
  return (
    <section className="sobre container" id="sobre">
      <h2 className="titulo">Sobre Nós</h2>
      <div className="sobre-foto coluna">
        <img src={sobrePhoto} />
        <div className="bg1"></div>
      </div>
      <div className="coluna sobre-text">
        <div className="sobre-text-content">
          <h3>Qual o seu próximo projeto?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit
            amet. Ut diam quam nulla porttitor massa id neque.
          </p>
          <a href="#">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
