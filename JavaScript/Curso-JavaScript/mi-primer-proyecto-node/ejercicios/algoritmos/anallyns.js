// 1. Check if the 'Fast Attack' action is possible
const knightIsAwake = false; 
const archerIsAwake = false; 
const prisionerIsAwake = false; 
const petDogIsPresent = false;

function canExecuteFastAttack(knightIsAwake){ 
    if(knightIsAwake === false){
        return true; 
    } else {
        return false
    }
}

// console.log(canExecuteFastAttack(knightIsAwake));

// Check if the 'Spy' action is possible 
function canSpy(knightIsAwake, archerIsAwake, prisionerIsAwake){ 
    if (knightIsAwake === false && archerIsAwake === false && prisionerIsAwake === false ){
        return false; 
    } else {
        return true; 
    }
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisionerIsAwake))

// 3. Check if the 'Signal Prisoner' action is possible
function canSignalPriesioner(archerIsAwake, prisionerIsAwake){
    if(archerIsAwake === false && prisionerIsAwake === true){ 
        return true; 
    } else {
        return false;
    }
}

// console.log(canSignalPriesioner(archerIsAwake, prisionerIsAwake))

// 4. Check if the 'Free Prisoner' action is possible

function canFreePrisioner(knightIsAwake, prisionerIsAwake, archerIsAwake, petDogIsPresent){
    if(petDogIsPresent === true && archerIsAwake === false){
        return true; 
    } else if(petDogIsPresent === false && prisionerIsAwake === true && archerIsAwake === false && knightIsAwake === false){
        return true;
    } else {
        return false; 
    }
}

// console.log(canFreePrisioner(knightIsAwake, prisionerIsAwake, archerIsAwake, petDogIsPresent))








