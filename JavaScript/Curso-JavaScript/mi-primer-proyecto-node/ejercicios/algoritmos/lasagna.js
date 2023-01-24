let newTime = 0;
let numberOfLayers = 0;  
let actualMinutesInOven = 0 
// 1. Define the expected oven time in minutes

function expectedMinutesInOven(){
    time = 40; 
    return time
}

// 2. Calculate the remaining oven time in minutes

function remainingMinutesInOven(newTime){
    return expectedMinutesInOven() - newTime;
}

// 3. Calculate the preparation time in minutes

function preparationTimeMinutes(numberOfLayers){ 
    return numberOfLayers * 2
}


// 4. Calculate the total working time in minutes

function totalTimeMinutes(numberOfLayers, actualMinutesInOven){
        return (numberOfLayers * 2) + actualMinutesInOven;
}
console.log(totalTimeMinutes(3, 20))
