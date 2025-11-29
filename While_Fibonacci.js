let p = 0
let s = 1

let i = 1

while (i <= 10) {
    console.log(p)
    let proximo = p + s
    p = s
    s = proximo
    i++
}

