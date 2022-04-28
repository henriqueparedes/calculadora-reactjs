import React, { useState } from "react";

export default function CalculadoraBasica() {
  const [disabled, setDisabled] = useState({
    soma: false,
    subtracao: false,
    multiplicacao: false,
    divisao: false,
    elevacao: false,
  });

  const teste = (e) => {
    // e.preventDefault();
    // console.log(e.target.id);
    setDisabled((disabled.subtracao = !disabled.subtracao));
    console.log(disabled.subtracao);
    console.log(disabled);
  };

  // const [soma, setSoma] = useState(false);
  // const [subtracao, setSubtracao] = useState(false);
  // const [multiplicacao, setMultiplicacao] = useState(false);
  // const [divisao, setDivisao] = useState(false);
  // const [elevacao, setElevacao] = useState(false);

  // const onClickSoma = () => {
  //   setSubtracao(!subtracao);
  // };

  // const onClickSubtracao = () => {
  //   setSubtracao(!subtracao);
  // };
  return (
    <>
      <button onClick={teste} disabled={disabled.soma} id="soma">
        +
      </button>
      <button id="subtracao" disabled={disabled.subtracao}>
        -
      </button>
      <button id="multiplicacao">x</button>
      <button id="divisao">/</button>
      <button id="elevacao">x^y</button>
    </>
  );
}
