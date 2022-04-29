import "./Calculos.css";

const Calculos = (props) => {
  return (
    <div className="Comentario">
      <div className="conteudo">
        <div className="coluna-esquerda">
          <p>
            Operação:{" "}
            {props.operacao.charAt(0).toUpperCase() + props.operacao.slice(1)}
          </p>
          <p>Valor A: {props.valorA}</p>
          <p>Valor B: {props.valorB}</p>
        </div>
        <div className="coluna-direita">
          <p>
            Resultado: {props.valorA}{" "}
            {props.operacao
              .replace("multiplicacao", "x")
              .replace("soma", "+")
              .replace("subtracao", "-")
              .replace("divisao", "/")
              .replace("elevacao", "Elevado a")
              .replace("raiz", "Raíz de")
              .replace("porcentagem", "Porcento de")}{" "}
            {props.valorB} = {props.resultado}
          </p>
          <p>Tipo de Calculadora: {props.tipoCalculadora}</p>
        </div>
        <button onClick={props.onRemove}>&times;</button>
      </div>
    </div>
  );
};

export default Calculos;
