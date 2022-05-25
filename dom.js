//meotdos q sempre vão retornar mais de 1, 1 ou nenhum Array.

// let ps = document.getElementsByName('p')

// let ps = document.getElementsByClassName('diferente')

// let paras = document.getElementsByName('para) // retorna elementos c o mesmo nome

//let p = document.querySelector('p')

//console.log(diferente)

/* leet valoresAPI = ['Amanda', 'André', 'Andrew' , 'Antonio' , 'Aurelio' , 'Manuela'] // criou um array c elementos q vai pra lista
const div = document.getElementById('lista') //clicar em botão ele quer q crie uma lista c cada 1 dos nomes do array
const btn = document.querySelector('buton') // pega um valor p guardar nessas duas variaveis

btn.addEventListener('click', () => { //string escrito click
    const ul = document.createElement('ul')   //cria elemento html dentro do js e coloca na const ul

    div.appendChild(ul) // adc um nono elemento filho ao elemento */

    // let ps = document.getElementsByTagName('p')
// let diferente = document.getElementsByClassName('diferente')
// let paras = document.getElementsByName('para')
// let unico = document.getElementById('unico')

// let p = document.querySelector('a')

// let p = document.querySelectorAll('p')

// console.log(p)

let valoresAPI = ['Amanda', 'André', 'Andrew', 'Antonio', 'Aurelio', 'Manuela'] // array de API
const div = document.getElementById('lista') //html
const btn = document.querySelector('button') //html

btn.addEventListener('click', () => { // qnd clicar no botao criar uma nova lista 
  /* 
    Para cada elemento do array, criar uma li e adicioná-la na ul criada
    abaixo
  */
  const ul = document.createElement('ul') // colocar dentro desse ul os itens do array

  valoresAPI.forEach((valor) => { //criar a li dentro do foreach
    const li = document.createElement('li')

    li.textContent = valor // .textContent coloca texto dentro da html

    ul.appendChild(li)

  })

  div.appendChild(ul) // adiciona um novo elemento filho ao elemento
})