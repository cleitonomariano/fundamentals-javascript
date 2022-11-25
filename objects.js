const dotNotantion = {
    prop1: "Sou uma propiedade que será acessada usando um dot notation",
    method: function() {
        return "Sou o retorno de um método, ou seja, uma função dentro de um objeto."
    }
}

console.log(dotNotantion.prop1)
console.log(dotNotantion.method())

const bracketNotation = {
    prop1: "Sou uma propiedade que será acessada usando bracket notation.",
    metodo: function () {
        return "Sou o retorno de um método, ou seja, uma função dentro de um objeto."
    }
}

// console.log(bracketNotation['prop1'])
// console.log(bracketNotation['metodo']())

bracketNotation['prop2'] = "Sou outra propiedade com o valor string."
bracketNotation['metodo2'] = () => "Sou o retorno de outro método."

console.log(bracketNotation['prop2'])
console.log(bracketNotation['metodo2']())

console.log(bracketNotation.metodo2())