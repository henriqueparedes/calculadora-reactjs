import React, { useState } from "react";

export default function CalculadoraBasica(props) {
  const initialState = [
    { nome: "soma", status: false },
    { nome: "subtracao", status: false },
    { nome: "multiplicacao", status: false },
    { nome: "divisao", status: false },
    { nome: "elevacao", status: false },
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
      <button id="soma" onClick={changeButtons} disabled={disabled[0].status}>
        A + B
      </button>
      <button
        id="subtracao"
        onClick={changeButtons}
        disabled={disabled[1].status}
      >
        A - B
      </button>
      <button
        id="multiplicacao"
        onClick={changeButtons}
        disabled={disabled[2].status}
      >
        A x B
      </button>
      <button
        id="divisao"
        onClick={changeButtons}
        disabled={disabled[3].status}
      >
        A / B
      </button>
      <button
        id="elevacao"
        onClick={changeButtons}
        disabled={disabled[4].status}
      >
        A^B
      </button>
    </>
  );
}
