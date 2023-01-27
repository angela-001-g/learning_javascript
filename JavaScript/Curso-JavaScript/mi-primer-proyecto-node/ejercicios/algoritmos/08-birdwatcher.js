// 1. Determine the total number of birds that you counted so far 
function totalBirdCount(birdsPerDay){
    for(let i=0; i <= birdsPerDay.length; i++){
        const suma = birdsPerDay.reduce((a,b) => a + b, 0)
        return suma;
    }
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

console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2))

// 3. Fix a counting mistake
function fixBirdCountLog(birdsPerDay){
    
}
