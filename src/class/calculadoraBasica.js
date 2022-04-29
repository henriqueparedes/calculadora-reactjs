export default class CalculadoraBasicaClass {
  soma(a, b) {
    return Number(a) + Number(b);
  }

  subtracao(a, b) {
    return Number(a) - Number(b);
  }

  divisao = (a, b) => {
    return Number(a) / Number(b);
  };

  multiplicacao = (a, b) => {
    return Number(a) * Number(b);
  };

  elevacao(a, b) {
    return Math.pow(Number(a), Number(b));
  }
}
