function countingSort(arr){
let arrCounter = []
    for(let i = 0; i<100; i++){
    arrCounter.push(0)
    }   
    for(let i = 0; i<arr.length; i++){
        arrCounter[arr[i]] = arrCounter[arr[i]] + 1
    }
return arrCounter
}

console.log(countingSort([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]))