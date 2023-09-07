// // Atribuir uma função a uma variável

// const foo = function () {
//   console.log("My Hero")
// }
// foo()

// Como passar uma função como argumento

// function dizOla() {
//   return "Hello, ";
// }
// dizOla()
// function apresentacao(funcaoMensagemOla, nome) {
//   console.log(funcaoMensagemOla() + nome)
// }

// apresentacao(dizOla, "JavaScript")

// Retornar uma Função

function printaBrDev() {
  return function(){
    console.log("BrDev!")
  }
}

// const myFunc = printaBrDev();
// myFunc()

printaBrDev()()