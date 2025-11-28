const prompt = require('prompt-sync')()

let numero = 0

let ehPrimo = false

while (ehPrimo != true) {

    numero = Number(prompt('Informe um número.: '))
    let ehPar = numero % 2 == 0

    if ((ehPar) && (numero != 2) || (numero == 1)) {
        ehPrimo = false
        console.log('O número não é primo!')
    } else if ((numero != 3) && (numero % 3 == 0)) {
        ehPrimo = false
        console.log('O número não é primo!')
    } else if ((numero != 5) && (numero % 5 == 0)) {
        ehPrimo = false
        console.log('O número não é primo!')
    } else if ((numero != 7) && (numero % 7 == 0)) {
        ehPrimo = false
        console.log('O número não é primo!')
    } else {
        ehPrimo = true
        console.log('O número é primo!!!')
    }
}