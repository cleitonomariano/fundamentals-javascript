// <------------- BIND ------------------->
'use strict'
  function thisBindExemplo() {
    console.log(this)
  }
const obj = {Exemplo: 'Exemplo'}
// thisBindExemplo = thisBindExemplo.bind(obj)
  thisBindExemplo()

// <------------ CALL --------------------->
//  O Método call() chama uma função com um dado 'this' e argumentos ássados 
// individualmentes 
// o call() permimte que uma função/método, pertence a um dado objeto, seja 
// atribuido e chamado a reutilizar o método de um objeto em diversos outros 
// objetos

const obj1 = {exemplo1: 'exemplo1', mostraThis: function thisCallExemplo() {
console.log(this)} 
}
obj1.mostraThis()

const obj2 = {Exemplo2: 'Exemplo2'}

obj1.mostraThis.call(obj2)


const obj3 = {exemplo3: 'exemplo3', mostraThis: function thisCallExemplo(a, b, c) {
  console.log(this)} 
  }
  obj3.mostraThis()
  
  const obj4 = {Exemplo4: 'Exemplo4'}
  
  obj3.mostraThis.apply(obj4, [1, 2, 3])