// 1. Retrieve a card from a stack 
function getItem (array, position){
    return array [position]
}

// console.log(getItem([1, 5, 7, 8, 4], 0))

// 2. Exchange a card in the stack 

function setItem(array, position, replacementCard){
    array.splice(position, 1, replacementCard);
    return array
}

// console.log(setItem([1, 5, 7, 8, 4], 2, 7))

// 3. Insert a card at the top of the stack

function insertItemAtTop(array, newCard){
    array.splice(array.push() , 0, newCard)
    return array;
}

// console.log(insertItemAtTop([1, 5, 7, 8, 4, 2, ], 5))
 
// 4. Remove a card from the stack
function removeItem(array, position){
    array.splice(position, 1)
    return array;
}

// console.log(removeItem([3, 2, 6, 4, 8], 0))

// 5. Remove the top card from the stack
function removeItemFromTheTop(array){
    array.pop()
    return array;
}

// console.log(removeItemFromTheTop([3, 2, 6, 4, 8]))

// 6. Insert a card at the bottom of the stack
function insertItemAtBottom(array, newCard){
    array.splice(0, 0, newCard )
    return array;
}

// console.log(insertItemAtBottom([5, 9, 7, 1], 8))

// 7. Remove a card from the bottom of the stack 
function removeItemAtBottom(array){
    array.splice(0, 1)
    return array;
}

// console.log(removeItemAtBottom([8, 5, 9, 7, 1]))

// 8. Check the size of the stack
function checkSizeStack(array, stackSize){
    if (array.length == stackSize){
        return true; 
    } else {
        return false
    }
}

console.log(checkSizeStack([3, 2, 6, 4, 8], 6))
