import './App.css';
import React from 'react';
import { BodyPage } from './componentes/BodyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resultado from './componentes/Resultado';
import Cadastro from './componentes/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyPage />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
