import React, { useState } from "react";

export default function CalculadoraCientifica() {
  const [raiz, setRaiz] = useState(false);
  const [porcentagem, setPorcentagem] = useState(false);

  const onClickRaiz = () => {
    setPorcentagem(!porcentagem);
  };
  const onClickPorcentagem = () => {
    setRaiz(!raiz);
  };

  return (
    <>
      <button onClick={onClickRaiz} disabled={raiz}>
        Raíz
      </button>
      <button onClick={onClickPorcentagem} disabled={porcentagem}>
        %
      </button>
    </>
  );
}
