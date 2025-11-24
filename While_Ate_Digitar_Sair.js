const prompt = require('prompt-sync')()

while (true) {

    let nome = prompt('Digite algo, se digitar "Sair", o programa é encerrado: ')

    if (nome.toLowerCase() == 'sair')
        break
}

console.log('Programa encerrado!')