function maximumPerimeterTriangle(sticks) {
    let newArray = [];
    let triangulos = [];
    sticks.sort(function (a, b) {
        return a - b
    })
    for (let i = 0; i < sticks.length; i++) {
        let sub = sticks.slice(i, i + 3)
        if(sub.length === 3){
            newArray.push(sub)
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        let tripleta = newArray[i]
        if(tripleta[0] + tripleta[1] > tripleta[2] && tripleta[1] + tripleta[2] > tripleta[0] && tripleta[2] + tripleta[0] > tripleta[1]){
            triangulos.push(tripleta)
        }
    }
    triangulos.reverse()
    if(triangulos.length === 0){
        return [-1]
    } else{
        return triangulos[0]
    }
}
console.log(maximumPerimeterTriangle([1, 2, 3]))
console.log(maximumPerimeterTriangle([50, 2430, 134, 6373, 215, 1502, 926, 10312, 351, 74, 572, 3938]))
console.log(maximumPerimeterTriangle([1, 28657, 55, 1346269, 121393, 4181, 17711, 2584, 233, 3, 701408733, 63245986, 21, 75025, 13, 3524578, 34, 10946, 5, 196418, 46368, 8, 102334155, 987, 9227465, 1597, 610, 317811, 267914296, 1, 144 ,2178309, 165580141, 514229 ,832040, 377, 6765, 2, 89, 24157817, 433494437, 5702887, 39088169, 14930352]))


