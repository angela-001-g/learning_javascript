function staircase(n){
    let numeral = "#"
    let space = " "
    for(let i = 1; i <= n; i++){
        let linea = numeral.repeat(i)
        let spacio = space.repeat(n - i);
        console.log(`${spacio}${linea}`)
    }
}

staircase(6)