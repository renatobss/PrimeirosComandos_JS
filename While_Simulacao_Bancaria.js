function menu() {
    
console.log("====== Menu ======")
console.log("1 - Depositar") 
console.log("2 - Sacar")
console.log("3 - Ver Saldo") 
console.log("4 - Sair")                
}

const prompt = require('prompt-sync')()

opcao = 0

while (opcao != 4) {
    menu()

    opcao = Number(prompt('Selecione uma opção do Menu.: '))

    if (opcao == 1) {
        console.log('Depósito realizado com sucesso.')
    } else if (opcao == 2) {
        console.log('Saque realizado com sucesso.')
    } else if (opcao == 3) {
        console.log('Saldo apresentado com sucesso.')
    } else {
        console.log('Escolheu a opção "Sair", finalizando o programa.')
    }
}