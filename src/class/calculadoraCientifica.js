import CalculadoraBasica from "./calculadoraBasica";

export default class CalculadoraCientifica extends CalculadoraBasica {
  aoQuadrado(a) {
    return Math.pow(a, 2);
  }

  raizQuadrada(a) {
    return Math.pow(a, 1 / 2);
  }

  porcentagem = (a, b) => {
    return (a / 100) * 525;
  };
}
