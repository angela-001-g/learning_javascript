function getTotalX(a, b) {
    let factores = [];
    let numFactores = 0;
    for (let i = 1; i <= 100; i++) {
      if (b.every((elem) => elem % i === 0)) {
        factores.push(i);
      }
    }
    for (let factor of factores) {
      if (a.every((elem) => factor % elem === 0)) {
        numFactores = numFactores + 1;
      }
    }
  
    return numFactores;
  }
console.log(getTotalX([2, 4],[16, 32, 96]))
console.log(getTotalX([2, 6],[24, 36]))


// function getTotalX(a, b) {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     let factores = []
//     let division = 0
//         for(let i = 0; i<b.length; i++){
//             let primero = b[i]
//             let segundo = a[i]
//             for(let j = 0; j < numbers.length; j++){
//                 if(primero%numbers[j] === 0 && numbers[j]%segundo === 0){
//                      division = primero/numbers[j]
//                     factores.push(numbers[j], division)
//                 }
//             }
//         }
        
//         console.log(factores)
//     }

