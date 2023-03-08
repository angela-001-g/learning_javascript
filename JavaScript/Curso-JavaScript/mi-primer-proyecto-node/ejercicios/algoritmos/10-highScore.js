// 1. Create a new high score board

 
function createScoreBoard(){
    let boardScore = {
        "The Best Ever": 1000000
    }
    return boardScore
}

//  console.log(createScoreBoard("The Best Ever", 1000000))

// 2. Add players to a score board

// function addPlayer(scoreBoard, player, score){
//     let newPlayer = {
//         ...scoreBoard,
//         [player]: score,
//     }
//     return newPlayer
// }



 function addPlayer(scoreBoard, player, score){
        scoreBoard[player] = score
        return scoreBoard
} 
// console.log(addPlayer({}, 'Jesse Johnson', 1337))
// 3. Remove players from a score board

 function removePlayer(scoreBoard, player){
     let newBoard = Object.keys(scoreBoard) 
     if (newBoard[0] === player){
        delete scoreBoard[player] 
         return scoreBoard
     } else if(newBoard[1] === player){
         delete scoreBoard[player]
         return scoreBoard
     } else if(newBoard[2] === player){
         delete scoreBoard[player]
         return scoreBoard
     } else {
         return scoreBoard
     }
 }


// console.log(removePlayer({'Amil Pastorius': 99373, 'Min-seo Shin': 0,'Jesse Johnson': 1337}, 'Jesse Johnson'))

// 4. Increase a player's score

function updateScore(actualScore, player, points){
    actualScore[player] = actualScore[player]  + points
    return actualScore
}
//  console.log(updateScore({'Amil Pastorius': 99373,'Min-seo Shin': 0, 'Jesse Johnson': 1337,}, 'Min-seo Shin', 1999))

// 5. Apply Monday bonus points

function applyMondayBonus(scoreBoard){
    let name = Object.keys(scoreBoard)
    let score = Object.values(scoreBoard)
    const bonusPoints = 100;
    Object.values(scoreBoard).forEach((valor, indice) => {
        scoreBoard[Object.keys(scoreBoard)[indice]] = valor + bonusPoints;
      });
    return scoreBoard
}


// console.log(applyMondayBonus({'Dave Thomas': 44, 'Freyja Ćirić': 539, 'José Valim': 265,}))

// 6. Normalize a high score

function normalizeScore(objectWithScore){
    return objectWithScore.normalizeFunction(objectWithScore.score)
}
 function normalize(score) {
     return 2 * score + 10;
  }
  
//   const objectScore = { score: 400, normalizeFunction: normalize };
//   console.log(normalizeScore(objectScore));