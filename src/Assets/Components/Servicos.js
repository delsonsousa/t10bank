import React from "react";

import designIcon from "../img/design-icon.svg";

const Servicos = () => {
  return (
    <section className="servicos container" id="servicos">
      <h2 className="titulo">Serviços</h2>
      <h3 className="subtitulo">Proporcionamos uma melhor experiência</h3>
      <div className="design-ui coluna">
        <p className="porcentagem">85%</p>
        <div className="barra-bg">
          <span className="barra-carreg"></span>
        </div>
        <p className="design-ui-details">
          <strong>Design UI</strong>Photoshop, Illustrator
        </p>
      </div>

      <div className="design-details coluna">
        <span>
          <img src={designIcon} />
        </span>
        <h3>Design</h3>
        <p>
          Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet.
          sed diam eirmod tempor dolore.
        </p>
        <a href="#">
          Saiba mais{" "}
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.699"
              height="11.039"
              viewBox="0 0 15.699 11.039"
            >
              <defs>
                <style></style>
              </defs>
              <path
                class="a"
                d="M10.572,4.84a.557.557,0,1,0-.791.783l4.012,4.012H.554A.551.551,0,0,0,0,10.189a.557.557,0,0,0,.554.562H13.792l-4.012,4a.568.568,0,0,0,0,.791.554.554,0,0,0,.791,0l4.962-4.962a.545.545,0,0,0,0-.783Z"
                transform="translate(0 -4.674)"
              />
            </svg>
          </i>
        </a>
      </div>
      <div className="bg2"></div>
    </section>
  );
};

export default Servicos;
