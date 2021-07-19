import React from "react";
import Contato from "./Assets/Components/Contato";
import Header from "./Assets/Components/Header";
import Main from "./Assets/Components/Main";
import Portfolio from "./Assets/Components/Portfolio";
import Servicos from "./Assets/Components/Servicos";
import Sobre from "./Assets/Components/Sobre";

import "./Assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contato />
    </>
  );
}

export default App;
