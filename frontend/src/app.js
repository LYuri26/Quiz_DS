import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Classificacao from './components/classificacao';
import Creditos from './pages/creditos';
import Questionario from './components/questionario';
import Menu from './pages/menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/classificacao" element={<Classificacao />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/questionario" element={<Questionario />} />
      </Routes>
    </Router>
  )

}

export default App;
