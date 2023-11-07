import "../styles/creditos.css"
import React from 'react';
import logo from "../images/Senai.png";
import { Link } from "react-router-dom";


function Creditos() {
    return <div className="menu-container">

        <header>
            <Link to="/">
                <img src={logo} alt="Logo SENAI" className="logo-senai" />
            </Link>
        </header>
        <h1>Quiz Semana da Biblioteca</h1>
        <div className="menu-container">
            <h1>Créditos</h1>
            <h2>Quem Somos Nós</h2>
            <p>Somos alunos do curso técnico de desenvolvimento de sistemas da turma 2, do trilhas de futuro SENAI Uberaba Minas Gerais, com o objetivo de desenvolver um quiz</p>

            <h2>Equipe de Desenvolvimento</h2>
            <ul>
                <li>Brenda Luiza</li>
                <li>Diogo Rodrigues</li>
                <li>Douglas Silva</li>
                <li>Isaac Araujo</li>
                <li>João Victor Martins Deamo</li>
                <li>João Victor Vendramini</li>
                <li>Leandro de Oliveira</li>
                <li>Maria Eduarda Fernandes</li>
                <li>Rodrigo Borges</li>
                <li>Roger Magalhães</li>
                <li>Tarcísio Marques</li>
            </ul>

            <h2>Orientador</h2>
            <ul>
                <li><a href="https://github.com/LYuri26">Lenon Yuri Silva</a></li>
            </ul>

            <p>Esse Quiz foi desenvolvido com o objetivo de testar o seu conhecimento</p>
            <footer>
                Jogo desenvolvido pela turma de Desenvolvimento de Sistemas Trilhas de
                Futuro 02/2022.
            </footer>
            </div>

    </div>;
}

export default Creditos;