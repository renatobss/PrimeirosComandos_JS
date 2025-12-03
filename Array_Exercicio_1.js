function somaNumeros(numeros) {

    console.log('Números passados pelo usuário.: ', numeros)

    let soma = 0

    for (let i = 0; i < numeros.length; i++) {

        soma = soma + numeros[i]

    }

    return soma
    //console.log('return', )

}

console.log('A soma dos números é.: ', somaNumeros([5, 10, 15, 20]))