let levelGlobal = "Global lével";
let level1 = undefined,
  level2 = undefined,
  level3 = undefined;

function funcaoNivel1() {
  let level1 = "Nível 1";

  function funcaoNivel2() {
    let level2 = "Nível 2";

    function funcaoNivel3() {
      let level3 = "Nível 3";
      console.log(
        `\nFunção nível 3 resultados : \n${levelGlobal} \n${level1} \n${level2} \n${level3}`
      );
    }
    funcaoNivel3();
    console.log(
      `\nFunção nível 2 resultados : \n${levelGlobal} \n${level1} \n${level2} \n${
        level3 ? level3 : "nível 3 incacessível"
      }`
    );
  }
  funcaoNivel2();
  console.log(
    `\nFunção nível 3 resultados : \n${levelGlobal} \n${level1} \n${
      level2 ? level2 : "nível 2 inacessível"
    } \n${level3 ? level3 : "nível 3 inacessível"}`
  );
}
funcaoNivel1();

// //Alert!!!!! Prática altamente perigosa!!!!!!!!!!!
// // Escopo global automático sem uso das palavras reservadas let, const e var,

// exemplo 1

let obj = {
  func: function () {
    (a = 10), console.log(a);
  },
};
 obj.func()

 a

 obj.func2 = () => {b=50; console.log(b)}
 obj.func2()

 obj.func3 = () => {let c = 50; console.log(c)}
 obj.func3()

 