function calculaIdade(anoNascimento) {
    let idade = 2025 - anoNascimento
    return idade
}

console.log('A idade do individuo é: ', calculaIdade(1986))

//-------------------------------------------
function retornaDobro(num1) {
    let n = num1 * 2
    n1 = num1
    return n
}

retornaDobro(10)
console.log(n1)
console.log('O dobro do número ', n1, 'é ', ': ', retornaDobro(10))


//-------------------------------------------
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(5,10))

function inicio() {
    let s = 'Olá Mundo'
    return s
}
console.log(inicio())
//---------------------------------------------------------------------------------
let lista = ["Renato", "Milena", "Nina"]
lista.reverse()

for (let i = 0; i < lista.length; i++) {
    console.log(i, "-", lista[i])    
}

//----------------------------------------------------------------------------------
let nome = 'bala'
let textoInvertido = nome.split("").reverse().join("")

console.log(textoInvertido)


function Recursivo(i, limite){
    if (i >= limite){
        return
    }
    console.log(i)
    Recursivo(i + 1, limite)
}

Recursivo(0, 5)

