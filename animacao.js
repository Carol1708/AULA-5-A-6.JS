const divQuadrado = document.querySelector('div.quadrado') //pegando a div do html. pode ser tb .quadrdao
const btnAddRemover = document.querySelector('#adicionar-remover')

btnAddRemover.addEventListener('click', () => {
   /* if (divQuadrado.classList.contains('vermelho')) { //retorna um array com as classes que o elemento tem
        divQuadrado.classList.remove('vermelho')
    } else {
        divQuadrado.classList.add('vermelho')
    } */

    divQuadrado.classList.toggle('vermelho') // passar como parametro uma string e dentro dele vai fazer o teste se ja existe essa classe
})



/* 
divQuadrado.addEventListener('mouseenter' , () => {
   divQuadrado.style.animationName = 'rotacionar'   // estilizando o quadrado. mouse enter faz as coias, mouseout desfaz
   divQuadrado.style.animationDuration = '1.5s'
   divQuadrado.style.animationIterationCount = 'infinite'
})

divQuadrado.addEventListener('mouseout' , () => {
    divQuadrado.style.animationName = ''   
   divQuadrado.style.animationDuration = ''
   divQuadrado.style.animationIterationCount = ''
    
}) */