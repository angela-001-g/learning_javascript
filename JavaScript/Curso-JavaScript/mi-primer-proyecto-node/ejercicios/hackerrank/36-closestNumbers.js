function closestNumbers(arr) {
 arr.sort(function (a, b){
    return a - b
 })

let arrayPairs = []
let minimNumbers = []

for(let i = 0; i < arr.length; i++){
    arrayPairs.push(arr.slice(i, i + 2));
}
console.log(arrayPairs)
for(let i = 0; i<arrayPairs.length; i++){
    let par = arrayPairs[i]
    par.forEach(element => {
        console.log(element++)

    });
}

}
closestNumbers([5, 4, 3, 2])