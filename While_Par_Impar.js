const prompt = require('prompt-sync')()

let numero
let ehPar = 0
let ehImpar = 0

let i = 1

while (i <= 10) {
    
    numero = Number(prompt('Informe um número.: '))

    if (numero % 2 == 0){
        ehPar++
    }else{
        ehImpar++
    }
    
    i++
}

console.log('Quantidade de números pares.: ', ehPar)
console.log('Quantidade de números ímpares.: ', ehImpar)