const prompt = require('prompt-sync') ()

let numero
let maior = 0

while (numero != 0) {
    numero = Number(prompt('Digite um número, se digitar "0", o programa é encerrado: '))

    if (numero > maior){
        maior = numero
    }
}

console.log('Digitou "0", programa encerrado!')

console.log('O maior número digitado foi: ', maior)