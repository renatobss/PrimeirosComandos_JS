function retornaNumero(){
    console.log("Numero: ", 5)
}
retornaNumero();

//----------------------------------------------------------------
function passeUmNumero(num1){
    console.log("Número: ", num1);
} 

passeUmNumero(10);
passeUmNumero(20);
passeUmNumero(30);

//----------------------------------------------------------------
function somaNumeros(num1, num2){
    let soma = num1 + num2;
    return soma;
}

console.log(somaNumeros(10,15));

//----------------------------------------------------------------
function soma(num1, num2){

    const somando = num1 + num2;
        console.log("O resultado é: ", somando);
}

soma(30, 27);

//----------------------------------------------------------------
function estaEndividado(receita, gastos){
    if (receita < gastos){
        console.log("O cliente está endividado!");
    }else{
        console.log("O cliente está com saldo positivo!")
    }
    return estaEndividado;
}

let salário = 5000;
let débito = 5100;

estaEndividado(salário, débito);


