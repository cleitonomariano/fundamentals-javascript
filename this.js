console.log(this.document === document)
console.log(this === window)
this.a =37

console.log(window.a)

// this in functions

// Quando não estiver no modo estrito o this apontara para o objeto global 
function thisNaoEstrito() {
    console.log(this)
}
thisNaoEstrito()

// Quando no modo estrito retorna undefined
function thisEstrito() {
    'use strict';
    console.log(this)
}
thisEstrito()

// Como método de um objeto

const o = {
    prop: 100,
    f: function() {
        return this.prop
    }
}
console.log(o.f())

// Arrow functions:
// nas arrow functions (funções seta), o this é definido lexicalmente, isto é,
// seu valor é definido pelo contexto de execução onde está inserido.
// Em um código global, this assume o objeto global:

const arrowFunctionThis = () => {console.log(this)}
arrowFunctionThis()

// Contexto de criação: objeto errado

const arrowFunctionThis1 = {
    prop: 150,
    arrowF: () => {console.log(this)}
}
arrowFunctionThis1.arrowF()

// Contexto de criação: objeto certo

const arrowFunctionThis2 = {
    exemplo1 : 'Exemplo1',
    mostrarThis: function() {
        const f = (() => this)()
        console.log(f)
    }
}
arrowFunctionThis2.mostrarThis()