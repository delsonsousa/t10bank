import React from "react";

const Contato = () => {
  return (
    <section className="contato" id="contato">
      <div className="container contato-content">
        <h2 className="titulo">Contato</h2>
        <p className="subtitulo">Envie sua mensagem</p>
        <form>
          <div className="nome">
            <input type="text" placeholder="Nome" />
          </div>
          <div className="tel ">
            <input type="tel" placeholder="Telefone" />
          </div>
          <div className="email ">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="msg">
            <textarea name="mensagem" id="" placeholder="Mensagem"></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
      <div className="bg3"></div>
    </section>
  );
};

export default Contato;
