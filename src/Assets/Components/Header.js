import React from "react";

import logo from "../img/logo-t10.png";

const Header = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
  });

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    const topo = section.offsetTop + 50;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  function handleClick() {
    const menuNav = document.querySelector(".menu-list");
    menuNav.classList.toggle("active");
  }

  return (
    <header>
      <div className="container">
        <h1>
          <img src={logo} alt="Logo" />
        </h1>
        <div className="menu-mobile">
          <input id="menu-hamburguer" type="checkbox" />
          <label onClick={handleClick} htmlFor="menu-hamburguer">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <nav className="menu-list">
          <ul>
            <li>
              <a onClick={scrollToSection} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={scrollToSection} href="#sobre">
                Sobre nós
              </a>
            </li>
            <li>
              <a onClick={scrollToSection} href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a onClick={scrollToSection} href="#portfolio">
                Portfólio
              </a>
            </li>
            <li>
              <a onClick={scrollToSection} href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
