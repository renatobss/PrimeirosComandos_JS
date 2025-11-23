function retornaMaior(numeros) {

    console.log('Número da sequência: ', numeros)

    let maior = 1

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    return maior
}

console.log('O maior número da sequência é: ', retornaMaior([5, 8, 15, 1, 24, 12, 6, 18]))