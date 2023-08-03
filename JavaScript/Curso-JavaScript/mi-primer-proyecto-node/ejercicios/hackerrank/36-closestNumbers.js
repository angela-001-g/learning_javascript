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

let newObj ={}

for(let i = 0; i<restas.length; i++){
    if(!newObj[restas[i]]){
        newObj[restas[i]] = arrayPairs[i]
    } else {
        newObj[restas[i]] = arrayPairs[i]
    }
}

delete newObj.NaN

let final = []
let claves = Object.keys(newObj)

for(let i = 0; i<claves.length; i++){
    if(claves[i] === claves[0]){
        final.push(newObj[claves[i]])
    }
}
let result = final.flat()

return result
}

console.log(closestNumbers([-5, 15, 25, 71, 63]))
