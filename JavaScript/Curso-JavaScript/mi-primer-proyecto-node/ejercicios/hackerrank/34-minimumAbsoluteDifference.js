function minimumAbsoluteDifference(arr) {
    arr.sort(function(a, b){
        return a - b 
    })
    let pairsArray = []
    for(let i = 0; i < arr.length; i++){
        let pair = [arr[i], arr[i + 1]]
        pairsArray.push(pair)
    }
    let results = []; 
    for(let i = 0; i < pairsArray.length; i++){
        let par = pairsArray[i]
        let resta = Math.abs(par[0] - par[1]) 
        if(resta === NaN){
        }   else {
            results.push(resta)
        }
    }
    results.sort(function(a,b){
        return a-b
    })
    return results[0]    
}

minimumAbsoluteDifference([-2, 2, 4])
