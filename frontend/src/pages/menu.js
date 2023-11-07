import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";
import logo from "../images/Senai.png";


function Menu() {
  const [setDados] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_PORTA_PHP || 3000
      }/backend/criar_tabela.php`
    )
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      })
      .catch((error) => console.error("Erro:", error));
  }, []); // Adicione um array vazio como segundo argumento para useEffect para garantir que o efeito seja executado apenas uma vez

  return (
    <div className="menu-container">
      <header>
          <img src={logo} alt="Logo SENAI" className="logo-senai" />
      </header>      <header></header>
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
  );
}

export default Menu;
