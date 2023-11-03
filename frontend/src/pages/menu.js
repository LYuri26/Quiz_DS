import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.css";
import logo from "../images/Senai.png";

function Menu() {
  return (
    <body>
    <div className="menu-container">
      <header>
        <img src={logo} alt="Logo SENAI" className="logo-senai" />
      </header>
      <div className="menu-button-container">
      <NavLink to="/questionario" className="menu-button">
          Questionário
        </NavLink>
        <NavLink to="/classificacao" className="menu-button">
          Classificação
        </NavLink>
        <NavLink to="/creditos" className="menu-button">
          Créditos
        </NavLink>
      </div>
      <footer>
        Jogo desenvolvido pela turma de Desenvolvimento de Sistemas Trilhas de
        Futuro 02/2022.
      </footer>
    </div>
    </body>
  );
}

export default Menu;
