import "../styles/classificacao.css";
import logo from "../images/Senai.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Classificacao() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:${
        process.env.REACT_APP_PORTA_PHP || 3000
      }/backend/inserir_dados.php`
    )
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div className="menu-container">
      <header>
        <Link to="/">
          <img src={logo} alt="Logo SENAI" className="logo-senai" />
        </Link>
      </header>
      <table>
        <caption>PÓDIO</caption>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={item.id}>
              <td>{item.posicao}</td>
              <td>{item.nome}</td>
              <td>{item.pontuacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        Jogo desenvolvido pela turma de Desenvolvimento de Sistemas Trilhas de
        Futuro 02/2022.
      </footer>
    </div>
  );
}

export default Classificacao;
