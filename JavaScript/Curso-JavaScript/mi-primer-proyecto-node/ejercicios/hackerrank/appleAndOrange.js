function countApplesAndOranges(s, t, a, b, apples, oranges){
    let applesCounter = 0;
    let orangesCounter = 0; 
    for (let i = 0; i < apples.length; i++){
        let sumApple = apples[i] + a
        if(sumApple >= s && sumApple <= t){
            applesCounter = applesCounter + 1
        }
    }
    for (let i = 0; i < oranges.length; i++){
        let sumOranges = oranges[i] + b 
        if(sumOranges >= s && sumOranges <= t){
            orangesCounter = orangesCounter + 1
        }
    }
    console.log(applesCounter)
    console.log(orangesCounter)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])