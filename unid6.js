/* OBJETOS. PROPRIEDADES/ATRIBUTOS. MÉTODOS/FUNÇÕES */

let pessoa = {
    nome: 'João', //propriedade
    idade: 28, 
    cpf: '123.456.789-65',
    endereco: {
        cidade: 'São Paulo',
        estado: 'São Paulo',
        cep: '625896-569'
    },
    cumprimentar: function() {
        console.log('Olá, munnnnndo')
    }
}


// Javascript object notation

console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade}
anos e eu moro em ${pessoa.endereco.cidade}.`) // sempre q usar $ usar crase ao inves de aspas.

// pessoa.idade = 29

// pessoa.cumprimentar()

console.log(pessoa['nome']) // para mostrar no console

pessoa['cumprimentar'] () // executa no console também