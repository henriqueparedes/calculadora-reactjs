import "./App.css";
import React, { useState } from "react";

import CalculadoraBasica from "./components/CalculadoraBasica/CalculadoraBasica";
import CalculadoraCientifica from "./components/CalculadoraCientifica/CalculadoraCientifica";

function App() {
  const [calculadoraBasica, setCalculadoraBasica] = useState(false);
  const [calculadoraCientifica, setCalculadoraCientifica] = useState(false);

  const onClickCalculadoraBasica = () => {
    setCalculadoraCientifica(!calculadoraCientifica);
  };

  const onClickCalculadoraCientifica = () => {
    setCalculadoraBasica(!calculadoraBasica);
  };

  const limparHistorico = () => {
    console.log("limpou");
  };
  return (
    <div className="App">
      <h1>Título - Calculadora Vrau</h1>
      <span>
        <button
          className="Basica"
          onClick={onClickCalculadoraBasica}
          disabled={calculadoraBasica}
        >
          Básica
        </button>
        <button
          className="Cientifica"
          onClick={onClickCalculadoraCientifica}
          disabled={calculadoraCientifica}
        >
          Cientifica
        </button>
        <div className="Funcoes">
          {calculadoraCientifica ? <CalculadoraBasica /> : null}
          {calculadoraBasica ? <CalculadoraCientifica /> : null}
        </div>
      </span>
      <div className="Valores">
        <input type="number" placeholder="Valor A"></input>
        <input type="number" placeholder="Valor B"></input>
        <button className="Calcular">Calcular</button>
      </div>
      <div className="Histórico">
        <div className="Header-historico">
          <h2>Histórico</h2>
          <button className="Limpar" onClick={limparHistorico}>
            Limpar Histórico
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
