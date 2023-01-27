// 1. Get the first letter of a sentence
function frontDoorResponse(poem){
  return poem.charAt(0); 
}

// console.log(frontDoorResponse("Huge hooves too"))

// 2. Capitalize a word

function frontDoorPassword(word){
    const lower = word.toLowerCase();
    const upper = lower.charAt(0).toUpperCase() + lower.slice(1);
    return upper
}
// console.log(frontDoorPassword("hUgE"))

// 3. Get the last letter of a sentence
function backDoorResponse(poem){ 
    const noSpace = poem.trimEnd();
    return noSpace.slice(-1)
}

// console.log(backDoorResponse("Stands so hig "))

// 4. Be polite
function backDoorPassword(word){
    const lower = word.toLowerCase();
    const upper = lower.charAt(0).toUpperCase() + lower.slice(1);
    const polite = ", please"
    return upper.concat(polite)
}

console.log(backDoorPassword("HORse"))

