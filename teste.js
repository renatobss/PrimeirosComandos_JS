const caixa = require('prompt-sync')()

const nome = caixa('Digite seu nome: ')
const idade = Number(caixa('Digite sua idade: '))

console.log('Você digitou: ', nome)
console.log('Você digitou: ', idade)