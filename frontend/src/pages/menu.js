import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <Link to="/classificacao">Classificação</Link>
      <Link to="/creditos">Créditos</Link>
      <Link to="/questionario">Questionário</Link>
    </div>
  );
}

export default Menu;
