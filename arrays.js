// Sumário
///o objeto Array do javascript é um objeto global usado 
// na construção de 'arrays': objetos de alto nível 
// semelhantes a listas

//Principais caracteristicas de um Array em javascript:

// -- Sáo objetos globais que tem, nativamente, diversos 
// métodos embutidos para realizar diversos tipos de 
// opereração
// -- São heterogênios (aceitam diversos tipos de dados 
// dentro da mesma lista - inclusive outros arrays e objetos)
// -- Não tem tamanho fixo (o tamanho pode ser alterado a qualquer momento)
// -- Dados não são necessariamente armazenados contiguamente
// podem ser densos (contíguos) ou esparsos (espaçados)
// -- Ìndices são acessados por meio de números a partir
//  do 0. exemplo: arr[0] -- arr[2] ...
// -- Acessamos o tamanho do Array por meio da propiedade
//  nativa "length". exemplo: arr.length


//  criando um array de forma literal 

// let frutas = []

// ou
 
let frutas = ['Maçã', 'Banana']

// exemplo de Array denso

const arrDenso = [1,2,3,4,5,6]

// exemplo de Array esparso

const arrEsparso = [1,,,3]

// Tornando o esparzo por meio de inserção posterior

arrEsparso[10] = 10

const arrDel = ['a','b','c','d']
delete arrDel[2]

const animais = ['Cão', 'Gato', 'Cavalo', 'Elefante', 'Girafa', 'Leoa', 'Tartaruga']
animais.length
animais.length = 4
animais
