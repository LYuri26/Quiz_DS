import React from "react";
import "../styles/creditos.css";
import logo from "../images/Senai.png";
import { Link } from "react-router-dom";

function Creditos() {
  return (
    <body>
      <div className="menu-container">
        <header>
          <Link to="/">
            <img src={logo} alt="Logo SENAI" className="logo-senai" />
          </Link>
        </header>
        <h1>Sobre nós</h1>
        <div className="containerBody">
          <div className="card-body">
            <ul>
              <h5 className="card-title">Quem somos?</h5>
              <p className="card-text">
                Somos alunos do curso técnico de desenvolvimento de sistemas do
                SENAI de Uberaba Minas Gerais.
              </p>
            </ul>
            <ul>
              {" "}
              <h5 class="card-text">Desenvolvedores:</h5>
              <li>
                {" "}
                <a
                  rel="noopener"
                  href="https://github.com/brendaluizaf"
                  target="_blank"
                >
                  Brenda Luiza
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/Diogosrsr"
                  target="_blank"
                >
                  Diogo Rodrigues
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/Douglas097"
                  target="_blank"
                >
                  Douglas Silva
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/IsaacArauj0"
                  target="_blank"
                >
                  Isaac Araujo
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/BatataRaiz"
                  target="_blank"
                >
                  João Victor Deamo
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/JoaoVictor897"
                  target="_blank"
                >
                  João Victor Vendramini
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/LeandroOlv"
                  target="_blank"
                >
                  Leandro de Oliveira
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/dudafgg"
                  target="_blank"
                >
                  Maria Eduarda Fernandes
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/kaosbor"
                  target="_blank"
                >
                  Rodrigo Borges
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/kratts9988"
                  target="_blank"
                >
                  Roger Magalhães
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://github.com/Desvazio"
                  target="_blank"
                >
                  Tarcísio Marques
                </a>
              </li>
            </ul>
            <ul>
              <h5 class="card-text">Orientador Responsável:</h5>

              <li>
                <a href="https://github.com/LYuri26">Lenon Yuri Silva</a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          Jogo desenvolvido pela turma de Desenvolvimento de Sistemas Trilhas de
          Futuro 02/2022.
        </footer>
      </div>
    </body>
  );
}

export default Creditos;
