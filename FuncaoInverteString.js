function inverteString(palavra) {
    //palavra.split("")
    console.log('Antes de inverter: ', palavra)
    let recebe = ""
    for (let i = palavra.length -1; i >= 0 ; i--){
        console.log(palavra[i])
        recebe += palavra[i]
    }
    return recebe
}
console.log('String invertida: ', inverteString('ABCD'))
