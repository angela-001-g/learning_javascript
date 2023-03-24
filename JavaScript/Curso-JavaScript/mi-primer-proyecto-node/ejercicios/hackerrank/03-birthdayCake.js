function birthdayCakeCandles(candles){
let maxCand = Math.max(...candles)
let contador = 0; 
for(let i = 0; i<=candles.length; i++){
    if(candles[i] === maxCand){
        contador = contador + 1
    }
}
return contador
}
birthdayCakeCandles([3, 1, 2, 3])