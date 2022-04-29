import CalculadoraBasica from "./calculadoraBasica";

export default class CalculadoraCientificaClass extends CalculadoraBasica {
  raiz(a, b) {
    return Math.pow(Number(a), 1 / Number(b));
  }

  porcentagem = (a, b) => {
    return (Number(b) / 100) * Number(a);
  };
}
