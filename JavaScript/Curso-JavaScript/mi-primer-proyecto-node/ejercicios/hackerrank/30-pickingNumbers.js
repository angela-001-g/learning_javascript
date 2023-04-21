function pickingNumbers(a) {
    a.sort(function(a,b){
        return a -b
    })
let tempArr = []; 
let arr = []; 
    for(let i = 0; i < a.length; i++){
       if(tempArr.length === 0){
        tempArr.push(a[i])
       } else if(a[i] - tempArr[0] === -1 || a[i] - tempArr[0] === 0 || a[i] - tempArr[0] === 1){
        tempArr.push(a[i])
       } else{
        arr.push(tempArr)
        tempArr = [a[i]]
       }
    }
    arr.push(tempArr)
    let mayor = 0; 
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length>mayor){
            mayor = arr[i].length
        }
    }
    return mayor
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))