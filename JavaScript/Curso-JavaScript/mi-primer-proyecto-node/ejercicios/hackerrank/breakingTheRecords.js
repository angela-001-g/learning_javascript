function breakingRecords(scores){
    const firstScore = scores[0]
    let scoreMayor = firstScore
    let scoreMenor = firstScore
    let contadorMayor = 0
    let contadorMenor = 0
    for(let i = 0; i < scores.length; i++){
        if(scores[i] > firstScore && scores[i] > scoreMayor){
            scoreMayor = scores[i] 
            contadorMayor = contadorMayor + 1 
        } else if(scores[i] < firstScore && scores[i] < scoreMenor){
            scoreMenor = scores [i] 
            contadorMenor = contadorMenor + 1
        }
    }
    return ([contadorMayor, contadorMenor])
}
    


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

