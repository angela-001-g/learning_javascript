function plusMinus(arr){
    let numPositive = 0; 
    let numNegative = 0; 
    let numZero = 0;
    let denominador = arr.length; 
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            numPositive = numPositive + 1
        } else if (arr[i] < 0){
            numNegative = numNegative + 1
        } else {
            numZero = numZero + 1
        }
    }
    
    let ratePositive = numPositive/denominador;
    let rateNegative = numNegative/denominador;
    let rateZero = numZero/denominador;

    console.log(ratePositive.toFixed(6)) 
    console.log(rateNegative.toFixed(6))
    console.log(rateZero.toFixed(6))
    
}

plusMinus([-4, 3, -9, 0, 4, 1])