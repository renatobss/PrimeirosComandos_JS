
// objeto dentro de array
const produtos = [    
    {nome: "Bicicleta", valor: 100},
    {nome: "boneca", valor: 60}
]

console.log(produtos[0].nome)

//------------------------------------------------
const pessoa = {
    nome: "Renato",
    idade: 35,
    cidade: "Bom Sucesso do Sul",
    falar: function(){
        console.log('Meu nome é: ', this.nome)
    }
}

pessoa.falar()

console.log('Meu nome é:', pessoa.nome,',tenho', pessoa.idade = 39, 'anos')
console.log('Minha profissão é: ', pessoa.profissao = "Analista de Teste")

console.log(pessoa.cidade)
console.log(pessoa.idade)
console.log(pessoa.profissao)
