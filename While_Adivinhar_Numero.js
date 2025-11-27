const prompt = require('prompt-sync')()

const minimo = Number(prompt('Informe o número inicial do intervalo.: '))
const maximo = Number(prompt('Informe o número máximo do intervalo .: '))

let numero = Math.floor(Math.random() * (maximo - minimo + 1))

console.log(numero)

let numeroInformado 

while (numeroInformado != numero) {
    numeroInformado = Number(prompt('Informe um numero entre 1 e 20.: '))

    if (numeroInformado != numero){
        console.log('Errou, tente novamente!')
    }
}

console.log('Parabéns, vc acertou!', numeroInformado)