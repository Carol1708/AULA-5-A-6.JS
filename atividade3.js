const liga = document.getElementById('liga'); //pegando a div do html. pode ser tb .quadrdao
const desliga = document.getElementById('desliga');
const lamp = document.getElementById ('lamp');


function liglamp () {
    lamp.src = './img/ligada.png';
}

liga.addEventListener( 'click', liglamp );
desliga.addEventListener('click', desliglamp);

function desliglamp () {
    lamp.src = './img/desligada.jpg';
}


