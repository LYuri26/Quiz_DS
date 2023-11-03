import "../styles/questionario.css";
import logo from "../images/Senai.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function Classificacao() {
  useEffect(() => {
    fetch("http://localhost:3000/backend/consulta_dados.php")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <body>
    <div className="menu-container">
      <header>
        <Link to="/">
          <img src={logo} alt="Logo SENAI" className="logo-senai" />
        </Link>
      </header>
      <caption>PÓDIO</caption>
      <body>
        <table>
          <tr>
            <th>Classificação</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </table>
      </body>
      <footer>
        Jogo desenvolvido pela turma de Desenvolvimento de Sistemas Trilhas de
        Futuro 02/2022.
      </footer>
    </div>
    </body>

  );
}
export default Classificacao;
