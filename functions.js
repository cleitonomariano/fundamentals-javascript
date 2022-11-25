// let variavel = "this is a functionparams";

// function funcReturnUndefined() {
//   let num1 = 10,
//     num2 = 10,
//     soma = num1 + num2;
// }

// variavel = funcReturnUndefined();

// function outra() {
//   return 0;
// }

// variavel = outra();

// console.log(variavel);

// function printName(Cleiton, Mariano) {
//   let myName = name + " " + surName;

//   return myName;
// }
// let name = "Cleiton";
// let surName = "Mariano";

// const print = printName();
// console.log(print);

// let anonimaF = () => "Sou uma função anonima";

// console.log(anonimaF);
// console.log(anonimaF());

// let retornoDaIIFE = (function () {
//   return "Sou o retorno de uma função";
// })();

// console.log(retornoDaIIFE);

// const userList = [
//   {
//     name: "João",
//     credit: 600,
//   },
//   {
//     name: "Maria",
//     credit: 900,
//   },
//   {
//     name: "Carlos",
//     credit: 300,
//   },
//   {
//     name: "Vanessa",
//     credit: 200,
//   },
// ];

//   const newUserList = userList.filter((user, index, array) => user.credit > 500)

//   console.log(newUserList);

  //Função soma

  function soma (num1, num2) {
    const sum = num1 + num2
    return sum
  }

  console.log(soma(15,15))

  const resultadoSoma = soma(15,15)

  console.log(resultadoSoma)
  console.log(resultadoSoma + 10);

  let arr = [];
  for(let i = 1; i < 100; i++){
    arr.push(i)
  }
  console.log(arr)

  let invertArr = [];
  for(let i = arr.length; i > 0; i--){
    invertArr.push(arr[i-1])
  }

  console.log(invertArr);

  const somaArrow = (num1, num2) => {
    return num1 + num2
  }

  const somaArrowReduce = (num1, num2) => num1 + num2

  console.log(somaArrow(20, 20))
  console.log(somaArrowReduce(20, 20))