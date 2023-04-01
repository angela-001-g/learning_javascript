function countingValleys(steps, path){
let arrayNumbers = [];
let sumas = [0]
let sum = 0; 
let contador = 0
    for(let i = 0; i<path.length; i++){
        if(path[i] === "U" ){
        arrayNumbers.push(1)
        } else if(path[i] === "D"){
        arrayNumbers.push(-1)
        }
    }
    for(let i = 0; i<arrayNumbers.length; i++){
        sum = arrayNumbers[i] + sum
        sumas.push(sum)
        } 
    for(let i = 0; i<sumas.length; i++){
        if(sumas[i] === 0 && sumas[i + 1] === -1){
            contador = contador + 1
        }
    }
    return contador
}

console.log(countingValleys(8, ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"]))