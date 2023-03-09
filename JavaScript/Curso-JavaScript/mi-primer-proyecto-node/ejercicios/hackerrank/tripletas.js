function compareTriplets(a, b){
    let alicePoints = 0
    let bobPoints = 0 
    let arrayPoints = 0
    for(let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            alicePoints = alicePoints + 1
        } else if(a[i] < b[i]){
            bobPoints = bobPoints + 1 
        } 
    }
    arrayPoints = [alicePoints, bobPoints]
    return arrayPoints
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]))