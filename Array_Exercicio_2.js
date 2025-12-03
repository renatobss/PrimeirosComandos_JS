function retornaMaior(numeros) {

    console.log('Números passado pelo usuário.: ', numeros)

    let maior = 0

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > maior) {
            maior = numeros[i]
        }

    }

    return maior

}

console.log('O maior número da sequência é.: ', retornaMaior([5, 10, 20, 40, 25, 38, 46, 81, 24, 19]))