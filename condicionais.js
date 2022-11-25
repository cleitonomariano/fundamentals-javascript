// const fruta = 'Maçã'

// if(fruta === 'Maçã') {
//     console.log(`fruta é igual a ${fruta}`)
// } else {
//     console.log('fruta não é igual a Maçã')
// };
// fruta === 'Maça' ? console.log('fruta é maça') : console.log('fruta não maçã')

// const numero = 1
// if(numero === 1) {
//     console.log('é igual a 1')
// }
// if(numero === 2) {
//     console.log('é igual a 2')
// }
// if(numero === 3) {
//     console.log('é igual a 3')
// }
// const numero = 1
// if(numero === 1)
//     console.log('é igual a 1')

// else if(numero === 2)
//     console.log('é igual a 2')

// else
//     console.log('é igual a 3')

// const numero1 = 10,
//   numero2 = 20;

// if (numero1 === 10 && numero2 === 20)
//   console.log("Expressão if foi suprida com valor verdadeiro.");
// else console.log("Expressão if foi suprida como falso.");

// const string1 = "JavaScript",
//   string2 = "Script";

// if (string1 === "Java" || string2 === "JavaScript")
//   console.log("Expressão if foi suprida com valor verdadeiro.");
// else console.log("Expressão if foi suprida com valor falso.");

// <<<<<<<<<<<< --------------- Swith case ------------------------->>>>>>>>>>>>>

const item = 5;

switch (item) {
  case 1:
    console.log("Item 1 - setor de brinquedos");
    break;
  case 2:
    console.log("Item 2 - setor de maquiagem");
    break;
  case 3:
    console.log("Item 3 - setor de calçados");
    break;
  case 4:
    console.log("Item 4 - setor de eletrodoméstico");
    break;
  case 5:
  case 6:
  case 7:
    console.log("Item 7 -setor de vestuário masculino, feminino e infantil");
    break;
  case 8:
    console.log("Item 8 -setor de utenssílios domésticos");
    break;
  default:
    console.log("Número informado inválido");
}

// <! ----------------- Operadores ternários ---------------->>>>>>>>

const idade = 17;

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

const somaOuMultiplica = (valor) => {
  return valor >= 10 ? valor + valor : valor * valor;
};

// mesma função usando if e else

// const somaOuMultiplica = function (valor) {
//   if (valor >= 10) {
//     return valor + valor;
//   } else {
//     return valor + valor;
//   }
// };

console.log('Menores que 10 :')
console.log( somaOuMultiplica(1))
console.log( somaOuMultiplica(2))
console.log( somaOuMultiplica(3))
console.log( somaOuMultiplica(6))
console.log( somaOuMultiplica(9))

console.log('Maiores que 10 :')
console.log( somaOuMultiplica(10))
console.log( somaOuMultiplica(11))
console.log( somaOuMultiplica(20))
console.log( somaOuMultiplica(50))
console.log( somaOuMultiplica(100))
