const a = require('prompt-sync')()

let numero = Number(a('Informe um número para gerar a tabuada: '))
let i = 1

while (i <= 10) {
    let tabuada = i * numero

    console.log(numero, '*', i, '=', tabuada)

    i++
}