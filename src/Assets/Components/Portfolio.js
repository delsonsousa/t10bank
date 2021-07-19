import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio container" id="portfolio">
      <h2 className="titulo">Portfólio</h2>
      <p className="subtitulo">Meus trabalhos</p>

      <div className="portfolio-itens fresh-smkt coluna">
        <div className="portfolio-content">
          <h3>Fresh Supermarket</h3>
          <a href="#">+</a>
        </div>
      </div>
      <div className="portfolio-itens phone-mockup coluna">
        <div className="portfolio-content">
          <h3>Phone Mockup</h3>
          <a href="#">+</a>
        </div>
      </div>
      <div className="portfolio-itens webdesign-trends coluna">
        <div className="portfolio-content">
          <h3>Web Design Trends</h3>
          <a href="#">+</a>
        </div>
      </div>
      <div className="portfolio-itens ecommerce-ux coluna">
        <div className="portfolio-content">
          <h3>Ecommerce UX</h3>
          <a href="#">+</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
