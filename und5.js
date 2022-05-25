/* let str = `Olá
eu
sou
a
carol` // shift + crase (aceita fazer quebra de linha, aspas nao permite)
       // /n quebra linha também(pode usar aspas)

let str2 = "E ele me disse: \"Que linguagem top\"" // como usar aspas sem da erro ou usar aspas simples e simbolizar com dupla ou vice versa       


console.log(str2) 

----------------------------------------------------
aula 16/05 

const str = 'Olá, mundo'
console.log(str.length) // length conta  a quantidade de caracteres tanto em string quando numeros

const arr = [
       [1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4, 5, 6, 7]
]

console.log(str[2]) // quero pegar a posição  do caratere que vc quiser usando array, quero a letra a 
console.log(str)[str.length - 1] // retorna o ultimo caractere 

console.log(arr.length)
console.log(arr[arr.length - 1][arr[arr.length - 1].length - 1]) */

--------------------------------- 

const str = 'O homem é o próprio lobo do homem'

console.log(str.length) // temos 33 caracteres
console.log(str.indexOf('homem')) // ele dá a posição que inicia a palavra, nesse caso, homem incia depois do O e do espaço, logo, inicia no index 2
console.log(str.charAt(10)) // diz qual caractere está na posição 9
console.log(str.charCodeAt(10)) //
console.log(str.split('homem')) // retorna um array sem a palavra homem, recorta a string que vc pede.
console.log(str.split(' ')) // seprar string a partir de um padrao de texto. ex: mandamos recortar a string onde tivesse espaço, ele transformou cada parte em um array
console.log(str.concat(' sim', ' pq ', ' eu ', ' quero')) // vai concatenar essas palavras com o texto da string
console.log(str.toUpperCase()) // deixa as letras maiusculas
console.log(str.toLowerCase()) // deixa as letras minusculas
console.log(str.replace('lobo')) // ele substitui o bolo do texto pela palavra mosntro. 1ª procura a palavra e 2º substitui 
console.log(str.replaceAll('homem', 'pessoa')) // igual o replace, mas substitui por todas as palavras 'homem' esse texto
console.log(str.replace(/homem/, 'pessoa')) // substitue
console.log(str.startsWith('fdfjd')) // veririfca se a string comeca com a string que vc digitar, vai retornar vdd ou falso
console.log(str.endsWith('homem')) // verifica se termina com essa palavra
console.log(str.slice(12)) // recorta a string, pega a partir do indice 12 em diante
console.log(str.slice(12, 24)) // vai comecar no indice 12 e vai até indice 23
console.log(str.slice(-4)) // pega os 4 ultimos caracteres, no caso "omem"