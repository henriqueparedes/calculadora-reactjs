import React, { useState } from "react";

export default function CalculadoraCientifica(props) {
  const initialState = [
    { nome: "raiz", status: false },
    { nome: "porcentagem", status: false },
  ];

  const [disabled, setDisabled] = useState(initialState);

  const changeButtons = (e) => {
    e.preventDefault();
    const id = e.target.id;
    let newDisabled = [];
    disabled.map((obj) => {
      if (id !== obj.nome) {
        obj.status = !obj.status;
        newDisabled.push(obj);
      } else {
        props.callbackParent(obj.nome);
        newDisabled.push(obj);
      }
      setDisabled(newDisabled);
    });
  };

  return (
    <>
      <button id="raiz" onClick={changeButtons} disabled={disabled[0].status}>
        Raíz de A na B
      </button>
      <button
        id="porcentagem"
        onClick={changeButtons}
        disabled={disabled[1].status}
      >
        A % de B
      </button>
    </>
  );
}
