import "./App.css";
import React, { useState } from "react";

import Calculos from "./components/Calculos/Calculos";

import CalculadoraBasica from "./components/CalculadoraBasica/CalculadoraBasica";
import CalculadoraCientifica from "./components/CalculadoraCientifica/CalculadoraCientifica";

import CalculadoraBasicaClass from "./class/calculadoraBasica";
import CalculadoraCientificaClass from "./class/calculadoraCientifica";

function App() {
  const funcoesCalculadoraBasica = new CalculadoraBasicaClass();
  const funcoesCalculadoraCientifica = new CalculadoraCientificaClass();

  const [calculadoraBasica, setCalculadoraBasica] = useState(false);
  const [calculadoraCientifica, setCalculadoraCientifica] = useState(false);

  const [valorA, setValorA] = useState();
  const [valorB, setValorB] = useState();

  const [operacao, setOperacao] = useState("");
  const [tipoCalculadora, setTipoCalculadora] = useState();

  const [calculos, setCalculos] = useState([]);

  const onChildChanged = (operacao) => {
    setOperacao(operacao);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tipoCalculadora === "Calculadora Básica") {
      var resultado = funcoesCalculadoraBasica[operacao](valorA, valorB);
    } else {
      var resultado = funcoesCalculadoraCientifica[operacao](valorA, valorB);
    }
    console.log(tipoCalculadora);
    const newcalculo = {
      valorA: valorA,
      valorB: valorB,
      operacao: operacao,
      resultado: resultado,
      tipoCalculadora: tipoCalculadora,
    };
    console.log(newcalculo);
    setCalculos([...calculos, newcalculo]);
    setValorA("");
    setValorB("");
    setTipoCalculadora("");
    setOperacao("");
    setCalculadoraBasica(false);
    setCalculadoraCientifica(false);
  };

  const removerCalculo = (calculo) => {
    let lista = calculos;
    lista = lista.filter((c) => c !== calculo);
    setCalculos(lista);
  };

  const onClickCalculadoraBasica = () => {
    setCalculadoraCientifica(!calculadoraCientifica);
    setTipoCalculadora("Calculadora Básica");
  };

  const onClickCalculadoraCientifica = () => {
    setCalculadoraBasica(!calculadoraBasica);
    setTipoCalculadora("Calculadora Cientifica");
  };

  const limparHistorico = () => {
    setCalculos([]);
  };
  return (
    <div className="App">
      <h1>Bem vindo(a), utilize a Calculadora de sua preferência:</h1>
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
          {calculadoraCientifica ? (
            <CalculadoraBasica
              callbackParent={(operacao) => onChildChanged(operacao)}
            />
          ) : null}
          {calculadoraBasica ? (
            <CalculadoraCientifica
              callbackParent={(operacao) => onChildChanged(operacao)}
            />
          ) : null}
        </div>
      </span>
      <div className="Valores">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Valor A"
            onChange={(event) => setValorA(event.currentTarget.value)}
            value={valorA}
          />
          <input
            type="number"
            placeholder="Valor B"
            onChange={(event) => setValorB(event.currentTarget.value)}
            value={valorB}
          />
          <button className="Calcular">Calcular</button>
        </form>
      </div>
      <div className="Histórico">
        <div className="Header-historico">
          <h2>Histórico</h2>
          <button className="Limpar" onClick={limparHistorico}>
            Limpar Histórico
          </button>
        </div>
        <div className="Calculos">
          {calculos.map((calculo, index) => (
            <Calculos
              onRemove={removerCalculo.bind(this, calculo)}
              key={index}
              valorA={calculo.valorA}
              valorB={calculo.valorB}
              operacao={calculo.operacao}
              resultado={calculo.resultado}
              tipoCalculadora={calculo.tipoCalculadora}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
