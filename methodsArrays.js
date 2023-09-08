// Crinado Arrays 

// const myArrayLiteral = [1, 2, 3] // Forma literal
// const MyArrayConstructorInstance = new Array(1,2,3)
// const myArrayConstuctorCall = Array(1,2,3)
// const myArrayFrom = Array.from(myArrayLiteral)
// const myArraySpread = [...myArrayFrom]

// ""
// console.log(myArraySpread)

// const arr = [1]

// arr.push(2, 10, 11)

// arr.unshift(10)

// arr.shift()

// arr.pop()

// console.log(arr)

// Remover Elemntos em qualquer ponto

// const ArrRemoveAnyPoint = [1, 2, 5, 3]
// // primeiro paramatro indice da del, 2° parametro quantidades
// ArrRemoveAnyPoint.splice(1, 2)


// Preencher Array com valores

// const arrPreenchido = new Array(10);
// // 1° params value, 2° params a partir de
// arrPreenchido.fill(5, 1)


// Criar um SubArray

// const arrSubArray = ["BrDev", "Developer", "Javascript","Python", "Node"]
// const SubArray = arrSubArray.slice(2)


// Array Ordenado

// const arrayOrdenado = [2, 3, 1, 10, 9, 4, 5, 9, 8, 0]
// arrayOrdenado.sort((a, b) => a -b)

/* Filter, Find, ForEach, Map, Reduce */

const arrBase = [
  {a: 2, b: 2},
  {a: 1, b: 2},
  {a: 5, b: 2},
  {a: 1, b: 2},
  {a: 10, b: 2},
]
const filtered = arrBase.filter(el => el.a > 2)
const find = arrBase.find(x => x.a == 10)
const forEach = arrBase.forEach(y => console.log(`a: ${y.a}, b: ${y.b}`))
const maped = arrBase.map(z => z.a += 1)
const reduce = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0)

console.log(filtered)
console.log(find)
console.log(reduce)

debugger
