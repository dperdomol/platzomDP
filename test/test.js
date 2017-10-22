
const expect = require("chai").expect;
const platzom = require("..").default;

describe("#platzom", function functionName() {

  it("Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas",function () {
    const translation = platzom("Reconocer");
    expect(translation).to.equal("ReCoNoCeR");
  })

  it("Si la palabra termina en 'ar' se quitan esos dos ultimos caracteres",function () {
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");
  })

  it("Si la palabra inicia con 'z' se le agrega 'pe' al final",function () {
    const translation = platzom("Zapato");
    expect(translation).to.equal("Zapatope");
  })

  it("Si la palabra traducida tiene 10 o mas letras se parte por la mitad y se une con un guion del medio",function () {
    const translation = platzom("Calculadora");
    expect(translation).to.equal("Calcul-adora");
  })

})
