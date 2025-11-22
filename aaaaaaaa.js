let palavra = "renato"
const vogais = "aeiou"
let contador = 0

for (let i = 0; i <= palavra.length; i++){
    console.log(palavra[i])
    if (vogais.includes(palavra[i])){
        contador ++
    }
}

console.log(contador)