/* function cumprimentar() {
    alert('Olá, usuário!')
}

function cumprimentar(msg = 'Oi') {
    alert(msg)
}

criarElementoHTML('Olá mundo', 'h1')
criarElementoHTML('Olá mundo', 'h2')
criarElementoHTML('Olá mundo', 'h3')
criarElementoHTML('Olá mundo', 'h4')
criarElementoHTML('texto aleatorio', 'div')

function criarElementoHTML(txt, elemento) {
    document.write(`<${elemento}>${txt}</${elemento}>`)
}






function imc (peso, altura) {  // criando no console a subtração de a - b, total = 10
    return parseFloat((peso / (altura ** 2)).toFixed(2)) //tofixed deixa 2 casas decimais
}


function subtrair (a, b) {  // criando no console a subtração de a - b, total = 10
   if (b > a) {
       return b -a
   } else {
       return a - b
   }
}

function somar (a, b) {  // criando no console a soma de a + b, total = 52
    return a + b
}
let total = somar(20, 32)

console.log(`total = ${total}`)

total = subtrair(20, 49)

console.log(`total = ${total}`)

total = imc(66, 1.60)

console.log(`total = ${total}`)


// criar uma função que retorna o valor da equação edo segundo grau
// delta = b ^2 -4*a*c
// baskara = -b +- raiz de delta / 2 * a  1 -1 -12, resultado 4 e -3 */

function funcao (a, b, c) {  // criando no console a soma de a + b, total = 52
    const delta (b ** 2) - 4 * a * c // ** é potenciação

    const raizDelta = Math.sqrt(delta) // guardando a raiz em outra constante

    const x1 = (-b + raizDelta) / 2 * a
    const x2 = (-b - raizDelta) /2 * a

    return [x1, x2] // retornando em forma de array

} 

let somar = (a, b) => { //aron function (função anonima)
    return a + b

} 

// a função acima virou essa função menor por causa do aron function e pq é uma função de 1 só linha*/

let some = (a,b) => a + b

const r = some (5, 8) 

console.log(r)





/* return parseFloat (((-b) + (/2) * a)/2)







/*criarParagrafo('A vida não é aleatória por acaso')




/* cumprimentar('Olá, usuário') // essa linguagem é de uma função
cumprimentar('Olá, mundo') // vai exeuctar olá mundo
cumprimentar ('Oi') // vai executar oi
cumprimentar () // aqui vai executar o 'Hello World'
dkkkdddddddddddd */