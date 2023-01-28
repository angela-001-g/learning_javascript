// 1. Determine the total number of birds that you counted so far 

function totalBirdCount(birdsPerDay) {    
    let suma = 0; 
    for(let i = 0; i < birdsPerDay.length; i++){
        suma = birdsPerDay[i] + suma
    }
    return suma
}
// console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]))

// 2. Calculate the number of visiting birds in a specific week
function birdsInWeek(birdsPerDay, week){
    let firstDay =  7*(week-1) 
    let lastDay = 7 + (7*(week-1)) - 1  
    let suma = 0;
    for (let i = firstDay; i <= lastDay; i++){
        suma = birdsPerDay[i] + suma
    }
    return suma;

}

// console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2))

// 3. Fix a counting mistake
// let birdsPerDay = [2, 5, 0, 7, 4, 1]; 
// // Para recorrer cada elemento de la lista 
//  for (let i = 0; i < birdsPerDay.length; i++){
//      console.log(birdsPerDay[i] + 1);
// }
let birds = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]

function fixBirdCountLog(birdsPerDay){ 
    let newBirds = birdsPerDay
    for (let i = 0; i < newBirds.length; i++){
        if(i % 2 === 0){ 
            newBirds[i] = newBirds[i] + 1
        }  
    }
    return newBirds 
}
const a = fixBirdCountLog(birds)
 //[  4, 0, 6, 1, 1, 4, 2, 0, 4, 4, 4, 0];
console.log(a)
console.log(birds)