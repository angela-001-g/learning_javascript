function closestNumbers(arr) {
 arr.sort(function (a, b){
    return a - b
 })

let arrayPairs = []
let restas = []

for(let i = 0; i < arr.length; i++){
    arrayPairs.push(arr.slice(i, i + 2));
}


arrayPairs.forEach(element => {
    for(let i = 0; i < element.length; i+=2){
        let resta = Math.abs(element[0] - element[1])
        restas.push(resta)
    }
})
console.log(arrayPairs)
console.log(restas)

}

// console.log(closestNumbers([5, 4, 3, 2]))
closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854])
