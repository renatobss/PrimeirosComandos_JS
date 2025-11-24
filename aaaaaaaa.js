const numeros = [1, 2, 2, 3, 3, 4]

console.log(numeros)

let verifica = 0
let saida = []

for (let i = 0; i < numeros.length; i++) {
    //console.log(numeros[i])
    if (numeros[i] != verifica) {
        verifica = numeros[i]
        saida.push(numeros[i])
    }
}

console.log(saida)


//Função que remove itens repetidos de um array
//Entrada: [1, 2, 2, 3, 3, 4]
//Saída esperada: [1, 2, 3, 4]