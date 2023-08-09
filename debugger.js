const str1 = "Cleiton Mariano"

console.log(str1);

const funcaoLegal = (str) => {
  const retorno = str + " ís cool";
  return retorno
}

const retornoFuncaoLegal = funcaoLegal(str1);

if(str1.length > 10) {
  console.log(retornoFuncaoLegal);
} else {
  console.log("não deu certo")
}