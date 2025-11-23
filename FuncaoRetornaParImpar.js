function retornaParImpar(numero) {
    p = numero % 2

    if (p == 0){
        p = true
        console.log('O número é par: ', p)
    }else{
        p = false
        console.log('O número é ímpar: ', p)
    }
}

(retornaParImpar(5))