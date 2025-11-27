const prompt = require('prompt-sync')()

let numero = 0
let conta = 0
let soma = 0

while (numero >= 0) {
    numero = Number(prompt('Informe um número, se o número for negativo o programa será encerrado.: '))

    if (numero >= 0){
        conta++
        soma = soma +  numero
    }
    
}

console.log('Digitou número negativo, programa encerrado!', numero)

console.log('Quantidade de números digitados.: ', conta)
console.log('Soma dos números digitados.: ', soma)

console.log('A média dos números digitados é.: ', soma / conta)