const prompt = require('prompt-sync')()

let senha = ""

while (senha != "1234" ) {
    senha = prompt('Informe uma senha para logar no sistema: ')

    if (senha != "1234"){
        console.log('Senha inválida, tente novamente!')
    }    

}

console.log('Usuário logado com sucesso!')