import { NavLink } from "react-router-dom";
import "../styles/menu.css";
import logo from "../images/Senai.png";
import React, { useState, useEffect } from "react";

function Menu() {
  const [ setDados] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_PORTA_PHP || 3000}/backend/criar_tabela.php`
    )
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
        console.log("Conexão bem sucedida!"); // Adiciona o console.log aqui
      })
      .catch((error) => console.error("Erro:", error));
  });

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
