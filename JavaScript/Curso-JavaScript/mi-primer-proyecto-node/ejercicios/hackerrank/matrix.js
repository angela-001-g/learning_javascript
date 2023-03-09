function diagonalDifference(arr){
    let i = 0; 
    let difference = 0; 
    let firstSum = 0; 
    let secondSum = 0; 
    for(let i = 0; i < arr.length; i++){
        firstSum = firstSum + arr[i][i]
        secondSum = secondSum + arr[i][arr.length - (i + 1)]
    }
    difference = Math.abs(firstSum - secondSum)
    return difference
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6,], [9, 8, 9,]]  ))