const prompt = require('prompt-sync')()

let numeros 
let soma = 0

while (numeros != "fim") {
    
    numeros = prompt('Digite um número, se digitar "FIM", o programa é encerrado: ').toLowerCase()

    if (numeros != "fim"){
        soma++
        //soma = soma + 1  --> faz a mesma coisa que soma ++
    }

}

console.log('Você digitou "FIM", programa encerrado!')

console.log('Você digitou ', soma, 'número(s).')