// Adivinhar número entre 1 e 50, sendo que o limite de chances é igual a 5

const prompt = require('prompt-sync')()

let inicio = Number(prompt('Informe o número inicial do intervalo.: '))
let limite = Number(prompt('Informe o número final do intervalo.: '))

let numeroSorteado = Math.floor(Math.random() * (limite - inicio + 1)) + inicio

let nroChances = 1
let numero = 0

console.log('O número sorteado foi.: ', numeroSorteado)

while (nroChances <= 5) {
    numero = Number(prompt('Informe um número.: '))
    if (numero != numeroSorteado){
        console.log('Não acertou, tente novamente!', nroChances, '° tentativa.')
        nroChances++
    } else {
        console.log('Parabéns, vc adivinhou o número!')
        break
    }
}