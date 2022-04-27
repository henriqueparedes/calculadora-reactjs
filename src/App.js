import "./App.css";
import React, { useState } from "react";

function App() {
  const [tipoCalculadora, setTipoCalculadora] = useState(false);

  const selecionarCalculadora = () => {
    tipoCalculadora = setTipoCalculadora(true);
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
          onClick={selecionarCalculadora}
          disabled={tipoCalculadora}
        >
          Básica
        </button>
        <button className="Cientifica">Cientifica</button>
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
