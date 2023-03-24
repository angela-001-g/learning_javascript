 // let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

// for (i = 0; i < lista.length; i++) { 
//     if (lista[i] % 3 === 0 && lista[i] % 5 === 0){
//         lista[i] = 'Fizz Buzz';
//     } else if (lista[i] % 3 === 0){
//         lista[i] = "Fizz";
//     } else if (lista[i] % 5 === 0){
//         lista[i] = "Buzz"
//     }
// }

function fizzBuzz(n){
    let lista = [];
    for(let i = 0; i <= n; i++){
        lista.push(i);
    }
    lista.shift()
    for (i = 0; i < lista.length; i++) { 
        if (lista[i] % 3 === 0 && lista[i] % 5 === 0){
            lista[i] = 'Fizz Buzz';
            console.log(lista[i])
        } else if (lista[i] % 3 === 0){
            lista[i] = "Fizz";
            console.log(lista[i])
        } else if (lista[i] % 5 === 0){
            lista[i] = "Buzz"
            console.log(lista[i])
        } else {
            console.log(lista[i])
        }
    }
}

fizzBuzz(12)

