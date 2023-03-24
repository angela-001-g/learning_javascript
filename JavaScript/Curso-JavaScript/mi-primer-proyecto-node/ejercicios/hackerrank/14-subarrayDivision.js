function birthday(s, d, m){
    let contador = 0
    let arraysDeMes = []
    for(let i = 0; i<s.length; i++){
        let subArray = s.slice(i, i+m)
        if(subArray.length === m){
            arraysDeMes.push(subArray)
        }
    }
    arraysDeMes.forEach((arrayOfNumbers) => {
        let sum = 0
        for(let i = 0; i < arrayOfNumbers.length; i++){
            sum = arrayOfNumbers[i] + sum 
        }
        if(sum===d){
            contador++
        }
    })
 return contador   
}


console.log(birthday([1,2,1,3,2], 3, 2))