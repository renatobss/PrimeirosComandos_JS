function contaElementos(itens) {

    console.log('Lista de itens informados pelo usuário.: ', itens)

    contador = 0
    
    for (let i = 0; i < itens.length; i++) {
        
        contador++
    }

    return contador
    
}

console.log('Número de itens informados pelo usuário.: ', contaElementos(['Carne', 'frango', 'Arroz', 'Feijão']))