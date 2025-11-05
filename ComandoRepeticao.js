// números pares

for (let i = 1; i <= 100; i++){
    let pegaPar
    if (i % 2 == 0){
        pegaPar = i
        console.log(pegaPar)
    }
}


//--------------------------------------------------------------
let nomes = ["Renato", "Nina", "Milena"];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

//----------------------------------------------------------------
let tabNum = 10;
for(let i = 1; i <= 10; i++){
    console.log(i, "x", tabNum, "= ", i * tabNum );
}

//----------------------------------------------------------------
function Recursivo(i, limite){
    if (i >= limite){
        return;
        console.log(i);

        Recursivo(i + 1, limite);
    }
}

console.log("-------------------------------------------------");

Recursivo(0, 5);

console.log("-------------------------------------------------");

for(let i = 1; i < 5; i++){
    console.log(i);
}

let num = 10;
for(let i = 1; i <= num; i++){
    console.log(i);
}