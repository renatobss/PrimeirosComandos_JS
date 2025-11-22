function contaVogais(palavra) {
    const vogais = "aeiou"
    console.log('Palavra passada pelo usuário: ', palavra)

    let contador = 0

    for (let i = 0; i < palavra.length; i++) {
        console.log(palavra[i])
        if (vogais.includes(palavra[i])) {
            contador++
        }
    }
    return contador
}
console.log('O número de vogais é: ', contaVogais('nina'))