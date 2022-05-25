/* function somar(...numeros) {  // ES5 pesquisar
    let somaTotal = 0   
    
    for (let numero of numeros) {
        somaTotal += numero
    }

    return somaTotal
}

let total = somar (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 60, 70, 80, 90)

console.log(total) 

EX2--------------------------------------- */

/* let p = {
    nome: 'Amanda',
    idade: 25
}

let p2 = p

p2.nome = 'André'

console.log(p)
console.log(p2) */

 /* let p = {
    nome: 'Amanda', 
    idade: 25
}

let p2 ={...p}  // agora cria uma cópia do objeto p. para evitar insonistencias

p2.nome = 'André'

console.log(p)
console.log(p2) 

EX3------------------------------------------- */

/* let p = {
    nome: 'Amanda', 
    idade: 25
}

let p2 ={
    ...p}  // agora usaremos array

let arr = [4, 5, 6]
let arr2 = [1, 2, 3, ...arr] */ /* rach operator criou uma copia do outro array no lugar dos 3 pontinhos, ele serve p não modificar o primeiro arquivo */

/* console.log(arr2)

EX4---------------------------------------------- */
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // percorrer array mais simples (sem o for)

nums.forEach((x) => {  // criando um parametro dentro da aronfunction
console.log(x * 2)  // vai mutiplicar todos os numeros por 2
})  // uma função que vai passar em cada valor do array


EX5 COMO FUNCIONA O FOREACH -------------------------- */
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // percorrer array mais simples (sem o for)

nums.forEach((x) => {  // criando um parametro dentro da aronfunction
 document.write(`<p>${x}</p>`)  // vai mutiplicar todos os numeros por 2
})  */ /* executar no html */

/* EX6 ---------------------------------------- 

 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

 /* nums.forEach((x) => { 
 document.write(`<p>${x}</p>`)  
})  

let novoArray = nums.map(x => x ** 2) // map vai pegar cada valor do array e elevar ao quadrado e criar um novo array com os valores modificados

console.log(nums.length)
console.log(novoArray.length) */

/* EX 7 --------- pegar apenas os numeros pares ------ */

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let novoArray = nums.map(x => { //map sempre reotorna um array c a mesma quantd de valor
    return x  ** 2
})

let numerosPares = nums.filter(function(x) { //filter retorna a mesma ou em menos quantidade ou vazio
    return x % 2 == 0
})

console.log(numerosPares) */

/* EX8 ---------------------PROCURRA N MAIOR QUE 5----------------------------- */

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numeroMaiorQue5 = nums.find((numero) => {  // find nao retorna array, retorna apenas 1 valor
    return numero > 5

})

console.log(numeroMaiorQue5) */

/*EX8 -------------------------------FINDINDEXOF-----------*/

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // nums é o array

let indiceNumeroMaiorQue5 = nums.findIndex(numero => { // findindex retorna a primeira ocorrencia do numero q vc quer

    return numero > 5
}) */

/* EX9 ------------------------------------Retornar nome com >6 caracteres */

/* const nome = [antonio, barbara, carolina, luana, andré]

let nomesComCaracteresAcimaDe6 = nomes.filter(nome => {

    return nome.length > 6
}) */
const nome = [antonio, barbara, carolina, luana, andré]

let existeAlgumNomeCom8Caracteres = nomes.some(function(nome) {
    return nome.length == 8
})

let TodosOsNomesPossuemOitoCaracteres

console.log(existeAlgumNomeCom8Caracteres) // true ou false
