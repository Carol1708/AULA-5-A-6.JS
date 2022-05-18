                        // primeira letra da classe é maiuscula
                        // quando cria uma classe já incia o construtor. função construtora

class Pessoa {                  //criando uma pessoa

    constructor(nome, idade, cpf) {               // aqui vai aplicar a logica. nome é um parametro
      this.nome = nome                // this faz referencia a classe, chama ela, consegue acessar as proprie e metd que declarar
      this.idade = idade
      this.cpf = cpf 
    }


cumprimentar() { //criando um método e dentro das {} colocar a logica
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}
}
                              // criar um obejto p concatenar e mostrar no console log
                              //moldando uma pessoa

let p = new Pessoa('Marcos', 20, '123.456.789-98')          //objeto pessoa dentro da variável p
let p2 = new Pessoa('Davyson', 25, '123.456.789-98')

// p.cumprimentar()
// p2.cumprimentar()

const pessoas = [p, p2] // array , looping p acessar um array de objeto

for (let pessoa of pessoas) {
    pessoa.cumprimentar()
}